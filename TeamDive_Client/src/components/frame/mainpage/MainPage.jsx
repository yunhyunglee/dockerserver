// src/components/MainPage.jsx
import React, { useEffect, useState } from 'react';
import Top100Section from './Top100Section';
import MyRecentMusicSection from './MyRecentMusicSection.jsx';
import LatestMusic from './LatestMusic.jsx';
import LatestAlbums from './LatestAlbums';
import RecommendedPlaylists from './RecommendedPlaylists';
import styles from '../../../css/mainPage/mainPage.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LikeRankingSection from './LikeRankingSection.jsx';
import RandomMusic from './RandomMusic.jsx';
import axios from 'axios';
import jaxios from '../../../util/JWTUtil.jsx';


const MainPage = ({mood}) => {
    const loginUser = useSelector(state => state.user);
    

    const [showAdModal, setShowAdModal] = useState(false); 


    const [recommendedSongs, setRecommendedSongs] = useState([]);
    const [recommendList, setRecommendList] = useState([]);
    // useEffect(() => {
    //     if (!mood) return;
    
    //     axios.get(`/api/music/recommend?mood=${mood}`)
    //       .then((res) => {
    //         setRecommendedSongs(res.data);
    //       })
    //       .catch((err) => {
    //         console.error(err);
    //       });
    //   }, [mood]);
    useEffect(() => {
    if (!mood) return;
    console.log('select mood', mood);
    
    jaxios.get('/api/AI/recommendList', {params:{mood: mood, memberId:loginUser.memberId}})
        .then((result) => {
            console.log('데이터', result.data);
            console.log('개수', result.data.recommendList.length)
            setRecommendList(result.data.recommendList);
        })
        .catch((err) => {
        console.error(err);
        });
    }, [mood]);
    

    useEffect(() => {
        
        const timer = setTimeout(() => {
            setShowAdModal(true);
        }, 300);

        return () => clearTimeout(timer); 
    }, []);


    // 더미 데이터 (나중에 실제 API 호출로 대체)
    const [latestMusic, setLatestMusic] = useState([]);
    const [album, setAlbum] = useState([]);
    const [playList, setPlayList] = useState([]);

    useEffect(() => {
        // 최신등록음악 더미 데이터
        setLatestMusic([
        { musicId: 1, title: '최신곡 1', artist: 'Artist A', image: '/public/image/album/album1.jpg' },
        { musicId: 3, title: '최신곡 2', artist: 'Artist B', image: '/public/image/album/album2.jpg' },
        ]);

        // 최신등록앨범 더미 데이터
        setAlbum([
        { albumId: 1, title: '신규 앨범 1', image: '/public/image/album/album3.jpg' },
        { albumId: 2, title: '신규 앨범 2', image: '/public/image/album/album4.jpg' },
        ]);

        // 추천플레이리스트 더미 데이터
        setPlayList([
        { playListId: 1, title: 'Chill Vibes' },
        { playListId: 2, title: 'Workout Hits' },
        ]);
    }, []);

    function AdModal() {
        return (
        <div className={styles.adModalOverlay}>
            <div className={styles.adModal}>
            <button className={styles.closeButton} onClick={() => setShowAdModal(false)}>
                X
            </button>
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <Link to={'/membership/all'}><img src='/public/image/adImage.png' style={{width: '100%', height: '100%'}}/></Link>
            </div>
            </div>
        </div>
        );
    }
    


    return (
        <div className={styles.mainPageContainer}>

            
            <div className={
            mood && mood !== ''
                ? styles.recommendActive
                : styles.recommendHidden
            }>
            <h3>추천 노래 목록</h3>
            {recommendList.map((music, idx) => (
                <div key={music.idx} className={styles.songCard}>
                    <p className={styles.songTitle}>
                        <img src='{music.image}' />
                    </p>
                    <p className={styles.songTitle}>
                        {music.title}
                    </p>
                    <p className={styles.songArtist}>
                        {music.artistName}
                    </p>
                </div>
            ))}
            </div>


            {!loginUser.memberId ? (showAdModal && (<AdModal/>)) : ''}
            
            <div className={styles.topSection}>

                <div className={styles.topRow}>
                    <div className={styles.topLeft}><LikeRankingSection /></div>

                  
                    <section className={styles.conditionalSection1}>
                    { !loginUser.memberId ? 
                            <RandomMusic/>
                        :
                            <MyRecentMusicSection />  
                    }
                    </section>
                  

                </div>

                <section className={styles.conditionalSection}>
                        
                        <Top100Section />
                        
                    </section>
            </div>

        <section className={styles.section}>
            <h2>최신등록음악</h2>
            <LatestMusic music={latestMusic} />
        </section>

        <section className={styles.section}>
            <h2>최신등록앨범</h2>
            <LatestAlbums album={album} />
        </section>

        <section className={styles.section}>
            <h2>추천플레이리스트</h2>
            <RecommendedPlaylists playList={playList} />
        </section>
        
        </div>

    
    );
};

export default MainPage;
