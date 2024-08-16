// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <Link to="/" style={styles.logo}>GINA</Link>
      </div>
      <nav style={styles.navbar}>
        <div style={styles.navItem}>
          <Link to="/login" style={styles.button}>Login</Link>
        </div>
        <div style={styles.navItem}>
          <Link to="/signup" style={styles.button}>Signup</Link>
        </div>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between', // 좌측 및 우측 정렬
    alignItems: 'center', // 수직 중앙 정렬
  },
  logoContainer: {
    flex: 1, // 좌측 공간 차지
  },
  logo: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  navbar: {
    display: 'flex',
    alignItems: 'center',
  },
  navItem: {
    margin: '0 10px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Header;
