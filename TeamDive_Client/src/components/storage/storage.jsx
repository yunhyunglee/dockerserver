import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "../../css/storage.module.css";

const Storage = () => {
  const loginUser = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loginUser.memberId) {
      navigate("/login");
    }
  }, [loginUser, navigate]);

  
  const [activeTab, setActiveTab] = useState("노래");
 

  const [activeMp3Tab, setActiveMp3Tab] = useState("구매한 MP3");

  
  const likedMusic = [];
  const likeArtist = [];
  const likeAlbum = [];
  const purchasedMp3 = []; // 구매 후 
  const pendingMp3 = [];   // 구매 전

  // 상위메뉴뉴
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className={styles.storageContainer}>
    
      <h1 className={styles.pageTitle}>보관함</h1>

  
      <nav className={styles.tabMenu}>
        {["노래", "아티스트", "앨범", "플레이리스트", "My MP3"].map((tab) => (
          <button
            key={tab}
            className={`${styles.tabButton} ${activeTab === tab ? styles.active : ""}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      <div className={styles.contentArea}>
        {activeTab === "노래" && (
          <div>
            {likedMusic.length === 0 ? (
              <div className={styles.emptyMessage}>
                <h2>좋아하는 노래</h2>
                <p>내가 좋아하는 노래들을 모아서 감상해보세요</p>
              </div>
            ) : (
              <ul>
                {likedMusic.map((music, idx) => (
                  <li key={idx}>{music}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        {activeTab === "아티스트" && (
          <div>
            {likeArtist.length === 0 ? (
              <div className={styles.emptyMessage}>
                <h2>아티스트 보관함</h2>
                <p>내가 좋아하는 아티스트들을 저장해보세요</p>
              </div>
            ) : (
              <ul>
                {likeArtist.map((artist, idx) => (
                  <li key={idx}>{artist}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        {activeTab === "앨범" && (
          <div>
            {likeAlbum.length === 0 ? (
              <div className={styles.emptyMessage}>
                <h2>앨범 보관함</h2>
                <p>내가 좋아하는 앨범을 저장해보세요</p>
              </div>
            ) : (
              <ul>
                {likeAlbum.map((album, idx) => (
                  <li key={idx}>{album}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        {activeTab === "플레이리스트" && (
          <div className={styles.emptyMessage}>
            <h2>플레이리스트 보관함</h2>
            <p>내가 좋아하는 플레이리스트를 저장해보세요</p>
           
          </div>
        )}

        {activeTab === "My MP3" && (
          <div>
           
            <nav className={styles.subTabMenu}>
              {["구매한 MP3", "구매할 MP3"].map((subTab) => (
                <button
                  key={subTab}
                  className={`${styles.tabButton} ${activeMp3Tab === subTab ? styles.active : ""}`}
                  onClick={() => setActiveMp3Tab(subTab)}
                >
                  {subTab}
                </button>
              ))}
            </nav>

            
            <div className={styles.mp3ContentArea}>
              {activeMp3Tab === "구매한 MP3" ? (
                purchasedMp3.length === 0 ? (
                  <div className={styles.emptyMessage}>
                    <h2>구매한 MP3</h2>
                    <p>구매한 MP3가 없습니다.</p>
                  </div>
                ) : (
                  <ul>
                    {purchasedMp3.map((mp3, idx) => (
                      <li key={idx}>{mp3}</li>
                    ))}
                  </ul>
                )
              ) : (
                pendingMp3.length === 0 ? (
                  <div className={styles.emptyMessage}>
                    <h2>구매할 MP3</h2>
                    <p>구매하려고 담아둔 MP3가 없습니다.</p>
                  </div>
                ) : (
                  <ul>
                    {pendingMp3.map((mp3, idx) => (
                      <li key={idx}>{mp3}</li>
                    ))}
                  </ul>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { Storage };
