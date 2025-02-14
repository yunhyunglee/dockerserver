import React from 'react'
import { Link } from 'react-router-dom'

const MypageMenu = () => {
    return (
        <div>
            <Link To='/mypage/updateMemberForm'>개인정보 수정</Link>
            <Link To='/mypage/playListForm'>플레이 리스트</Link>
            <Link To='/mypage/likeListForm'>좋아요 리스트</Link>
            <Link To='/mypage/replyListForm'>댓글 리스트</Link>
            <Link To='/mypage/useMemberShip'>사용중인 멤버십</Link>
        </div>
    )
}

export default MypageMenu
