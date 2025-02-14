import React, { useState } from "react";
import joinStyles from '../../css/joinForm.module.css';
import axios from "axios";

const SignUpStep2 = ({ setStep, step1Data }) => {
    // 선택 입력 상태들
    
    const [image, setImage] = useState(null);
    const [profileImage, setProfileImage] = useState();

    const [address, setAddress] = useState('');
    const [addressDetail, setAddressDetail] = useState('');
    const [addressExtra, setAddressExtra] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
            
      // for in 반복문써서 step1꺼 데이터 하나하나 꺼내서 formData에 넣는 코드라서  formData에 추가하는거라고 생각하심 됩니다.
      for (const key in step1Data) {
          formData.append(key, step1Data[key]);
      }
      
      // Step2 데이터 추가
      const formData = new FormData();
      formData.append("username", step1Data.memberId);
      formData.append("password", step1Data.password);
      formData.append("name", step1Data.name);
      formData.append("nickName", step1Data.nickName);
      formData.append("phone", step1Data.phone || ""); // 빈 값 처리
      formData.append("email", `${step1Data.emailId}@${step1Data.emailDomain}`);
      formData.append("birth", step1Data.birth);
      formData.append("gender", step1Data.gender);
      if (image) formData.append("image", image);
      formData.append("zipCode", zipCode);
      formData.append("address", address);
      formData.append("addressDetail", addressDetail);
      formData.append("addressExtra", addressExtra);

      // 이미지가 있다면 FormData에 추가 / 이미지는 없는데 보내면 백엔드에서 오류날 수 도 있어서
      if (image) {
          formData.append("image", image);
      }
      
      try {
          setLoading(true);
          console.log(step1Data);
          const result = await axios.post("/api/member/join", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
        
      } catch (error) {
            console.error("회원가입 실패:", error);
            alert("회원가입 중 오류가 발생했습니다. 다시 시도해주세요.");
      } finally {
            setLoading(false);
      }
    };

    function fileUp(e){
        const formData = new FormData();
        formData.append('image', e.target.files[0])
        axios.post('/api/member/fileUp', formData)
        .then((result)=>{
            setImage(result.data.image);
            setProfileImage(`http://localhost:8070/profileImage/${result.data.image}`);
        })
        .catch((err)=>{
            console.error(err);
        })
    }

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
                      fileUp(e);
                  }} 
                />
                {
                    (profileImage)?(
                            <div>
                                <img src={profileImage} />
                            </div>
                    ):(<>프로필 이미지 없음</>)
                }
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
