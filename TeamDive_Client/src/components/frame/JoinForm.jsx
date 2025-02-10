import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import joinStyles from '../../css/joinForm.module.css';

const JoinForm = () => {
  const [memberId, setMemberId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');
  const [birth, setBirth] = useState('');
  const [gender, setGender] = useState('');
  const [image, setImage] = useState('');
  const [address, setAddress] = useState('');
  const [addressDetail, setAddressDetail] = useState('');
  const [addressExtra, setAddressExtra] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!memberId){return alert('아이디를 입력해주세요');}
    if(!password){return alert('비밀번호를 입력해주세요');}
    if(password!==passwordCheck) {return alert('입력하신 비밀번호와 일치하지 않습니다.');}
    if(!email){return alert('이메일을 입력해주세요');}
    if(!name){return alert('이름을 입력해주세요');}
    if(!nickName){return alert('닉네임을 설정해주세요');}
    if(!birth){return alert('생년월일을 선택해주세요');}
    if(!gender){return alert('성별을 선택해주세요');}

    const formData = {
      memberId,
      password,
      email,
      name,
      nickName,
      birth,
      gender,
      image: image ? image.name : "선택 안 함",
      address: address || "입력 안 함",
      addressDetail: addressDetail || "입력 안 함",
      addressExtra: addressExtra || "입력 안 함",
      zipCode: zipCode || "입력 안 함",
    };

    console.log("회원가입 데이터:", formData);

    alert("회원가입이 완료되었습니다! 🎉\n" + JSON.stringify(formData, null, 2));
  };

  return (
    <div className={joinStyles.joinPage}>
      <div className={joinStyles.container}>
        <h2>회원가입</h2>
          <div className={joinStyles.formContainer}>
            <div className={joinStyles.formLeft}>
              <div className={joinStyles.formGroup}>
                <label htmlFor="memberId">ID</label>
                <input type="text" id="memberId" value={memberId} onChange={(e) => setMemberId(e.target.value)} required />
              </div>
              <div className={joinStyles.formGroup}>
                <label htmlFor="password">비밀번호</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <div className={joinStyles.formGroup}>
                <label htmlFor="passwordCheck">비밀번호 확인</label>
                <input type="password" id="passwordCheck" value={passwordCheck} onChange={(e) => setPasswordCheck(e.target.value)} required />
              </div>
              <div className={joinStyles.formGroup}>
                <label htmlFor="email">이메일</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className={joinStyles.formGroup}>
                <label htmlFor="name">이름</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className={joinStyles.formGroup}>
                <label htmlFor="nickName">닉네임</label>
                <input type="text" id="nickName" value={nickName} onChange={(e) => setNickName(e.target.value)} required />
              </div>
              <div className={joinStyles.formGroup}>
                <label htmlFor="birth">생년월일</label>
                <input type="date" id="birth" value={birth} onChange={(e) => setBirth(e.target.value)} required />
              </div>
              <div className={joinStyles.formGroup}>
                <label htmlFor="gender">성별</label>
                <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
                  <option value="" style={{color : 'black'}}>선택</option>
                  <option value="male" style={{color : 'black'}}>남성</option>
                  <option value="female" style={{color : 'black'}}>여성</option>
                </select>
              </div>
            </div>
            <div className={joinStyles.formRight}>
                <span style={{}}>선택사항</span>
              <div className={joinStyles.formGroup} style={{marginTop:'90px'}}>
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
            </div>
          </div>
          <div className={joinStyles.buttonGroup}>
            <button onClick={handleSubmit} className={joinStyles.button}>가입하기</button>
            <button type="button" className={joinStyles.button} onClick={() => navigate('/')}>뒤로가기</button>
          </div>
      </div>
    </div>
  );
};

export { JoinForm };
