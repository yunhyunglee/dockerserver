package com.himedia.projectteamdive.controller;

import com.himedia.projectteamdive.dto.MusicDto;
import com.himedia.projectteamdive.service.ChatService;
import com.himedia.projectteamdive.service.MusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/chat")

public class ChatController {

    @Autowired
    private ChatService chatService;


    @Autowired
    private MusicService musicService;


    @PostMapping("/ask")
    // ResponseEntity<?> 를 쓰면 HaspMap보다 더 유연하게 HTTP 상태코드를 쉽게 지정 할 수 있다함
    //   ResponseEntity.badRequest() 이런거로 에러응답을 직관적으로 가능하게 한다함
    public ResponseEntity<?> chat(@RequestBody HashMap<String, Object> request) {
        try {
            String userMessage = (String) request.get("text");
            if (userMessage == null || userMessage.trim().isEmpty()) {
                return ResponseEntity.badRequest().body(Map.of("error", "메시지가 비어 있습니다."));
            }  // 걍 에러반환




            // 챗서비스에서 사용자가 입력한 내용을 토대로 내 api가지고 있는 gpt응답을 response에 저장함
            String response = chatService.chatWithGPT(userMessage);

            // 아직 더 추가해야함
            Map<String, String> moodMap = new HashMap<>();
            moodMap.put("슬퍼", "sad");
            moodMap.put("슬픈", "sad");
            moodMap.put("우울", "sad");
            moodMap.put("기뻐", "happy");
            moodMap.put("기쁜", "happy");
            moodMap.put("행복", "happy");
            moodMap.put("신나", "happy");
            moodMap.put("짜증", "angry");
            moodMap.put("화가", "angry");
            moodMap.put("화나", "angry");
            moodMap.put("나빠", "angry");
            moodMap.put("지루", "boring");
            moodMap.put("심심", "boring");
            moodMap.put("루즈", "boring");
            moodMap.put("랜덤", "normal");
            moodMap.put("아무", "normal");
            moodMap.put("일상", "normal");
            moodMap.put("무난", "normal");


            // 보낸 메세지에 저거 있으면 넣고
            String detectedMood = null;
            for (String keyword : moodMap.keySet()) {
                if (userMessage.contains(keyword)) {
                    detectedMood = moodMap.get(keyword);
                    break;
                }
            }

            // "슬퍼" 기분적인것만 말해도 노래리스트가 나와서 조건 추가함
            boolean userRequestMusic = userMessage.contains("노래 추천")
                    || userMessage.contains("추천") ;






            if (detectedMood != null && userRequestMusic) {
                List<MusicDto> recommendedMusic = musicService.getMusicByMood(detectedMood);
                if(!recommendedMusic.isEmpty()){
                    StringBuilder musicInfo = new StringBuilder("<br> 그런 기분에 맞는 노래추천해드릴게요! <br>"); // 이건 문자열 추가해주는거
                    for (MusicDto md : recommendedMusic) {
                        musicInfo.append(md.getTitle()).append(" - ").append(md.getArtistName()).append("<br>");
                    }
                    response = musicInfo.toString();
                }
            }
            return ResponseEntity.ok(Map.of("reply", response));

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body(Map.of("error", "서버 오류 발생"));
        }
    }
}

