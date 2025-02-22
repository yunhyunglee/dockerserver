import React,{ useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import jaxios from '../../../util/JwtUtil'
import { useSelector, useDispatch } from 'react-redux'
import Modal from "react-modal";
import DaumPostcode from "react-daum-postcode";
import { Cookies } from 'react-cookie'
import { loginAction, logoutAction } from '../../../store/UserSlice'

import mypageStyle from '../../../css/mypage/mypage.module.css'
import updateStyles from '../../../css/mypage/mypageUpdate.module.css'

const UpdateMemberForm = () => {

    const navigate = useNavigate();

    const loginUser = useSelector(state=>state.user);
    const [preview, setPreview] = useState(`http://localhost:8070/profileImage/${loginUser.image}`); // 이미지 
    const [image, setImage] = useState(`http://localhost:8070/profileImage/${loginUser.image}`);

    const [memberId, setMemberId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [phone, setPhone] = useState('');
    const [nickname, setNickname] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [address, setAddress] = useState('');
    const [addressDetail, setAddressDetail] = useState('');
    const [addressExtra, setAddressExtra] = useState('');
    const [introduction, setIntroduction] = useState('');

    const cookies = new Cookies();
    const dispatch = useDispatch();

    const [isOpen, setIsOpen]=useState(false);
    
    function toggle(){
        setIsOpen( !isOpen )
    }

    const customStyles = {
        overlay: { backgroundColor: "rgba( 0 , 0 , 0 , 0.5)", },
        content: {
            left: "0",
            margin: "auto",
            width: "500px",
            height: "600px",
            padding: "0",
            overflow: "hidden",
        },
    };

    useEffect(()=>{
        setMemberId(loginUser.memberId);
        setPhone(loginUser.phone);
        setNickname(loginUser.nickname);
        setZipCode(loginUser.zipCode);
        setAddress(loginUser.address);
        setAddressDetail(loginUser.addressDetail);
        setAddressExtra(loginUser.addressExtra);
        setIntroduction(loginUser.introduction);
        setImage(loginUser.image);
        if( loginUser.provider === 'kakao'){
            setPassword('kakao');
            setPasswordCheck('kakao');
        }
    },[]);

    const completeHandler=(data)=>{
        console.log(data)
        setZipCode(data.zonecode)
        setAddress(data.address)
        if( data.buildingName !== ''){
            setAddressExtra('(' + data.buildingName + ')')
        }else if( data.bname !== ''){
            setAddressExtra('(' + data.bname + ')')
        }
        setIsOpen(false);
    }

    const fileUp = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // 파일 객체 상태 저장
        setImage(file);

        // FileReader를 사용하여 미리보기 URL 생성
        const reader = new FileReader();
        reader.onloadend = () => {
        setPreview(reader.result);
        };
        reader.readAsDataURL(file);

        // 서버 업로드 처리
        const formData = new FormData();
        formData.append("image", file);

        try {
        const result = await axios.post("/api/member/fileUp", formData);
        // 서버에서 반환된 이미지 URL 저장
        setImage(result.data.image);
        console.log("image", image);
        } catch (error) {
        console.error("파일 업로드 실패:", error);
        alert("파일 업로드에 실패했습니다.");
        }
    };


    async function onSubmit(){
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        try{
            if (!password){
                return alert('비밀번호를 입력해주세요');
            }
            if (!passwordRegex.test(password)){
                return alert('비밀번호는 최소 8자 이상이며, 영문과 숫자를 포함해야 합니다.');
            }
            if (password !== passwordCheck){
                return alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
            }
            const res = await jaxios.post('/api/member/updateMember', {memberId, password, phone, nickname, zipCode, address, addressDetail, addressExtra, introduction, image})
            if(res.data.msg === 'yes'){
                alert('회원정보가 수정되었습니다.');
                const result = await axios.post('/api/member/login', null,{params:{username:memberId, password:password}})
                cookies.set('user', JSON.stringify(result.data), {path:'/'} )
                dispatch( loginAction(result.data) );
                navigate('/');
            }
        }catch(err){
            console.error(err);
        }
    };

    function deleteMember(){
        if (!window.confirm('정말 회원 탈퇴 하시겠습니까?')) {
            return;
        }
        jaxios.delete(`/api/member/deleteMember/${memberId}`)
        .then((result)=>{
            if(result.data.msg === 'yes'){
                alert('회원탈퇴 되었습니다.');
                cookies.remove('user');
                dispatch( logoutAction() );
                navigate('/');
            }
        })
        .catch((err)=>{
            console.error(err)
        })
    };

    return (
        <div className={mypageStyle.updateMemberForm}>
            <div className={updateStyles.imageContainer}>
                {preview ? (
                    <img
                    src={preview}
                    alt="Preview"
                    />
                ) : (
                    <h3>이미지 미리보기가 없습니다.</h3>
                )}
                <input type="file" id="image" onChange={(fileUp)} />
            </div>
            <div className={updateStyles.formGroupContainer}>         
                <div className={updateStyles.formGroup}>
                    <label>아이디</label>
                    <input type='text' value={memberId} readOnly/>
                </div>
                <div className={updateStyles.formGroup}>
                    <label>패스워드</label>
                    {
                        (loginUser.provider==='kakao')?(
                            <input 
                            type="password" 
                            value={passwordCheck}
                            readOnly/>
                        ):(
                            <input 
                            type="password" 
                            value={password}
                            placeholder="수정 할 비밀번호를 입력하세요." 
                            onChange={
                                (e)=>{ setPassword(e.currentTarget.value )}
                            }/>
                        )
                    }
                    {
                        (loginUser.provider==='kakao')?(
                            <input type="password" value={passwordCheck} readOnly/>
                        ):(
                            <input 
                            type="password" 
                            value={passwordCheck}
                            placeholder="수정 할 비밀번호를 다시 입력하세요."
                            onChange={
                                (e)=>{ setPasswordCheck(e.currentTarget.value )}
                            }/>
                        )
                    }
                </div>
                <div className={updateStyles.formGroup}>
                    <label>전화번호</label>
                    <input type='text' value={phone} onChange={(e)=>{setPhone(e.currentTarget.value)}}/>
                </div>
                <div className={updateStyles.formGroup}>
                    <label>닉네임</label>
                    <input type='text' value={nickname} onChange={(e)=>{setNickname(e.currentTarget.value)}}/>
                </div>
                <div className={updateStyles.zipCodeContainer}>
                    <label>우편번호</label>
                    
                    <div className={updateStyles.zipCode}>
                        <input type='text' value={zipCode} onChange={(e)=>{setZipCode(e.currentTarget.value)}} readOnly/>
                        <button type='button' onClick={()=>{
                            toggle();
                        }}>검색</button>
                    </div>
                </div>
                {/* 주소 검색을 위한 모달창 */}
                <div>   
                    <Modal isOpen={isOpen}  ariaHideApp={false}  style={customStyles} >
                        <DaumPostcode onComplete={completeHandler} /><br />
                        <button onClick={()=>{ setIsOpen(false) }}>닫기</button>
                    </Modal>
                </div>
                {/* ======================= */}
                <div className={updateStyles.formGroup}>
                    <label>주소</label>
                    <input 
                    type='text' 
                    value={address} 
                    onChange={(e)=>{setAddress(e.currentTarget.value)}}
                    readOnly />
                </div>
                <div className={updateStyles.formGroup}>
                    <label>상세주소</label>
                    <input
                        type="text"
                        id="address"
                        value={addressDetail}
                        onChange={(e) => setAddressDetail(e.target.value)}
                    />
                </div>
                <div className={updateStyles.formGroup}>
                    <label>추가주소</label>
                    <input
                        type="text"
                        id="addressExtra"
                        value={addressExtra}
                        onChange={(e) => setAddressExtra(e.target.value)}
                        readOnly
                    />
                </div>
                <div className={updateStyles.formGroup}>
                    <label>소개</label>
                    <textarea
                        id="introduction"
                        value={introduction}
                        rows="5" 
                        cols="40" 
                        placeholder="자기소개를 입력해주세요."
                        onChange={(e) => setIntroduction(e.target.value)}
                    >    
                    </textarea>
                </div>
                <div className={updateStyles.buttonGroup}>
                    <button type='button' className={updateStyles.button} onClick={()=>{
                        onSubmit();
                    }}>수정</button>
                    <button type='button' className={updateStyles.button} onClick={()=>{
                        navigate(-1);
                    }}>뒤로</button>
                    <button type='button' className={updateStyles.deleteButton} onClick={()=>{
                        deleteMember(); }}>회원탈퇴
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UpdateMemberForm
