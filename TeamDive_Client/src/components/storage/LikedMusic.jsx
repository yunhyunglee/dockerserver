import styles from "../../css/storage.module.css";


const LikedMusic = ({likedMusic}) => {
    return (
          <div>
            {likedMusic.length === 0 ? (
              <div className={styles.emptyMessage}>
                <h2>좋아하는 노래</h2>
                <p>내가 좋아하는 노래들을 모아서 감상해보세요</p>
              </div>
            ) : (
              <ul>
                {likedMusic.map((music, idx) => (
                  <li key={idx}>{music}</li>
                ))}
              </ul>
            )}
          </div>        
    )
}


export {LikedMusic}