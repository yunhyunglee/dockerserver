// src/components/Footer.jsx
import styles from '../../css/footer.module.css';


function Footer() {

    return (
        <div className={styles.footer}>
            <audio className={styles['audio-player']} controls>
            
              <source src="/audio/test.m4a"/>
              브라우저가 오디오 태그를 지원하지 않습니다.
            </audio>
        </div>
    );
}

export { Footer };
