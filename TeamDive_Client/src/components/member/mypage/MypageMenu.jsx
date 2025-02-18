import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import mypageStyle from '../../../css/mypage/mypage.module.css'



const MypageMenu = () => {
    const navigate = useNavigate();

    return (
        <div className = {mypageStyle.menu}>
            <Link to='/mypage/myPageMain' className = {mypageStyle.link}>
                홈
            </Link>
            <Link to='/mypage/updateMemberForm' className = {mypageStyle.link}>
                개인정보 수정
            </Link>
            <Link to='/mypage/replyListForm' className = {mypageStyle.link}>
                댓글 리스트
            </Link>
            <Link to='/mypage/useMemberShip' className = {mypageStyle.link}>
                사용중인 멤버십
            </Link>
        </div>
    )
}

export default MypageMenu
