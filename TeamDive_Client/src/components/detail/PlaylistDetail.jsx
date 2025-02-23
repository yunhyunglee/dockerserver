import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import jaxios from "../../util/JwtUtil";

const PlaylistDetail = () => {
  const { playlistId } = useParams(); 
  const [playlist, setPlaylist] = useState(null);
  const [loading, setLoading] = useState(true);  



    useEffect(() => {
        if (!playlistId) {
        return;
        }

        jaxios.get(`/api/music/playlistDetail`, {params: { playlistId },})
        .then((response) => {
            setPlaylist(response.data.playlist);
        })
        .catch((error) => {
        console.error(error);
        })
        .finally(() => {
        setLoading(false);  
        });
    }, [playlistId]);

    if (loading) return <p>로딩 중...</p>;
    if (!playlist) return <p>플레이리스트를 찾을 수 없습니다.</p>;

  return (
    <div>
      <h2>{playlist.title}</h2>
      <img src={playlist.coverImage} alt="커버 이미지" />
      <p>{playlist.content}</p>
      <p>곡 수: {playlist.musicList.length}곡</p>
    </div>
  );
};

export default PlaylistDetail;
