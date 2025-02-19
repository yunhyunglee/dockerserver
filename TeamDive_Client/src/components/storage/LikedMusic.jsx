import React from "react";
import { Link } from "react-router-dom";
import styles from "../../css/storage/storage.module.css";

const LikedMusic = () => {
  
  const likedMusic = [
    {
      musicId: 1,
      title: "별별별",
      genre: "아이돌",
      artist: "엔믹스",
      image: "/public/image/album/album1.jpg", 
    },
    {
      musicId: 2,
      title: "고민중독",
      genre: "밴드",
      artist: "QWER",
      image: "/public/image/album/album2.jpg", 
    },
    {
      musicId: 3,
      title: "Dash",
      genre: "아이돌",
      artist: "엔믹스",
      image: "/public/image/album/album3.jpg", 
    },
    {
      musicId: 4,
      title: "럽미랔뎃",
      genre: "아이돌",
      artist: "엔믹스",
      image: "/public/image/album/album8.jpg", 
    },
  ];

  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>좋아하는 노래</h2>

      {likedMusic.length === 0 ? (
        <div className={styles.emptyMessage}>
          <h2>좋아하는 노래가 없어요!</h2>
          <p>내가 좋아하는 노래들을 추가해보세요.</p>
        </div>
      ) : (
        <div className={styles.musicGrid}>
          {likedMusic.map((music) => (
            <div className={styles.musicCard} key={music.musicId}>
              {/* 이미지 영역 */}
              <div className={styles.musicImageWrapper}>
                <img
                  src={music.image}
                  alt={music.title}
                  className={styles.musicImage}
                />
              </div>

              {/* 노래 제목 (클릭 시 /music/:musicId 로 이동) */}
              <Link to={`/music/${music.musicId}`} className={styles.musicTitle}>
                {music.title}
              </Link>

              {/* 장르 & 아티스트 */}
              <div className={styles.musicMeta}>
                <span className={styles.genre}>{music.genre}</span>
                <span className={styles.artist}>{music.artist}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LikedMusic;
