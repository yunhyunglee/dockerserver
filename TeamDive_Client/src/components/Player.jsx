import React, { useState, useEffect, useRef } from 'react';

import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

// ------------ ICONS -------------
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';

import PauseIcon from '@mui/icons-material/Pause';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import Forward10Icon from '@mui/icons-material/Forward10';
import Replay10Icon from '@mui/icons-material/Replay10';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// ----------------------------------

import music1 from '../sampleMusic/music1.mp3'; 
import music2 from '../sampleMusic/music2.mp3'; 
import music3 from '../sampleMusic/music3.mp3'; 
import music4 from '../sampleMusic/music4.mp3'; 
import music5 from '../sampleMusic/music5.mp3';
import { useSelector } from 'react-redux';
import axios from 'axios';

// 플레이리스트: 각 노래에 src, 제목, 가수 정보를 담은 객체 배열
const playlist = [
    { src: music1, title: '별별별', artist: '엔믹스' ,musicId:1},
    { src: music2, title: 'Dash', artist: '엔믹스' ,musicId:2},
    { src: music3, title: '럽미랔뎃', artist: '엔믹스' ,musicId:3},
    { src: music4, title: '고민중독', artist: 'QWER' ,musicId:4},
    { src: music5, title: '디스코드', artist: 'QWER' ,musicId:5},
];

const CustomPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: 'black',
    margin: theme.spacing(0),
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    boxShadow: 'none',
}));

const PSlider = styled(Slider)(({ theme, ...props }) => ({
    color: 'silver',
    height: 6,
    '&:hover': {
        cursor: 'pointer',
    },
    '& .MuiSlider-thumb': {
        width: '15px',
        height: '15px',
        display: props.thumbless ? 'none' : 'block',
        boxShadow: '0px 0px 8px rgba(255,255,255,0.8)',
    },
}));

