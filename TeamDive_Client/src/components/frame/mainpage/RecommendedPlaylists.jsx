// src/components/RecommendedPlaylists.jsx
import React from 'react';
import styles from '../../../css/mainPage/recommendedPlaylists.module.css';
import { useNavigate } from 'react-router-dom';

const RecommendedPlaylists = ({ playList }) => {

    const navigate = useNavigate();

    return (
        <div className={styles.playlists}>
            {playList.map(playList => (
                <div key={playList.playListId} className={styles.playlistItem}
                    onClick={()=>{navigate(`/playList/${playList.playListId}`)}}
                >
                    <div className={styles.playlistCover}>
                        {/* 플레이리스트 대표 이미지가 있다면 여기에 표시 */}
                        <img src='/public/image/kakao_lion.png' alt={playList.title} />
                    </div>
                    <div className={styles.playlistDetails}>
                        <h4>{playList.title}</h4>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RecommendedPlaylists;
