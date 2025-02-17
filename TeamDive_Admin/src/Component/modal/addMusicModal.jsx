import React, { useState } from "react";
import "../../style/addMusicModal.scss";

const AddMusicModal = ({onClose, onAddSong}) => {

    const [newSong, setNewSong] = useState({
        title: "",
        genre: "",
        lyrics: "",
        audio_url: "",
        title_music: false,
    });

    const onChange = (e) => {
        setNewSong({ ...newSong, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onAddSong(newSong); 
        setNewSong({ title: "", genre: "", lyrics: "", audio_url: "", title_music: false });
        onClose(); 
    };



    return (
        <div className="modalOverlay" onClick={onClose}>
            <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                <h2>노래 추가</h2>
                <form onSubmit={onSubmit}>
                    <input type="text" name="title" value={newSong.title} onChange={onChange} placeholder="노래 제목" required />
                    <input type="text" name="genre" value={newSong.genre} onChange={onChange} placeholder="장르" required />
                    <input type="file" name="audio" value={newSong.audio} onChange={onChange} placeholder="오디오" required />
                    <textarea name="lyrics" value={newSong.lyrics} onChange={onChange} placeholder="가사 입력" rows="4"></textarea>
                    
                    <div className="checkboxContainer">
                        <label>
                            <input type="checkbox" name="title_music" checked={newSong.title_music} onChange={(e) => setNewSong({ ...newSong, title_music: e.target.checked })} />
                            타이틀 곡 여부
                        </label>
                    </div>

                    <div className="modalActions">
                        <button type="submit" className="primaryBtn">추가</button>
                        <button type="button" className="secondaryBtn" onClick={onClose}>취소</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMusicModal
