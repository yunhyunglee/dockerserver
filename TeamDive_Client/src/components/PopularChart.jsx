// src/components/PopularChartsPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/popularChart.module.css';
import axios from 'axios';

const PopularChartsPage = () => {
  const navigate = useNavigate();

  // 각 인기 차트 카테고리의 데이터를 저장하는 상태들
  const [weeklyCharts, setWeeklyCharts] = useState([]);
  const [monthlyCharts, setMonthlyCharts] = useState([]);
  const [domesticCharts, setDomesticCharts] = useState([]);
  const [foreignCharts, setForeignCharts] = useState([]);

  useEffect(() => {
    
    /*
    axios.get('/api/charts/weekly')
      .then(response => setWeeklyCharts(response.data))
      .catch(error => console.error('Error fetching weekly charts:', error));

    axios.get('/api/charts/monthly')
      .then(response => setMonthlyCharts(response.data))
      .catch(error => console.error('Error fetching monthly charts:', error));

    axios.get('/api/charts/domestic')
      .then(response => setDomesticCharts(response.data))
      .catch(error => console.error('Error fetching domestic charts:', error));

    axios.get('/api/charts/foreign')
      .then(response => setForeignCharts(response.data))
      .catch(error => console.error('Error fetching foreign charts:', error));
    */

    // // 더미 데이터 사용 
    // setWeeklyCharts([
    //   { musicId: 1, title: 'Weekly Song 1', image: '/image/kakao_lion.png', playCount: 5200, artist: { name: 'Artist A' } },
    //   { musicId: 2, title: 'Weekly Song 2', image: '/image/song2.jpg', playCount: 5000, artist: { name: 'Artist B' } },
    //   { musicId: 3, title: 'Weekly Song 3', image: '/image/song3.jpg', playCount: 4800, artist: { name: 'Artist C' } },
    //   { musicId: 4, title: 'Weekly Song 4', image: '/image/song4.jpg', playCount: 4600, artist: { name: 'Artist D' } },
    //   { musicId: 5, title: 'Weekly Song 5', image: '/image/song5.jpg', playCount: 4400, artist: { name: 'Artist E' } },
    //   { musicId: 6, title: 'Weekly Song 6', image: '/image/song6.jpg', playCount: 4200, artist: { name: 'Artist F' } },
    // ]);

    // setMonthlyCharts([
    //   { musicId: 7, title: 'Monthly Song 1', image: '/image/song7.jpg', playCount: 6800, artist: { name: 'Artist G' } },
    //   { musicId: 8, title: 'Monthly Song 2', image: '/image/song8.jpg', playCount: 6600, artist: { name: 'Artist H' } },
    //   { musicId: 9, title: 'Monthly Song 3', image: '/image/song9.jpg', playCount: 6400, artist: { name: 'Artist I' } },
    //   { musicId: 10, title: 'Monthly Song 4', image: '/image/song10.jpg', playCount: 6200, artist: { name: 'Artist J' } },
    //   { musicId: 11, title: 'Monthly Song 5', image: '/image/song11.jpg', playCount: 6000, artist: { name: 'Artist K' } },
    //   { musicId: 12, title: 'Monthly Song 6', image: '/image/song12.jpg', playCount: 5800, artist: { name: 'Artist L' } },
    // ]);

    // setDomesticCharts([
    //   { musicId: 13, title: 'Domestic Song 1', image: '/image/song13.jpg', playCount: 7500, artist: { name: 'Artist M' } },
    //   { musicId: 14, title: 'Domestic Song 2', image: '/image/song14.jpg', playCount: 7300, artist: { name: 'Artist N' } },
    //   { musicId: 15, title: 'Domestic Song 3', image: '/image/song15.jpg', playCount: 7100, artist: { name: 'Artist O' } },
    //   { musicId: 16, title: 'Domestic Song 4', image: '/image/song16.jpg', playCount: 6900, artist: { name: 'Artist P' } },
    //   { musicId: 17, title: 'Domestic Song 5', image: '/image/song17.jpg', playCount: 6700, artist: { name: 'Artist Q' } },
    //   { musicId: 18, title: 'Domestic Song 6', image: '/image/song18.jpg', playCount: 6500, artist: { name: 'Artist R' } },
    // ]);

    // setForeignCharts([
    //   { musicId: 19, title: 'Foreign Song 1', image: '/image/song19.jpg', playCount: 8000, artist: { name: 'Artist S' } },
    //   { musicId: 20, title: 'Foreign Song 2', image: '/image/song20.jpg', playCount: 7800, artist: { name: 'Artist T' } },
    //   { musicId: 21, title: 'Foreign Song 3', image: '/image/song21.jpg', playCount: 7600, artist: { name: 'Artist U' } },
    //   { musicId: 22, title: 'Foreign Song 4', image: '/image/song22.jpg', playCount: 7400, artist: { name: 'Artist V' } },
    //   { musicId: 23, title: 'Foreign Song 5', image: '/image/song23.jpg', playCount: 7200, artist: { name: 'Artist W' } },
    //   { musicId: 24, title: 'Foreign Song 6', image: '/image/song24.jpg', playCount: 7000, artist: { name: 'Artist X' } },
    // ]);
    axios.get('/api/music/getMusicChart')
    .then((result)=>{
      console.log(result.data);
      setMonthlyCharts(result.data.Top100Month);
      setWeeklyCharts(result.data.Top100Week);
      setDomesticCharts(result.data.Top100MonthKor);
      setForeignCharts(result.data.Top100MonthnoKor);
    }).catch((err)=>{ console.error(err);})


  }, []);

  const navigateToCategory = (category) => {
    navigate(`/charts/${category}`);
  };

    
  const renderCards = (items) => {
    
      const displayItems = items.slice(0, 5);

      return (
          <div className={styles.chartGrid}>
          {displayItems.map((item, index) => (
              <div
              key={item.music.musicId}
              className={styles.card}
              style={{ backgroundImage: `url(${item.image})` }}
              onClick={() => navigate(`/music/${item.musicId}`)}
              >
              
              <div className={styles.rank}>{index + 1}</div>
              
              <div className={styles.overlay}>
                  <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{item.music.title}</h3>
                  <p className={styles.cardArtist}>{item.music.artistName}</p>
                  <p className={styles.cardPlayCount}>{item.totalPlayCount}회</p>
                  </div>
              </div>
              </div>
          ))}
          </div>
      );
  };


  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>인기 차트</h1>
      
      {/* 주간 인기 차트 */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>주간 인기 차트</h2>
          {weeklyCharts.length > 5 && (
            <button className={styles.moreButton} onClick={() => navigateToCategory('weekly')}>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
            </button>
          )}
        </div>
        {renderCards(weeklyCharts, 'song')}
      </section>
      
      {/* 월간 인기 차트 */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>월간 인기 차트</h2>
          {monthlyCharts.length > 5 && (
            <button className={styles.moreButton} onClick={() => navigateToCategory('monthly')}>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
            </button>
          )}
        </div>
        {renderCards(monthlyCharts, 'song')}
      </section>
      
      {/* 국내 인기 차트 */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>국내 인기 차트</h2>
          {domesticCharts.length > 5 && (
            <button className={styles.moreButton} onClick={() => navigateToCategory('domestic')}>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
            </button>
          )}
        </div>
        {renderCards(domesticCharts, 'song')}
      </section>
      
      {/* 해외 인기 차트 */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>해외 인기 차트</h2>
          {foreignCharts.length > 5 && (
            <button className={styles.moreButton} onClick={() => navigateToCategory('foreign')}>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
            </button>
          )}
        </div>
        {renderCards(foreignCharts, 'song')}
      </section>
    </div>
  );
};

export default PopularChartsPage;
