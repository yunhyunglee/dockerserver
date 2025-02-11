import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

import MembershipMenu from './MembershipMenu';

import membershipStyle from '../../css/membership.module.css';

const Membership = () => {
    const loginUser = useSelector(state => state.user);
    const [membershipList, setMembershipList] = useState([]);
    const { category } = useParams(); // 표시할 membership 의 category
    const navigate = useNavigate();

    /* 멤버십 정보 불러오기 */
    useEffect(
        () => {
            axios.get('/api/membership/getMembership', {params: {category}})
            .then((result) => {
                setMembershipList([...result.data.membershipList]);
                console.log("멤버십 데이터:", result.data.membershipList);
            }).catch((err) => { console.error('멤버십 불러오기 실패', err); })
        }, [category]
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
                                        <div className={membershipStyle.title}>
                                            {membership.name}
                                        </div>
                                        <div className={membershipStyle.content}>
                                            {membership.content}
                                        </div>
                                        <div className={membershipStyle.subscribe}>
                                            <div className={membershipStyle.priceBox}>
                                                <span className={membershipStyle.discount}>
                                                    월 {new Intl.NumberFormat().format(membership.price * (1-(membership.discount/100)))}원&nbsp;
                                                </span>
                                                <span className={membershipStyle.original}>
                                                    월 {new Intl.NumberFormat().format(membership.price)}원
                                                </span>
                                            </div>
                                            {
                                                (membership.category === 'gift') ? (
                                                    <button onClick={() => navigate('/gift')}>선물하기</button>
                                                ) : (
                                                    <button
                                                        onClick={
                                                            () => navigate('/payments', { state: { price: membership.price, customerKey: 12345 } })
                                                        }>
                                                        구독하기
                                                    </button>
                                                )
                                            }
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
