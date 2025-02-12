import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../style/sidebar.scss";

const SideBar = () => {
    const [SidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className={`sidebar ${SidebarOpen ? "open" : "closed"}`}>
            {/* <button className="toggleSidebarBtn" onClick={() => setSidebarOpen(!SidebarOpen)}>
                {SidebarOpen ? "◀" : "▶"} 
            </button> */}
            <h2 className="logo">Dive Admin</h2>
            <ul>
                <li><Link to="/dashBoard">대시보드</Link></li>
                <li><Link to="/users">사용자 관리</Link></li>
                <li><Link to="/music">음원 관리</Link></li>
                <li><Link to="/4">예시1</Link></li>
                <li><Link to="/5">예시2</Link></li>
                <li><Link to="/6">예시3</Link></li>
            </ul>
        </div>
    )
}

export default SideBar
