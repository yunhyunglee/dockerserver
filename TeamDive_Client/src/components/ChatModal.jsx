import React, { useState, useEffect } from "react";
import styles from "../css/chatModal.module.css";
import { askChatbot } from "./ChatService";
import botAvatar from "../assets/artist2.jpg"; 
import { useSelector } from "react-redux";

const ChatModal = ({ onClose }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]); 

  const loginUser = useSelector(state => state.user);

  // 첫 마디 ai
  useEffect(() => {
  
    const saveMsg = localStorage.getItem("chatMsg");
    if ( saveMsg ) {
      setMessages(JSON.parse(saveMsg));
    } else {

    setMessages([
      { sender: "bot", text: "안녕🖐🏻 다이브에 온걸 환영해! " }

        ]);
      }

  }, []);



  useEffect(()=>{

    localStorage.setItem("chatMsg", JSON.stringify(messages));
    },[messages]);






  const SendMessage = async () => {
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
        
        
        <div className={styles.chatHeader}>
          <h2>다이브 AI</h2> 
          <button className={styles.closeButton} onClick={onClose}>✖</button>
        </div>

        {/* 채팅 내용 */}
        <div className={styles.chatContent}>

          {messages.map((msg, index) => (
            <div key={index} className={msg.sender === "user" ? styles.userMessageWrapper : styles.botMessageWrapper}>
              {msg.sender === "bot" && <img src={botAvatar} alt="챗봇" className={styles.avatar} />}
              <div className={msg.sender === "user" ? styles.userMessage : styles.botMessage}>
                {msg.text}
              </div>
              {msg.sender === "user" && <img src={`http://localhost:8070/profileImage/${loginUser.image}`} className={styles.avatar} />}
            </div>
          ))}
        </div>

        {/* 입력창 */}
        <div className={styles.chatInputContainer}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && SendMessage()}
            placeholder="메시지를 입력하세요..."
            className={styles.chatInput}
          />
          <button className={styles.sendButton} onClick={SendMessage}>➤</button>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
