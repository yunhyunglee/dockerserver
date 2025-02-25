import { useState, useEffect } from "react";

import styles from "../../css/storage/storage.module.css";

const PurchasedMp3 = () => {
    const [purchasedMp3, setPurchasedMp3] = useState([]);

    return (
        <div>
            {
                purchasedMp3.length === 0 ? (
                    <div className={styles.emptyMessage}>
                        <h2>구매한 MP3</h2>
                        <p>구매한 MP3가 없습니다.</p>
                    </div>
                ) : (
                    <></>
                )
            }
        </div>
    )
}

export default PurchasedMp3;