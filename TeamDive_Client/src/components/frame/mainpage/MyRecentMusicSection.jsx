// src/components/MyPlaylistSection.jsx
import React, { useState } from 'react';
import styles from '../../../css/mainPage/mainPage.module.css';
import { useSelector } from 'react-redux';

const MyRecentMusicSection = () => {


    const loginUser = useSelector(state => state.user);

    // 더미 데이터: 로그인한 사용자의 최근노래임 (API로 대체 가능)
    const recentMusic = [
      { musicId: 1, title: '음악1', image: '/public/image/album/album1.jpg' },
      { musicId: 2, title: '음악2', image: '/public/image/album/album2.jpg' },
      { musicId: 3, title: '음악3', image: '/public/image/album/album3.jpg' },
      { musicId: 4, title: '음악4', image: '/public/image/album/album4.jpg' },
      { musicId: 5, title: '음악5', image: '/public/image/album/album5.jpg' },
      { musicId: 6, title: '음악악6', image: '/public/image/kakao_lion.png' },
    ];

    
    const [visibleCount, setVisibleCount] = useState(5);

    const displayItems = recentMusic.slice(0,visibleCount);

    const more = () => {
      setVisibleCount(prevCount => prevCount + 5);   
      // prevCount는 visible현재상태값을 의미함, 리액트 업뎃함수에서 사용하는겅미
    }


    return (
      <div className={styles.recentMusicSection}>
        <h2><span style={{fontSize: '30px'}}>{loginUser.nickname}</span> 님의 자주 듣는 노래</h2>
        <div className={styles.recentMusicGrid}>
          {displayItems.map((item, index) => (
            <div key={item.musicId} className={styles.recentMusicCard} style={{backgroundImage: `url(${item.image})`}}>
              <span className={styles.recentMusicRank}>{index + 1}</span>
              <div className={styles.recentMusicInfo}>
                <p className={styles.recentMusictitle}>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        {visibleCount < recentMusic.length && (
          <button className={styles.moreButtonRecentMusic} onClick={more}>
            더보기
          </button>
        )}
      </div>
    );
};

export default MyRecentMusicSection;
