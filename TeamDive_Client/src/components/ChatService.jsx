export const askChatbot = async (message) => {
    try {
        const response = await fetch("http://localhost:8070/api/chat/ask", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: message }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data.reply || "서버에서 응답이 없습니다.";
    } catch (error) {
        console.error("Error fetching chatbot response:", error);
        return "챗봇 응답을 가져오는 중 오류가 발생했습니다.";
    }
};
