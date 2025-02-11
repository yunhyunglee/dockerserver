import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./components/frame/loginPage";
import { JoinForm } from "./components/frame/JoinForm";
import { Membership } from "./components/membership/Membership";
import MainPage from "./components/frame/mainpage/MainPage";
import MusicDetail from "./components/music/MusicDetail";

import { PaymentsCheckout } from "./components/payments/PaymentsCheckout";
import { PaymentsSuccess } from "./components/payments/PaymentsSuccess";
import { PaymentsFail } from "./components/payments/PaymentsFail";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/today" element={<h4>오늘의 인기차트 페이지임</h4>} />
            <Route path="/playList" element={<h4>플리페이지임</h4>} />
            <Route path="/membership/:category" element={<Membership/>} />
            <Route path="/menu2" element={<h4>메뉴2 페이지임</h4>} />
            <Route path="/menu3" element={<h4>메뉴3 페이지임</h4>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<JoinForm />} />



            <Route path="/music/:musicId" element={<MusicDetail />} />

            {/* 토스 페이먼트 api */}
            <Route path="/payments" element={<PaymentsCheckout />} />
            <Route path="/payments/success" element={<PaymentsSuccess />} />
            <Route path="/payments/fail" element={<PaymentsFail />} />
        </Routes>
    );
}

export default AppRoutes;
