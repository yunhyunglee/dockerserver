import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../../style/music.scss";
import AddMusicModal from "../api/AddMusicModal";
import SideBar from "../SideBar";

const Music = () => {
    const [musicList, setMusicList] = useState([
        { music_id: 1, title: "Dive In", genre: "Pop", image: "/images/dive.jpg", audio_url: "/music/dive.mp3" },
        { music_id: 2, title: "Deep Blue", genre: "Electronic", image: "/images/deepblue.jpg", audio_url: "/music/deepblue.mp3" },
        { music_id: 3, title: "Ocean Sound", genre: "Chill", image: "/images/ocean.jpg", audio_url: "/music/ocean.mp3" }
    ]);
  
    const [modalOpen, setModalOpen] = useState(false);
    const [search, setSearch] = useState("");

    const onSearch = (e) => {
        setSearch(e.target.value);
    };


    const searchFilter = search === "" 
    ? musicList 
    : musicList.filter(music =>
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
                <button className="addMusicButton" onClick={() => setModalOpen(true)}>음원 추가</button>   
                </div>   
                    <table>
                        <thead>
                            <tr>
                                <th>번호</th>
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
                                    <td>{index + 1}</td>
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
                {modalOpen && <AddMusicModal onClose={() => setModalOpen(false)} />}
            </div>
        </div>
    );
};

export default Music
