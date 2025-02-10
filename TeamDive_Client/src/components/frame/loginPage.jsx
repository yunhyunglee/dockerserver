import React, { useState } from 'react';
import loginStyles from '../../css/login.module.css';

const LoginPage =() => {

    const [memberId, setMemberId] = useState('');
    const [password, setPassword] = useState('');


    const writeId = (e) => {
        setMemberId(e.target.value)
    }

    const writePassword = (e) => {
        setPassword(e.target.value)
    }


    

    return (
        <div className={loginStyles.loginPage}>
            <div className={loginStyles.container}>
                <h1>로그인</h1>
                <form>
                    <div className={loginStyles.formGroup}>
                        <label htmlFor="memberId">ID</label>
                        <input type="text" id="memberId" value={memberId} onChange={writeId} placeholder="아이디를 입력하세요" />
                    </div>
                    <div className={loginStyles.formGroup}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={writePassword} placeholder="비밓번호를 입력하세요" />
                    </div>
                    <button type="submit" className={loginStyles.button}>Login</button>
                </form>
                <a href="#" className={loginStyles.forgotPassword}>비밀번호를 잊으셨나요?</a>
            </div>
        </div>
      );
}

export { LoginPage };
