// src/components/MyPlaylistSection.jsx
import React, { useEffect, useState } from 'react';
import styles from '../../../css/mainPage/mainPage.module.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import jaxios from '../../../util/JwtUtil';

const MyRecentMusicSection = () => {

    const navigate = useNavigate();


    const loginUser = useSelector(state => state.user);


    const [music, setMusic]=useState([]);
    useEffect(
      ()=>{
        jaxios.get('/api/music/getMemberRecentMusics',{params:{memberId:loginUser.memberId}})
        .then((result)=>{
          console.log(result.data.musics);
          setMusic(result.data.musics);
        }).catch((err)=>{console.error(err);})
        
      },[]
    );
    
    const [visibleCount, setVisibleCount] = useState(8);

    const displayItems = music.slice(0,visibleCount);




    return (
      <div className={styles.recentMusicSection}>
        <h2><span style={{fontSize: '30px'}}>{loginUser.nickname}</span> 님의 자주 듣는 노래</h2>
        <div className={styles.recentMusicGrid}>
          {displayItems.map((item, index) => (
            <div key={index} className={styles.recentMusicCard} 
            onClick={()=>{navigate(`/music/${item.musicId}`)}}
            >

              <div className={styles.recentMusicInfo}>
                  <img src={item.image} className={styles.image}/>
                  <div className={styles.playIcon}>▶</div>
              </div>
              <div className={styles.musicInfo}>
                  <p className={styles.recentMusictitle}>{item.title}</p>
                  <p className={styles.recentMusictitle}>{item.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default MyRecentMusicSection;
