import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import styles from '../../../css/mainPage/likeRankingSection.module.css';

const LikeRankingSection = () => {
  const [activeTab, setActiveTab] = useState('artist');


  const [artistRanking, setArtistRanking] = useState([]);
  const [albumRanking, setAlbumRanking] = useState([]);
  const [musicRanking, setMusicRanking] = useState([]);

  useEffect(() => {

    const dummyArtists = [
      {
        id: 1,
        name: "아이유 (IU)",
        image: "/public/image/artist/iu.jpg",
      },
      {
        id: 2,
        name: "BTS (방탄소년단)",
        image: "/public/image/artist/bts.jpg",
      },
      {
        id: 3,
        name: "NewJeans",
        image: "/public/image/artist/newjeans.jpg",
      },
    ];
    setArtistRanking(dummyArtists);

    const dummyAlbums = [
      {
        id: 1,
        title: "Love Poem",
        image: "/public/image/album/lovepoem.jpg",
      },
      {
        id: 2,
        title: "MAP OF THE SOUL : 7",
        image: "/public/image/album/mots7.jpg",
      },
      {
        id: 3,
        title: "OMG",
        image: "/public/image/album/omg.jpg",
      },
    ];
    setAlbumRanking(dummyAlbums);

    const dummyMusic = [
      {
        id: 1,
        title: "Blueming",
        artistName: "아이유 (IU)",
        image: "/public/image/music/blueming.jpg",
      },
      {
        id: 2,
        title: "Dynamite",
        artistName: "BTS",
        image: "/public/image/music/dynamite.jpg",
      },
      {
        id: 3,
        title: "Hype Boy",
        artistName: "NewJeans",
        image: "/public/image/music/hypeboy.jpg",
      },
    ];
    setMusicRanking(dummyMusic);


    /*
    axios.get('/api/community/getLikes')
      .then(res => setArtistRanking(res.data.slice(0, 3)))
      .catch(err => console.error(err));

    axios.get('/api/community/getLikes')
      .then(res => setAlbumRanking(res.data.slice(0, 3)))
      .catch(err => console.error(err));

    axios.get('/api/community/getLikes')
      .then(res => setMusicRanking(res.data.slice(0, 3)))
      .catch(err => console.error(err));
    */
  }, []);

  const getActiveData = () => {
    switch (activeTab) {
      case 'artist': return artistRanking;
      case 'album': return albumRanking;
      case 'music': return musicRanking;
      default: return [];
    }
  };

  // 클릭 시 페이지 이동
  const handleItemClick = (item) => {
    if (activeTab === 'artist') {
      window.location.href = `/artist/${item.id}`;
    } else if (activeTab === 'album') {
      window.location.href = `/album/${item.id}`;
    } else if (activeTab === 'music') {
      window.location.href = `/music/${item.id}`;
    }
  };

  return (
    <div className={styles.likeRankingSection}>
      <h2 className={styles.sectionTitle}>Top 3</h2>

      {/* 탭 버튼 */}
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'artist' ? styles.active : ''}`}
          onClick={() => setActiveTab('artist')}
        >
          아티스트
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'album' ? styles.active : ''}`}
          onClick={() => setActiveTab('album')}
        >
          앨범
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'music' ? styles.active : ''}`}
          onClick={() => setActiveTab('music')}
        >
          노래
        </button>
      </div>

      {/* 탭 내용 */}
      <div className={styles.rankList}>
        {getActiveData().map((item, index) => (
          <div
            key={item.id}
            className={styles.rankItem}
            onClick={() => handleItemClick(item)}
          >
            <span className={styles.rank}>{index + 1}위</span>
            <img
              src={item.image}
              className={styles.rankImage}
            />
            <div className={styles.infoArea}>
          
              {activeTab === 'music' ? (
                <p className={styles.title}>
                  {item.title} 
                  <span className={styles.artistRight}> - {item.artistName}</span>
                </p>
              ) : (
            
                <p className={styles.title}>{item.name || item.title}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikeRankingSection;
