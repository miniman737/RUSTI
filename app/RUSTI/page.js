'use client';
import React, { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

const welcome = () => {
  return (
    <div style={{ backgroundColor: 'black', height: '100vh'}}>
        <div style={{width: '100%', height: '100%', textAlign: 'center', color: '#59879B', fontSize: 70, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>WELCOME 
        <h1 style={{textAlign: 'center', color: 'white', fontSize: 48, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Now You Can Access RUSTI Threat Identification System </h1>
        </div>
    </div>
  );
};

export default welcome;