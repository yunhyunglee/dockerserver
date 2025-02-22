import React, { useEffect, useState } from 'react';
import styles from '../../../css/mainPage/mainPage.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Top100Section = () => {
  
  const [monthlyCharts,setMonthlyCharts]=useState([]);

  const displayItems = monthlyCharts.slice(0, 10);
  useEffect(
    ()=>{
      axios.get('/api/music/getMusicChart')
    .then((result)=>{
      console.log(result.data);
      setMonthlyCharts(result.data.Top100Month);
    }).catch((err)=>{ console.error(err);})
    },[]
  );


  return (
    <div className={styles.top100Section}>
      <header className={styles.top100Header}>
        <h2 className={styles.top100Title}>🎉 오늘의 TOP 100 🎉</h2>
        <Link to={"/top100"}>
        <button className={styles.moreButtonTop100}>전체보기</button>
        </Link>
      </header>
      <table className={styles.listTrackList}>
        <thead>
          <tr>
            <th>순위</th>
            <th>곡</th>
            <th>아티스트</th>
            <th>듣기</th>
            <th>재생목록</th>
            <th>옵션</th>
          </tr>
        </thead>
        <tbody>
          {displayItems.map((item,index) => (
            <tr key={item.music.musicId}>
              <td>{index+1}</td>

              <td>{item.music.title}</td>
              <td>{item.music.artistName}</td>
              <td>
                <button
                  className={styles.actionButton}
                  onClick={() => alert(`듣기: ${item.title}`)}
                >
                  듣기
                </button>
              </td>
              <td>
                <button
                  className={styles.actionButton}
                  onClick={() => alert(`재생목록에 추가: ${item.title}`)}
                >
                  추가
                </button>
              </td>
              <td>
                <button
                  className={styles.actionButton}
                  onClick={() => alert(`옵션: ${item.title}`)}
                >
                  옵션
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Top100Section;
