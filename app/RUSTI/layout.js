'use client';
import Sidebar from "./Sidebar";

import react, { useState } from "react";
export default function DashboardLayout({ children }) {
  


  return <section>
        

    <table style={{width:'100%', backgroundColor: 'black', height: '100vh'}}>
      <tbody>
        <tr>
          <td style={{ width: '10%', border: '1px solid black' }}>
          
            {/* Content for the first section */}
            <Sidebar/>
            {/* Add your content here */}
          </td>
          <td style={{ width: '90%', border: '1px solid black' }}>
              
              {children}
              
          </td>
        </tr>
      </tbody>    
      </table>
    </section>
}