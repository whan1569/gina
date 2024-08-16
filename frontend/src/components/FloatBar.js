// src/components/FloatBar.js
import React from 'react';

function FloatBar() {
  return (
    <div style={styles.container}>
      <button style={styles.button}>Contact Us</button>
      <button style={styles.button}>Help</button>
    </div>
  );
}

const styles = {
  container: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default FloatBar;
