import React, { useState } from "react";
import joinStyles from '../../css/joinForm.module.css';
import axios from "axios";

const SignUpStep2 = ({ setStep, step1Data }) => {
    // 선택 입력 상태들
    const [image, setImage] = useState(null);
    const [address, setAddress] = useState('');
    const [addressDetail, setAddressDetail] = useState('');
    const [addressExtra, setAddressExtra] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [loading, setLoading] = useState(false);

    
    const handleSubmit = async (e) => {
        e.preventDefault();
      
      
      const formData = new FormData();
      
      // for in 반복문써서 step1꺼 데이터 하나하나 꺼내서 formData에 넣는 코드라서  formData에 추가하는거라고 생각하심 됩니다.
      for (const key in step1Data) {
          formData.append(key, step1Data[key]);
      }
      
      // Step2 데이터 추가
      formData.append("address", address);
      formData.append("addressDetail", addressDetail);
      formData.append("addressExtra", addressExtra);
      formData.append("zipCode", zipCode);
      
      // 이미지가 있다면 FormData에 추가 / 이미지는 없는데 보내면 백엔드에서 오류날 수 도 있어서서
      if (image) {
          formData.append("image", image);
      }
      
      try {
          setLoading(true);
        
          const response = await axios.post('/api/member/join', formData, {
              headers: { 'Content-Type': 'multipart/form-data' },
          });
          console.log("회원가입 성공:", response.data);
        
      } catch (error) {
            console.error("회원가입 실패:", error);
            alert("회원가입 중 오류가 발생했습니다. 다시 시도해주세요.");
      } finally {
            setLoading(false);
      }
    };

    return (
        <div className={joinStyles.stepTwo}>
            <div className={joinStyles.formGroup}>
                <span>선택사항</span>
            </div>
            <div className={joinStyles.formGroup}>
                <label htmlFor="image">프로필 이미지 (선택)</label>
                <input 
                  type="file" 
                  id="image" 
                  onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setImage(e.target.files[0]);
                      }
                  }} 
                />
            </div>
            <div className={joinStyles.formGroup}>
                <label htmlFor="address">주소 (선택)</label>
                <input 
                    type="text" 
                    id="address" 
                    value={address} 
                    onChange={(e) => setAddress(e.target.value)} 
                />
            </div>
            <div className={joinStyles.formGroup}>
              <label htmlFor="addressDetail">상세주소 (선택)</label>
                <input 
                    type="text" 
                    id="addressDetail" 
                    value={addressDetail} 
                    onChange={(e) => setAddressDetail(e.target.value)} 
                />
            </div>
            <div className={joinStyles.formGroup}>
                <label htmlFor="addressExtra">추가주소 (선택)</label>
                <input 
                    type="text" 
                    id="addressExtra" 
                    value={addressExtra} 
                    onChange={(e) => setAddressExtra(e.target.value)} 
                />
            </div>
            <div className={joinStyles.formGroup}>
              <label htmlFor="zipCode">우편번호 (선택)</label>
                <input 
                    type="text" 
                    id="zipCode" 
                    value={zipCode} 
                    onChange={(e) => setZipCode(e.target.value)} 
                />
            </div>
            <div className={joinStyles.buttonGroup}>
                <button onClick={handleSubmit} className={joinStyles.button} disabled={loading}>
                    {loading ? "가입 중..." : "가입하기"}
                </button>
                <button type="button" className={joinStyles.button} onClick={() => setStep(1)}>
                    이전
                </button>
            </div>
      </div>
    );
};

export { SignUpStep2 };
