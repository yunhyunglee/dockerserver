import styles from "../../css/storage.module.css";


const MyMP3 = ({ activeMp3Tab, setActiveMp3Tab, pendingMp3, purchasedMp3 }) => {

    

    return (
        <div>
           
        <nav className={styles.subTabMenu}>
          {["구매한 MP3", "구매할 MP3"].map((subTab) => (
            <button
              key={subTab}
              className={`${styles.tabButton} ${activeMp3Tab === subTab ? styles.active : ""}`}
              onClick={() => setActiveMp3Tab(subTab)}
            >
              {subTab}
            </button>
          ))}
        </nav>

        
        <div className={styles.mp3ContentArea}>
          {activeMp3Tab === "구매한 MP3" ? (
            purchasedMp3.length === 0 ? (
              <div className={styles.emptyMessage}>
                <h2>구매한 MP3</h2>
                <p>구매한 MP3가 없습니다.</p>
              </div>
            ) : (
              <ul>
                {purchasedMp3.map((mp3, idx) => (
                  <li key={idx}>{mp3}</li>
                ))}
              </ul>
            )
          ) : (
            pendingMp3.length === 0 ? (
              <div className={styles.emptyMessage}>
                <h2>구매할 MP3</h2>
                <p>구매하려고 담아둔 MP3가 없습니다.</p>
              </div>
            ) : (
              <ul>
                {pendingMp3.map((mp3, idx) => (
                  <li key={idx}>{mp3}</li>
                ))}
              </ul>
            )
          )}
        </div>
      </div>        
    )
}

export {MyMP3}