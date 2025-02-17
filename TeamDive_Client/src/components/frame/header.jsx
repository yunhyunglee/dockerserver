import { Link } from 'react-router-dom';
import styles from '../../css/header.module.css'

function MainHeader({toggleMenu}){
    

    return(
        <div className={styles.header}>
            <button className={styles.menu} onClick={toggleMenu}>메뉴버튼</button>
            <Link to='/' ><img src="/image/image.png" className={styles.mainLogo}></img></Link>
        </div>
    )
}





export {MainHeader};