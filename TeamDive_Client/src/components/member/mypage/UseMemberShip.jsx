import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import mypageStyle from '../../../css/mypage/mypage.module.css'
import mypageMemberShipStyle from '../../../css/mypage/mypageMemberShip.module.css'

import MemberShipMenu from './membershipuser/MemberShipMenu'
import MemberShipReceive from './membershipuser/MemberShipReceive'
import PaymentList from './membershipuser/PaymentList'

const UseMemberShip = () => {
    
    const loginUser = useSelector(state=>state.user);

    const {memberShipCategory} = useParams();

    return (
        <div className={mypageStyle.memberShipForm}>
            <h2>멤버십</h2>
            <MemberShipMenu />
            {memberShipCategory && (
                <div>
                    {memberShipCategory === "memberShipReceive" && <MemberShipReceive />}
                    {memberShipCategory === "paymentList" && <PaymentList />}
                </div>
            )
            }
                
        </div>
    )
}

export default UseMemberShip
