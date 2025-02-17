import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import "../../../style/music.scss";
import AddArtistModal from './AddArtistModal';

const Artist = () => {

    const [artistList, setArtistList] = useState([]);
    const [search, setSearch] = useState("");
    const [showModal, setShowModal] = useState(false);

    const onSearch = (e) => { setSearch(e.target.value); };


    // const getArtistList = async () => {
    //     try {
    //         const response = await axios.get("/api/music/getArtistList"); // 백엔드에 전체 가수 목록 요청
    //         setArtistList(response.data.artistList || []);
    //     } catch (error) {
    //         console.error("가수 목록 불러오기 실패:", error);
    //     }
    // };

    // useEffect(() => {
    //     getArtistList();
    // }, []);



    



    const addArtistToList = async (newArtistId) => {
        try {
            const response = await axios.get(`/api/music/getArtist?artistId=${newArtistId}`);
            const newArtist = response.data.artist;
            if (newArtist) {
                setArtistList(prev => [...prev, newArtist]);
            }
        } catch (error) {
            console.error("새로운 가수 정보 불러오기 실패:", error);
        }
    };




    const searchFilter = search === "" ? artistList : artistList.filter(artist =>
        artist.artist_name.toLowerCase().includes(search.toLowerCase()) ||   
        artist.country.toLowerCase().includes(search.toLowerCase())
    );




    return (
        <div className={"musicPage"}>          
        <div className="musicContent">
        <h1>가수 관리</h1>
            <div className='top2' >
            <input type="text" className="searchInput" placeholder="가수 검색" value={search} onChange={onSearch}/>
            <button className="addMusicButton" onClick={() => setShowModal(true)}>가수 등록</button>   
            </div>   
            {showModal && <AddArtistModal onClose={() => setShowModal(false)} addArtistToList={addArtistToList} />}
                <table>
                    <thead>
                        <tr>
                            <th>이름</th>
                            <th>국적</th>                         
                            <th>데뷔일</th>
                            <th>이미지</th>
                        </tr>
                    </thead>
                    <tbody>
                        {artistList.length === 0 ? ( 
                            <tr>
                                <td colSpan="4" className="noData">등록된 가수가 없습니다.</td>
                            </tr>
                        ) : searchFilter.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="noData">검색 결과가 없습니다.</td>
                            </tr>
                        ) : ( 
                            searchFilter.map((artist, index) => (
                                <tr key={index}>
                                    <td>{artist.artistName}</td>
                                    <td>{artist.country}</td>                               
                                    <td>{artist.debut}</td>
                                    <td><img src={artist.image} alt="가수 이미지" width="50" /></td>

                                </tr>
                            ))
                        )}
                    </tbody>
                </table>                                    
            </div>
        </div>
    );
};

export default Artist
