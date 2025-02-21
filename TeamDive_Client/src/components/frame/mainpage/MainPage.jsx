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


const MainPage = () => {
    const loginUser = useSelector(state => state.user);

    const [showAdModal, setShowAdModal] = useState(false); // 초기값을 false로 설정

    useEffect(() => {
        // 0.5초 뒤에 광고 모달 띄우기
        const timer = setTimeout(() => {
            setShowAdModal(true);
        }, 300);

        return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
    }, []);


    // 더미 데이터 (나중에 실제 API 호출로 대체)
    const [latestMusic, setLatestMusic] = useState([]);
    const [album, setAlbum] = useState([]);
    const [playList, setPlayList] = useState([]);

    useEffect(() => {
        // 최신등록음악 더미 데이터
        setLatestMusic([
        { musicId: 102, title: '최신곡 1', artist: 'Artist A', image: '/public/image/album/album1.jpg' },
        { musicId: 103, title: '최신곡 2', artist: 'Artist B', image: '/public/image/album/album2.jpg' },
        ]);

        // 최신등록앨범 더미 데이터
        setAlbum([
        { albumId: 201, title: '신규 앨범 1', image: '/public/image/album/album3.jpg' },
        { albumId: 202, title: '신규 앨범 2', image: '/public/image/album/album4.jpg' },
        ]);

        // 추천플레이리스트 더미 데이터
        setPlayList([
        { playListId: 301, title: 'Chill Vibes' },
        { playListId: 302, title: 'Workout Hits' },
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
            {!loginUser.memberId ? (showAdModal && (<AdModal/>)) : ''}
            
        <div className={styles.topSection}>

            { !loginUser.memberId ? "" :
            <section className={styles.conditionalSection1}>
                <MyRecentMusicSection />  
            </section>
            }

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
