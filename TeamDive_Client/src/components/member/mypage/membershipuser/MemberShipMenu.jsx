import React from 'react'
import { Link } from 'react-router-dom'
import memberShipStyle from '../../../../css/mypage/mypageMemberShip.module.css'
import mypageStyle from '../../../../css/mypage/mypage.module.css'


const MemberShipMenu = () => {
    return (
        <div className={mypageStyle.menu}>
            <Link to='/mypage/useMemberShip/memberShipReceive'>받은 선물</Link>
            <Link to='/mypage/useMemberShip/paymentList'>결제내역</Link>
        </div>
    )
}

export default MemberShipMenu
