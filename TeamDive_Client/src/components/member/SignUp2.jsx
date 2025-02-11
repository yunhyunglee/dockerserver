import { useState } from "react";
import joinStyles from '../../css/joinForm.module.css';

const SignUpStep2 = ({ setStep }) => {
  // 선택 입력 상태들
    const [image, setImage] = useState(null);
    const [address, setAddress] = useState('');
    const [addressDetail, setAddressDetail] = useState('');
    const [addressExtra, setAddressExtra] = useState('');
    const [zipCode, setZipCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // 여기에 제출 로직을 추가합니다.
    };

  return (
    <div className={joinStyles.stepTwo}>
      <div className={joinStyles.formGroup}>
        <span>선택사항</span>
      </div>
      <div className={joinStyles.formGroup}>
        <label htmlFor="image">프로필 이미지 (선택)</label>
        <input type="file" id="image" onChange={(e) => setImage(e.target.files[0])} />
      </div>
      <div className={joinStyles.formGroup}>
        <label htmlFor="address">주소 (선택)</label>
        <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div className={joinStyles.formGroup}>
        <label htmlFor="addressDetail">상세주소 (선택)</label>
        <input type="text" id="addressDetail" value={addressDetail} onChange={(e) => setAddressDetail(e.target.value)} />
      </div>
      <div className={joinStyles.formGroup}>
        <label htmlFor="addressExtra">추가주소 (선택)</label>
        <input type="text" id="addressExtra" value={addressExtra} onChange={(e) => setAddressExtra(e.target.value)} />
      </div>
      <div className={joinStyles.formGroup}>
        <label htmlFor="zipCode">우편번호 (선택)</label>
        <input type="text" id="zipCode" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
      </div>
      <div className={joinStyles.buttonGroup}>
        <button onClick={handleSubmit} className={joinStyles.button}>
          가입하기
        </button>
        <button type="button" className={joinStyles.button} onClick={() => setStep(1)}>
          이전
        </button>
      </div>
    </div>
  );
};

export { SignUpStep2 };
