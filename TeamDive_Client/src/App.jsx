
import { use, useState } from 'react';
import './App.css'
import { MainHeader } from './components/frame/Header';
import { Home } from './components/frame/Home';
import { FooterPlayer } from './components/frame/FooterPlayer';
import FloatingButton from './components/FloatingButton';
import ChatModal from './components/ChatModal';
import Footer from './components/frame/Footer';

import { ThemeContext } from './context/ThemeContext';

function App() {

    const [isDark, setIsDark] = useState(true);

    const [menubar, setMenubar] = useState(false);

    const toggleMenu = () => {
        setMenubar(!menubar);
        console.log(menubar)
    }


    const [chatOpen, setChatOpen] = useState(false);

    const openChat = () => {
        setChatOpen(true);
    }

    const closeChat = () => {
        setChatOpen(false);
    }


        return (
            <ThemeContext.Provider value={{isDark, setIsDark}}>
                <>
                    <MainHeader toggleMenu={toggleMenu}></MainHeader>

                    <FloatingButton onClick={openChat} />
        
                    {/* 채팅 모달 */}
                    {chatOpen && <ChatModal onClose={closeChat} />}
                    <Home menubar={menubar}></Home>
                    <Footer />
                    <FooterPlayer />
                </>
            </ThemeContext.Provider>
    )


}

export default App
