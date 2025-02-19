import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import jaxios from '../../util/JwtUtil';

import storageStyle from "../../css/storage/storage.module.css";
import pendingStyle from "../../css/storage/pendingMp3.module.css";

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

    const toggleSelectMusic = (id) => {
        setSelectedMusic((prev) =>
            prev.includes(id) ? prev.filter((musicId) => musicId !== id) : [...prev, id]
        );
    };

    const removeSelectedMusic = () => {
        setSelectedMusic([]);
    };

    return (
        <div className={pendingStyle.container}>
            {
                (musicList.length) !== 0 ? (
                    <>
                        <div className={pendingStyle.header}>
                            <button
                                onClick={removeSelectedMusic}
                                className={pendingStyle.deleteButton}>
                                선택 삭제 ({selectedMusic.length}곡)
                            </button>
                        </div>
          
                        <div className={pendingStyle.musicItemHeader}>
                            <input
                                type="checkbox"
                                //checked={}
                                onChange={ () => {} }
                            />
                            <div className={pendingStyle.info}>
                                <div className={pendingStyle.musicInfo}>
                                    <p className={pendingStyle.musicTitle}>노래제목</p>
                                </div>
                                <p className={pendingStyle.musicArtist}>아티스트</p>
                                <p className={pendingStyle.musicPrice}>가격</p>
                                <p className={pendingStyle.musicDelete}>삭제</p>
                            </div>
                        </div>
                        {
                            musicList.map((music) => (
                                <div key={music.musicId} className={pendingStyle.musicItem}>
                                    <input
                                        type="checkbox"
                                        checked={selectedMusic.includes(music.musicId)}
                                        onChange={ () => toggleSelectMusic(music.musicId) }
                                    />
                                    <div className={pendingStyle.info}>
                                        <div className={pendingStyle.musicInfo}>
                                            <img src={music.image} alt={music.title} className={pendingStyle.musicImage} />
                                            <p className={pendingStyle.musicTitle}>{music.title}</p>
                                            
                                        </div>
                                        <p className={pendingStyle.musicArtist}>{music.artist}</p>
                                        <p className={pendingStyle.musicPrice}>770원</p>
                                        <button className={pendingStyle.trashButton}>X</button>
                                    </div>
                                </div>
                            ))
                        }
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