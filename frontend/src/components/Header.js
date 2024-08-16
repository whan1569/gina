// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <h1>Header</h1>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#4CAF50',
    padding: '10px',
    textAlign: 'center',
    color: 'white',
  },
};

export default Header;
