import { useState } from "react";

import PurchasedMp3 from "./PurchasedMp3";
import PendingMp3 from "./PendingMp3";

import styles from "../../css/storage/storage.module.css";

const MyMP3 = ({ activeMp3Tab, setActiveMp3Tab }) => {
    return (
        <div>
            <nav className={styles.subTabMenu}>
                {
                  ["구매한 MP3", "구매할 MP3"].map((subTab) => (
                      <button
                          key={subTab}
                          className={`${styles.tabButton} ${activeMp3Tab === subTab ? styles.active : ""}`}
                          onClick={() => setActiveMp3Tab(subTab)}
                      >
                          {subTab}
                      </button>
                  ))
                }
            </nav>

            <div className={styles.mp3ContentArea}>
                {
                    (activeMp3Tab === "구매한 MP3") ? (
                        <PurchasedMp3/>
                    ) : (
                        <PendingMp3/>
                    )
                }
            </div>
        </div>        
    )
}

export default MyMP3;