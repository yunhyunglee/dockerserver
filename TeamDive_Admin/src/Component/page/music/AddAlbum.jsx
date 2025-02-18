import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddMusicModal from "./AddMusicModal";
import axios from "axios";
import "../../../style/addAlbum.scss";

const AddAlbum = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [artists, setArtists] = useState([]);

    const [newAlbum, setNewAlbum] = useState({
        title: "",
        image: "/images/default_image.jpg",
        albumId: "",
        artistId: null,
        musicList: [],
        indate:"",
        trackNumber: 0,
    });

    useEffect(() => {
        const getArtistList = async () => {
            try {
                const response = await axios.get("api/music/getAllArtist");
                setArtists(response.data.artist);
            } catch (error) {
                console.error("아티스트 목록 불러오기 실패", error);
            }
        };
        getArtistList();
    }, []);

    const onImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("image", file);

        try {
            const response = await axios.post("/api/music/imageUpload", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setNewAlbum((prev) => ({ ...prev, image: response.data.image }));
        } catch (error) {
            console.error("이미지 업로드 실패", error);
            alert("이미지 업로드 실패");
        }
    };

    const addMusic = (newSong) => {
        setNewAlbum((prev) => ({
            ...prev,
            musicList: [...prev.musicList, { ...newSong, artistId: prev.artistId }],
        }));
        setShowModal(false);
    };

    const checkTitleMusic = (index) => {
        setNewAlbum((prev) => ({
            ...prev,
            musicList: prev.musicList.map((song, i) => ({
                ...song,
                titleMusic: i === index, // ✅ 현재 선택된 곡만 true, 나머지는 false
            })),
        }));
    };

    const onSubmit = async () => {
        if (!newAlbum.title) return alert("앨범 제목을 입력하세요");
        if (!newAlbum.artistId) return alert("가수를 선택하세요");
        if (newAlbum.musicList.length === 0) return alert("노래를 추가하세요");

        try {
            let albumId = newAlbum.albumId;
            if (!albumId) {
                const albumResponse = await axios.post("/api/music/insertAlbum", {
                    title: newAlbum.title,
                    artist: { artistId: Number(newAlbum.artistId) }, // artistId 변환
                    image: newAlbum.image,
                });
                if(albumResponse.data.album) {
                    albumId = albumResponse.data.album.albumId;
                } else{
                    return alert("앨범 등록 실패");
                }
            }

            for (const music of newAlbum.musicList) {
                await axios.post("/api/music/insertMusic", {
                    ...music,
                    album: { albumId },
                    artist: { artistId: parseInt(newAlbum.artistId, 10) }, // artistId 변환
                });
            }
            alert("음원이 등록되었습니다!");
            navigate("/music");
        } catch (error) {
            console.error("음원 등록 실패:", error);
            alert("등록 중 오류 발생");
        }
    };

    return (
        <div className="mainContainer">
            <div className="contentBox">
                <div className="topBox">
                    <div className="imageUploadContainer">
                        <input type="file" id="imageUpload" accept="image/*" onChange={onImageUpload} style={{ display: "none" }} />
                        <img
                            src={newAlbum.image}
                            alt="앨범 커버"
                            className="albumCover"
                            onClick={() => document.getElementById("imageUpload").click()}
                        />
                    </div>

                    <div className="musicInfo">
                        <input
                            type="text"
                            name="title"
                            value={newAlbum.title}
                            onChange={(e) => setNewAlbum({ ...newAlbum, title: e.target.value })}
                            placeholder="앨범 제목"
                        />

                        <select value={newAlbum.artistId || ""} onChange={(e) => setNewAlbum({ ...newAlbum, artistId: parseInt(e.target.value, 10) })}>
                            <option value="">가수 선택</option>
                            {artists.map((artist) => (
                                <option key={artist.artistId} value={artist.artistId}>
                                    {artist.artistName}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="bottomBox">
                    <button className="addMusicBtn" onClick={() => setShowModal(true)}>+ 노래 추가</button>
                    {showModal && <AddMusicModal onClose={() => setShowModal(false)} onAddMusic={addMusic} albumId={newAlbum.albumId} artistId={newAlbum.artistId} />}
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
                            <th>타이틀</th>
                        </tr>
                    </thead>
                    <tbody>
                        {newAlbum.musicList.length === 0 ? (
                            <tr>
                                <td colSpan="6">등록된 노래가 없습니다.</td>
                            </tr>
                        ) : (
                            newAlbum.musicList.map((music, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{music.title}</td>
                                    <td>{music.genre}</td>
                                    <td>{music.bucketpath ? "파일 있음" : "파일 없음"}</td>
                                    <td>{music.lyrics}</td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={music.titleMusic}
                                            onChange={() => checkTitleMusic(index)}
                                        />
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AddAlbum;
