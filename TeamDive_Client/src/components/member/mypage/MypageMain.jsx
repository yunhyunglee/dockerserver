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

    const [memberShipUserList, setMemberShipUserList] = useState([]);
        
    const loginUser = useSelector(state=>state.user);

    useEffect(()=>{
        jaxios.get('/api/membership/getActiveMembership', {params:{memberId:loginUser.memberId}})
        .then((result)=>{
            console.log('memberShipUserList',result.data);
            setMemberShipUserList(result.data.memberShipUserList);
            
        })
        .catch((err)=>{
            console.error(err);
        })
    },[]);


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
                            (memberShipUserList && memberShipUserList.length > 0)?(
                                memberShipUserList.map((memberShipUser, key)=>{
                                    return(
                                        <section className={mypageStyle.memberShipUser} idx={key}>
                                            <div className={mypageStyle.field}> 
                                                <label>멤버십 이름</label>
                                                <div>{memberShipUser.membershipName}</div>
                                            </div>
                                            <div className={mypageStyle.field}> 
                                                <label>기간</label>
                                                {memberShipUser.startDate.substring(0, 10) + " ~ " + memberShipUser.endDate.substring(0, 10)}
                                            </div>
                                            {   
                                                (memberShipUser.membershipCategory==='download')?(
                                                    <div className={mypageStyle.field}>
                                                        <label>남은 횟수</label>
                                                        <div>{memberShipUser.downloadCount+' 회'}</div>
                                                    </div>
                                                ):(
                                                    <div className={mypageStyle.field}>
                                                        <label>남은 횟수</label>
                                                        <div>{'-'}</div>
                                                    </div>
                                                )
                                            }
                                            <button>멤버십 해지</button>
                                        </section>
                                    )
                                })
                            ):(<div>구독한 멤버십이 없습니다.</div>)
                        }
                    </div>
                </div>
            </section>
                

            {/* 좋아요한 가수 / 앨범 리스트 */}
            <section className={mypageStyle.likeList}>
                {/* 좋아요한 가수 리스트 */}
                <div>
                    <h2>좋아요 가수 리스트</h2>
                    {/* 각 좋아요한 가수 항목 */}
                    {
                        (likeArtistList)?(
                            likeArtistList.slice(0, 6).map((likeArtist, idx)=>{
                                return(
                                    <div className={mypageStyle.field} key={idx}>
                                        <div>
                                            <img src={''}/>
                                        </div>
                                        <div>
                                            <label>가수이름</label>
                                            <div>{likeArtist.name}</div>
                                        </div>
                                        <div>
                                            <label>데뷔일</label>
                                            <div>
                                                {
                                                    (likeArtist.debut)?(likeArtist.debut.substring(0, 10)):('')
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        ):(<>Loading....</>)
                    }
                </div>
                {/* 좋아요한 앨범 리스트 */}
                <div className={mypageStyle.likeList}>
                    <h2>좋아요 앨범 리스트</h2>
                    {/* 각 좋아요한 앨범 항목 */}
                    {
                        (likeAlbumList)?(
                            likeArtistList.slice(0, 6).map((likeAlbum, idx)=>{
                                return(
                                    <div className={mypageStyle.field} key={idx}>
                                        <div>
                                            <img src={''}/>
                                        </div>
                                        <div>
                                            <label>앨범이름</label>
                                            <div>{likeAlbum.name}</div>
                                        </div>
                                        <div>
                                            <label>발매일</label>
                                            <div>
                                                {
                                                    (likeAlbum.indate)?(likeAlbum.indate.substring(0, 10)):('')
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        ):(<>Loading....</>)
                    }
                </div>
                
            </section>    
            {/* 좋아요한 곡 리스트 */}
            <section className={mypageStyle.likeList}>
                <h2>좋아요 곡 리스트</h2>
                {/* 각 좋아요한 음악 항목 */}
                {   
                    <div className={mypageStyle.field}>
                        <div className={mypageStyle.title}>
                            <div className={mypageStyle.column}>제목</div>
                            <div className={mypageStyle.column}>가수</div>
                            <div className={mypageStyle.column}>앨범</div>
                            <div className={mypageStyle.column}>장르</div>
                        </div>
                        {
                            (likeMusicList)?(
                                likeMusicList.map((likeMusic, idx)=>{
                                    return(
                                        <div className={mypageStyle.title} key={idx}>
                                            <div className={mypageStyle.column}>
                                                {likeMusic.title}
                                            </div>
                                            <div className={mypageStyle.column}>
                                                {likeMusic.artist.artistName}
                                            </div>
                                            <div className={mypageStyle.column}>
                                                {likeMusic.album.title}
                                            </div>
                                            <div className={mypageStyle.column}>
                                                {likeMusic.genre}
                                            </div>
                                        </div>
                                    )
                                })
                            ):(<>Loading....</>)
                        }
                    </div>
                }
            </section>
            {/* 댓글 리스트 - 봐서 따로 컴포넌트룰 구성해서 연결시킬지 말지 구상
            <section className={mypageStyle.replyList}>
                <h2>댓글(가수) 리스트</h2>
                {
                    (replyArtistList)?(
                        replyArtistList.map((replyArtist, idx)=>{
                            return(<></>)
                        })
                    ):(<>Loading....</>)
                }
            </section>
           
            <section className={mypageStyle.replyList}>
                <h2>댓글(앨범) 리스트</h2>
                {
                    (replyAlbumList)?(
                        replyAlbumList.map((replyAlbum, idx)=>{
                            return(<></>)
                        })
                    ):(<>Loading....</>)
                }
            </section>
            
            <section className={mypageStyle.replyList}>
                <h2>댓글(음악) 리스트</h2>
               
                {
                    (replyMusicList)?(
                        replyMusicList.map((replyMusic, idx)=>{
                            return(<></>)
                        })
                    ):(<>Loading....</>)
                }
            </section>
            */}
        </div>
    )
}

export default MypageMain
