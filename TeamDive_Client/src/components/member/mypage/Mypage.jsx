import React,{ useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import jaxios from '../../../util/JwtUtil'
import { useSelector, useDispatch } from 'react-redux'
import { Cookies } from 'react-cookie'

import mypageStyle from '../../../css/mypage/mypage.module.css'

import MypageMenu from './MypageMenu'
import MypageMain from './MypageMain';
import UpdateMemberForm from './UpdateMemberForm';
import LikeListForm from './LikeListForm';
import ReplyListForm from './ReplyListForm';
import UseMemberShip from './UseMemberShip';



const Mypage = () => {

    const loginUser = useSelector(state=>state.user);

    const navigate = useNavigate();
    const {mypageCategory} = useParams();
   

    useEffect(()=>{
        if(!loginUser.memberId){
            alert('로그인이 필요한 서비스 입니다.');
            navigate('/login');
        }
    },[]);

    return (
        <div className={mypageStyle}>
            <div>
                
                <MypageMenu />
                {/* 마이페이지 카테고리별로 표시할 컴포넌트를 설정 */}
                {mypageCategory && (
                    <div>
                        {/* 조건부 렌더링 */}
                        {mypageCategory === "myPageMain" && <MypageMain />}
                        {mypageCategory === "updateMemberForm" && <UpdateMemberForm />}
                        {mypageCategory === "likeListForm" && <LikeListForm />}
                        {mypageCategory === "replyListForm" && <ReplyListForm />}
                        {mypageCategory === "useMemberShip" && <UseMemberShip />}
                    </div>
                )}
            </div>

        </div>
    )
}

export default Mypage
 