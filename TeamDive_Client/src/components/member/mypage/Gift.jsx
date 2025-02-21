import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import jaxios from '../../../util/JwtUtil'

import mypageMemberShipStyle from '../../../css/mypage/mypageMemberShip.module.css';
import membershipStyle from '../../../css/membership/memberShip.module.css';

const Gift = () => {
    const loginUser = useSelector(state => state.user);
    const [giftList, setGiftList] = useState([]);
    const navigate = useNavigate();

    useEffect(
        () => {
            jaxios.get('/api/membership/getGiftList', {params: {giftTo: loginUser.memberId}})
            .then((result) => {
                setGiftList(result.data.giftList);
            })
            .catch((err) => {
                console.error('선물 리스트 불러오기 실패', err);
            })
        }, []
    );

    //요기가 엑티베이트 하려고하는 곳임~
    function onActivate(giftId){
        jaxios.post('/api/membership/membershipActivate', null, {params:{giftId}})
        .then((result)=>{
            if(result.data.msg === 'yes'){
                alert('멤버십이 활성화 되었습니다.');
                navigate('/');
            }
        })
        .catch((err)=>{
            console.error(err);
        })
    }

    return (
        <section className={mypageMemberShipStyle.page}>
            <div className={membershipStyle.container}>
                {
                    (giftList.length > 0) ? (
                        giftList.map((gift, idx) => {
                            return (
                                <div className={membershipStyle.item} key={idx}>
                                    <div className={membershipStyle.title}>
                                        {gift.giftName}
                                    </div>
                                    <div className={membershipStyle.content}>
                                        {gift.giftDate.substring(0,10)}
                                    </div>
                                    <div className={membershipStyle.subscribe}>
                                        <button onClick={()=>{
                                            onActivate(gift.giftId);
                                        }}>구독 시작</button>
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
        </section>
    )
}

export default Gift;
