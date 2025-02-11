import { motion } from "framer-motion";
import { useState } from "react";
import "../style/login.scss";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function onLogin(){
        console.log("로그인 요청:", email, password);
    };

    return (
        <motion.div className="loginContainer" initial={{ opacity: 0, y: -400 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h2>Admin Login</h2>
            <input type="email" placeholder="이메일 입력" value={email} onChange={(e) => {
                setEmail(e.target.value)}}/>
            <input type="password" placeholder="비밀번호 입력" value={password} onChange={(e) => {
                setPassword(e.currentTarget.value)}}/>
            <motion.button onClick={onLogin} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                로그인
            </motion.button>
        </motion.div>
    );
}

