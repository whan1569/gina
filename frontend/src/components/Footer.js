// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>Footer</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#333',
    padding: '10px',
    textAlign: 'center',
    color: 'white',
  },
};

export default Footer;
