import React, {useState, useEffect} from 'react'
import mypageReplyStyle from '../../../css/mypage/mypageReply.module.css'
import mypageStyle from '../../../css/mypage/mypage.module.css'
import { useNavigate, Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import jaxios from '../../../util/JwtUtil';


const ReplyListForm = () => {

    const loginUser = useSelector(state=>state.user);

    const [replyList, setReplyList] = useState([]);
    const [nickname, setNickname] = useState('');
    const [category, setCategory] = useState("artist");
    const { replyId } = useParams;
    const navigate = useNavigate();

    useEffect(()=>{
        if (!loginUser) {
            alert("로그인이 필요한 서비스입니다.");
            navigate("/login");
            return;
        }
        Category(category);
    },[loginUser, category, navigate]);

    function Category(selectedCategory){
        jaxios.get("/api/community/getReplyListUser", { params: { pageType: selectedCategory, memberId: loginUser.memberId } })

        .then((result) => {
            setReplyList(result.data.replyList);
        })
        .catch((err) => {
            console.error(err);
        });
    };
    
    function deleteReply(){
        if(!window.confirm('해당 댓글을 삭제하시겟습니까?')){
            return;
        }
        jaxios.delete(`/api/community/deleteReply/${replyId}`)
        .then((result)=>{
            if(result.data.msg === 'yes'){
                alert('댓글이 삭제되었습니다.');
                navigate('/mypage');
            }
        })
        .catch((err)=>{
            console.error(err);
        })
    }
    

    return (
        <section className={mypageReplyStyle.replyListForm}>
            <h1>댓글리스트</h1>

            {/* 카테고리 선택 UI */}
            <div className={mypageReplyStyle.categoryButtons}>
            {['ARTIST', 'ALBUM', 'MUSIC'].map((type) => (
                <button
                key={type}
                onClick={() => setCategory(type)}
                className={(category === type)?(mypageStyle.active):("")}
                >
                {type.toUpperCase()}
                </button>
            ))}
            </div>

            <div className={mypageReplyStyle.field}>
                <div className={mypageReplyStyle.title}>
                    <div className={mypageReplyStyle.item}>닉네임</div>
                    <div className={mypageReplyStyle.item}>내용</div>
                    <div className={mypageReplyStyle.item}>작성일</div>
                </div>
                {
                    (replyList && replyList.length>0)?(
                        replyList.map((reply, idx)=>{
                            return(
                                <div className={mypageReplyStyle.colfield} key={idx}>
                                    <div className={mypageReplyStyle.coltitle}>
                                        <div className={mypageReplyStyle.colitem}>{reply.member.nickname}</div>
                                        <div className={mypageReplyStyle.colitem}>{reply.content}</div>
                                        <div className={mypageReplyStyle.colitem}>{reply.indate.substring(0,10)}</div>
                                        <button onClick={()=>{
                                            deleteReply();
                                        }}>삭제</button>
                                    </div>
                                </div>
                            )
                        })
                    ):(<div>작성한 댓글이 없습니다.</div>)
                }
            </div>
        </section>
    )
}

export default ReplyListForm
