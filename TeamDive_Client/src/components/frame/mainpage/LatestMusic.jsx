// src/components/LatestMusic.jsx
import React from 'react';
import styles from '../../../css/mainPage/latestMusic.module.css';
import { useNavigate } from 'react-router-dom';

const LatestMusic = ({ music }) => {

    const navigate = useNavigate();

    return (
        <div className={styles.latestMusic}>
            {music.map(music => (
                <div key={music.musicId} className={styles.songItem}
                    onClick={()=>{navigate(`/music/${music.musicId}`)}}
                >
                    <img src={music.image} alt={music.title} className={styles.albumCover} />
                    <div className={styles.songDetails}>
                        <h4>{music.title}</h4>
                        <p>{music.artist}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LatestMusic;
