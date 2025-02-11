import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import MembershipMenu from './MembershipMenu';

import membershipStyle from '../../css/membership.module.css';

const Membership = () => {
    const [membershipList, setMembershipList] = useState([]);
    const navigate = useNavigate();

    /* 멤버십 정보 불러오기 */
    useEffect(
        () => {
            axios.get('/api/membership/getMembership')
            .then((result) => {
                setMembershipList([...result.data.membershipList]);
                console.log("API 응답 데이터:", result.data);
                console.log("멤버십 데이터:", result.data.membershipList);
            }).catch((err) => { console.error('멤버십 불러오기 실패', err); })
        }, []
    )

    return (
        <div className={membershipStyle.membershipPage}>
            <MembershipMenu/>
            <div className={membershipStyle.container}>
                {
                    (membershipList.length > 0) ? (
                        membershipList.map((membership, idx) => {
                                return (
                                    <div className={membershipStyle.item} key={idx}>
                                        <div className={membershipStyle.title}>{membership.membershipName}</div>
                                        <div className={membershipStyle.content}>첫 구독 1개월 50% 할인</div>
                                        <div className={membershipStyle.subscribe}>
                                            <div className={membershipStyle.priceBox}>
                                                <span className={membershipStyle.discount}>
                                                    월 {new Intl.NumberFormat().format(membership.membershipPrice / 2)}원&nbsp;
                                                </span>
                                                <span className={membershipStyle.original}>
                                                    월 {new Intl.NumberFormat().format(membership.membershipPrice)}원
                                                </span>
                                            </div>
                                            <button onClick={() => navigate('/subscribe')}>구독하기</button>
                                        </div>
                                    </div>
                                )
                            }
                        )
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
