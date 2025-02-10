import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Login from "./page/Login";
import Dashboard from "./page/DashBoard";

export default function App() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
            <Routes>       
                <Route path="/" element={<Login />} />
                <Route path="/dashBoard" element={<Dashboard />} />
            </Routes>
        </motion.div>
    );
}