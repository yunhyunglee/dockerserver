import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import axios from "axios";
import jaxios from "../../util/JwtUtil";
import Pagination from "../Pagination";

import styles from "../../css/chartMore.module.css";

const Top100 = () => {
  const loginUser = useSelector(state => state.user);
  const navigate = useNavigate();

  // 체크된 곡들을 저장할 상태
  const [selectedItems, setSelectedItems] = useState([]);
  const [monthlyCharts,setMonthlyCharts]=useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = monthlyCharts.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(
    ()=>{
      axios.get('/api/music/getMusicChart')
        .then((result)=>{
        console.log(result.data);
        setMonthlyCharts(result.data.Top100Month);
      }).catch((err)=>{ console.error(err);})
    },[]
  );

  // 체크박스 변경 처리
  const handleCheckboxChange = (musicId, checked) => {
    if (checked) {
      setSelectedItems((prev) => [...prev, musicId]);
    } else {
      setSelectedItems((prev) => prev.filter((id) => id !== musicId));
    }
  };

  const handleSelectedListen = () => {
    alert(
      "선택된 곡 듣기: " + selectedItems.map((item) => item.title).join(", ")
    );
  };

  const handleSelectedAdd = () => {
    alert(
      "선택된 곡 재생목록에 추가: " +
        selectedItems.map((item) => item.title).join(", ")
    );
  };

  // 선택한 곡들 장바구니
  const handleSelectedBuy = async () => {
    if (!loginUser?.memberId) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/login');
      return;
    }
    
    try {
      await jaxios.post('/api/cart/insertCart', {
        memberId: loginUser.memberId,
        musicIdList: selectedItems,
      });
      navigate('/storage/myMP3/pending');
    } catch (err) {
      console.error('장바구니 담기 실패', err);
    }
  };

  // 개별 곡 장바구니
  const handleBuy = async (musicId) => {
    if (!loginUser?.memberId) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/login');
      return;
    }
    
    try {
      await jaxios.post('/api/cart/insertCart', {
        memberId: loginUser.memberId,
        musicIdList: [musicId],
      });
      navigate('/storage/myMP3/pending');
    } catch (err) {
      console.error('장바구니 담기 실패', err);
    }
  };

  return (
    <div className={styles.container}>
      {/* 상단 영역 */}
      <div className={styles.header}>
        <h1 className={styles.title}>오늘 Top 100</h1>
        <div className={styles.buttonGroup}>
          {selectedItems.length === 0 ? (
            // 선택된 곡이 없으면 기존 버튼들
            <>
              <button className={styles.actionBtn}>전체듣기</button>
              <button className={styles.actionBtn}>플리 추가</button>
            </>
          ) : (
            // 하나라도 체크되면 보이는 버튼들
            <>
              <button className={styles.actionBtn} onClick={handleSelectedListen}>
                선택 듣기
              </button>
              <button className={styles.actionBtn} onClick={handleSelectedAdd}>
                선택 플리에 추가
              </button>
              <button className={styles.actionBtn} onClick={handleSelectedBuy}>
                선택 구매
              </button>
            </>
          )}
        </div>
      </div>
      {/* 테이블 영역 */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th></th>
            <th className={styles.rankColumn}>순위</th>
            <th>곡</th>
            <th>아티스트</th>
            <th>듣기</th>
            <th>재생목록</th>
            <th>MP3</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((music, index) => {
            const isChecked = selectedItems.includes(music.music.musicId);
            return (
              <tr key={music.music.musicId}>
                <td>
                    <label className={styles.customCheckbox}>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={(e) =>
                            handleCheckboxChange(music.music.musicId, e.target.checked)
                          }
                        />
                        <span className={styles.checkmark}></span>
                    </label>
                </td>
                <td className={styles.rankColumn}>{index+1}</td>
                <td onClick={()=>{navigate(`/music/${music.music.musicId}`)}} style={{cursor: "pointer"}}>{music.music.title}</td>
                <td onClick={()=>{navigate(`/artist/${music.music.artistId}`)}} style={{cursor: "pointer"}}>{music.music.artistName}</td>
                <td>
                  <button
                    className={styles.optionBtn}
                    onClick={() => alert(`듣기: ${music.music.title}`)}
                  >
                    듣기
                  </button>
                </td>
                <td>
                  <button
                    className={styles.optionBtn}
                    onClick={() => alert(`재생목록에 추가: ${music.music.title}`)}
                  >
                    추가
                  </button>
                </td>
                <td>
                  <button
                    className={styles.optionBtn}
                    onClick={() => handleBuy(music.music.musicId)}
                  >
                    구매
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        totalCount={monthlyCharts.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Top100;