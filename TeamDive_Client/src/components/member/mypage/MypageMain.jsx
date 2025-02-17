import React, { useState, useEffect } from 'react'
import mypageStyle from '../../../css/mypage/mypage.module.css'
import axios from 'axios';
import jaxios from '../../../util/JwtUtil';
import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';



const MypageMain = () => {


    const [likeList, setLikeList] = useState();
    const [replyList, setReplyList] = useState();
    const [member, setMember] = useState({});
    const {memberId} = useParams();
    
    const loginUser = useSelector(state=>state.user);

    useEffect(()=>{
        jaxios.get(`/api/memeber/getLoginUser`, {params:{memberId}})
        .then((result)=>{
            setMember(result.data.member);
            console.log("loginUser", result.data.member);
        })
        .catch((err)=>{
            console.error(err);
        })
    },[]);

    useEffect(()=>{
        jaxios.get('/api/like/likeList')
        .then((result)=>{
            setLikeList(result.data.likeList);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[]);

    useEffect(()=>{
        jaxios.get('/api/like/replyList')
        .then((result)=>{
            setReplyList(result.data.replyList);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[]);

    return (
        <div className={mypageStyle.main}>
            {/* 사용자 정보 */}
            <h2>회원 정보</h2>
            <section className={mypageStyle.userInfo}>
                
                <div className={mypageStyle.info}>
                    <div className={mypageStyle.profile}>
                        <img className={mypageStyle.profileImage} src={`http://localhost:8070/profileImage/${loginUser.image}`} />
                        <div className={mypageStyle.profileDetails}>
                            <div className={mypageStyle.field}>
                                <label>아이디</label>&nbsp;&nbsp;&nbsp;
                                {<>{loginUser.memberId}</>}
                            </div>
                            <div className={mypageStyle.field}>
                                <label>닉네임</label>&nbsp;&nbsp;&nbsp;
                                {<>{loginUser.nickname}</>}
                            </div>
                            <div className={mypageStyle.field}>
                                <label>이메일</label>&nbsp;&nbsp;&nbsp;
                                {<>{loginUser.email}</>}
                            </div>
                            <div className={mypageStyle.field}>
                                <label>소개</label>&nbsp;&nbsp;&nbsp;
                                {<>{loginUser.introduction}</>}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 사용 중인 멤버십 */}
                <div className={mypageStyle.membership}>
                    <h2>사용 중인 멤버십</h2>
                    <div>
                        <div>
                            <label>멤버십 이름</label>
                            {
                                
                            }
                        </div>
                        <button>멤버십 해지</button>
                    </div>
                </div>
            </section>
                
            

            {/* 좋아요한 리스트 */}
            <section className={mypageStyle.likeList}>
                <h2>좋아요 리스트</h2>
                {/* 각 좋아요한 곡 또는 앨범 항목 */}
                {
                    (likeList)?(
                        likeList.map((like, idx)=>{
                            return(<></>)
                        })
                    ):(<>Loading....</>)
                }
            </section>

            {/* 댓글 리스트 */}
            <section className={mypageStyle.replyList}>
                <h2>댓글 리스트</h2>
                {/* 댓글리스트 항목 */}
                {
                    (replyList)?(
                        replyList.map((reply, idx)=>{
                            return(<></>)
                        })
                    ):(<>Loading....</>)
                }
            </section>
        </div>
    )
}

export default MypageMain
