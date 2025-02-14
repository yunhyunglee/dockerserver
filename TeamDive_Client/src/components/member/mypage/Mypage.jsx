import React,{ useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import jaxios from '../../../util/JwtUtil'
import { useSelector, useDispatch } from 'react-redux'
import MypageMenu from './MypageMenu'
import { Cookies } from 'react-cookie'

import mypageStyle from '../../../css/mypage/mypage.module.css'



const Mypage = () => {

    const loginUser = useSelector(state=>state.user);
    
    const [member, setMember] = useState({});

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cookies = new Cookies();

    useEffect(()=>{
        if(!loginUser.memberId){
            alert('로그인이 필요한 서비스 입니다.');
            navigate('/login');
        }
        jaxios.get('/api/member/loginUser')
        .then((result)=>{
            
        })
        .catch((err)=>{
            console.error(err);
        })
    },[]);

    function confirm(){

    };

    return (
        <div className={mypageStyle}>
            <div>
                <h1>MYPAGE</h1>
                <MypageMenu />
                <div>
                    <img src={`http://localhost:8070/profileImage/${member.image} `}/>
                    <button>사진 변경</button>
                </div>
                <div>
                    <label>아이디</label>
                    <input type='text'/>
                </div>
                <div>
                    <label>패스워드</label>
                    <input type='text'/>
                    <input type='text'/>
                </div>
                <div>
                    <label>전화번호</label>
                    <input type='text'/>
                </div>
                <div>
                    <label>닉네임</label>
                    <input type='text'/>
                </div>
                <div>
                    <label>우편번호</label>
                    <input type='text'/>
                    <button type='button'>검색</button>
                </div>
                <div>
                    <label>주소</label>
                    <input type='text'/>
                </div>
                <div>
                    <label>상세주소</label>
                    <input type='text'/>
                </div>
                <div>
                    <label>추가주소</label>
                    <input type='text'/>
                </div>
                <div>
                    <button type='button' onClick={()=>{
                        confirm();
                    }}>수정</button>
                    <button type='button' onClick={()=>{
                        navigate('/mypage')
                    }}>뒤로</button>
                </div>
            </div>
        </div>
    )
}

export default Mypage
 