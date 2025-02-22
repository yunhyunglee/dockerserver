import React, { useState, useEffect } from 'react'
import mypageStyle from '../../../css/mypage/mypage.module.css'
import axios from 'axios';
import jaxios from '../../../util/JwtUtil';
import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import zIndex from '@mui/material/styles/zIndex';

const MypageMain = () => {
    const [memberShipUserList, setMemberShipUserList] = useState([]);
        
    const loginUser = useSelector(state=>state.user);

    useEffect(()=>{
        jaxios.get('/api/membership/getActiveMembership', {params:{memberId:loginUser.memberId}})
        .then((result)=>{
            console.log('memberShipUserList',result.data);
            setMemberShipUserList(result.data.memberShipUserList);
            
        })
        .catch((err)=>{
            console.error(err);
        })
    },[loginUser]);

    return (
        <section className={mypageStyle.userInfo}>
            <h2>회원 정보</h2>
            <div className={mypageStyle.info}>
                <div className={mypageStyle.profile}>
                    <img className={mypageStyle.profileImage} src={`http://localhost:8070/profileImage/${loginUser.image}`} />
                    <div className={mypageStyle.profileDetails}>
                        <div className={mypageStyle.field}>
                            <label>아이디</label>&nbsp;&nbsp;&nbsp;
                            <div>{loginUser.memberId}</div>
                        </div>
                        <div className={mypageStyle.field}>
                            <label>닉네임</label>&nbsp;&nbsp;&nbsp;
                            <div>{loginUser.nickname}</div>
                        </div>
                        <div className={mypageStyle.field}>
                            <label>이메일</label>&nbsp;&nbsp;&nbsp;
                            <div>{loginUser.email}</div>
                        </div>
                        <div className={mypageStyle.field}>
                            <label>소개</label>&nbsp;&nbsp;&nbsp;
                            <div>{loginUser.introduction}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 사용 중인 멤버십 */}
            <div className={mypageStyle.membership}>
                <h2>사용 중인 멤버십</h2>
                <div>
                    {
                        (memberShipUserList && memberShipUserList.length > 0)?(
                            memberShipUserList.map((memberShipUser, idx)=>{
                                return(
                                    <section className={mypageStyle.memberShipUser} key={idx}>
                                        <div className={mypageStyle.field}> 
                                            <label>멤버십 이름</label>
                                            <div>{memberShipUser.membershipName}</div>
                                        </div>
                                        <div className={mypageStyle.field}> 
                                            <label>기간</label>
                                            {memberShipUser.startDate.substring(0, 10) + " ~ " + memberShipUser.endDate.substring(0, 10)}
                                        </div>
                                        {   
                                            (memberShipUser.membershipCategory==='download')?(
                                                <div className={mypageStyle.field}>
                                                    <label>남은 횟수</label>
                                                    <div>{memberShipUser.downloadCount+' 회'}</div>
                                                </div>
                                            ):(
                                                <div className={mypageStyle.field}>
                                                    <label>남은 횟수</label>
                                                    <div>{'-'}</div>
                                                </div>
                                            )
                                        }
                                        <button>멤버십 해지</button>
                                    </section>
                                )
                            })
                        ):(<div>구독한 멤버십이 없습니다.</div>)
                    }
                </div>
            </div>
        </section>
    )
}

export default MypageMain
