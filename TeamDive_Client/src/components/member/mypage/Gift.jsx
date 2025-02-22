import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import jaxios from '../../../util/JwtUtil'

import mypageStyle from '../../../css/mypage/mypage.module.css';
import membershipStyle from '../../../css/membership/memberShip.module.css';
import musicStyle from "../../../css/storage/likedMusic.module.css";

const Gift = () => {
    const loginUser = useSelector(state => state.user);
    const [giftList, setGiftList] = useState([]);
    const navigate = useNavigate();

    useEffect(
        () => {
            getGiftList();
        }, []
    );

    /* 선물 받은 미사용 목록 가져오기 */
    const getGiftList = async () => {
        try{
            const response = await jaxios.get('/api/membership/getGiftList', {params: {giftTo: loginUser.memberId}});
            setGiftList(response.data.giftList);
        }catch(error){
            console.error('선물 리스트 불러오기 실패', error);
        }
    }

    /* 선물 받은 멤버십 활성화 */
    async function onActivateMembership(giftFrom, giftId, membershipCategory){
        const check = window.confirm(`${giftFrom}님의 선물을 사용하겠습니까?`);
        if(check){
            try{
                const response = await jaxios.post('/api/membership/membershipActivate', null, { params: { giftId, membershipCategory } })
                if(response.data.message === 'yes'){
                    alert('멤버십이 활성화 되었습니다');
                    getGiftList();
                }else{
                    alert('이미 활성화된 멤버십이 있습니다');
                }
            }catch(error){
                console.error('멤버십 활성화 오류', error);
            }
        }        
    }

    return (
        <div className={musicStyle.sectionContainer}>
            {
                (giftList.length > 0) ? (
                    giftList.map((gift, idx) => {
                        return (
                            <div className={musicStyle.songRow} key={idx}>
                                <div className={musicStyle.title}>
                                    {gift.giftName}
                                </div>
                                <div className={musicStyle.title}>
                                    {gift.membershipDownload}
                                </div>
                                <div className={musicStyle.titlet}>
                                    {gift.giftDate.substring(0,10)}
                                </div>
                                <div className={musicStyle.title}>
                                    {gift.giftFrom}
                                </div>
                                <div className={musicStyle.heartBtn}>
                                    <button
                                        onClick={ ()=>{ onActivateMembership(gift.giftFrom, gift.giftId, gift.membershipCategory); } }>구독</button>
                                </div>
                            </div>
                        )
                    })
                ) : (
                    <div className={membershipStyle.item}>
                        <span>선물받은 구독권이 없습니다...</span>
                    </div>
                )
            }
        </div>
    )
}

export default Gift;
