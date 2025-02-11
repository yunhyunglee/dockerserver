import { Routes, Route, Link } from 'react-router-dom';
import styles from '../../css/main.module.css';
import AppRoutes from '../../routes';

function Home({ menubar }) {
    return (
        <div className={styles.container}>
          
          
            <div className={`${styles.sidebar} ${menubar ? styles.open : ''}`}>
                <Link to='/' className={styles.link}>🏠</Link> <br />
                <Link to='/today' className={styles.link}>오늘의 인기차트</Link><br />
                <Link to='/playList' className={styles.link}>플레이리스트 모음</Link><br />
                <Link to='/membership/all' className={styles.link}>멤버십</Link><br />
                <Link to='/menu2' className={styles.link}>메뉴2</Link><br />
                <Link to='/menu3' className={styles.link}>메뉴3</Link><br />

                <div className={styles.sidebarEnd}>
                    <Link to='/login' className={styles.linkEnd}>로그인</Link><br />
                    <Link to='/sign-up' className={styles.linkEnd}>회원가입</Link><br />
                </div>
            </div>

            <div className={`${styles.main} ${menubar ? styles.move : ""}`}>
                <AppRoutes />  
            </div>
        </div>
    );
}

export { Home };