export default function Player() {
    const audioRef = useRef();

    const [index, setIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(30);
    const [mute, setMute] = useState(false);
    const [elapsed, setElapsed] = useState(0);
    const [duration, setDuration] = useState(0);

  // 현재 재생 중인 노래 정보
    const currentSong = playlist[index];
    const loginUser=useSelector(state=>state.user);
    const [playCounts,setPlayCounts]=useState({});
    const musicPlay = (songId) => {
        // alert('재생했다')
        setPlayCounts(prev => ({
            ...prev,
            [songId]:(prev[songId] || 0) + 1
        }));
    };
    useEffect(() => {
      
        const interval = setInterval(() => {
            // alert('인터벌 작동중')
            if (Object.keys(playCounts).length > 0) {
                axios.post("/api/music/addPlayCount",playCounts,{params:{ memberId: loginUser.memberId }}) // 서버에 전송
                    .then(() => setPlayCounts({})) // 성공하면 초기화
                    .catch(err => console.error("Error sending play counts:", err));
            }
        }, 5000); // 60초마다 전송
        return () => clearInterval(interval);
    }, [playCounts]);

    useEffect(()=>{
      console.log(playCounts);
      console.log(currentSong.musicId);
    },[playCounts])
    


    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = mute ? 0 : volume / 100;
        }
        if (isPlaying) {
            const intervalId = setInterval(() => {
                const _duration = Math.floor(audioRef.current?.duration);
                const _elapsed = Math.floor(audioRef.current?.currentTime);
                setDuration(_duration);
                setElapsed(_elapsed);
          }, 100);
            return () => clearInterval(intervalId);
        }
    }, [volume, mute, isPlaying]);

    useEffect(() => {
        const audioEnd = audioRef.current;
        if (audioEnd) {
            // 오디오가 끝나면 toggleSkipForward 함수를 호출
            const handleEnded = () => {
              toggleSkipForward('auto');
          };
          
            audioEnd.addEventListener('ended', handleEnded);
            return () => {
              audioEnd.removeEventListener('ended', handleEnded);
          };
        }
    }, [index]);
  



    const formatTime = (time) => {
        if (time && !isNaN(time)) {
            const minutes = Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60);
            const seconds = Math.floor(time % 60) < 10 ? `0${Math.floor(time % 60)}` : Math.floor(time % 60);
            return `${minutes}:${seconds}`;
        }
        return '00:00';
    };

    const togglePlay = () => {
        if (!isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        setIsPlaying((prev) => !prev);
    };

    const toggleForward = () => {
        audioRef.current.currentTime += 10;
    };

    const toggleBackward = () => {
        audioRef.current.currentTime -= 10;
    };

    const toggleSkipForward = (skipType = 'manual') => {
      setIndex((prevIndex) => {
        const nextIndex = prevIndex >= playlist.length - 1 ? 0 : prevIndex + 1;
        if (audioRef.current) {
          audioRef.current.src = playlist[nextIndex].src;
          audioRef.current.load();
          audioRef.current.onloadedmetadata = () => {
            // 자동 스킵이고, 다음 인덱스가 0이면 자동 재생하지 않고 멈춤
            if (skipType === 'auto' && nextIndex === 0) {
              audioRef.current.pause();
              setIsPlaying(false);
            } else {
              audioRef.current
                .play()
                .catch((err) => console.error("Play error:", err));
            }
          };
        }
        return nextIndex;
      });
    };
    
    
  
    const toggleSkipBackword = (skipType = 'manual') => {
      const prevIndex = index <= 0 ? playlist.length - 1 : index - 1;
      setIndex(prevIndex);
      if (audioRef.current) {
        audioRef.current.src = playlist[prevIndex].src;
        audioRef.current.load();
        audioRef.current.onloadedmetadata = () => {
          // 자동 백(skipType이 'auto')이고 prevIndex가 마지막 곡이면 자동 재생하지 않음
          if (skipType === 'auto' && prevIndex === playlist.length - 1) {
            audioRef.current.pause();
            setIsPlaying(false);
          } else {
            audioRef.current.play().catch(err => {
              console.error("Play error:", err);
            });
          }
        };
      }
    };
    
  

    const VolumeBtns = () => {
        if (mute) return <VolumeOffIcon sx={{ color: 'silver', '&:hover': { color: 'white', cursor: 'pointer' } }} onClick={() => setMute(!mute)} />;
        if (volume <= 20) return <VolumeMuteIcon sx={{ color: 'silver', '&:hover': { color: 'white', cursor: 'pointer' } }} onClick={() => setMute(!mute)} />;
        if (volume <= 75) return <VolumeDownIcon sx={{ color: 'silver', '&:hover': { color: 'white', cursor: 'pointer' } }} onClick={() => setMute(!mute)} />;
        return <VolumeUpIcon sx={{ color: 'silver', '&:hover': { color: 'white', cursor: 'pointer' } }} onClick={() => setMute(!mute)} />;
    };

  return (
   
      <footer className="footer">
        <audio src={currentSong.src} ref={audioRef} muted={mute} onPlay={()=>musicPlay(currentSong.musicId)}/>
        <CustomPaper>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: { xs: 'center', sm: 'space-between' },
                    flexDirection: { xs: 'column', sm: 'row' },
                    width: { xs: '100vw', sm: '100vw' },
                    gap: 2,
                }}
            >
              {/* 왼쪽: 볼륨 컨트롤 */}
                <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                        flex: { xs: 'unset', sm: 0.2 },
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        gap: 1.5,
                  }}
                >
                  <VolumeBtns />
                  <Slider
                      min={0}
                      max={100}
                      value={volume}
                      onChange={(e, v) => setVolume(v)}
                      sx={{ color: 'silver', width: '100%' }}
                  />
                </Stack>

              {/* 가운데: 재생 진행바 */}
                <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                        flex: { xs: 'unset', sm: 1.2 },
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 2,
                        width: { xs: '90vw', sm: 'auto' },
                  }}
                >
                    <Typography sx={{ color: 'silver' }}>{formatTime(elapsed)}</Typography>
                    <PSlider
                          thumbless="true"
                          value={isNaN(elapsed) ? 0 : elapsed}
                          max={isNaN(duration) ? 0 : duration}
                          sx={{ mx: 2, width: { xs: '90vw', sm: '100%' } }}
                  />

                  <Typography sx={{ color: 'silver' }}>{formatTime(duration - elapsed)}</Typography>
                </Stack>

              {/* 오른쪽: 재생 컨트롤러 */}
                <Stack
                    direction="row"
                    spacing={1.5}
                    sx={{
                        flex: { xs: 'unset', sm: 0.5 },
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1.5,
                    }}
                >
                    <SkipPreviousIcon sx={{ color: 'silver', '&:hover': { color: 'white', cursor: 'pointer' } }} onClick={toggleSkipBackword} />
                    <Replay10Icon fontSize="large" sx={{ color: 'silver', transform: 'scale(1.2)', '&:hover': { color: 'white', cursor: 'pointer' } }} onClick={toggleBackward} />
                    {!isPlaying
                      ? <PlayArrowIcon fontSize="large" sx={{ color: 'silver', transform: 'scale(1.5)', '&:hover': { color: 'white', cursor: 'pointer' } }} onClick={togglePlay} />
                      : <PauseIcon fontSize="large" sx={{ color: 'silver', transform: 'scale(1.5)', '&:hover': { color: 'white', cursor: 'pointer' } }} onClick={togglePlay} />
                    }
                    <Forward10Icon fontSize="large" sx={{ color: 'silver', transform: 'scale(1.2)', '&:hover': { color: 'white', cursor: 'pointer' } }} onClick={toggleForward} />
                    <SkipNextIcon sx={{ color: 'silver', '&:hover': { color: 'white', cursor: 'pointer' } }} onClick={toggleSkipForward} />
                </Stack>
            

            {/* 현재 노래 정보를 플레이어 컨트롤 아래쪽에 배치 */}
                  <Stack
                        sx={{
                            flex: { xs: 'unset', sm: 0.4 },
                            alignItems: 'center',
                          
                        }}
                    >
                  <Typography variant="h6" sx={{ color: 'silver' }}>
                      {currentSong.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'silver' }}>
                      {currentSong.artist}
                  </Typography>
                </Stack>
            </Box>
        </CustomPaper>
      </footer>
  );
}
