package com.himedia.projectteamdive.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.Instant;
import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;

@Service
public class ChatService {

    // 요청 분당 최대 10회
    private static final int MAX_REQUESTS_PER_MINUTE = 10;
    private AtomicInteger requestCount = new AtomicInteger(0);
    private Instant lastResetTime = Instant.now();

    private static final String API_URL = "https://api.openai.com/v1/chat/completions";

    @Value("${openai.api-key}")  // 🔥 application.yml에서 API 키 가져오기
    private String apiKey;

    // 1분당 요청 제한
    private synchronized boolean canMakeRequest() {
        Instant now = Instant.now();
        if (now.isAfter(lastResetTime.plusSeconds(60))) {
            requestCount.set(0);
            lastResetTime = now;
        }
        return requestCount.incrementAndGet() <= MAX_REQUESTS_PER_MINUTE;
    }

    public String chatWithGPT(String userMessage) {
        if (!canMakeRequest()) {
            return "요청이 너무 많습니다. 잠시 후 다시 시도해주세요.";
        }

        if (apiKey == null || apiKey.isEmpty()) {
            return "서버 오류: OpenAI API 키가 설정되지 않았습니다.";
        }

        RestTemplate restTemplate = new RestTemplate();

        // HTTP 헤더 설정
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", "Bearer " + apiKey);

        // 요청 본문 설정
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("model", "gpt-3.5-turbo");
        requestBody.put("messages", List.of(Map.of("role", "user", "content", userMessage)));

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(requestBody, headers);

        try {
            ResponseEntity<Map> response = restTemplate.exchange(API_URL, HttpMethod.POST, entity, Map.class);

            if (response.getBody() == null || !response.getBody().containsKey("choices")) {
                return "오류: API 응답이 없습니다.";
            }

            List<Map<String, Object>> choices = (List<Map<String, Object>>) response.getBody().get("choices");

            if (choices.isEmpty()) {
                return "오류: API 응답에 선택지가 없습니다.";
            }

            Map<String, Object> messageObj = (Map<String, Object>) choices.get(0).get("message");
            String content = (String) messageObj.get("content");

            if (content == null || content.trim().isEmpty()) {
                return "오류: 응답이 비어 있습니다.";
            }

            return content;

        } catch (Exception e) {
            System.err.println("OpenAI API 호출 중 오류 발생: " + e.getMessage());
            return "서버 오류: AI 응답을 가져올 수 없습니다.";
        }
    }
}
