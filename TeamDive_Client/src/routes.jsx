import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./components/frame/LoginPage";
import { JoinForm } from "./components/frame/JoinForm";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<h4>메인페이지임</h4>} />
            <Route path="/today" element={<h4>오늘의 인기차트 페이지임</h4>} />
            <Route path="/playList" element={<h4>플리페이지임</h4>} />
            <Route path="/membership" element={<h4>멤버십 페이지임</h4>} />
            <Route path="/menu2" element={<h4>메뉴2 페이지임</h4>} />
            <Route path="/menu3" element={<h4>메뉴3 페이지임</h4>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<JoinForm />} />
        </Routes>
    );
}

export default AppRoutes;
