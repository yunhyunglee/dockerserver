import React, { useState } from "react";
import styles from "../../css/storage/likedArtist.module.css";

const LikedArtist = () => {
  // 가짜 데이터 예시
  const [likedArtists, setLikedArtists] = useState([
    {
      artistId: 1,
      artistName: "엔믹스",
      debut: "2022-02-22",
      country: "Korea",
      image: "/public/image/artist/artist1.jpg",
    },
    {
      artistId: 2,
      artistName: "아이유",
      debut: "2008-09-18",
      country: "Korea",
      image: "/public/image/artist/artist2.jpg",
    },
    {
      artistId: 3,
      artistName: "NewJeans",
      debut: "2022-08-01",
      country: "Korea",
      image: "/public/image/artist/artist3.jpg",
    },
  ]);

  // 좋아요 취소
  const handleUnlike = (artistId) => {
    if (window.confirm("좋아요를 취소할까요?")) {
      setLikedArtists((prev) =>
        prev.filter((artist) => artist.artistId !== artistId)
      );
    }
  };

  // 목록이 비어 있을 때
  if (!likedArtists || likedArtists.length === 0) {
    return (
      <div className={styles.emptyMessage}>
        <h2>좋아하는 가수가 없습니다</h2>
        <p>내가 좋아하는 가수들을 추가해보세요</p>
      </div>
    );
  }

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.artistGrid}>
        {likedArtists.map((artist) => (
          <div className={styles.artistCard} key={artist.artistId}>
            
            <div className={styles.imageOverlay}>
              <img
                src={artist.image}
                alt={artist.artistName}
                className={styles.artistImage}
              />
              
              <div className={styles.overlayGradient} />
              {/* 좋아요 버튼 (하트) */}
              <button
                className={styles.heartBtn}
                onClick={() => handleUnlike(artist.artistId)}
              >
                ❤️
              </button>
            </div>

            {/* 가수 정보 */}
            <div className={styles.artistInfo}>
              <h3 className={styles.artistName}>{artist.artistName}</h3>
              <p className={styles.debut}>데뷔일: {artist.debut}</p>
              <p className={styles.country}>국가: {artist.country}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedArtist;
