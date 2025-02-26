package com.himedia.projectteamdive.controller;

import com.himedia.projectteamdive.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/chat")

public class ChatController {

    @Autowired
    private ChatService chatService;

    @PostMapping("/ask")
    public ResponseEntity<?> chat(@RequestBody Map<String, Object> request) {
        try {
            String userMessage = (String) request.get("text");
            List<Map<String, String>> messages = (List<Map<String, String>>) request.get("messages");

            if (messages == null) {
                messages = new ArrayList<>();
            }

            if (userMessage == null || userMessage.trim().isEmpty()) {
                return ResponseEntity.badRequest().body(Map.of("error", "메시지가 비어 있습니다."));
            }

            String response = chatService.chatWithGPT(userMessage, messages);
            return ResponseEntity.ok(Map.of("reply", response));

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body(Map.of("error", "서버 오류 발생"));
        }
    }
}


