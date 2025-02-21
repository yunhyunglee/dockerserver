import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/member/loginPage";
import KakaoLogin from "./components/member/KakaoLogin";
import JoinForm from "./components/member/JoinForm";
import Membership from "./components/membership/Membership";
import MainPage from "./components/frame/mainpage/MainPage";
import MusicDetail from "./components/music/MusicDetail";
import PopularChart from "./components/PopularChart";
import Storage from "./components/storage/storage";
import { PlaylistPage } from "./components/playlist/PlaylistPage";
import MyMP3 from "./components/storage/MyMP3";

import PaymentsCheckout from "./components/payments/PaymentsCheckout";
import PaymentsSuccess from "./components/payments/PaymentsSuccess";
import PaymentsFail from "./components/payments/PaymentsFail";

import Mypage from "./components/member/mypage/Mypage";

import Top100 from "./components/Top100";


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/today" element={<PopularChart />} />
            <Route path="/playList" element={<PlaylistPage />} />
            <Route path="/membership/:category" element={<Membership />} />
            <Route path="/storage" element={<Storage />} />
            <Route path="/menu3" element={<h4>메뉴3 페이지임</h4>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/kakaoLogin/:memberId" element={<KakaoLogin />} />
            <Route path="/sign-up" element={<JoinForm />} />

            <Route path="/music/:musicId" element={<MusicDetail />} />

            {/* 토스 페이먼트 api */}
            <Route path="/payments" element={<PaymentsCheckout />} />
            <Route path="/success" element={<PaymentsSuccess />} />
            <Route path="/fail" element={<PaymentsFail />} />

            {/* 마이페이지 */}
            <Route path="/mypage/:mypageCategory" element={<Mypage />} />

            {/* 스토리지 */}
            <Route path="/storage/:storageCategory" element={<Storage />}/>
            <Route path="/storage/:storageCategory/:mp3Category" element={<Storage />} />

            {/* top100 */}
            <Route path="/top100" element={<Top100 />}/>


        </Routes>
    );
}

export default AppRoutes;
