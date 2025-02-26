package com.himedia.projectteamdive.controller;

import com.himedia.projectteamdive.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/chat")

public class ChatController {

    @Autowired
    private ChatService chatService;

    @PostMapping("/ask")
    public ResponseEntity<?> chat(@RequestBody Map<String, String> request) {
        try {
            String userMessage = request.get("text");
            if (userMessage == null || userMessage.trim().isEmpty()) {
                return ResponseEntity.badRequest().body(Map.of("error", "메시지가 비어 있습니다."));
            }

            String response = chatService.chatWithGPT(userMessage);
            return ResponseEntity.ok(Map.of("reply", response));

        } catch (Exception e) {
            e.printStackTrace(); // 로그 출력
            return ResponseEntity.status(500).body(Map.of("error", "서버 오류 발생"));
        }
    }
}

