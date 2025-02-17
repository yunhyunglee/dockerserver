import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from '../../css/storage.module.css';




const Storage = () => {


    const loginUser = useSelector(state => state.user);

    const navigate = useNavigate();

    useEffect(()=>{
        if(!loginUser.memberId) {
            navigate("/login")
        }
    },[loginUser, navigate])
    
        // 현재 어떤 탭이 선택됐는지 state로 관리
        const [activeTab, setActiveTab] = useState('노래');
      
        // 샘플: 좋아하는 노래 목록(실제로는 서버나 Redux 등에서 받아오겠죠)
        const likedMusic = [];
      
        // 탭 변경 함수
        const handleTabClick = (tabName) => {
          setActiveTab(tabName);
        };
      
        return (
          <div className={styles.storageContainer}>
            {/* 큰 제목 */}
            <h1 className={styles.pageTitle}>보관함</h1>
      
            {/* 탭 메뉴 */}
            <nav className={styles.tabMenu}>
              {['노래', '아티스트', '앨범', '플레이리스트', '구매한 MP3'].map((tab) => (
                <button
                  key={tab}
                  className={`${styles.tabButton} ${
                    activeTab === tab ? styles.active : ''
                  }`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </button>
              ))}
            </nav>
      
            {/* 실제 콘텐츠 영역 */}
            <div className={styles.contentArea}>
              {activeTab === '노래' && (
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
      
              {activeTab === '아티스트' && (
                <div className={styles.emptyMessage}>
                  <h2>아티스트 보관함</h2>
                  <p>내가 좋아하는 아티스트들을 저장해보세요</p>
                  {/* 아티스트 관련 UI */}
                </div>
              )}
      
              {activeTab === '앨범' && (
                <div className={styles.emptyMessage}>
                  <h2>앨범 보관함</h2>
                  <p>내가 좋아하는 앨범을 저장해보세요</p>
                  {/* 앨범 관련 UI */}
                </div>
              )}
      
              {activeTab === '플레이리스트' && (
                <div className={styles.emptyMessage}>
                  <h2>플레이리스트 보관함</h2>
                  <p>내가 좋아하는 해보세요</p>
                  {/* 플레이리스트 관련 UI */}
                </div>
              )}
      
    
      
              {activeTab === '구매한 MP3' && (
                <div className={styles.emptyMessage}>
                  <h2>구매한 MP3 보관함</h2>
                  <p>mp3 구매해라</p>
                  {/* 구매한 MP3 관련 UI */}
                </div>
              )}
            </div>
          </div>
        );
    
}


// 노래
// 아티스트
// 앨범
// 플리
// 구매한 노래

export { Storage }