import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';


import jaxios from '../../util/JwtUtil';

import storageStyle from "../../css/storage/storage.module.css";
import pendingStyle from "../../css/storage/pendingMp3.module.css";
import musicStyle from "../../css/storage/likedMusic.module.css";

const PendingMp3 = () => {
    const loginUser = useSelector(state => state.user);
    const navigate = useNavigate();

    const [musicList, setMusicList] = useState([]);
    const [selectedMusic, setSelectedMusic] = useState([]);
    const totalPrice = selectedMusic.length * 770;

    useEffect(() => {
        const fetchCartList = async () => {
            if (!loginUser) {
                alert('로그인 후 이용 가능한 서비스입니다');
                navigate('/login');
            } else {
                try {
                    const response = await jaxios.get('/api/cart/getCartList', { params: { memberId: loginUser.memberId } });
                    setMusicList([...response.data.cartList]);
                    console.log('장바구니', response.data.cartList);
                } catch (error) {
                    console.error('장바구니 목록 가져오기 오류', error);
                }
            }
        };
    
        fetchCartList();
    }, [loginUser, navigate]);


    /* 전체선택 체크박스 토글 */
    const toggleSelectAll = (checked) => {
        if (checked) {
            setSelectedMusic(musicList.map((music) => music.musicId));
        } else {
            setSelectedMusic([]);
        }
    };

    /* 개별 곡 체크박스 토글 */
    const toggleSelectMusic = (id) => {
        setSelectedMusic((prev) =>
            prev.includes(id) ? prev.filter((musicId) => musicId !== id) : [...prev, id]
        );
    };

    const isAllSelected =
        musicList.length > 0 && selectedMusic.length === musicList.length;

    return (
        <div className={pendingStyle.mp3Container}>
            <h2 className={musicStyle.sectionTitle}>장바구니</h2>
            {
                (musicList.length) !== 0 ? (
                    <>
                        <div className={musicStyle.topBar}>
                            <label className={musicStyle.checkAllLabel}>
                            <input
                                type="checkbox"
                                checked={isAllSelected}
                                onChange={ (e) => toggleSelectAll(e.target.checked) }/>
                                전체선택
                            </label>
                        </div>
          
                        <div className={musicStyle.songList}>
                        {
                            musicList.map((music) => (
                                <div key={music.musicId} className={musicStyle.songRow}>
                                    {/* 개별 체크박스 */}
                                    <input
                                        type="checkbox"
                                        className={musicStyle.rowCheckbox}
                                        checked={selectedMusic.includes(music.musicId)}
                                        onChange={ () => toggleSelectMusic(music.musicId) }
                                    />

                                    {/* 앨범 커버 */}
                                    <div className={musicStyle.coverWrapper}>
                                        <img
                                            src={music.image}
                                            alt={music.title}
                                            className={musicStyle.coverImage}
                                        />
                                    </div>

                                    {/* 제목 */}
                                    <div className={musicStyle.title}>
                                        <Link to={`/music/${music.musicId}`} className={musicStyle.titleLink}>
                                        {music.title}
                                        </Link>
                                    </div>

                                    {/* 가수 */}
                                    <div className={musicStyle.artist}>{music.artist}</div>

                                    {/* 가격 */}
                                    <div className={musicStyle.genre}>770원</div>

                                    {/* 장바구니 삭제 */}
                                    <button
                                        className={musicStyle.heartBtn}
                                        onClick={() => {}}
                                    >
                                        X
                                    </button>
                                </div>
                            ))
                        }
                        </div>
                    </>
                ) : (
                    <div className={storageStyle.emptyMessage}>
                        <h2>구매할 MP3</h2>
                        <p>구매하려고 담아둔 MP3가 없습니다.</p>
                    </div>
                )
            }
            <div className={pendingStyle.payment}>
                <div className={pendingStyle.totalPrice}>총 결제금액 :
                    <span className={pendingStyle.totalAmount}> {totalPrice}원</span>
                </div>
                <button
                    className={pendingStyle.paymentButton}
                    disabled={selectedMusic.length === 0}>
                    결제하기
                </button>
            </div>
        </div>
    )
}

export default PendingMp3;