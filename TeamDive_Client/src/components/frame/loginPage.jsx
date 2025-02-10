import React, { useState } from 'react';
import loginStyles from '../../css/login.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import { useDispatch } from 'react-redux';

const LoginPage =() => {

    const [memberId, setMemberId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const cookies = new Cookies();
    const dispatch = useDispatch();

    function loginLocal(){
        if(!memberId){return alert('아이디를 입력하세요');};
        if(!password){return alert('비밀번호를 입력하세요');};
        
        axios.post('/api/member/loginLocal', null, {params:{memberId, password}})
        .then((result)=>{
            console.log(result.data.msg)
            if(result.data.msg === 'yes'){
                alert('로그인이 되었습니다.')
                cookies.set('user', JSON.stringify(result.data.loginuser), {path:'/'});
                dispatch(loginAction(result.data.loginUser));
                navigate('/');
            }else{
                alert('아이디와 비밀번호가 일치하지 않습니다.');
                setMemberId('');
            }
        })
        .catch((err)=>{
            console.error(err);
        })
    }


    

    return (
        <div className={loginStyles.loginPage}>
            <div className={loginStyles.container}>
                <h1>로그인</h1>
                <form>
                    <div className={loginStyles.formGroup}>
                        <label htmlFor="memberId">ID</label>
                        <input type="text" id="memberId" value={memberId} onChange={(e)=>{
                            setMemberId(e.currentTarget.value);
                        }} placeholder="아이디를 입력하세요" />
                    </div>
                    <div className={loginStyles.formGroup}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={(e)=>{
                            setPassword(e.currentTarget.value);
                        }} placeholder="비밀 번호를 입력하세요" />
                    </div>
                    <button type="submit" className={loginStyles.button} onClick={()=>{loginLocal();}}>Login</button>
                </form>
                <a href="#" className={loginStyles.forgotPassword}>비밀번호를 잊으셨나요?</a>
            </div>
        </div>
      );
}

export { LoginPage };
