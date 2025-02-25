import React, { useEffect, useState } from "react";
import "../../../style/user.scss";
import jaxios from '../../../util/JwtUtil';
import { useNavigate } from "react-router-dom";

const User = () => {
    const [userList, setUserList] = useState([]);
    const [user, setUser] = useState(null);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [membership, setMembership] = useState(null);
    const [paymentList, setPaymentList] = useState([]);
    const navigate = useNavigate();


    const dummyUser = {
        memberId: "testUser",
        name: "홍길동",
        email: "test@example.com",
        phone: "010-1234-5678"
    };

    const dummyMembership = {
        membership: { name: "Premium" },
        expiryDate: "2025-12-31"
    };

    const dummyPayments = [
        { orderId: "PAY12345", amount: 9900, paid: true },
        { orderId: "PAY67890", amount: 4900, paid: false }
    ];






    
    const searchUser = async () => {
        if(!search.trim()) {
            alert("유저 아이디를 입력하세요");
            return;
        }

        setLoading(true);
        // try{
        //     const response = await jaxios.get("/api/member/searchUser", {
        //         params: {memberId: search}
        //     });
            if(search === "testUser") {
                setUser(dummyUser);
                // getUserDetails(response.data.user.memberId);
                setMembership(dummyMembership);
                setPaymentList(dummyPayments);
            }else{
                setUser(null);
                setMembership(null);
                setPaymentList([]);
                alert("사용자를 찾을 수 없습니다.");
            }

        // }catch(error){
        //     console.error("사용자 검색 실패:", error);
        //     alert("사용자 정보를 불러오는 중 오류 발생");
        // }
        setLoading(false);

    };
    

    const getUserDetails = async (memberId) => {
        setSelectedUser(userList.find(user => user.memberId === memberId));

        try{
            const getMembership = await jaxios.get("/api/membership/getActiveMembership", {
                params: {memberId}
            });
            setMembership(getMembership.data.memberShipUserList || null);

            const getPayment = await jaxios.get("/api/payments/getPaymentList", {
                params: {memberId}
            })
            setPaymentList(getPayment.data.paymemtList || []);

        }catch(error){
            console.error("회원 정보 불러오기 실패:", error);
            alert("회원 정보를 불러오는 중 오류 발생");
        };




    }



    return (
        <div className="userPage">
            <div className="userContent">
                <h1>회원 관리</h1>
                <div className="top2">
                    <input type="text" className="searchInput" placeholder="회원 검색 (이름, 이메일)" value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button className="searchBtn" onClick={searchUser}>검색</button>
                </div>

                {loading && <p>로딩 중...</p>}

                {user ? (
                    <div className="userDetail">
                        <h2>{user.name}님의 정보</h2>
                        <p><strong>아이디:</strong> {user.memberId}</p>
                        <p><strong>이메일:</strong> {user.email}</p>
                        <p><strong>전화번호:</strong> {user.phone}</p>

                        <h3>멤버십 정보</h3>
                        {membership ? (
                            <p>{membership.membership.name} - {membership.expiryDate}까지</p>
                        ) : (
                            <p>활성화된 멤버십 없음</p>
                        )}

                        <h3>결제 내역</h3>
                        {paymentList.length > 0 ? (
                            <ul>
                                {paymentList.map((payment, index) => (
                                    <li key={index}>{payment.orderId} - {payment.amount}원 ({payment.paid ? "성공" : "실패"})</li>
                                ))}
                            </ul>
                        ) : (
                            <p>결제 내역 없음</p>
                        )}

                        
                    </div>
                ) : (
                    <p>검색 결과가 없습니다.</p>
                )}
            </div>
        </div>
    );
};

export default User
