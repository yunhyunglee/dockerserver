package com.himedia.projectteamdive.service;

import com.himedia.projectteamdive.dto.MusicDto;
import com.himedia.projectteamdive.dto.RecommendationScore;
import com.himedia.projectteamdive.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class AIService {

    @Autowired
    MusicRepository mr;

    public List<MusicDto> getRecommend(String mood) {

        List<String> genres = getRecommendedGenres(mood);   // 감정별 추천 장르
        List<String> similarMoods = getSimilarMoods(mood);  // 유사 감정
        RecommendationScore score = getRecommendationScore(mood); // 추천점수 점수

        List<MusicDto> musicList = new ArrayList<>();

        // 감정과 장르에 따른 추천
        musicList.addAll(
            mr.getMusicByMoodAndGenre(mood, genres, score.getEmotionScore())
        );

        // 유사 감정과 장르에 따른 추천
        if (musicList.size()<score.getTotalLimit()){
            musicList.addAll(mr.getMusicBySimilarMoodsAndGenre(similarMoods, genres, score.getSimilarScore()));
        };

        // 인기 음악 추천(playCount)
        if (musicList.size()<score.getTotalLimit()){
            musicList.addAll(mr.getPopularMusic(score.getPopularScore()));
        };

        // 부족할 경우 랜덤으로 추천
        if (musicList.size()<score.getTotalLimit()){
            musicList.addAll(mr.getRandomMusic(score.getRandomScore()));
        };

        return musicList.stream().limit(50).toList(); // 최대 50개 리스트업
    }

    // 감정별 추천 장르 정의
    private List<String> getRecommendedGenres(String mood) {
        switch (mood.toLowerCase()) {
            case "happy":
                return List.of("팝", "록", "전자음악");
            case "sad":
                return List.of("재즈", "클래식", "기타");
            case "angry":
                return List.of("힙합&랩", "록", "전자음악");
            case "boring":
                return List.of("클래식", "기타", "재즈");
            case "normal":
            default:
                return List.of("록", "팝", "힙합&랩", "재즈", "클래식", "전자음악", "기타");
        }
    }

    // 감정별 유사 감정 정의
    private List<String> getSimilarMoods(String mood) {
        switch (mood.toLowerCase()) {
            case "happy":
                return List.of("normal", "angry");
            case "sad":
                return List.of("boring", "normal");
            case "angry":
                return List.of("normal", "boring");
            case "boring":
                return List.of("sad", "happy");
            case "normal":
            default:
                return List.of("happy", "sad", "angry");
        }
    }

    // 감정별 추천 비율
    private RecommendationScore getRecommendationScore(String mood) {
        switch (mood.toLowerCase()) {
            case "happy":
                return new RecommendationScore(30, 10, 5, 5);  // 60%, 20%, 10% 10% 비율로 50곡 구성
            case "sad":
                return new RecommendationScore(35, 10, 3, 2);  // 70%, 20%, 6% 4% 비율로 50곡 구성
            case "angry":
                return new RecommendationScore(30, 10, 7, 3);  // 60%, 20%, 14% 6% 비율로 50곡 구성
            case "boring":
                return new RecommendationScore(25, 15, 7, 3);  // 50%, 30%, 14% 6% 비율로 50곡 구성
            case "normal":
            default:
                return new RecommendationScore(20, 15, 10, 5); // 40%, 30%, 20% 10% 비율로 50곡 구성
        }
    }
}

