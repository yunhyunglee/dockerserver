import { motion } from "framer-motion";

export default function DashBoard() {
    return (
        <div className="dashBoard">
            <h1>관리자 대시보드</h1>
            <div className="dashBoardCards">
                <motion.div className="dard" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} >
                    <h2>총 사용자</h2>
                    <p>1200명</p>
                </motion.div>

                <motion.div className="dard" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
                    <h2>총 음원</h2>
                    <p>5000곡</p>
                </motion.div>

                <motion.div className="dard" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}>
                    <h2>총 재생 수</h2>
                    <p>100000회</p>
                </motion.div>
            </div>
        </div>
    );
}
