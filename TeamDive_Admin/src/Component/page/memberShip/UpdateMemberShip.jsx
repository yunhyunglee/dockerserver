import React from 'react'
import "../../../style/Updatemembership.scss";

const UpdateMemberShip = () => {



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















    return (
        <div>
                <h1>업데이트 멤버쉽</h1>






        </div>
    )
}

export default UpdateMemberShip
