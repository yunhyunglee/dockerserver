// src/components/MainPage.jsx
import React, { useEffect, useState } from 'react';
import NoticeBoard from './NoticeBoard';
import TodayWhatToListen from './TodayWhatToListen';
import LatestMusic from './LatestMusic.jsx';
import LatestAlbums from './LatestAlbums';
import RecommendedPlaylists from './RecommendedPlaylists';
import styles from '../../../css/mainPage/mainPage.module.css';
import lion from '../../../../public/image/kakao_lion.png';
import axios from 'axios';

const MainPage = () => {
  
    const [notice, setNotice] = useState([]);
    const [randomMusic, setRandomMusic] = useState(null);
    const [latestMusic, setLatestMusic] = useState([]);
    const [album, setAlbum] = useState([]);
    const [playList, setPlayList] = useState([]);

    // useEffect(()=>{
    //     axios.get(`api/notice/ `)
    //     .then((result)=>{

    //     }).catch((err)=>{console.log.err})    



    //     axios.get(`api/music/랜덤 `)
    //     .then((result)=>{

    //     }).catch((err)=>{console.log.err})    



    //     axios.get(`api/music/최신 `)
    //     .then((result)=>{

    //     }).catch((err)=>{console.log.err})    



    //     axios.get(`api/album/최신 `)
    //     .then((result)=>{

    //     }).catch((err)=>{console.log.err})    



    //     axios.get(`api/playList/랜덤 `)
    //     .then((result)=>{

    //     }).catch((err)=>{console.log.err})    
    // },[])


    useEffect(() => {
       
        setNotice([
            { noticeId: 1, title: '서비스 점검 안내', content: '내일 3시에 서버 점검이 있습니다.', indate: '2025-02-12', link: '/notice/1' },
            { noticeId: 2, title: '신규 기능 업데이트', content: '새로운 기능이 추가되었습니다.', indate: '2025-02-10', link: '/notice/2' }
        ]);

        setRandomMusic({
          
          "musicId": 101,
          "title": "오늘의 추천 곡",
          "artist": "Random Artist",
          "image": lion,
          "playCount": 1234,
          "genre": "Pop",
          "lyrics": "여기에 가사가 들어갑니다.",
          "like": 256,
          "album": {
            "albumId": 201,
            "releaseDate": "2025-02-11"
          }
        });

        setLatestMusic([
          {
              musicId: 102,
              title: '최신곡 1',
              artist: 'Artist A',
              image: lion,
              playCount: 500,
              genre: 'Rock',
              lyrics: '...',
              titleMusic: false
          },
          {
              musicId: 103,
              title: '최신곡 2',
              artist: 'Artist B',
              image: lion,
              playCount: 750,
              genre: 'Hip-hop',
              lyrics: '...',
              titleMusic: false
          }
        ]);

        setAlbum([
            {
                albumId: 201,
                title: '신규 앨범 1',
                image: lion,
                indate: '2025-02-11',
              
            },
            {
                albumId: 202,
                title: '신규 앨범 2',
                image: lion,
                indate: '2025-02-10'
            }
        ]);

        setPlayList([
            {
                playListId: 301,
                title: 'Chill Vibes',
                
            },
            {
                playListId: 302,
                title: 'Workout Hits'
            }
        ]);
    }, []);

    return (
        <div className={styles.mainPageContainer}>
            <div className={styles.topSection}>
                <section className={styles.noticeSection}>
                    <h2>공지사항</h2>
                    <NoticeBoard notice={notice} />
                </section>
                
                <section className={styles.todayRandomSection}>
                    <h2>오늘 뭐듣지?</h2>
                    <TodayWhatToListen music={randomMusic} />
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
