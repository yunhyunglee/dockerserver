import React from 'react';
import { useSelector } from 'react-redux';
import jaxios from '../../util/JwtUtil';

import giftStyle from '../../css/membership/gift.module.css';

const GiftMusic = ( cartList, giftToId, setGiftToId, payCount, membershipCount, onProceedToPayment ) => {
    const loginUser = useSelector(state => state.user);

    async function checkValid(){
        if(!giftToId){
            alert('받는 사람의 ID를 입력해주세요');
        }else if(giftToId === loginUser.memberId){
            alert('자기 자신에게 선물할 수 없습니다');
        }else{
            try{
                let response = await jaxios.get('/api/member/getMember', { params: {giftToId} })
                if(response.data.message === 'yes'){
                    response = await jaxios.get('/api/mp3/checkPurchasedMusic', cartList, {
                        params: {giftToId}
                    })
                    if(!response.data.purchasedMusicList){
                        setGiftToId(giftToId);
                        onProceedToPayment();
                    }
                }else{
                    alert('받는 사람의 ID 가 존재하지 않습니다');
                }
            }catch(error){ console.error('선물하기 오류', error); }
        }
    }

    return (
        <div className={giftStyle.giftContainer}>
            <h1>곡 선물하기</h1>
            <h2>받는 사람</h2>
            <div className={giftStyle.field}>
                <input
                    type='text'
                    placeholder='받는 사람의 ID 를 입력해주세요'
                    value={giftToId}
                    onChange={(e) => { setGiftToId(e.target.value) }}
                />
            </div>

            <h2>보내는 사람</h2>
            <div className={giftStyle.field}>
                <input type='text' value={loginUser.nickname} readOnly/>
            </div>
            {
                cartList.map((music, idx) => {
                    <div className={giftStyle.productInfo}>
                        <img className={giftStyle.productImage} alt="곡 이미지" src={music.image}/>
                        <div className={giftStyle.productDetails}>
                            <div className={giftStyle.productName}>{music.title}</div>
                            <div className={giftStyle.price}>{payCount * 770}원 (VAT 포함)</div>
                        </div>
                    </div> 
                })
            }

            <button
                className={giftStyle.paymentButton}
                onClick={() => { checkValid() }}>
                {payCount * 770}원 결제하기
            </button>
        </div>
    )
}

export default GiftMusic;
