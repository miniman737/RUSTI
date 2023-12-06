
'use client';
import React, {useState} from 'react';
import { useRouter } from 'next/navigation';
const database = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDetections, setFilteredDetections] = useState([]);


  const detections = [
    {
      id: 1,
      values: [{ label: 'ThreatID', data: '45280381' },{ label: 'Category', data: 'UUV' },{ label: 'Location', data: '48.40661° N, -123.409° W' },{ label: 'Time', data: '20:26:06' },
        { label: 'Date', data: '28/11/23' },
        { label: 'Confidence Level', data: '97%' },
      ],
    },
    {
      id: 2,
      values: [
        
        { label: 'ThreatID', data: '45280385' },{ label: 'Category', data: 'IED' }, { label: 'Location', data: '47.08° N, 122.34° W' },
      { label: 'Time', data: '20:54:32' }, { label: 'Time', data: '28/11/23' },
        
        { label: 'Confidence Level', data: '98%' },
      ],
    },
    {
      id: 3,
      values: [


        
        { label: 'ThreatID', data: '45280384' },
        { label: 'Category', data: 'submarine' },
        { label: 'Location', data: '49.93° N, 123.20° W' },
        { label: 'Time', data: '21:18:53' },
        { label: 'Time', data: '13/08/22' },
        { label: 'Confidence Level', data: '87%' },
      ],
    },
    {
      id: 4,
      values: [


        { label: 'ThreatID', data: '45280382' },
        { label: 'Category', data: 'submarine' },
        { label: 'Location', data: '50.01° N, 128.49° W' },
        
        { label: 'Time', data: '21:08:45' },
        { label: 'Time', data: '130822' },
        { label: 'Confidence Level', data: '83%' },


        
      ],
    },
    {
      id: 5,
      values: [
        { label: 'ThreatID', data: '45280386' },
        { label: 'Category', data: 'IED' },
        { label: 'Location', data: '46.23° N, 126.29° W' },

        { label: 'Time', data: '21:32:36' },
        { label: 'Time', data: '13/08/22' },

 
        { label: 'Confidence Level', data: '88%' },
      ],
    },
    {
      id: 6,
      values: [
        { label: 'ThreatID', data: '45280383' },
       { label: 'Category', data: 'naval mine' },
        { label: 'Location', data: '48.24 ° N, 133.40° W' },
        
        { label: 'Time', data: '20:58:12' },
        { label: 'Time', data: '130822' },
        { label: 'Confidence Level', data: '70%' },
 


      ],
    },
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filtered = detections.filter((detection) => {
      return detection.values.some((value) =>
        value.data.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setFilteredDetections(filtered);
  };

  const handleFilter = () => {
    // Implement your filter logic here based on the filter button click
    // For example:
    // const filtered = detections.filter(...)
    // setFilteredDetections(filtered);
  };

  const dataToRender = searchTerm ? filteredDetections : detections;

  let content;
  if (dataToRender.length === 0) {
    content = <p>No matching results found.</p>;
  } else {
    content = (
      <table style={{ width: '120vh', height: '60vh', borderRadius:'25px'}}>
      <thead>
        <tr>
          {dataToRender[0].values.map((header, index) => (
            <th key={index} style={{ background: '#D9D9D9', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', fontSize: 18, fontFamily: 'Inter, sans-serif' }}>
              {header.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataToRender.map((row, index) => (
          <tr key={index}>
            {row.values.map((cell, cellIndex) => (
              <td key={cellIndex} style={{ background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', textAlign: 'center' }}>
                {cell.data}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    );
  }

  return (
    
    <div style={{ backgroundColor: 'white', height: '100vh', display:'flex', paddingLeft:'40px', flexDirection: 'column',}}>
      <div style={{display:'flex', flexDirection: 'row'}}>
      <div style={{ 
      width:'25%',
      height:'10%',
    textAlign: 'left',
    marginTop: '20px', 
    marginBottom: '40px',
    paddingLeft:'150px',
    paddingRight:'45px',
    
    
    // Additional styling if needed
    background: '#D9D9D9', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 15,
    padding: '20px',}}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          style={{borderRadius: 5, // Adjust the border-radius to change the roundness
          border: '1px solid #D9D9D9',
          padding: '5px 10px',
          fontSize: '16px',
          height:'1vh', // Set width as needed
          backgroundColor: '#D9D9D9', // Lighter color for input background
          color: '#333', 
          outline: 'none',  
        }}
        />
        
      </div>
      <div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div>
      
      <button style={{ 
      width:'25%',
      height:'45%',
      display: 'flex',
      justifyContent: 'center',
    textAlign: 'center',
    marginTop: '20px', 
    marginBottom: '40px',
    paddingLeft:'150px',
    padding: '20px',

    
    
    // Additional styling if needed
    background: '#D9D9D9', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 15,
    padding: '20px',}}onClick={handleFilter}>Filter</button>
    </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        {content}
      </div>

    </div>
  );
};

export default database
