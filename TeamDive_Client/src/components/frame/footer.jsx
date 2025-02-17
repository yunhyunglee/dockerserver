// src/components/Footer.jsx
import { useEffect, useRef, useState } from 'react';
import styles from '../../css/footer.module.css';
import jaxios from '../../util/JWTUtil';
import Player from '../Player';

const playList=[];

function Footer() {





    return (
        <div className={styles.footer}>
            <Player />
        </div>
    );
}

export { Footer };
