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
import FastForwardIcon from '@mui/icons-material/FastForward';
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

const Div = styled('div')(() => ({
  backgroundColor: 'black',
  height: '70px',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
}));

const CustomPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: 'black',
  margin: theme.spacing(3, 6),
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  boxShadow: '0px 6px 16px rgba(0,0,0,0.8)',
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

const playlist = [music1, music2, music3, music4, music5];

export default function Player() {
  const audioPlayer = useRef();

  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(30);
  const [mute, setMute] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (audioPlayer && audioPlayer.current) {
      audioPlayer.current.volume = volume / 100;
    }

    if (isPlaying) {
      const intervalId = setInterval(() => {
        const _duration = Math.floor(audioPlayer?.current?.duration);
        const _elapsed = Math.floor(audioPlayer?.current?.currentTime);
        setDuration(_duration);
        setElapsed(_elapsed);
      }, 100);
      return () => clearInterval(intervalId);
    }
  }, [volume, isPlaying]);

  function formatTime(time) {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60);
      const seconds = Math.floor(time % 60) < 10 ? `0${Math.floor(time % 60)}` : Math.floor(time % 60);
      return `${minutes}:${seconds}`;
    }
    return '00:00';
  }

  const togglePlay = () => {
    if (!isPlaying) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
    setIsPlaying(prev => !prev);
  };

  const toggleForward = () => {
    audioPlayer.current.currentTime += 10;
  };

  const toggleBackward = () => {
    audioPlayer.current.currentTime -= 10;
  };

  const toggleSkipForward = () => {
    if (index >= playlist.length - 1) {
      setIndex(0);
      audioPlayer.current.src = playlist[0];
      audioPlayer.current.play();
    } else {
      setIndex(prev => prev + 1);
      audioPlayer.current.src = playlist[index + 1];
      audioPlayer.current.play();
    }
  };

  const toggleSkipBackword = () => {
    if (index > 0) {
      setIndex(prev => prev - 1);
      audioPlayer.current.src = playlist[index - 1];
      audioPlayer.current.play();
    }
  };

  function VolumeBtns() {
    return mute 
      ? <VolumeOffIcon sx={{ color: 'silver', '&:hover': { color: 'white', cursor: 'pointer' } }} onClick={() => setMute(!mute)} />
      : volume <= 20 
        ? <VolumeMuteIcon sx={{ color: 'silver', '&:hover': { color: 'white', cursor: 'pointer' } }} onClick={() => setMute(!mute)} />
        : volume <= 75 
          ? <VolumeDownIcon sx={{ color: 'silver', '&:hover': { color: 'white', cursor: 'pointer' } }} onClick={() => setMute(!mute)} />
          : <VolumeUpIcon sx={{ color: 'silver', '&:hover': { color: 'white', cursor: 'pointer' } }} onClick={() => setMute(!mute)} />;
  }

  return (
    <Div sx={{            border: '1px solid red' }}> 
      <audio src={playlist[index]} ref={audioPlayer} muted={mute} />
      <CustomPaper>
        <Box
          sx={{
            
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '75vw',
            gap: 2, // 전체 영역 간격 추가
          }}
        >
          {/* 왼쪽: 볼륨 컨트롤 (약 25% width) */}
          <Stack
            direction="row"
            spacing={1}
            sx={{
              flex: 0.4,
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
              sx={{ color: 'silver', width: '100%'}}
            />
          </Stack>

          {/* 가운데: 재생 진행바 (약 50% width) */}
          <Stack
            direction="row"
            spacing={1}
            sx={{
              marginLeft: '90px',  
              flex: 1.2,
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2
            }}
          >
            <Typography sx={{ color: 'silver' }}>{formatTime(elapsed)}</Typography>
            <PSlider thumbless="true" value={elapsed} max={duration} sx={{ mx: 2, width: '100%' }} />
            <Typography sx={{ color: 'silver' }}>{formatTime(duration - elapsed)}</Typography>
          </Stack>

          {/* 오른쪽: 재생 컨트롤러 (약 25% width) */}
          <Stack
            direction="row"
            spacing={1.5}
            sx={{
              flex: 0.5,
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1.5
            }}
          >
            <SkipPreviousIcon sx={{ color: 'silver', '&:hover': { color: 'white', cursor: 'pointer' } }} onClick={toggleSkipBackword} />
            <Replay10Icon fontSize="large" sx={{ color: 'silver', transform: 'scale(1.2)' ,'&:hover': { color: 'white', cursor: 'pointer' } }} onClick={toggleBackward} />
            {!isPlaying
              ? <PlayArrowIcon fontSize="large" sx={{ color: 'silver', transform: 'scale(1.5)' ,'&:hover': { color: 'white', cursor: 'pointer' } }} onClick={togglePlay} />
              : <PauseIcon fontSize="large" sx={{ color: 'silver', transform: 'scale(1.5)' ,'&:hover': { color: 'white', cursor: 'pointer' } }} onClick={togglePlay} />
            }
            <Forward10Icon fontSize="large" sx={{ color: 'silver', transform: 'scale(1.2)' ,'&:hover': { color: 'white', cursor: 'pointer' } }} onClick={toggleForward} />
            <SkipNextIcon sx={{ color: 'silver', '&:hover': { color: 'white', cursor: 'pointer' } }} onClick={toggleSkipForward} />
          </Stack>
        </Box>
      </CustomPaper>
    </Div>
  );
}
