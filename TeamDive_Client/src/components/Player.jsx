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
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
// ----------------------------------

import music1 from '../sampleMusic/music1.mp3';
import music2 from '../sampleMusic/music2.mp3';
import music3 from '../sampleMusic/music3.mp3';
import music4 from '../sampleMusic/music4.mp3';
import music5 from '../sampleMusic/music5.mp3';


const originalPlaylist = [
  { src: 'https://d9k8tjx0yo0q5.cloudfront.net/music/482b8d00-08e4-4391-a40c-535aaaebcfbdHopeful - Nat Keefe.mp3', title: '별별별', artist: '엔믹스' },
  { src: music2, title: 'Dash', artist: '엔믹스' },
  { src: music3, title: '럽미랔뎃', artist: '엔믹스' },
  { src: music4, title: '고민중독', artist: 'QWER' },
  { src: music5, title: '디스코드', artist: 'QWER' },
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

// 유틸: 배열을 랜덤하게 섞는 함수
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function Player() {
  const audioRef = useRef();

  // ========== 재생 상태 관련 ==========
  const [index, setIndex] = useState(0);    
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(30);
  const [mute, setMute] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);

  // ========== 반복, 셔플 ==========
  const [isRepeat, setIsRepeat] = useState(false);   // 단일 곡 반복
  const [isShuffle, setIsShuffle] = useState(false); // 랜덤 재생

 
  const [shuffleQueue, setShuffleQueue] = useState([]);
  const [shufflePos, setShufflePos] = useState(0);

  
  const playlist = originalPlaylist;

  
  let currentSong;
  if (isShuffle && shuffleQueue.length > 0) {
    currentSong = playlist[shuffleQueue[shufflePos]];
  } else {
    currentSong = playlist[index];
  }

 
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
      }, 500);
      return () => clearInterval(intervalId);
    }
  }, [volume, mute, isPlaying]);

  
  useEffect(() => {
    const audioEl = audioRef.current;
    if (!audioEl) return;

    const handleEnded = () => {
      
      toggleSkipForward('auto');
    };

    audioEl.addEventListener('ended', handleEnded);
    return () => {
      audioEl.removeEventListener('ended', handleEnded);
    };
  }, [isShuffle, shuffleQueue, shufflePos, index, isRepeat]);

  
  const togglePlay = () => {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  
  const handleAudioChange = (songIndex, autoPlay = true) => {
    const src = playlist[songIndex].src;
    audioRef.current.src = src;
    audioRef.current.load();
    audioRef.current.onloadedmetadata = () => {
      if (autoPlay) {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.error('Play error:', err));
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };
  };

  // ===== 이전 곡 =====
  const toggleSkipBackward = () => {
    // 셔플 모드
    if (isShuffle) {
      setShufflePos((prevPos) => {
        let newPos = prevPos - 1;
        if (newPos < 0) {
          newPos = shuffleQueue.length - 1;
        }
        handleAudioChange(shuffleQueue[newPos], true);
        return newPos;
      });
    } else {
      // 일반 모드
      setIndex((prevIndex) => {
        const newIndex = prevIndex <= 0 ? playlist.length - 1 : prevIndex - 1;
        handleAudioChange(newIndex, true);
        return newIndex;
      });
    }
  };

  // ===== 다음 곡 =====
  const toggleSkipForward = (skipType = 'manual') => {
   
    if (isRepeat && skipType === 'auto') {
     
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => console.error('Play error:', err));
      return;
    }

   
    if (isShuffle) {
      setShufflePos((prevPos) => {
        let newPos = prevPos + 1;
        
        if (newPos >= shuffleQueue.length) {
          const newQueue = shuffleArray([...playlist.keys()]);
          setShuffleQueue(newQueue);
          newPos = 0;
        }
        
        if (skipType === 'auto' && newPos === 0) {
          handleAudioChange(shuffleQueue[newPos], false);
        } else {
          handleAudioChange(shuffleQueue[newPos], true);
        }
        return newPos;
      });
      return;
    }

    
    setIndex((prevIndex) => {
      const newIndex = prevIndex >= playlist.length - 1 ? 0 : prevIndex + 1;
      if (skipType === 'auto' && newIndex === 0) {
        handleAudioChange(newIndex, false);
      } else {
        handleAudioChange(newIndex, true);
      }
      return newIndex;
    });
  };

  
  const toggleRepeat = () => {
    setIsRepeat((prev) => !prev);
  };

 
  const toggleShuffle = () => {
    
    if (!isShuffle) {
      const newQueue = shuffleArray([...playlist.keys()]);
      setShuffleQueue(newQueue);
      setShufflePos(0);

      
      const currentIndex = isShuffle ? shuffleQueue[shufflePos] : index;
      const findPos = newQueue.findIndex((val) => val === currentIndex);
      if (findPos !== -1) {
        setShufflePos(findPos);
      }
    }
    setIsShuffle((prev) => !prev);
  };

  // ===== 시간 포맷 함수 =====
  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes =
        Math.floor(time / 60) < 10
          ? `0${Math.floor(time / 60)}`
          : Math.floor(time / 60);
      const seconds =
        Math.floor(time % 60) < 10
          ? `0${Math.floor(time % 60)}`
          : Math.floor(time % 60);
      return `${minutes}:${seconds}`;
    }
    return '00:00';
  };

  // ===== 볼륨 아이콘 =====
  const VolumeBtns = () => {
    if (mute)
      return (
        <VolumeOffIcon
          sx={{ color: 'silver', '&:hover': { color: 'white', cursor: 'pointer' } }}
          onClick={() => setMute(!mute)}
        />
      );
    if (volume <= 20)
      return (
        <VolumeMuteIcon
          sx={{ color: 'silver', '&:hover': { color: 'white', cursor: 'pointer' } }}
          onClick={() => setMute(!mute)}
        />
      );
    if (volume <= 75)
      return (
        <VolumeDownIcon
          sx={{ color: 'silver', '&:hover': { color: 'white', cursor: 'pointer' } }}
          onClick={() => setMute(!mute)}
        />
      );
    return (
      <VolumeUpIcon
        sx={{ color: 'silver', '&:hover': { color: 'white', cursor: 'pointer' } }}
        onClick={() => setMute(!mute)}
      />
    );
  };

  return (
    <footer className="footer">
      {/* 현재 곡 */}
      <audio ref={audioRef} muted={mute} src={currentSong.src} />
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
              padding: '0 0 0 14px'
            }}
          >
            <VolumeBtns />
            <Slider
              min={0}
              max={100}
              value={volume}
              onChange={(e, v) => setVolume(v)}
              sx={{
                color: 'silver',
                width: {
                  xs: '150px',
                  sm: '100%',
                },
              }}
            />
          </Stack>

          {/* 가운데: 재생 진행바 */}
          <Stack
            direction="row"
            spacing={1}
            sx={{
              flex: { xs: 'unset', sm: 1. },
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              width: { xs: '90vw', sm: 'auto' },
            }}
          >
            <Typography sx={{ color: 'silver' }}>
              {formatTime(elapsed)}
            </Typography>
            <PSlider
              min={0}
              max={duration}
              value={elapsed}
              onChange={(e, newValue) => setElapsed(newValue)}
              onChangeCommitted={(e, newValue) => {
                if (audioRef.current) {
                  audioRef.current.currentTime = newValue;
                }
              }}
            />
            <Typography sx={{ color: 'silver', padding: '0 20px  0 0' }}>
              {formatTime(duration - elapsed)}
            </Typography>
          </Stack>

          {/* 오른쪽: 컨트롤 버튼들 */}
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
            {/* 이전 곡 */}
            <SkipPreviousIcon
              sx={{ color: 'silver', '&:hover': { color: 'white', cursor: 'pointer' } }}
              onClick={toggleSkipBackward}
            />

            {/* 재생/일시정지 */}
            {!isPlaying ? (
              <PlayArrowIcon
                fontSize="large"
                sx={{
                  color: 'silver',
                  transform: 'scale(1.5)',
                  '&:hover': {
                    color: 'white',
                    cursor: 'pointer',
                    transform: 'scale(1.3)',
                    transition: '0.3s',
                  },
                }}
                onClick={togglePlay}
              />
            ) : (
              <PauseIcon
                fontSize="large"
                sx={{
                  color: 'silver',
                  transform: 'scale(1.5)',
                  '&:hover': {
                    color: 'white',
                    cursor: 'pointer',
                    transform: 'scale(1.3)',
                    transition: '0.3s',
                  },
                }}
                onClick={togglePlay}
              />
            )}

            {/* 다음 곡 */}
            <SkipNextIcon
              sx={{ color: 'silver', '&:hover': { color: 'white', cursor: 'pointer' } }}
              onClick={() => toggleSkipForward('manual')}
            />

            {/* 반복 버튼 */}
            <RepeatIcon
              sx={{
                color: isRepeat ? 'hotpink' : 'silver',
                '&:hover': { color: 'white', cursor: 'pointer' },
              }}
              onClick={toggleRepeat}
            />

            {/* 셔플 버튼 */}
            <ShuffleIcon
              sx={{
                color: isShuffle ? 'hotpink' : 'silver',
                '&:hover': { color: 'white', cursor: 'pointer' },
              }}
              onClick={toggleShuffle}
            />
          </Stack>

          {/* 현재 노래 정보 */}
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
