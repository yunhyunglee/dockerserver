import { useState } from "react";
import joinStyles from '../../css/joinForm.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUpStep2 = ({ setStep}) => {

    const navigate = useNavigate();

  // 선택 입력 상태들
    const [image, setImage] = useState(null);
    const [address, setAddress] = useState('');
    const [addressDetail, setAddressDetail] = useState('');
    const [addressExtra, setAddressExtra] = useState('');
    const [zipCode, setZipCode] = useState('');

       
    const handleSubmit = (e) => {
        e.preventDefault();
        // ==============1단계
        // const formData = new FormData();
        // formData.append("username", memberId);
        // formData.append("password", password);  // null 체크 필요
        // formData.append("name", name);
        // formData.append("nickName", nickName);
        // formData.append("phone", phone);
        // formData.append("email", email);
        // formData.append("birth", birth);
        // formData.append("gender", gender);
        // if (image) formData.append("image", image);
        // formData.append("zipCode", zipCode);
        // formData.append("address", address);
        // formData.append("addressDetail", addressDetail);
        // formData.append("addressExtra", addressExtra);
        

        axios.post('/api/member/join', {username:memberId, password, name, nickName, phone, email, birth, gender, image, zipCode, address, addressDetail, addressExtra  })
        .then((result)=>{
            if(result.data.msg === 'yes'){
                alert('회원가입이 완료되었습니다. 로그인 하세요');
                navigate('/login');
            }else{
                alert('문제가 발생하였습니다. 관리자에게 문의하세요');
                navigate('/sign-up');
            }
        })
        .catch((err)=>{
          console.error(err);
        })
        
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
        <label htmlFor="zipCode">우편번호 (선택)</label>
        <input type="text" id="zipCode" value={zipCode} onChange={(e) => setZipCode(e.currentTarget.value)} />
      </div>
      <div className={joinStyles.formGroup}>
        <label htmlFor="address">주소 (선택)</label>
        <input type="text" id="address" value={address} onChange={(e) => setAddress(e.currentTarget.value)} />
      </div>
      <div className={joinStyles.formGroup}>
        <label htmlFor="addressDetail">상세주소 (선택)</label>
        <input type="text" id="addressDetail" value={addressDetail} onChange={(e) => setAddressDetail(e.currentTarget.value)} />
      </div>
      <div className={joinStyles.formGroup}>
        <label htmlFor="addressExtra">추가주소 (선택)</label>
        <input type="text" id="addressExtra" value={addressExtra} onChange={(e) => setAddressExtra(e.currentTarget.value)} />
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
