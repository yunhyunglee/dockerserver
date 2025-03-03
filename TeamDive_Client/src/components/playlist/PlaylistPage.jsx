import { useState, useEffect } from "react";
import styles from "../../css/playlistPage.module.css";

const PlaylistPage = () => {
    


  
  // rotate.gif 이미지를 반환하는 간단한 함수
  function rotateGif() {
    return (
      <img
        src="/public/icon/rotate.gif"
        alt="rotate icon"
        className={styles.rotateIcon}
      />
    );
  }

  const [shufflePlaylist, setShufflePlaylist] = useState([]);

  // 임시 데이터
  const playlist = [
    { title: "여행가고 싶을 때", image: "https://d9k8tjx0yo0q5.cloudfront.net/image/pl12.jpg" },
    { title: "플리2", image: "https://d9k8tjx0yo0q5.cloudfront.net/image/pl2.jpg" },
    { title: "플리3", image: "https://d9k8tjx0yo0q5.cloudfront.net/image/pl3.jpg" },
    { title: "플리4", image: "https://d9k8tjx0yo0q5.cloudfront.net/image/pl4.jpg" },
    { title: "플리5", image: "https://d9k8tjx0yo0q5.cloudfront.net/image/pl5.jpg" },
    { title: "플리6", image: "https://d9k8tjx0yo0q5.cloudfront.net/image/pl6.jpg" },
    { title: "플리7", image: "https://d9k8tjx0yo0q5.cloudfront.net/image/pl7.jpg" },
    { title: "플리8", image: "https://d9k8tjx0yo0q5.cloudfront.net/image/pl8.jpg" },
    { title: "플리9", image: "https://d9k8tjx0yo0q5.cloudfront.net/image/pl9.jpg" },
    { title: "플리10", image: "https://d9k8tjx0yo0q5.cloudfront.net/image/pl10.jpg" },
    { title: "플리11", image: "https://d9k8tjx0yo0q5.cloudfront.net/image/pl11.jpg" },
  ];

  // 랜덤 5개 추출
  const getRandomPlaylist = () => {
    const shuffled = [...playlist].sort(() => 0.5 - Math.random());
    const randomFive = shuffled.slice(0, 5);
    setShufflePlaylist(randomFive);
  };

  useEffect(() => {
    getRandomPlaylist();
  }, []);

  return (
    <div className={styles.container}>

      {/* 추천 플레이리스트 */}
      <div className={styles.recommendPlaylist}>
        <div className={styles.sectionHeader}>
          <span className={styles.spanTitle}>Dive PICK</span>
        </div>
        <div className={styles.recommendSection}>
          {playlist.slice(0, 5).map((item, idx) => (
            <div
              key={idx}
              className={styles.recommendCard}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <p className={styles.pTitle}>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 장르별 플레이리스트 */}
      <div className={styles.genrePlaylist}>
        <div className={styles.sectionHeader}>
          <span className={styles.spanTitle}>HOT<span style={{color: 'white'}}>🔥</span> 플리</span>
        </div>
        <div className={styles.genreSection}>
          {playlist.slice(0, 5).map((item, idx) => (
            <div
              key={idx}
              className={styles.genreCard}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <p className={styles.pTitle}>{item.title}</p>
            </div>
          ))}
        </div>
      </div>


      {/* 랜덤 플레이리스트 */}
      <div className={styles.randomPlaylist}>
        <div className={styles.sectionHeader}>
          <span className={styles.spanTitle}>이런 플리는 어떨까요?</span>
          <span onClick={getRandomPlaylist} className={styles.rotateBtn}>
            {rotateGif()}
          </span>
        </div>
        <div className={styles.randomSection}>
          {shufflePlaylist.map((item, idx) => (
            <div
              key={idx}
              className={styles.randomCard}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <p className={styles.pTitle}>{item.title}</p>
            </div>
          ))}
        </div>
      </div>




    </div>
  );
};

export { PlaylistPage };
