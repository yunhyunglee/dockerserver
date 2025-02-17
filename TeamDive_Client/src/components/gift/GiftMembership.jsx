import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import jaxios from '../../util/JwtUtil';

import paymentStyle from '../../css/membership/payments.module.css';

const GiftMembership = ({ membership, onProceedToPayment }) => {
    const loginUser = useSelector(state => state.user);

    return (
        <div className={paymentStyle.paymentContainer}>
            <div className={paymentStyle.field}>
                <label>받는 사람</label>
                <input type='text' placeholder='받는 사람의 ID'/>
            </div>
            <div className={paymentStyle.field}>
                <label>보내는 사람</label>
                <input type='text' value={login} readOnly/>
            </div>
            <div className={paymentStyle.field}>
                <label>받는 사람</label>
                <input type='text' placeholder='받는 사람의 ID'/>
            </div>
            <div className={paymentStyle.field}>
                <label>받는 사람</label>
                <input type='text' placeholder='받는 사람의 ID'/>
            </div>
            <h2>{membership.name} (Gift)</h2>
            <p>선물 멤버십입니다.</p>
            <button onClick={onProceedToPayment}>결제하기</button>
        </div>
    )
}

export default GiftMembership;
