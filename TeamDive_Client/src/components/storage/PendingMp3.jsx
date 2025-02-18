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

    useEffect( () => {
        if(!loginUser){
            alert('로그인 후 이용 가능한 서비스입니다');
            navigate('/login');
        }else{
            //const response = jaxios.get('/api/cart/getCartList', {params: {memberId: loginUser.memberId}})
        }
    }, []);

    const toggleSelectMusic = (id) => {
        setSelectedMusic((prev) =>
            prev.includes(id) ? prev.filter((musicId) => musicId !== id) : [...prev, id]
        );
    };

    const removeSelectedMusic = () => {
        setSelectedMusic([]);
    };

    const totalPrice = selectedMusic.reduce((sum, id) => {
        const music = musicList.find((m) => m.id === id);
        return sum + (music ? music.price : 0);
    }, 0);

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
          
                        <div>
                            {
                                musicList.map((music) => (
                                    <div key={music.id} className={pendingStyle.musicItem}>
                                        <input
                                            type="checkbox"
                                            checked={selectedMusic.includes(music.id)}
                                            onChange={ () => toggleSelectMusic(music.id) }
                                        />
                                        <div className={pendingStyle.musicInfo}>
                                            <p className={pendingStyle.musicTitle}>{music.title}</p>
                                            <p className={pendingStyle.musicArtist}>{music.artist}</p>
                                        </div>
                                            <p className={pendingStyle.musicPrice}>{music.price}원</p>
                                            <button className={pendingStyle.trashButton}>🗑</button>
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
                <p className={pendingStyle.totalPrice}>총 결제금액:
                    <span className={pendingStyle.totalAmount}>{totalPrice}원</span>
                </p>
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