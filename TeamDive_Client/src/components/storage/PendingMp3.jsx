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

    const [cartList, setCartList] = useState([]);
    const [selectedCart, setSelectedCart] = useState([]);
    const [downloadMembership, setDownloadMembership] = useState(null);
    const [membershipCount, setMembershipCount] = useState(0);
    const [payCount, setPayCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    /* 장바구니 정보와 멤버십 정보 가져오기 */
    useEffect(() => {
        const fetchCartList = async () => {
            if (!loginUser) {
                alert('로그인 후 이용 가능한 서비스입니다');
                navigate('/login');
            } else {
                try {
                    let response = await jaxios.get('/api/cart/getCartList', { params: { memberId: loginUser.memberId } });
                    setCartList([...response.data.cartList]);
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
    useEffect(() => {
        const fetchData = async () => {
            await fetchPayCount();  // 먼저 실행
            fetchTotalCount();      // 완료 후 실행
        };
    
        const fetchPayCount = async () => {
            if (downloadMembership && selectedCart.length !== 0) {
                if (downloadMembership.downloadCount > selectedCart.length) {
                    setPayCount(0);
                    setMembershipCount(selectedCart.length);
                } else {
                    setPayCount(selectedCart.length - downloadMembership.downloadCount);
                    setMembershipCount(selectedCart.length);
                }
            } else {
                setPayCount(selectedCart.length);
                setMembershipCount(0);
            }
        };
    
        const fetchTotalCount = async () => {
            setTotalPrice(prev => payCount * 770);  // payCount가 최신 상태일 때 계산
        };
    
        fetchData();
    }, [selectedCart, payCount]);

    /* 전체선택 체크박스 토글 */
    const toggleSelectAll = (checked) => {
        if (checked) {
            setSelectedCart(cartList.map((cart) => cart.cartId));
        } else {
            setSelectedCart([]);
        }
    };

    const isAllSelected =
        cartList.length > 0 && selectedCart.length === cartList.length;

    /* 개별 곡 체크박스 토글 */
    const toggleSelectCart = (id) => {
        setSelectedCart((prev) =>
            prev.includes(id) ? prev.filter((cartId) => cartId !== id) : [...prev, id]
        );
    };

    /* 장바구니 개별 삭제 */
    async function deleteByCartId(cartId){
        try{
            let response = await jaxios.delete('/api/cart/deleteByCartId', {
                params: { cartId }
            });
            if(response.data.message === 'yes'){
                response = await jaxios.get('/api/cart/getCartList', { params: { memberId: loginUser.memberId } });
                    setCartList([...response.data.cartList]);
                    toggleSelectMusic(cartId);
            }
        }catch(error){
            console.error('장바구니 삭제 오류', error);
        }
    }

    /* 장바구니 선택 삭제 */
    async function deleteByCartIdList(){
        try{
            let response = await jaxios.delete('/api/cart/deleteByCartIdList', {
                data: selectedCart
            });
            if(response.data.message === 'yes'){
                response = await jaxios.get('/api/cart/getCartList', { params: { memberId: loginUser.memberId } });
                    setCartList([...response.data.cartList]);
                    setSelectedCart([]);
            }
        }catch(error){
            console.error('장바구니 삭제 오류', error);
        }
    }

    return (
        <div className={pendingStyle.mp3Container}>
            <h2 className={musicStyle.sectionTitle}>장바구니</h2>
            {
                (cartList.length) !== 0 ? (
                    <>
                        <div className={musicStyle.topBar}>
                            <label className={musicStyle.checkAllLabel}>
                            <input
                                type="checkbox"
                                checked={isAllSelected}
                                onChange={ (e) => toggleSelectAll(e.target.checked) }/>
                                전체선택
                            </label>

                            <button
                                className={musicStyle.topBtn}
                                onClick={ async () => await deleteByCartIdList() }
                                disabled={selectedCart.length === 0}
                                >
                                선택 삭제 {selectedCart.length}곡
                            </button>
                        </div>
          
                        <div className={musicStyle.songList}>
                        {
                            cartList.map((cart) => (
                                <div key={cart.cartId} className={musicStyle.songRow}>
                                    {/* 개별 체크박스 */}
                                    <input
                                        type="checkbox"
                                        className={musicStyle.rowCheckbox}
                                        checked={selectedCart.includes(cart.cartId)}
                                        onChange={ () => toggleSelectCart(cart.cartId) }
                                    />

                                    {/* 앨범 커버 */}
                                    <div className={musicStyle.coverWrapper}>
                                        <img
                                            src={cart.image}
                                            alt={cart.title}
                                            className={musicStyle.coverImage}
                                        />
                                    </div>

                                    {/* 제목 */}
                                    <div className={musicStyle.title}>
                                        <Link to={`/music/${cart.musicId}`} className={musicStyle.titleLink}>
                                        {cart.title}
                                        </Link>
                                    </div>

                                    {/* 가수 */}
                                    <div className={musicStyle.artist}>{cart.artist}</div>

                                    {/* 가격 */}
                                    <div className={musicStyle.genre}>770원</div>

                                    {/* 장바구니 삭제 */}
                                    <button
                                        className={musicStyle.heartBtn}
                                        onClick={ async () => await deleteByCartId(cart.cartId) }
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
                        <div className={pendingStyle.value}>{selectedCart.length}곡</div>
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
                    {/* <div className={pendingStyle.checkboxSection}>
                        <input type="checkbox" id="terms" className={pendingStyle.checkbox} />
                        <label htmlFor="terms">Dive 이용약관에 동의합니다.</label>
                        <button className={pendingStyle.termsButton}>약관보기</button>
                    </div> */}
                    <button
                        className={pendingStyle.paymentButton}
                        disabled={selectedCart.length === 0}
                    >
                        결제하기
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PendingMp3;