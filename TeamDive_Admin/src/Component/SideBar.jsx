import React, { useState } from "react";
import { Link, useLocation  } from "react-router-dom";
import { FaTachometerAlt, FaUsers, FaMusic, FaCog } from "react-icons/fa";

import "../style/sidebar.scss";

const SideBar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const location = useLocation();


    const menuItems = [
        { path: "/dashboard", openText: "대시보드", closedText: "대시", icon: <FaTachometerAlt /> },
        { path: "/users", openText: "사용자 관리", closedText: "사용자", icon: <FaUsers /> },
        { path: "/music", openText: "음원 관리", closedText: "음원", icon: <FaMusic /> },
        { path: "/settings", openText: "설정", closedText: "설정", icon: <FaCog /> },

    ];





    return (
        <div className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
            <button className="toggleSidebarBtn" onClick={() => setSidebarOpen(!sidebarOpen)}>
                {sidebarOpen ? "◀" : "▶"} 
            </button>
            <h2 className="logo">{sidebarOpen ? "Dive Admin" : "DA"}</h2>
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index} className={location.pathname === item.path ? "active" : ""}>
                        <Link to={item.path}>{sidebarOpen ? item.openText : item.icon}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SideBar
