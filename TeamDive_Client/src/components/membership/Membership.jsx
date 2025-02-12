import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

import MembershipMenu from './MembershipMenu';
import Modal from './Modal'; // 모달 컴포넌트 임포트
import { PaymentsCheckout } from '../payments/PaymentsCheckout'; // 결제 컴포넌트 임포트

import membershipStyle from '../../css/membership/membership.module.css';

const Membership = () => {
    const loginUser = useSelector(state => state.user);
    const [membershipList, setMembershipList] = useState([]);
    const { category } = useParams(); // 표시할 membership 의 category
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMembership, setSelectedMembership] = useState(null); // 선택된 멤버십 정보
    const navigate = useNavigate();

    /* 멤버십 정보 불러오기 */
    useEffect(
        () => {
            axios.get('/api/membership/getMembership', {params: {category}})
            .then((result) => {
                setMembershipList([...result.data.membershipList]);
            }).catch((err) => { console.error('멤버십 불러오기 실패', err); })
        }, [category]
    )

    /* 모달 열기 */
    const openModal = (membership) => {
        if(!loginUser || loginUser.memberKey === ''){
            alert('로그인이 필요한 서비스입니다');
            navigate('/login');
        }else {
            setSelectedMembership(membership); // 클릭한 멤버십 정보를 설정
            setIsModalOpen(true); // 모달 열기
        }     
    };

    /* 모달 닫기 */
    const closeModal = () => {
        setIsModalOpen(false);
    };

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
                                                    <button onClick={() => openModal(membership)}>구독하기</button>
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

            {/* 모달 */}
            <Modal isOpen={isModalOpen} closeModal={closeModal}>
                {selectedMembership && (
                    <PaymentsCheckout membership={selectedMembership} loginUser={loginUser} />
                )}
            </Modal>
        
        </div>
    )
}

export { Membership };
