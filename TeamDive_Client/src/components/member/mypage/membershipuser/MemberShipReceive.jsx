import React ,{useState, useEffect}from 'react';
import axios from 'axios';
import jaxios from '../../../../util/JwtUtil';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import mypageMemberShipStyle from '../../../../css/mypage/mypageMemberShip.module.css';
import membershipStyle from '../../../../css/membership/memberShip.module.css';


const MemberShipReceive = () => {

    const loginUser = useSelector(state=>state.user);

    const [membershipGiftList, setMembershipGiftList] = useState([]);
    const {giftId} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        jaxios.get('/api/member/getMembershipGiftList', {params:{giftTo:loginUser.memberId}})
        .then((result)=>{
            if(result.data.msg === 'yes'){
                setMembershipGiftList(result.data.membershipGiftList);
            }
        })
        .catch((err)=>{
            console.error(err);
        })
    });

    //요기가 엑티베이트 하려고하는 곳임~
    function onActivate(giftId){
        jaxios.post('/api/member/membershipActivate', null, {params:{giftId}})
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
                    (membershipGiftList.length > 0) ? (
                        membershipGiftList.map((membershipGift, idx) => {
                            return (
                                <div className={membershipStyle.item} key={idx}>
                                    <div className={membershipStyle.title}>
                                        {membershipGift.giftName}
                                    </div>
                                    <div className={membershipStyle.content}>
                                        {membershipGift.giftDate.substring(0,10)}
                                    </div>
                                    <div className={membershipStyle.subscribe}>
                                        <button onClick={()=>{
                                            onActivate(membershipGift.giftId);
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

export default MemberShipReceive
