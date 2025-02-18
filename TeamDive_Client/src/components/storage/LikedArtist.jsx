import styles from "../../css/storage/storage.module.css";

const LikedArtist = ({likedArtist}) => {
    return (
        <div>
            {likedArtist.length === 0 ? (
                <div className={styles.emptyMessage}>
                    <h2>아티스트 보관함</h2>
                    <p>내가 좋아하는 아티스트들을 저장해보세요</p>
                </div>
            ) : (
                <ul>
                    {likedArtist.map((artist, idx) => (
                        <li key={idx}>{artist}</li>
                    ))}
                </ul>
            )}
        </div>        
    )
}


export default LikedArtist;