import React, { useState } from "react";
import styles from "../../css/storage/myPlaylist.module.css";





const MyPlaylist = () => {
  
  const [showModal, setShowModal] = useState(false);

  
  const [playlistTitle, setPlaylistTitle] = useState("");
  const [playlistDesc, setPlaylistDesc] = useState("");
  const [isPublic, setIsPublic] = useState(false);

 
  const [playlists, setPlaylists] = useState([
    {
      id: 1,
      coverImage: "/public/image/album/album1.jpg", 
      title: "기본 리스트",
      trackCount: 0,
    },
  ]);

  
  const handleNewPlaylistClick = () => {
    setShowModal(true);
  };

  // 모달 바깥/취소
  const handleCancel = () => {
   
    setPlaylistTitle("");
    setPlaylistDesc("");
    setIsPublic(false);
    setShowModal(false);
  };

  
  const handleAdd = () => {
    // 여기서 백엔드 API 호출 or Redux action
    console.log("새 플레이리스트 생성:", {
      title: playlistTitle,
      desc: playlistDesc,
      isPublic,
    });

  
    const newPlaylist = {
      id: Date.now(),
      coverImage: "", 
      title: playlistTitle,
      trackCount: 0,
    };
    setPlaylists([...playlists, newPlaylist]);

  
    setPlaylistTitle("");
    setPlaylistDesc("");
    setIsPublic(false);
    setShowModal(false);
  };

  return (
    <div className={styles.playlistContainer}>
      <h2 className={styles.sectionTitle}>플레이리스트</h2>

    
      <div className={styles.playlistGrid}>
     
        <div className={styles.playlistTile} onClick={handleNewPlaylistClick}>
          <div className={styles.addIcon}>+</div>
          <p>플레이리스트 추가</p>
        </div>

       
        {playlists.map((pl) => (
          <div key={pl.id} className={styles.playlistTile}>
            <div
              className={styles.coverPlaceholder}
              style={{
                backgroundImage: `url(${pl.coverImage})`,
              }}
            >
              
            </div>
            <p className={styles.tileTitle}>{pl.title}</p>
            <p className={styles.tileTrackCount}>{pl.trackCount}곡</p>
          </div>
        ))}
      </div>

      {/* 모달 */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={handleCancel}>
          <div
            className={styles.modalContainer}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className={styles.modalTitle}>새 플레이리스트</h2>

            <div className={styles.modalContent}>
              
              <div className={styles.coverPreview}>
                
              </div>

              <div className={styles.formArea}>
                <input
                  type="text"
                  className={styles.titleInput}
                  maxLength={20}
                  placeholder="플레이리스트 제목 (최대 20자)"
                  value={playlistTitle}
                  onChange={(e) => setPlaylistTitle(e.target.value)}
                />

                <textarea
                  className={styles.descInput}
                  maxLength={40}
                  placeholder="플레이리스트 설명을 입력해주세요. (최대 40자)"
                  value={playlistDesc}
                  onChange={(e) => setPlaylistDesc(e.target.value)}
                />

                <div className={styles.publicCheck}>
                  <input
                    type="checkbox"
                    checked={isPublic}
                    onChange={() => setIsPublic(!isPublic)}
                  />
                  <label>공개 설정</label>
                </div>
                <p className={styles.publicDesc}>
                  플레이리스트를 공유하려면 공개로 설정해 주세요.<br/>
                  공개 설정된 플레이리스트는 검색 결과에도 노출됩니다.
                </p>
              </div>
            </div>

            <div className={styles.modalButtons}>
              <button className={styles.cancelBtn} onClick={handleCancel}>
                취소
              </button>
              <button className={styles.addBtn} onClick={handleAdd}>
                추가
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPlaylist;
