import React, { useEffect, useState } from "react";
import jaxios from "../../../util/JwtUtil";
import "../../../style/membership.scss";

const MembershipAdmin = () => {
    const [membershipList, setMembershipList] = useState([]);
    const [loading, setLoading] = useState(false);


    const getMemberships = async () => {
        setLoading(true);
        try {
            const response = await jaxios.get("/api/membership/getMembership", {
                params: { category: "all" }
            });
            setMembershipList(response.data.membershipList || []);
        } catch (error) {
            console.error("멤버십 목록 불러오기 실패:", error);
            alert("멤버십 정보를 불러오는 중 오류 발생");
        } finally {
            setLoading(false);
        }
    };

    const updateMembership = async (membership) => {
        try {
            const response = await jaxios.post("/api/membership/updateMembership", membership);
    
            if (response.data?.msg === "yes") {
                alert("멤버십 정보가 수정되었습니다.");
                getMemberships(); // UI 업데이트
            } else {
                alert("수정 실패!");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("요청 실패!");
        }
    };

    const toggleMembershipActive = async (membershipId) => {
        try {
            const response = await jaxios.put("/api/membership/toggleMembershipActive", {
                membershipId: membershipId  // ✅ JSON body로 전달
            });
    
            if (response.data?.msg === "yes") {
                getMemberships(); // 상태 변경 후 UI 업데이트
            } else {
                alert("변경 실패!");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("요청 실패!");
        }
    };









    useEffect(() => {
        getMemberships();
    }, []);



    return (
        <div className="membershipPage">
            <h1>멤버십 관리</h1>
            {loading && <p>로딩 중...</p>}

            <table className="membershipTable">
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>가격</th>
                        <th>기간</th>
                        <th>사용자 수</th>
                        <th>상태</th>
                        <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                    {membershipList.length === 0 ? (
                        <tr><td colSpan="7">등록된 멤버십이 없습니다.</td></tr>
                    ) : (
                        membershipList.map((membership, index) => (
                            <tr key={index}>
                                <td>{membership.category || "정보 없음"}</td>
                                <td>{membership.price?.toLocaleString() || "0"}원</td>
                                <td>{membership.duration}일</td>
                                <td>{membership.userCount || 0}명</td>
                                <td>
                                    <div
                                        className={`toggle-switch ${membership.active ? "active" : "inactive"}`}
                                        onClick={() => toggleMembershipActive(membership.membershipId)}>
                                        <div className="toggle-thumb"></div>
                                    </div>
                                </td>

                                
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default MembershipAdmin;
