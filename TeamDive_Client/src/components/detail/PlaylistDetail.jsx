import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import jaxios from "../../util/JwtUtil";
import styles from "../../css/detail/playlistDetail.module.css";

const PlaylistDetail = () => {
  
  const { playlistId } = useParams();  
  const navigate = useNavigate();
  const loginUser = useSelector((state) => state.user);

  // 플레이리스트 정보
  const [playlist, setPlaylist] = useState(null);
  const [loading, setLoading] = useState(true);

  // 체크박스 관련: 선택된 곡들의 musicId 배열
  const [selectedItems, setSelectedItems] = useState([]);

  // 페이지 로딩 시 플레이리스트 정보 불러오기
  useEffect(() => {
    if (!playlistId) return;

    jaxios
      .get("/api/music/playlistDetail", { params: { playlistId } })
      .then((res) => {
       
        setPlaylist(res.data.playlist);
      })
      .catch((err) => {
        console.error("플레이리스트 정보 불러오기 실패:", err);
      })
      .finally(() => setLoading(false));
  }, [playlistId]);

  if (loading) {
    return <p className={styles.loading}>로딩 중...</p>;
  }

  if (!playlist) {
    return <p className={styles.errorMsg}>플레이리스트를 찾을 수 없습니다.</p>;
  }

  // 개별 체크박스
  const handleCheckboxChange = (musicId, checked) => {
    if (checked) {
      setSelectedItems((prev) => [...prev, musicId]);
    } else {
      setSelectedItems((prev) => prev.filter((id) => id !== musicId));
    }
  };


  const handleSelectAll = (checked) => {
    if (checked) {
      const allIds = playlist.musicList.map((m) => m.musicId);
      setSelectedItems(allIds);
    } else {
      setSelectedItems([]);
    }
  };

  
  const handleSelectedPlay = () => {
    alert("선택된 곡 재생: " + selectedItems.join(", "));
    
  };

 
// 플레이리스트 상세의 부분 코드

const handleSelectedBuy = async () => {
  if (!loginUser?.memberId) {
    alert("로그인이 필요한 서비스입니다.");
    navigate("/login");
    return;
  }

  if (selectedItems.length === 0) {
    alert("구매할 곡을 선택하세요.");
    return;
  }

  try {
      
    await jaxios.post("/api/cart/insertCart", {
      memberId: loginUser.memberId,
      musicIdList: selectedItems,
    });

    alert("선택된 곡들이 장바구니에 담겼습니다.");
    navigate("/storage/myMP3/pending");
  } catch (err) {
    console.error("장바구니 담기 실패:", err);
  }
};



  
  const handlePlay = (music) => {
    alert(`재생: ${music.title}`);
    
  };

 
  const handleBuy = async (music) => {
    if (!loginUser?.memberId) {
      alert("로그인이 필요한 서비스입니다.");
      navigate("/login");
      return;
    }

    try {
      await jaxios.post("/api/cart/insertCart", {
        memberId: loginUser.memberId,
        musicIdList: [music.musicId], 
      });
      navigate("/storage/myMP3/pending");
    } catch (err) {
      console.error("장바구니 담기 실패:", err);
    }
  };

 
  const allChecked =
    playlist.musicList.length > 0 &&
    selectedItems.length === playlist.musicList.length;

  return (
    <div className={styles.container}>
      {/* 플레이리스트 헤더 */}
      <div className={styles.header}>
        <img
          src={playlist.coverImage}
          alt="커버 이미지"
          className={styles.coverImage}
        />
        <div className={styles.info}>
          <h2 className={styles.title}>{playlist.title}</h2>
          <p className={styles.content}>{playlist.content}</p>
          <p className={styles.trackCount}>
            곡 : {playlist.musicList.length}곡
          </p>
        </div>
      </div>

     
      <div className={styles.actionBar}>
        <label className={styles.customCheckbox}>
          <input
            type="checkbox"
            checked={allChecked}
            onChange={(e) => handleSelectAll(e.target.checked)}
          />
          <span className={styles.checkmark}></span>
          전체선택
        </label>

        {selectedItems.length > 0 && (
          <div className={styles.selectedActions}>
            <button onClick={handleSelectedPlay}>선택곡 재생</button>
            <button onClick={handleSelectedBuy}>선택곡 구매</button>
          </div>
        )}
      </div>

      {/* 곡 목록 */}
      <div className={styles.songList}>
        {playlist.musicList.map((music) => {
          const isChecked = selectedItems.includes(music.musicId);
          return (
            <div key={music.musicId} className={styles.songItem}>
              {/* 체크박스 */}
              <label className={styles.customCheckbox}>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) =>
                    handleCheckboxChange(music.musicId, e.target.checked)
                  }
                />
                <span className={styles.checkmark}></span>
              </label>

       
              <img src={music.image} className={styles.songImage} alt="" />
              <div className={styles.songInfo}>
                <p className={styles.songTitle}>
                  <span
                    onClick={() => navigate(`/music/${music.musicId}`)}
                    style={{ cursor: "pointer" }}
                  >
                    {music.title}
                  </span>
                </p>
                <p className={styles.songArtist}>
                  <span
                    onClick={() => navigate(`/artist/${music.artistId}`)}
                    style={{ cursor: "pointer" }}
                  >
                    {music.artistName}
                  </span>
                </p>
              </div>

              <div className={styles.songActions}>
                <button onClick={() => handlePlay(music)}>재생</button>
                <button onClick={() => handleBuy(music)}>구매</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlaylistDetail;
