import React, { useState, useEffect } from 'react'
import mypageStyle from '../../../css/mypage/mypage.module.css'
import axios from 'axios';
import jaxios from '../../../util/JwtUtil';
import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';



const MypageMain = () => {


    
    const [likeArtistList, setLikeArtistList] = useState([]);
    const [likeAlbumList, setLikeAlbumList] = useState([]);
    const [likeMusicList, setLikeMusicList] = useState([]);

    
    const [replyArtistList, setReplyArtistList] = useState([]);
    const [replyAlbumList, setReplyAlbumList] = useState([]);
    const [replyMusicList, setReplyMusicList] = useState([]);

    const [memberShipUser, setMemberShipUser] = useState({});
        
    const loginUser = useSelector(state=>state.user);


    // useEffect(()=>{
    //     jaxios.get('/api/like/likeList')
    //     .then((result)=>{
    //         setLikeList(result.data.likeList);
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    // },[]);

    // useEffect(()=>{
    //     jaxios.get('/api/like/replyList')
    //     .then((result)=>{
    //         setReplyList(result.data.replyList);
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    // },[]);

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
                                <div>{loginUser.memberId}</div>
                            </div>
                            <div className={mypageStyle.field}>
                                <label>닉네임</label>&nbsp;&nbsp;&nbsp;
                                <div>{loginUser.nickname}</div>
                            </div>
                            <div className={mypageStyle.field}>
                                <label>이메일</label>&nbsp;&nbsp;&nbsp;
                                <div>{loginUser.email}</div>
                            </div>
                            <div className={mypageStyle.field}>
                                <label>소개</label>&nbsp;&nbsp;&nbsp;
                                <div>{loginUser.introduction}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 사용 중인 멤버십 */}
                <div className={mypageStyle.membership}>
                    <h2>사용 중인 멤버십</h2>
                    <div>
                        {
                            (memberShipUser)?(
                                <section className={mypageStyle.memberShipUser}>
                                    <div className={mypageStyle.field}> 
                                        <label>멤버십 이름</label>
                                        <div>{memberShipUser.membership}</div>
                                    </div>
                                    <div className={mypageStyle.field}> 
                                        <label>기간</label>
                                        <div>{memberShipUser.startDate+' ~ '+memberShipUser.endDate}</div>
                                    </div>
                                    
                                </section>
                            ):(<h2>Loading....</h2>)   
                        }
                        <button>멤버십 해지</button>
                    </div>
                </div>
            </section>
                

            {/* 좋아요한 리스트 */}
            <section className={mypageStyle.likeList}>
                <h2>좋아요 가수 리스트</h2>
                {/* 각 좋아요한 곡 또는 앨범 항목 */}
                {
                    (likeArtistList)?(
                        likeArtistList.map((likeArtist, idx)=>{
                            return(<></>)
                        })
                    ):(<>Loading....</>)
                }
            </section>
            {/* 좋아요한 리스트 */}
            <section className={mypageStyle.likeList}>
                <h2>좋아요 앨범 리스트</h2>
                {/* 각 좋아요한 곡 또는 앨범 항목 */}
                {
                    (likeAlbumList)?(
                        likeArtistList.map((likeAlbum, idx)=>{
                            return(<></>)
                        })
                    ):(<>Loading....</>)
                }
            </section>
            {/* 좋아요한 리스트 */}
            <section className={mypageStyle.likeList}>
                <h2>좋아요 곡 리스트</h2>
                {/* 각 좋아요한 곡 또는 앨범 항목 */}
                {
                    (likeMusicList)?(
                        likeMusicList.map((likeMusic, idx)=>{
                            return(<></>)
                        })
                    ):(<>Loading....</>)
                }
            </section>

            {/* 댓글 리스트 */}
            <section className={mypageStyle.replyList}>
                <h2>댓글(가수) 리스트</h2>
                {/* 댓글리스트 항목 */}
                {
                    (replyArtistList)?(
                        replyArtistList.map((replyArtist, idx)=>{
                            return(<></>)
                        })
                    ):(<>Loading....</>)
                }
            </section>
            {/* 댓글 리스트 */}
            <section className={mypageStyle.replyList}>
                <h2>댓글(앨범) 리스트</h2>
                {/* 댓글리스트 항목 */}
                {
                    (replyAlbumList)?(
                        replyAlbumList.map((replyAlbum, idx)=>{
                            return(<></>)
                        })
                    ):(<>Loading....</>)
                }
            </section>
            {/* 댓글 리스트 */}
            <section className={mypageStyle.replyList}>
                <h2>댓글(음악) 리스트</h2>
                {/* 댓글리스트 항목 */}
                {
                    (replyMusicList)?(
                        replyMusicList.map((replyMusic, idx)=>{
                            return(<></>)
                        })
                    ):(<>Loading....</>)
                }
            </section>
        </div>
    )
}

export default MypageMain
