import styles from "../../css/storage/storage.module.css";

const LikedAlbum = ({likedAlbum}) => {
    return (
           <div>
             {likedAlbum.length === 0 ? (
               <div className={styles.emptyMessage}>
                 <h2>앨범 보관함</h2>
                 <p>내가 좋아하는 앨범을 저장해보세요</p>
               </div>
             ) : (
               <ul>
                 {likedAlbum.map((album, idx) => (
                   <li key={idx}>{album}</li>
                 ))}
               </ul>
             )}
           </div>       
    )
}


export default LikedAlbum;