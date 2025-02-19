import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from '../../css/music/musicDetail.module.css';
import lion from '../../../public/image/kakao_lion.png';

import axios from 'axios';
import jaxios from '../../util/JwtUtil';

const MusicDetail = () => {
    const { musicId } = useParams();
    const [musicDetail, setMusicDetail] = useState(null);
    const [expandedLyrics, setExpandedLyrics] = useState(false);

    //const [commentText, setCommentText] = useState('');
    //const [comments, setComments] = useState([]);
    const [nickname, setNickname] = useState('');
    const [content, setContent] = useState('');
    const [replyMusicList, setReplyMusicList] = useState([]);
    const [reply, setReply] = useState({});
    const [like, setLike] = useState(null);

    const loginUser = useSelector((state) => state.user);
    const navigate = useNavigate();

    //   useEffect(() => {
   
//     axios.get(`/api/music/${musicId}`)
//       .then(response => {
        
//         setMusicDetail(response.data);
//       })
//       .catch(error => console.error('Error fetching music detail:', error));
//   }, [musicId]);

//   if (!musicDetail) {
//     return <div className={styles.loading}>Loading...</div>;
//   }

    useEffect(() => {

        const sample = {
            musicId: musicId,
            title: "Dummy Music Title",
            artist: "Dummy Artist",
            image: lion,
            playCount: 1234,
            genre: "Pop",
            lyrics:
                " \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            like: 256,
            album: {
                albumId: 201,
                indate: "2025-02-11"
            }
        };
        setMusicDetail(sample);
        // 더미 데이터터===========================================
        // const sampleReply = [
        //     {
        //         replyId: 1,
        //         musicId: musicId,
        //         memberNickname: "user123",
        //         content: "이 노래 정말 좋아요!",
        //         indate: "2025-02-12 10:00",
        //         like: 5
        //     },
        //     {
        //         replyId: 2,
        //         musicId: musicId,
        //         memberNickname: "user456",
        //         content: "가사가 인상적이네요.",
        //         indate: "2025-02-12 11:30",
        //         like: 3
        //     }
        // ];
        // setComments(sampleReply);
        // 더미 데이터터===========================================

        /* 
        // 백엔드 구현 후 실제 API 호출 예시:
        axios.get(`/api/music/${musicId}`)
        .then(response => {
            setMusicDetail(response.data);
        })
        .catch(error => console.error("Error fetching music detail:", error));
        */
       axios.get('/api/community/getReplyList', {params:{pagetype:'MUSIC', entityId: musicId,}})
       .then((result)=>{
            setReplyMusicList(result.data.replyList);
       })
       .catch((err)=>{
            console.error(err);
       })
    }, [musicId, replyMusicList]);

    /* 개별곡 구매를 위한 장바구니 담기 */
    async function insertCart(musicId){
        if(!loginUser){
            alert('로그인이 필요한 서비스입니다');
            navigate('/login');
        }else{
            try{
                //const response = await jaxios.post('/api/cart/insertCart', null, {params: {memberId: loginUser.memberId, musicId}});
                
            }catch(error){
                console.error('장바구니 담기 실패', error)
            }
        }
    }

    const toggleLyrics = () => {
        setExpandedLyrics((prev) => !prev);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        // 로그인 여부 확인
        if (!loginUser.memberId) {alert("로그인하세요"); return; }

        // 빈칸 return
        if (!content.trim()) {alert('댓글을 입력해주세요'); return; }

      
        setNickname(loginUser.nickname);
       
        jaxios.post('/api/community/insertReply', {nickname, content},{params:{pagetype:'MUSIC', entityId: musicId, memberId: loginUser.memberId}})
        .then((result)=>{
            if(result.data.msg === 'yes'){
                alert('댓글이 추가되었습니다.');
                setContent('');
                navigate(`/music/${musicId}`);
            }
        })
        .catch((err)=>{
            console.error(err);
        })
    };

    if (!musicDetail) {
        return <div className={styles.loading}>Loading...</div>;
    }

    

    return (
        <div className={styles.container}>
            {/* 음악 상세 정보 */}
            <div className={styles.detailHeader}>
                <img src={musicDetail.image} alt={musicDetail.title} className={styles.image} />
                <div className={styles.info}>
                    <h1 className={styles.title}>{musicDetail.title}</h1>
                    <p className={styles.artist}>By {musicDetail.artist}</p>
                    <p className={styles.genre}>Genre: {musicDetail.genre}</p>
                    <p className={styles.playCount}>Plays: {musicDetail.playCount}</p>
                    <p className={styles.like}>Likes: {musicDetail.like}</p>
                    <p className={styles.releaseDate}>Release Date: {musicDetail.album.releaseDate}</p>
                    {/* (css 조정 필요) 장바구니 버튼 */}
                    <button onClick={ insertCart(musicId) }>구매</button>
                </div>
            </div>

            {/* 가사 영역 */}
            <div className={styles.lyricsSection}>
                <h2>가사</h2>
                <div className={styles.lyrics}>
                {expandedLyrics
                    ? musicDetail.lyrics
                    : musicDetail.lyrics.slice(0, 200) + (musicDetail.lyrics.length > 200 ? "..." : "")}
                </div>
                {musicDetail.lyrics.length > 200 && (
                <button className={styles.toggleButton} onClick={toggleLyrics}>
                    {expandedLyrics ? "가사 접기" : "더보기"}
                </button>
                )}
            </div>

            {/* 댓글 영역 */}
            <div className={styles.commentsSection}>
                <h2>댓글</h2>
                <form onSubmit={handleCommentSubmit} className={styles.commentForm}>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="댓글을 입력하세요..."
                        className={styles.commentInput}
                    />
                    <button type="submit" className={styles.submitButton}> 댓글 작성
                    </button>
                </form>
                <div className={styles.commentsList}>
                    {                    
                        (replyMusicList && replyMusicList.length>0)?(
                            replyMusicList.map((replyMusic, idx)=>{
                                return(
                                    <div className={styles.commentItem} key={idx}>
                                        <p className={styles.commentAuthor}>{replyMusic.member.memberId}</p>
                                        <p className={styles.commentContent}>{replyMusic.content}</p>
                                        <small className={styles.commentDate}>{replyMusic.indate.substring(0.10)}</small>
                                    </div>
                                )
                            })
                        ):(<div>댓글이 없습니다.</div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MusicDetail;
