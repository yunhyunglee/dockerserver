import React, { useEffect, useState } from "react";
import "../../../style/userDetail.scss";
import jaxios from '../../../util/JwtUtil';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const UserDetail = () => {
    const { memberId } = useParams(); // 🔹 URL에서 memberId 가져오기
    const [user, setUser] = useState({});
    const [membership, setMembership] = useState(null);
    const [paymentList, setPaymentList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [newNickname, setNewNickname] = useState("");
    const [editing, setEditing] = useState(false);
    const navigate = useNavigate(); 


    // ✅ 회원 상세 정보, 멤버십, 결제 내역 불러오기
    useEffect(() => {
        getUserDetails (memberId);
    }, [memberId]); 

        const getUserDetails  = async (memberId) => {
            setLoading(true);
            try {
                // 🔹 사용자 정보 가져오기
                const userResponse = await jaxios.get("/api/member/searchMember", {
                    params: { memberId }
                });

                if (userResponse.data.member?.length > 0) {
                    const userData = userResponse.data.member[0];
                    setUser(userData); 
                    setNewNickname(userData.nickname || "");
                } else {
                    alert("사용자 정보를 찾을 수 없습니다.");
                    setUser({});
                }
                const membershipResponse = await jaxios.get("/api/membership/getActiveMembership", {
                    params: { memberId }
                });
                setMembership(membershipResponse.data.memberShipUserList || []);

                const paymentResponse = await jaxios.get("/api/payments/getPaymentList", {
                    params: { memberId }
                });
                setPaymentList(paymentResponse.data.paymentList || []);
            } catch (error) {
                console.error("회원 상세 정보 불러오기 실패:", error);
                alert("회원 정보를 불러오는 중 오류 발생");
            } finally {
                setLoading(false);
            }
        };

    const Age = (birthDate) => {
        if (!birthDate) return "정보 없음"; // 생년월일이 없는 경우 예외 처리
    
        const birthYear = new Date(birthDate).getFullYear(); // 출생 연도 추출
        const currentYear = new Date().getFullYear(); // 현재 연도
    
        return currentYear - birthYear; // 나이 계산
    };

    const updateNickname = async () => {
        if(!newNickname.trim()){
            alert("닉네임을 입력하세요");
            return;
        }

        try{
            const response = await jaxios.post("/api/member/updateMember", {
                ...user,
                nickname: newNickname,  // 변경된 닉네임
                
            });
            if(response.data.msg === "yes"){
                alert("닉네임이 성공적으로 변경되었습니다.");
                setUser(prev => ({ ...prev, nickname: newNickname }));
                setEditing(false);
            }else{
                alert("닉네임 변경 실패");
            }
        }catch(error){
            console.error("닉네임 변경 실패:", error);
            alert("닉네임 변경 중 오류 발생");
        }
    };










    return (
        <div className="userDetailPage">
            <div className="userDetailContent">
                <h1>회원 상세 정보</h1>

                <div className="content">
                    <div className="profileContainer">
                        <img src={user.image || "/images/default_image.jpg"} alt="프로필" className="image" />
                    </div>

                    <div className="infoContainer">
                        <p><strong>아이디:</strong> {user.memberId || "정보 없음"}</p>
                        <p><strong>이름:</strong> {user.name || "정보 없음"}</p>
                        <p><strong>이메일:</strong> {user.email || "정보 없음"}</p>
                        <p><strong>전화번호:</strong> {user.phone || "정보 없음"}</p>
                        <p><strong>나이:</strong> {user.birth ? Age(user.birth) + "세" : "정보 없음"}</p>
                        <p>
                            <strong>닉네임: </strong>
                            {editing ? (
                                <input
                                    type="text"
                                    value={newNickname}
                                    onChange={(e) => setNewNickname(e.target.value)}
                                    // onBlur={updateNickname} 
                                    onKeyDown={(e) => e.key === "Enter" && updateNickname()} 
                                    autoFocus
                                />
                            ) : (
                                <span
                                    className="clickable"
                                    onClick={() => setEditing(true)}
                                >
                                    {user.nickname || "정보 없음"}
                                </span>
                            )}
                        </p>


                    </div>
                </div>

                <h3>멤버십 정보</h3>
                {membership?.length > 0 ? (
                    <ul>
                        {membership.map((m, index) => (
                            <li key={index}>
                                {m.membershipCategory || "카테고리 없음"} - {m.endDate?.substring(0, 10) || "날짜 없음"}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>활성화된 멤버십 없음</p>
                )}

                <h3>결제 내역</h3>
                {paymentList?.length > 0 ? (
                    <ul>
                        {paymentList.map((p, index) => (
                            <li key={index}>
                                {p.orderName || "ID 없음"} - {p.createAt?.substring(0, 10) || "날짜 없음"} {p.amount || 0}원 ({p.paid ? "성공" : "실패"})
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>결제 내역 없음</p>
                )}

                <div className="buttonContainer">
                    <button className="backButton" onClick={() => navigate("/user")}>뒤로 가기</button>
                </div>
            </div>
        </div>
    );
};

export default UserDetail;
