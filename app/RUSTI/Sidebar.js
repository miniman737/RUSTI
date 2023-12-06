'use client';
import React, { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';


const Sidebar = () => {
  const pathname = useRouter();
  const handleClick = () => {
    // 👇️ navigate programmatically
    pathname.push('/RUSTI/map');
  };
  const handleClickTwo = () => 
  {
    pathname.push('/RUSTI/database');
  }
  const handleClickThree = () => 
  {
    pathname.push('/');
  }

  return (
    <div className="Sidebar">


        {/* <div style={{width: '100%', height: '100%', textAlign: 'center', color: '#F5F5F5', fontSize: 60, fontFamily: 'Inter, sans-serif', fontWeight: '400', wordWrap: 'break-word'}}>RUSTI</div>
        <div style={{width: '100%', height: '100%', position: 'relative' }}>
       
       <div style={{width: 107, height: 104, left: 25, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 9999, border: '1px white solid'}} />
       
        <div style={{width: 125, height: 19, left: 25, top: 113, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Inter, sans-serif', fontWeight: '200', wordWrap: 'break-word'}}>&nbsp;Threat Specialist</div>
        <img style={{width: 80, height: 78, left: 37.5, top: 13, position: 'absolute'}} src="/user-login-icon-14 1.png" />
        </div> */}
        <div style={{ width: '100%', height: '100%', textAlign: 'center', color: '#F5F5F5', fontSize: 60, fontFamily: 'Inter, sans-serif', fontWeight: '400', wordWrap: 'break-word' }}>
      RUSTI
      <div style={{ position: 'relative', marginTop: '20px' }}>
        <div style={{ width: 100, height: 100, margin: '0 auto', position: 'relative', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: '50%', border: '1px white solid' }}>
          <img style={{ width: 80, height: 78, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} src="/user-login-icon-14 1.png" alt="Profile" />
        </div>
        <div style={{ color: 'white', fontSize: 16, fontFamily: 'Inter, sans-serif', fontWeight: '200', wordWrap: 'break-word' }}>
          Threat Specialist
        </div>
        </div>
      </div>
        <br/>
        {/* <button style={{display:'inline-block',color:'#F5F5F5',width: '100%', height: '120%', paddingLeft:'18px', background: '#59879B', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 15, border: '1px black solid', textAlign:'start', paddingLeft:'40px'}}> 
        <h1><img src='/mapNavLogo.svg' style={{width:'10%', height:'10%'}}/> 
         Map</h1>
        </button>
        <br/>
        <br/>
      <button style={{color:'#F5F5F5',width: '100%', height: '100%', background: '#59879B', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 15, border: '1px black solid', textAlign:'center'}} href="#about">
        <h1><img src='/databaseNavLogo.svg' style={{width:'10%', height:'10%'}}/> Database</h1>
      </button> */}
      <button
      onClick={handleClick}
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#F5F5F5',
      width: '100%',
      height: '50px', // Adjust the height as needed
      background: '#59879B',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: 15,
      border: '1px black solid',
      textAlign: 'start', // Adjust as needed
      padding: '0 20px', // Adjust the padding as needed
    }}
  >
    <img src='/mapNavLogo.svg' style={{ width: '20%', height: 'auto', marginRight: '10px' }} alt="Map Icon" />
    <h1 style={{ margin: 0 }}>Map</h1>
  </button>
  
  <br />
  <button
  onClick={handleClickTwo}
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#F5F5F5',
      width: '100%',
      height: '50px', // Adjust the height as needed
      background: '#59879B',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: 15,
      border: '1px black solid',
      textAlign: 'center', // Adjust as needed
      padding: '0 20px', // Adjust the padding as needed
    }}
    href="#about" // href attribute doesn't work with buttons, consider using a different element for linking
  >
    <img src='/databaseNavLogo.svg' style={{ width: '20%', height: 'auto', marginRight: '10px' }} alt="Database Icon" />
    <h1 style={{ margin: 0 }}>Database</h1>
  </button>
      
      <br/><br/>
      <br></br>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <br/>
      <br/>
      <br/>
      <br/>
      <button 
      onClick={handleClickThree}
      style={{width: '100%', height: '100%', background: '#767F83', borderRadius: 15}}>
      <div style={{width: '100%', height: '100%', textAlign: 'center', color: 'black', fontSize: 24, fontWeight: '400', wordWrap: 'break-word'}}>Log Out</div>
      </button>
    </div>
  );
};

export default Sidebar;