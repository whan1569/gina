// src/components/LoginForm.js
import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 처리 로직
    console.log('Login:', { email, password });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Login</h2>
      <div style={styles.formGroup}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" style={styles.button}>Login</button>
    </form>
  );
}

const styles = {
  form: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  formGroup: {
    marginBottom: '15px',
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

export default LoginForm;
