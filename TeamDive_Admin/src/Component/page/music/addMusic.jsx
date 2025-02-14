import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../../style/addMusic.scss";

const addMusic = () => {
    const navigate = useNavigate();
    const [editingField, setEditingField] = useState(null); 



    const [newMusic, setNewMusic] = useState({
        title: "",
        genre: "",
        album_id: "",
        artist_id: "",
        image: "",
        lyrics: "",
        audio_url: "",
        play_count: 0,
    });

    

    const onChange = (e) => {
        setNewMusic({...newMusic,[e.target.name]: e.target.value, });
    };

    const onEdit = (field) => {
        setEditingField(field);
    }

    const onBlur = () => {
        setEditingField(null);
    };

    const onImageUpload  = (e)=>{
        const file = e.target.files[0];
        if(file) {
            const reader = new FileReader();
            reader.onloaded = () => {
                setNewMusic((prev) => ({ ...prev, image: reader.result })); 
            };
            reader.readAsDataURL(file);          
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/api/music/insertMusic", newMusic);
            alert("음원이 추가되었습니다!");
            navigate("/music"); 
        } catch (error) {
            console.error("음원 등록 실패:", error);
        }
    };





    return (
        <div className="addMusicPage">
        <div className="contentContainer">
            {/* ✅ 이미지 업로드 */}
            <div className="imageUploadContainer">
                <input type="file" id="imageUpload" accept="image/*" onChange={onImageUpload} style={{ display: "none" }} />
                <img src={newMusic.image} alt="앨범 커버" className="albumCover" onClick={() => document.getElementById("imageUpload").click()} />
                {/* <p className="uploadText">이미지를 클릭하여 변경</p> */}
            </div>

            {/* ✅ 곡 정보 입력 */}
            <div className="musicInfo">
                <h1>{newMusic.title}</h1>

                <div className="editableField" onClick={() => onEdit("title")}>
                    <label>곡 제목:</label>
                    {editingField === "title" ? (
                        <input type="text" name="title" value={newMusic.title} onChange={onChange} onBlur={onBlur} autoFocus />
                    ) : (
                        <span>{newMusic.title}</span>
                    )}
                </div>

                <div className="editableField" onClick={() => onEdit("genre")}>
                    <label>장르:</label>
                    {editingField === "genre" ? (
                        <input type="text" name="genre" value={newMusic.genre} onChange={onChange} onBlur={onBlur} autoFocus />
                    ) : (
                        <span>{newMusic.genre}</span>
                    )}
                </div>

                <div className="editableField" onClick={() => onEdit("lyrics")}>
                    <label>가사:</label>
                    {editingField === "lyrics" ? (
                        <input type="text" name="lyrics" value={newMusic.lyrics} onChange={onChange} onBlur={onBlur} autoFocus />
                    ) : (
                        <span>{newMusic.lyrics}</span>
                    )}
                </div>

                <div className="editableField" onClick={() => onEdit("audio_url")}>
                    <label>오디오 URL:</label>
                    {editingField === "audio_url" ? (
                        <input type="text" name="audio_url" value={newMusic.audio_url} onChange={onChange} onBlur={onBlur} autoFocus />
                    ) : (
                        <span>{newMusic.audio_url}</span>
                    )}
                </div>

                <div className="editableField" onClick={() => onEdit("album_id")}>
                    <label>앨범 ID:</label>
                    {editingField === "album_id" ? (
                        <input type="number" name="album_id" value={newMusic.album_id} onChange={onChange} onBlur={onBlur} autoFocus />
                    ) : (
                        <span>{newMusic.album_id}</span>
                    )}
                </div>

                {/* ✅ 버튼 */}
                <div className="buttons">
                    <button type="submit" className="btn" onClick={onSubmit}>등록</button>
                    <button type="button" className="btn cancel" onClick={() => navigate("/music")}>취소</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default addMusic
