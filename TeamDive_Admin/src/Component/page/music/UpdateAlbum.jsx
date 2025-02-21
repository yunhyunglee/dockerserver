import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AddMusicModal from "./AddMusicModal";
import axios from "axios";
import { format } from "date-fns";
import "../../../style/addAlbum.scss";

const UpdateAlbum = ( {getAlbumList}) => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [artist, setArtist] = useState([]);
    const { albumId } = useParams();
    const [album, setAlbum] = useState(null);

    const [updateAlbum, setUpdateAlbum] = useState({
        title: "",
        image: "/images/default_image.jpg",
        albumId: null,
        artistId: null,
        musicList: [],
        indate: format(new Date(), "yyyy-MM-dd"),
        trackNumber: 0,
    });


    useEffect(()=> {
        const getAlbum = async () => {
            try{
                const response = await axios.get(`/api/music/getAlbum?albumId=${albumId}`);
                console.log("📀 가져온 앨범 데이터:", response.data.album);
                setAlbum(response.data.album);
            } catch(error){
                console.error("앨범 정보를 불러오는 중 오류", error);
                alert("앨범 정보를 불러오는 중 오류");
            }
        };
        if (albumId) getAlbum();
    }, [albumId]);


    useEffect(() => {
        if (album) {
    
            setUpdateAlbum({
                title: album.title || "",
                image: album.image || "/images/default_image.jpg",
                albumId: album.albumId || null,
                artistId: album.artist?.artistId || "", 
                musicList: album.musicList || [],
                indate: album.indate || format(new Date(), "yyyy-MM-dd"),
                trackNumber: album.trackNumber || 0,
            });
        }
    }, [album]); 
    





    useEffect(()=> {
        const getArtistList = async () => {
            try{
                const response = await axios.get("/api/music/getAllArtist");
                setArtist(response.data.artist || response.data.artists || []);
            }catch(error){
                console.error("아티스트 목록을 불러오는 중 애러");
                alert("아티스트 목록을 불러오는 중 애러");
            }
        };
        getArtistList();
    }, []) ;

    useEffect(() => {
        console.log("🎤 현재 artist 상태:", artist);
    }, [artist]);
    
    useEffect(() => {
        console.log("🎶 현재 updateAlbum 상태:", updateAlbum);
    }, [updateAlbum]);



    const onChange = (e) => {
        setUpdateAlbum({ ...updateAlbum, [e.target.name]: e.target.value });
    };


    


    const onImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const formData = new FormData();
        formData.append("image", file);
        try {
            const response = await axios.post("/api/music/imageUpload", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setUpdateAlbum((prev) => ({ ...prev, image: response.data.image }));
        } catch (error) {
            console.error("이미지 업로드 실패", error);
            alert("이미지 업로드 실패");
        }
    };

    const addMusic = (newSong) => {
        setUpdateAlbum((prev) => {
            const maxTrackNumber = prev.musicList.length > 0 
            ? Math.max(...prev.musicList.map((song) => song.trackNumber)) 
            : 0;
            return {
                ...prev,
                musicList: [
                    ...prev.musicList,
                    {
                        ...newSong,
                        artistId: prev.artistId,
                        trackNumber: maxTrackNumber === 0 ? 1 : maxTrackNumber + 1 , 
                        image: newSong.image || prev.image,

                    },
                ],
            };
        });
        setShowModal(false);
    };

    const checkTitleMusic = (index) => {
        setUpdateAlbum((prev) => ({
            ...prev,
            musicList: prev.musicList.map((song, i) => ({
                ...song,
                titleMusic: i === index, 
            })),
        }));
    };

    const onSubmit = async () => {
        if (!updateAlbum.title) return alert("앨범 제목을 입력하세요");
        if (!updateAlbum.artistId) return alert("가수를 선택하세요");
        if (updateAlbum.musicList.length === 0) return alert("노래를 추가하세요");

        try {
            let albumId = updateAlbum.albumId;
            if (!albumId) {
                const albumResponse = await axios.post("/api/music/updateAlbum", {
                    title: updateAlbum.title,
                    artist: { artistId: Number(updateAlbum.artistId) }, // artistId 변환
                    image: updateAlbum.image,
                });
                if(albumResponse.data.album ==="yes") {
                    albumId = albumResponse.data.album.albumId;
                    setUpdateAlbum((prev) => ({ ...prev, albumId }));
                } else{
                    return alert("앨범 등록 실패");
                }
            }

            for (const music of updateAlbum.musicList) {
                await axios.post("/api/music/insertMusic", {
                    ...music,
                    album: { albumId },
                    artist: { artistId: Number(updateAlbum.artistId) }, // artistId 변환
                });
            }
            alert("음원이 등록되었습니다!");
            navigate("/musicController/album");
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
                        <img src={updateAlbum.image} alt="앨범 커버" className="albumCover"  onClick={() => document.getElementById("imageUpload").click()} />
                    </div>

                    <div className="musicInfo">
                        <input type="text"  name="title" value={updateAlbum.title} onChange={onChange} placeholder="앨범 제목" />

                        <select value={updateAlbum.artistId || ""} onChange={(e) => setUpdateAlbum({ ...updateAlbum, artistId: Number(e.target.value) })}>
                            <option value="">가수 선택</option>
                            {artist.map((artist) => (
                                <option key={artist.artistId} value={artist.artistId}>
                                    {artist.artistName}
                                </option>
                            ))}
                        </select>
                        <input type="date" name="indate" value={updateAlbum.indate} onChange={onChange} required />    

                    </div>
                </div>

                <div className="bottomBox">
                    <button className="addMusicBtn" onClick={() => setShowModal(true)}>+ 노래 추가</button>
                    {showModal && <AddMusicModal onClose={() => setShowModal(false)} onAddMusic={addMusic} albumId={updateAlbum.albumId} artistId={updateAlbum.artistId} />}
                    <button type="submit" className="btn submitBtn" onClick={onSubmit}>등록</button>
                    <button type="button" className="btn cancelBtn" onClick={() => navigate("/music")}>취소</button>
                </div>

                <table className="musicTable">
                    <thead>
                        <tr>
                            <th>타이틀</th>
                            <th>번호</th>
                            <th>제목</th>
                            <th>장르</th>
                            <th>파일</th>
                            
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {updateAlbum.musicList.length === 0 ? (
                            <tr>
                                <td colSpan="6">등록된 노래가 없습니다.</td>
                            </tr>
                        ) : (
                            
                            updateAlbum.musicList.map((music, index) => (
                                <tr key={index}>
                                    <td><input type="checkbox"checked={music.titleMusic}onChange={() => checkTitleMusic(index)} />
                                    </td>
                                    <td>{music.trackNumber}</td>
                                    <td>{music.title}</td>
                                    <td>{music.genre}</td>
                                    <td>{music.bucketPath ? "파일 있음" : "파일 없음"}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UpdateAlbum;
