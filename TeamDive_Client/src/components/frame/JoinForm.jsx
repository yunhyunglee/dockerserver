import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import joinStyles from '../../css/joinForm.module.css';
import { SignUpStep1 } from '../member/SignUp1';
import { SignUpStep2 } from '../member/SignUp2';

const JoinForm = () => {
  
    const [step, setStep] = useState(1);
    const navigate = useNavigate();

    return (
      <div className={joinStyles.joinPage}>
        <div className={joinStyles.container}>
          <h2>회원가입</h2>
        
          <div className={joinStyles.progressContainer}>
            <div className={joinStyles.progressText}>
              {step === 1
                ? 'Step 1 of 2 : 필수 정보 입력'
                : 'Step 2 of 2 : 선택 정보 입력'}
            </div>
            <div className={joinStyles.progressBarBackground}>
              <div
                className={joinStyles.progressBar}
                style={{ width: step === 1 ? '50%' : '100%' }}
              ></div>
            </div>
          </div>
          <form>         
            {step === 1 && <SignUpStep1 setStep={setStep} />}
            {step === 2 && <SignUpStep2 setStep={setStep} />}
          </form>
        </div>
      </div>
    );
};

export { JoinForm };
