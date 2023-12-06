
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
const Login = () => {
  const pathname = useRouter();
  const handleClick = () => {
    // 👇️ navigate programmatically
    pathname.push('/RUSTI');
  };

  return (
    
    <div style={{ backgroundColor: 'black', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <h1 style={{ color: 'white', fontSize: '64px', fontWeight: '400', marginBottom: '20px', fontFamily: 'Inter, sans-serif' }}>Welcome to RUSTI Detection System</h1>
      </div>
      <div style={{ textAlign: 'center', color: 'white' }}>
        <input
          type="text"
          placeholder="Username"
          // Add necessary input attributes here (value, onChange, etc.)
          style={{ margin: '8px', padding: '20px 90px', borderRadius: '30px', border: 'none', backgroundColor: 'white', color: 'black', fontSize: '64' }}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          // Add necessary input attributes here (value, onChange, etc.)
          style={{ margin: '12px', padding: '20px 90px', borderRadius: '30px', border: 'none', backgroundColor: 'white', color: 'black', fontSize: '64' }}
        />
        <br />
        <button
          onClick={handleClick}
          style={{ backgroundColor: '#00B2FF', color: 'white', padding: '15px 60px', borderRadius: '30px', border: 'none', cursor: 'pointer' }}
        >
          Login
        </button>
        
      </div>
    </div>
  );
};

export default Login
