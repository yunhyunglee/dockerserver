import React, { useEffect, useState, useMemo, useCallback  } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import "../../../style/music.scss";

const Music = () => {
    const [musicList, setMusicList] = useState([]);

    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const onSearch = (e) => {
        setSearch(e.target.value);
    };


    const searchFilter = search === "" 
    ? musicList : musicList.filter(music =>
        (music.album_title ? music.album_title.toLowerCase().includes(search.toLowerCase()) : false) ||   
        (music.title ? music.title.toLowerCase().includes(search.toLowerCase()) : false) ||
        (music.genre ? music.genre.toLowerCase().includes(search.toLowerCase()) : false) 
        
    );


    // const PostMusicList = async () => {
    //     try {
    //         const response = await axios.post("/api/music/");
    //         setMusicList(response.data);
    //     } catch (error) {
    //         console.error("음원 목록을 불러오지 못했습니다:", error);
    //     }
    // };

    // useEffect(() => {
    //     PostMusicList();
    // }, [])





    // useEffect(()=>{
    //     axios.get("/api/music/")
    //         .then((res) => { 
    //             console.log("음원데이터: ", res.data);
    //             setMusicList(res.data);
    //         })
    //         .catch((error)=>{console.error("음원 목록을 불러오지 못했습니다2", error)});       
    // }, []);

    


    return (
        <div className={"musicPage"}>          
            <div className="musicContent">
            <h1>음원 관리</h1>
                <div className='top2' >
                <input type="text" className="searchInput" placeholder="음원 검색 (제목 또는 장르)" value={search} onChange={onSearch}/>
                <button className="addMusicButton" onClick={() => navigate("/AddMusic")}>음원 추가</button>   
                </div>   
                    <table>
                        <thead>
                            <tr>
                                <th>앨범</th>
                                <th>제목</th>                         
                                <th>장르</th>
                                <th>이미지</th>
                                <th>재생</th>
                            </tr>
                        </thead>
                        <tbody>
                            {musicList.length === 0 ? ( 
                                <tr>
                                    <td colSpan="7" className="noData">등록된 음원이 없습니다.</td>
                                </tr>
                            ) : searchFilter.length === 0 ? (
                                <tr>
                                    <td colSpan="7" className="noData">검색 결과가 없습니다.</td>
                                </tr>
                            ) : ( 
                                searchFilter.map((music, index) => (
                                    <tr key={index}>
                                        <td>{music.album_title}</td>
                                        <td>{music.title}</td>                               
                                        <td>{music.genre}</td>
                                        <td><img src={music.image} alt={music.title} width="50" /></td>
                                        <td>
                                            <audio controls>
                                                <source src={music.audio_url} type="audio/mpeg" />
                                                브라우저가 오디오 태그를 지원하지 않습니다.
                                            </audio>
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

export default Music
