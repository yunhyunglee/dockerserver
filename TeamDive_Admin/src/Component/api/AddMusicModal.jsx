import React, { useState } from "react";
import axios from "axios";
import "../../style/AddMusicModal.scss"; // ✅ 모달 스타일 적용

const AddMusicModal = ({ onClose }) => {
    const [newMusic, setNewMusic] = useState({
        title: "",
        genre: "",
        image: "",
        lyrics: "",
        audio_url: "",
    });

    // ✅ 입력 값 변경 핸들러
    const onChange = (e) => {
        setNewMusic({
            ...newMusic,
            [e.target.name]: e.target.value,
        });
    };

    
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/api/music/insertMusic", newMusic);
            alert("음원이 추가되었습니다!");
            onClose(); 
        } catch (error) {
            console.error("음원 등록 실패:", error);
        }
    };

    return (
        <div className="modalOverlay" onClick={onClose}>
            <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                <h2>음원 추가</h2>
                <form onSubmit={onSubmit} className="musicForm">
                    <input type="text" name="title" value={newMusic.title} onChange={onChange} placeholder="제목" required />
                    <input type="text" name="genre" value={newMusic.genre} onChange={onChange} placeholder="장르" required />
                    <input type="text" name="image" value={newMusic.image} onChange={onChange} placeholder="앨범 이미지 URL" />
                    <input type="text" name="lyrics" value={newMusic.lyrics} onChange={onChange} placeholder="가사" />                
                    <input type="text" name="audio_url" value={newMusic.audio_url} onChange={onChange} placeholder="오디오 URL" required />            
                    <div className="modalActions">
                        <button type="submit">추가</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMusicModal;
