import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import MembershipMenu from './MembershipMenu';

import membershipStyle from '../../css/membership.module.css';

const Membership = () => {
    const [membershipList, setMembershipList] = useState();
    const navigate = useNavigate();

    /* 멤버십 정보 불러오기 */
    useEffect(
        () => {
            axios.get('/api/membership/getMembership')
            .then((result) => {
                setMembershipList([result.data.membershipList]);
            }).catch((err) => { consoler.error('멤버십 불러오기 실패', err); })
        }, []
    )

    return (
        <div className={membershipStyle.membershipPage}>
            <MembershipMenu/>
            <div className={membershipStyle.container}>
                {
                    (membershipList) ? (
                        <div className={membershipStyle.item}>
                            <div className={membershipStyle.title}>모바일 무제한 듣기</div>
                            <div className={membershipStyle.content}>첫 구독 1개월 50% 할인</div>
                            <div className={membershipStyle.subscribe}>
                                <div className={membershipStyle.priceBox}>
                                    <span className={membershipStyle.discount}>월 3,500원</span>
                                    <span className={membershipStyle.original}>월 7,000원</span>
                                </div>
                                <button onClick={() => navigate('/subscribe')}>구독하기</button>
                            </div>
                        </div>
                    ) : (
                        <div className={membershipStyle.item}>
                            <span>Loading...</span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export { Membership };
