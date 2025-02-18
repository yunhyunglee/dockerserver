import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "../../css/storage.module.css";
import { LikedMusic } from "./LikedMusic";
import { LikedArtist } from "./LikedArtist";
import {LikedAlbum} from "./LikedAlbum";
import { MyMP3 } from "./MyMP3";
import { ThemeContext } from "@emotion/react";

const Storage = () => {

  const zzz = useContext(ThemeContext);

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
  const likedArtist = [];
  const likedAlbum = [];
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
          <LikedMusic likedMusic={likedMusic}/>
        )}

        {activeTab === "아티스트" && (
          <LikedArtist likedArtist={likedArtist}/>
        )}

        {activeTab === "앨범" && (
          <LikedAlbum likedAlbum={likedAlbum}/>
        )}

        {activeTab === "플레이리스트" && (
          <div className={styles.emptyMessage}>
            <h2>플레이리스트 보관함</h2>
            <p>내가 좋아하는 플레이리스트를 저장해보세요</p>
           
          </div>
        )}

        {activeTab === "My MP3" && (
          <MyMP3 setActiveMp3Tab={setActiveMp3Tab} activeMp3Tab={activeMp3Tab} purchasedMp3={purchasedMp3} pendingMp3={pendingMp3}/>
        )}
      </div>
    </div>
  );
};

export { Storage };
