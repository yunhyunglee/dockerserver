
import { useState } from 'react';
import './App.css'
import { MainHeader } from './components/frame/header';
import { Home } from './components/frame/home';
import { Footer } from './components/frame/footer';



function App() {

    const [menubar, setMenubar] = useState(false);

    const toggleMenu = () => {
        setMenubar(!menubar);
        console.log(menubar)
    }
        return (
            <>
                <MainHeader toggleMenu={toggleMenu}></MainHeader>
                <Home menubar={menubar}></Home>
                <Footer></Footer>
            </>
      )

  
}

export default App
