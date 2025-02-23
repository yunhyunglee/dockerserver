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
    const [downloadMembership, setDownloadMembership] = useState(null);
    const [membershipCount, setMembershipCount] = useState(0);
    const [payCount, setPayCount] = useState(0);
    const totalPrice = selectedMusic.length * 770;

    /* 장바구니 정보와 멤버십 정보 가져오기 */
    useEffect(() => {
        const fetchCartList = async () => {
            if (!loginUser) {
                alert('로그인 후 이용 가능한 서비스입니다');
                navigate('/login');
            } else {
                try {
                    let response = await jaxios.get('/api/cart/getCartList', { params: { memberId: loginUser.memberId } });
                    setMusicList([...response.data.cartList]);
                    console.log('장바구니', response.data.cartList);
                    
                    response = await jaxios.get('/api/membership/getDownloadMembership', {
                        params: { memberId: loginUser.memberId } });
                    setDownloadMembership(response.data.downloadMembership);
                    console.log('다운로드 멤버십', response.data.downloadMembership);
                } catch (error) {
                    console.error('장바구니 초기 데이터 불러오기', error);
                }
            }
        };
    
        fetchCartList();
    }, [loginUser, navigate]);

    /* 유료결제 곡 수 체크 */
    useEffect(
        () => {
            if(downloadMembership && selectedMusic.length !== 0){
                if(downloadMembership.downloadCount > selectedMusic.length){
                    setPayCount(0);
                    setMembershipCount(selectedMusic.length);
                }else{
                    setPayCount(selectedMusic.length - downloadCount);
                    setMembershipCount(selectedMusic.length);
                }
            }else{
                setPayCount(0);
            }
        }, [selectedMusic]
    );

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
            <div className={pendingStyle.wrapper}>
                <div className={pendingStyle.paymentContainer}>
                    <div className={pendingStyle.section}>
                        <div className={pendingStyle.label}>선택 곡 수</div>
                        <div className={pendingStyle.value}>{selectedMusic.length}곡</div>
                    </div>
                    <div className={pendingStyle.section}>
                        <div className={pendingStyle.label}>멤버십 차감 곡 수</div>
                        <div className={pendingStyle.valueRed}>{membershipCount}곡</div>
                    </div>
                    <div className={pendingStyle.section}>
                        <div className={pendingStyle.label}>유료결제 곡 수</div>
                        <div className={pendingStyle.valueRed}>{payCount}곡</div>
                    </div>
                    <div className={pendingStyle.sectionTotal}>
                        <div className={pendingStyle.label}>총 결제금액</div>
                        <div className={pendingStyle.totalPrice}>{totalPrice}원</div>
                    </div>
                    <div className={pendingStyle.checkboxSection}>
                        <input type="checkbox" id="terms" className={pendingStyle.checkbox} />
                        <label htmlFor="terms">Dive 이용약관에 동의합니다.</label>
                        <button className={pendingStyle.termsButton}>약관보기</button>
                    </div>
                    <button
                        className={pendingStyle.paymentButton}
                        disabled={selectedMusic.length === 0}
                    >
                        결제하기
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PendingMp3;