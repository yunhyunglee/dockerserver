import React, { useState } from "react";
import axios from "axios";
import "../../../style/addMusicModal.scss";

const AddMusicModal = ({ onClose, onAddMusic, albumId, artistId }) => {
    // const [uploadedBucketPath, setUploadedBucketPath] = useState(""); // ✅ S3 업로드 URL 저장
    const GENRES = ["록", "팝", "힙합&랩", "재즈", "클래식", "전자음악", "기타"];


    const [newSong, setNewSong] = useState({
        title: "",
        genre: GENRES[0],
        lyrics: "",
        bucketPath: "",
    });

    const onChange = (e) => {
        setNewSong({ ...newSong, [e.target.name]: e.target.value });
    };



    const onFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("music", file);

        try {
            const response = await axios.post("/api/music/musicUpload", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            if (response.data.music) {
                setNewSong((prev) => ({ ...prev, bucketPath: response.data.music }));
            }
        } catch (error) {
            console.error("음원 파일 업로드 실패:", error);
            alert("음원 업로드 실패");
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!newSong.title.trim()) return alert("곡 제목을 입력해주세요.");
        if (!newSong.bucketPath) return alert("음원 파일을 업로드해주세요.");

        const musicData = {
            ...newSong,
            album: { albumId },
            artist: { artistId },
            titleMusic: false,
        };

        onAddMusic(musicData);
        onClose();
    };

    return (
        <div className="modalOverlay" onClick={onClose}>
            <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                <h2>노래 추가</h2>
                <form onSubmit={onSubmit}>
                <input type="text" name="title" value={newSong.title} onChange={onChange} placeholder="곡 제목" required />
                    <select name="genre" value={newSong.genre} onChange={onChange} required>
                        <option value="">장르 선택</option>
                        {GENRES.map((genre) => (
                            <option key={genre} value={genre}>{genre}</option>
                        ))}
                    </select>
                    
                    <textarea name="lyrics" value={newSong.lyrics} onChange={onChange} placeholder="가사"></textarea>

                    <label>음원 파일 업로드</label>
                    <input type="file" accept="audio/*" onChange={onFileUpload} />

                    <div className="modalActions">
                        <button type="submit">추가</button>
                        <button type="button" className="cancel" onClick={onClose}>취소</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMusicModal;
