import { Link } from 'react-router-dom';
import styles from '../../css/header.module.css';
import React, { useContext, useState } from 'react';
import Notice from './mainpage/Notice';
import { ThemeContext } from '../../context/ThemeContext';

function MainHeader({ toggleMenu }) {
  // 검색어 상태
  const [searchQuery, setSearchQuery] = useState('');

  // 검색 제출
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('검색어:', searchQuery);
    
  };
  const [menuOpen, setMenuOpen] = useState(false);



  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    toggleMenu();           
  };




  return (
    <header className={styles.header}>
      
      <div className={styles.leftSection}>
      <div
          className={`${styles.menuIcon} ${menuOpen ? styles.active : ''}`}
          onClick={handleMenuClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Link to="/">
          <img src="/image/image.png" className={styles.mainLogo} alt="메인 로고" />
        </Link>
      </div>

      
      <div className={styles.centerSection}>
        <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
          <input
            type="text"
            placeholder="🔍 검색어를 입력하세요"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchButton}>
            검색
          </button>
        </form>
      </div>

      
      <div className={styles.rightSection}>
          <Notice/>
      </div>
    </header>
  );
}

export { MainHeader };
