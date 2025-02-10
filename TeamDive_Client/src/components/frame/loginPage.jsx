import React from 'react';
import loginStyles from '../../css/login.module.css';

function LoginPage() {
    return (
        <div className={loginStyles.loginPage}>
          <div className={loginStyles.container}>
            <h1>로그이이이이인</h1>
            <form>
              <div className={loginStyles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="이메일을 입력하세요" />
              </div>
              <div className={loginStyles.formGroup}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="비밓번호를 입력하세요" />
              </div>
              <button type="submit" className={loginStyles.button}>Login</button>
            </form>
            <a href="#" className={loginStyles.forgotPassword}>비밓번호 잊음?</a>
          </div>
        </div>
      );
}

export { LoginPage };
