import React, { useState } from "react";
import styles from "../../css/storage/likedAlbum.module.css";

const LikedAlbum = () => {
  const [likedAlbums, setLikedAlbums] = useState([
    {
      albumId: 101,
      albumName: "테스트 앨범1",
      coverImage: "/public/image/album/album1.jpg",
      indate: "2023-01-01",
      artist: {
        artistId: 1,
        artistName: "아이유",
        image: "/public/image/artist/artist1.jpg"
      },
      musicList: [
        { musicId: 11, title: "첫 번째 곡", trackNumber: 1 },
        { musicId: 12, title: "두 번째 곡", trackNumber: 2 },
      ]
    },
    {
      albumId: 102,
      albumName: "테스트 앨범2",
      coverImage: "/public/image/album/album2.jpg",
      indate: "2023-02-15",
      artist: {
        artistId: 2,
        artistName: "뉴진스",
        image: "/public/image/artist/artist2.jpg"
      },
      musicList: [
        { musicId: 21, title: "A Ditto", trackNumber: 1 },
        { musicId: 22, title: "B OMG", trackNumber: 2 },
      ]
    },
  ]);

  // 좋아요 취소
  const handleUnlike = (albumId) => {
    if (window.confirm("앨범 좋아요를 취소할까요?")) {
      setLikedAlbums((prev) => prev.filter((album) => album.albumId !== albumId));
    }
  };

  if (!likedAlbums || likedAlbums.length === 0) {
    return (
      <div className={styles.emptyMessage}>
        <h2>좋아하는 앨범이 없습니다</h2>
        <p>내가 좋아하는 앨범들을 추가해보세요</p>
      </div>
    );
  }

  return (
    <div className={styles.albumContainer}>
      <h2 className={styles.sectionTitle}>좋아하는 앨범</h2>
      <div className={styles.albumGrid}>
        {likedAlbums.map((album) => (
          <div className={styles.flipCard} key={album.albumId}>
            <div className={styles.flipCardInner}>

              {/* 앞면: 앨범 커버 */}
              <div className={styles.flipCardFront}>
                <img
                  src={album.coverImage}
                  alt={album.albumName}
                  className={styles.coverImage}
                />
              </div>

              {/* 뒷면: 앨범 타이틀 + 가수 이름 + 좋아요 + 상세보기 */}
              <div className={styles.flipCardBack} style={{ backgroundImage: `url(${album.coverImage})` }}>
                <div className={styles.flipCardContent}>
                  <h3 className={styles.albumTitle}>{album.albumName}</h3>

                  {album.artist && (
                    <p className={styles.artistName}>{album.artist.artistName}</p>
                  )}

                  <div className={styles.buttonRow}>
                    <button
                      className={styles.heartBtn}
                      onClick={() => handleUnlike(album.albumId)}
                    >
                      ♥
                    </button>

                    <button
                      className={styles.detailBtn}
                      onClick={() => console.log(`Go to album detail page: ${album.albumId}`)}
                    >
                      상세보기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedAlbum;
