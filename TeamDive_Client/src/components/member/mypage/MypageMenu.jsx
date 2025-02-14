import React from 'react'
import { Link } from 'react-router-dom'
import mypageStyle from '../../../css/mypage/mypage.module.css'

const MypageMenu = () => {
    return (
        <div className = {mypageStyle.menu}>
            <Link To='/member/mypage/updateMemberForm'>개인정보 수정</Link>
            <Link To='/mypage/likeListForm'>좋아요 리스트</Link>
            <Link To='/mypage/replyListForm'>댓글 리스트</Link>
            <Link To='/mypage/useMemberShip'>사용중인 멤버십</Link>
        </div>
    )
}

export default MypageMenu
