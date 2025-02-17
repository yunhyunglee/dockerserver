// src/components/MyPlaylistSection.jsx
import React, { useState } from 'react';
import styles from '../../../css/mainPage/mainPage.module.css';

const MyPlaylistSection = () => {
  // 더미 데이터: 로그인한 사용자의 플레이리스트 (API로 대체 가능)
  const myPlaylistDummy = [
    { playListId: 1, title: '나의 플레이리스트 1', image: '/public/image/kakao_lion.png' },
    { playListId: 2, title: '나의 플레이리스트 2', image: '/public/image/kakao_lion.png' },
    { playListId: 3, title: '나의 플레이리스트 3', image: '/public/image/kakao_lion.png' },
    { playListId: 4, title: '나의 플레이리스트 4', image: '/public/image/kakao_lion.png' },
    { playListId: 5, title: '나의 플레이리스트 5', image: '/public/image/kakao_lion.png' },
    { playListId: 6, title: '나의 플레이리스트 6', image: '/public/image/kakao_lion.png' },
  ];

  
  const [visibleCount, setVisibleCount] = useState(5);

  const displayItems = myPlaylistDummy.slice(0,visibleCount);

  const more = () => {
    setVisibleCount(prevCount => prevCount + 5);   
    // prevCount는 visible현재상태값을 의미함, 리액트 업뎃함수에서 사용하는겅미
  }


  return (
    <div className={styles.myPlaylistSection}>
      <h2>나의 플레이 리스트</h2>
      <div className={styles.playlistGrid}>
        {displayItems.map((item, index) => (
          <div key={item.playListId} className={styles.playlistCard} style={{backgroundImage: `url(${item.image})`}}>
            <span className={styles.playlistRank}>{index + 1}</span>
            <div className={styles.playlistInfo}>
              <p className={styles.playlistTitle}>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
      {visibleCount < myPlaylistDummy.length && (
        <button className={styles.moreButtonPlaylist} onClick={more}>
          더보기
        </button>
      )}
    </div>
  );
};

export default MyPlaylistSection;
