// src/components/Body.js
import React from 'react';

function Body() {
  return (
    <main style={styles.body}>
      <p>This is the body content.</p>
    </main>
  );
}

const styles = {
  body: {
    padding: '20px',
    textAlign: 'center',
  },
};

export default Body;
