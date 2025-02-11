// src/components/LatestAlbums.jsx
import React from 'react';
import styles from '../../../css/mainPage/latestAlbums.module.css';
import { useNavigate } from 'react-router-dom';


const LatestAlbums = ({ album }) => {

    const navigate = useNavigate();

    return (
        <div className={styles.latestAlbums}>
            {album.map(album => (
                <div key={album.albumId} className={styles.albumItem}
                    onClick={()=>{navigate(`/album/${album.albumId}`)}}
                >
                    <img src={album.image} alt={album.title} className={styles.albumCover} />
                    <div className={styles.albumDetails}>
                        <h4>{album.title}</h4>
                        <small>{album.indate}</small>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LatestAlbums;
