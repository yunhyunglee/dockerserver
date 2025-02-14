import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddMusicModal from "../../modal/addMusicModal";
import axios from "axios";
import "../../../style/addMusic.scss";

const addMusic = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [artists, setArtists] = useState([]);


    const [newAlbum, setNewAlbum] = useState({
        title: "",
        artist_id: null,
        artist_name: "",
        image: "/images/default_album.jpg",
        album_id: null,
        musicList: [],
    });

    const [newMusic, setNewMusic] = useState({
        title: "",
        genre: "",
        lyrics: "",
        play_count: 0,
        title_music: false,
        audio_url: "",
        album_id: newAlbum.album_id,
        artist_id: newAlbum.artist_id,
    });

    const onArtistChange = async (e) => {
        const artistName = e.target.value;
        setNewAlbum({ ...newAlbum, artist_name: artistName });

        const checkArtist = artists.find(artist => artist.artist_name === artistName);

        if(checkArtist) {
            setNewAlbum(prev => ({...prev, artist_id: setNewAlbum.artist_id }));

        }else{
            try{
                const response = await axios.post("/api/music/insertArtist", { artist_name: artistName});
                setNewAlbum(prev => ({...prev, artist_id: response.data.artist_id}));
                setArtists([...artists, { artist_id: response.data.artist_id, artist_name: artistName}]);
            }catch(error){
                console.error("가수 추가 실패", error);
            }
        }
    };

    const onImageUpload  = (e)=>{
        const file = e.target.files[0];
        if(file) {
            const reader = new FileReader();
            reader.onloaded = () => {
                setNewAlbum((prev) => ({ ...prev, image: reader.result })); 
            };
            reader.readAsDataURL(file);          
        }
    };

    const addMusic = (newSong) =>{
        setNewAlbum(prev => ({
            ...prev,
            musicList: [...prev.musicList, {
                ...newSong,
                album_id: prev.album_id,
                artist_id: prev.artist_id,
            }]
        }));
        setNewMusic({ title: "", genre: "", lyrics: "", play_count: 0, title_music: false, audio_url: "", album_id: newAlbum.album_id, artist_id: newAlbum.artist_id });
        setShowModal(false);
    };


    // const onFileUpload = async (e) => {
    //     const file = e.target.files[0];
    //     if(!file) return;

    //     const formData = new FormData();
    //     formData.append("file", file);

    //     try{
    //         const response = await axios.post("/api/music/musicUpload", formData, {
    //             headers: { "Content-Type": "multipart/form-data" },
    //         });

    //         if(response.data.msg === "yes"){
    //             alert("음원 파일이 업로드되었습니다!");
    //         }

    //     }catch(error){
    //         console.error("음원파일 업로드 실패", error);
    //     }
    // }


    const onSubmit = async () => {
        if(!newAlbum.title){return alert("앨범 제목을 입력하세요")}
        if(!newAlbum.artist_name){return alert("가수를 입력하세요")}
        if( newAlbum.musicList.length === 0 ){return alert("노래를 추가하세요")}
    


        try {
            let albumId = newAlbum.album_id;

            if (!albumId) {
                const albumResponse = await axios.post("/api/music/insertAlbum", {
                    title: newAlbum.title,
                    artist_id: newAlbum.artist_id,
                    genre: newAlbum.genre,
                    image: newAlbum.image,
                });
                albumId = albumResponse.data.album_id;
            }

            for (const music of newAlbum.musicList) {
                await axios.post("/api/music/insertMusic", {
                    title: newMusic.title,
                    genre: newMusic.genre,
                    lyrics: newMusic.lyrics,
                    play_count: newMusic.play_count,
                    title_music: newMusic.title_music,
                    audio_url: newMusic.audio_url,
                    album_id: albumId,
                    artist_id: newAlbum.artist_id,
                });
            }
            alert("음원이 등록되었습니다!");
            navigate("/music");
        } catch (error) {
            console.error("음원 등록 실패:", error);
        }
    };








    

    const onChange = (e) => {
        setNewMusic({...newMusic,[e.target.name]: e.target.value, });
    };

    const onEdit = (field) => {
        setEditingField(field);
    }

    const onBlur = () => {
        setEditingField(null);
    };







    return (
        <div className="mainContainer">
            <div className="contentBox">
                {/* ✅ 상단 (앨범 정보) */}
                <div className="topBox">
                    <div className="imageUploadContainer">
                        <input type="file" id="imageUpload" accept="image/*" onChange={onImageUpload} style={{ display: "none" }} />
                        <img 
                            src={newAlbum.image} 
                            alt="앨범 커버" 
                            className="albumCover" 
                            onClick={() => document.getElementById("imageUpload").click()} 
                            onError={(e) => { e.target.src = "/images/default_album.jpg"; }}
                        />
                    </div>

                    <div className="musicInfo">
                        <input type="text" name="title" value={newAlbum.title} onChange={(e) => setNewAlbum({ ...newAlbum, title: e.target.value })} placeholder="앨범 제목" />
                        <input type="text" name="artist_name" value={newAlbum.artist_name} onChange={onArtistChange} placeholder="가수 이름" />
                    </div>
                </div>

                {/* ✅ 하단 (노래 리스트 & 추가 버튼) */}
                <div className="bottomBox">
                    <button className="addMusicBtn" onClick={() => setShowModal(true)}>+ 노래 추가</button>
                    {showModal && <AddMusicModal onClose={() => setShowModal(false)} onAddSong={addMusic} />}                
                    <button type="submit" className="btn submitBtn" onClick={onSubmit}>등록</button>
                    <button type="button" className="btn cancelBtn" onClick={() => navigate("/music")}>취소</button>
                </div>   
                    <table className="musicTable">
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>장르</th>
                                <th>파일</th>
                                <th>가사</th>
                            </tr>
                        </thead>
                        <tbody>
                            {newAlbum.musicList.length === 0 ? (
                                <tr><td colSpan="5">등록된 노래가 없습니다.</td></tr>
                            ) : (
                                newAlbum.musicList.map((music, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{music.title}</td>
                                        <td>{music.genre}</td>
                                        <td>{music.audio_url ? music.audio_url : "파일 없음"}</td>
                                        <td>{music.lyrics}</td>
                                    </tr>
                                ))
                                
                            )}
                            
                        </tbody>
                    </table>
                
            </div>
        </div>
    );
};

export default addMusic
