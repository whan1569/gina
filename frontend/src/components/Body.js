// src/components/Body.js
import React from 'react';

function Body() {
  return (
    <main style={styles.body}>
      <p>This is the body content.</p>
      <p>Scroll down to see the floating bar in action!</p>

      {/* 긴 콘텐츠 추가 */}
      <div style={styles.longContent}>
        {Array(100).fill(0).map((_, index) => (
          <p key={index}>This is some long content... {index + 1}</p>
        ))}
      </div>
    </main>
  );
}

const styles = {
  body: {
    padding: '20px',
    textAlign: 'center',
  },
  longContent: {
    marginTop: '20px',
    textAlign: 'left',
  },
};

export default Body;
