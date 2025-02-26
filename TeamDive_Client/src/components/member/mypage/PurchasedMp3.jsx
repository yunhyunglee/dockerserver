import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import jaxios from "../../../util/JwtUtil";

import styles from "../../../css/storage/likedMusic.module.css";
import pendingStyle from "../../../css/storage/pendingMp3.module.css";

const PurchasedMp3 = () => {
    const loginUser = useSelector(state => state.user);

    const [purchasedMusicList, setPurchasedMusicList] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);

    /* 구매한 곡 불러오기 */
    useEffect(
        () => {
            const fetchPurchasedMusicList = async () => {
                if (!loginUser) {
                    alert('로그인 후 이용 가능한 서비스입니다');
                    navigate('/login');
                } else {
                    try{
                        const response = await jaxios.get('/api/mp3/getPurchasedMusicList', {
                            params: { memberId: loginUser.memberId }
                        });
                        if(response.data.message === 'yes'){
                            setPurchasedMusicList(response.data.purchasedMusicList);
                            console.log('구매한 곡들', response.data.purchasedMusicList);
                        }else{
                            setPurchasedMusicList([]);
                        }
                    }catch(error){
                        console.error('구매한 곡 불러오기 실패', error);
                    }
                }
            }
            fetchPurchasedMusicList();
    }, [])
    
    // "전체선택" 체크박스 토글
    const toggleSelectAll = (checked) => {
        if (checked) {
            setSelectedIds(purchasedMusicList.map((music) => music.musicId));
        } else {
            setSelectedIds([]);
        }
    };

    const isAllSelected =
    purchasedMusicList.length > 0 && selectedIds.length === purchasedMusicList.length;

    // 개별 곡 체크박스 토글
    const toggleSelect = (id) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    };
    
    // "전체 재생" 버튼 클릭
    const handleSelectedPlay = () => {
        alert(`전체 재생: 선택된 곡 ${selectedIds.length}개`);
    };

    const isSomeSelected = selectedIds.length > 0;

    return (
        <div className={pendingStyle.mp3Container}>
            <h2 className={styles.sectionTitle}>구매한 음악</h2>
            {
                (purchasedMusicList && purchasedMusicList.length !== 0) ? (
                    <>
                        {/* 상단: 전체선택, 선택재생 */}
                        <div className={styles.topBar}>
                            <label className={styles.checkAllLabel}>
                                <input
                                type="checkbox"
                                checked={isAllSelected}
                                onChange={(e) => toggleSelectAll(e.target.checked)}
                                />
                                전체선택
                            </label>

                            <button
                                className={styles.topBtn}
                                onClick={handleSelectedPlay}
                                disabled={!isSomeSelected}
                            >
                                선택재생 {selectedIds.length}곡
                            </button>
                        </div>

                        <div className={styles.songList}>
                            {purchasedMusicList.map((music) => (
                                <div className={styles.songRow} key={music.musicId}>
                                    {/* 개별 체크박스 */}
                                    <input
                                        type="checkbox"
                                        className={styles.rowCheckbox}
                                        checked={selectedIds.includes(music.musicId)}
                                        onChange={() => toggleSelect(music.musicId)}
                                    />

                                    {/* 앨범 커버 */}
                                    <div className={styles.coverWrapper}>
                                        <img
                                        src={music.image}
                                        alt={music.title}
                                        className={styles.coverImage}
                                        />
                                    </div>

                                    {/* 제목 */}
                                    <div className={styles.title}>
                                        <Link to={`/music/${music.musicId}`} className={styles.titleLink}>
                                        {music.title}
                                        </Link>
                                    </div>

                                    {/* 가수 */}
                                    <div className={styles.artist}>{music.artist}</div>

                                    {/* 장르 */}
                                    <div className={styles.genre}>{music.genre}</div>

                                    {/* MP3 다운로드 버튼 */}
                                    <button
                                        className={styles.buyBtn}
                                        onClick={() => {}}
                                    >
                                        다운로드
                                    </button>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className={styles.emptyMessage}>
                        <h2>구매한 MP3</h2>
                        <p>구매한 MP3가 없습니다.</p>
                    </div>
                )}
        </div>
    );
}

export default PurchasedMp3;