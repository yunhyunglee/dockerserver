import React, { useState } from "react";
import styles from "../css/chatModal.module.css";
import { askChatbot } from "./ChatService";

import botAvatar from "../assets/artist2.jpg"; 
import { useSelector } from "react-redux";

const ChatModal = ({ onClose }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);


  const loginUser = useSelector(state => state.user);

  // const userAvatar = loginUser.image;    이거 나중에 aws 하면 바꿔야한다는듯?


  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const botReply = await askChatbot(input);
    const botMessage = { sender: "bot", text: botReply };

    setMessages((prev) => [...prev, botMessage]);
    setInput("");
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.chatModal} onClick={(e) => e.stopPropagation()}>
        {/* 헤더 */}
        <div className={styles.chatHeader}>
          <h2>다이브</h2>
          <button className={styles.closeButton} onClick={onClose}>✖</button>
        </div>

        
        <div className={styles.chatContent}>
          {messages.map((msg, index) => (
            <div key={index} className={msg.sender === "user" ? styles.userMessageWrapper : styles.botMessageWrapper}>
              {/* AI */}
              {msg.sender === "bot" && <img src={botAvatar}  className={styles.avatar} />}
              
              {/* 말풍선 */}
              <div className={msg.sender === "user" ? styles.userMessage : styles.botMessage}>
                {msg.text}
              </div>
              
             {/* 사용자 */}
              {msg.sender === "user" && <img src={`http://localhost:8070/profileImage/${loginUser.image}`}  className={styles.avatar} />}
            </div>
          ))}
        </div>

        {/* 입력창 */}
        <div className={styles.chatInputContainer}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type a message..."
            className={styles.chatInput}
          />
          <button className={styles.sendButton} onClick={handleSend}>➤</button>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
