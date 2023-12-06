'use client';
import React, {useState, useEffect} from 'react';

import Map, { Popup, Marker } from 'react-map-gl';




import 'mapbox-gl/dist/mapbox-gl.css';

const Welcome = () => {
  const [showModal, setShowModal] = useState(false);
  const [showRedDiv, setShowRedDiv] = useState(true);

  const [showModal1, setShowModal1] = useState(false);
  const [showRedDiv1, setShowRedDiv1] = useState(true);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleConfirm = () => {
    setShowModal(false);
    // Perform any other actions upon confirm if needed
    setShowRedDiv(false);
  };

  const handleDecline = () => {
    setShowModal(false);
    // Perform any other actions upon decline if needed
    setShowRedDiv(false);
  };





  const openModal1 = () => {
    setShowModal1(true);
  };

  const closeModal1 = () => {
    setShowModal1(false);
  };

  const handleConfirm1 = () => {
    setShowModal1(false);
    // Perform any other actions upon confirm if needed
    setShowRedDiv1(false);
  };

  const handleDecline1 = () => {
    setShowModal1(false);
    // Perform any other actions upon decline if needed
    setShowRedDiv1(false);
  };

  const markers = [
    { id: 'Vessel Location', longitude: -123.409, latitude: 48.41461, imgSrc: '/pin.png', width: '50px', height: '50px', backgroundColor: 'purple', ConfidenceLevel: '', ThreatType: 'You Are Here!' },
    { id: 'Threat ID: 45280381', longitude: -123.429, latitude: 48.40661, imgSrc: '/redpin.png', width: '40px', height: '50px', backgroundColor:'Yellow', ConfidenceLevel:'Confidence Level: 97%' , ThreatType: 'Threat Type: UUV' },
    { id: 'Threat ID: 45280385', longitude: -123.419, latitude: 48.37661, imgSrc: '/redpin.png', width: '40px', height: '50px', backgroundColor:'Red', ConfidenceLevel:'Confidence Level: 98%' , ThreatType: 'Threat Type: IED' },
    { id: 'Threat ID: 45280386', longitude: -123.449, latitude: 48.39961, imgSrc: '/redpin.png', width: '40px', height: '50px', backgroundColor:'Red', ConfidenceLevel:'Confidence Level: 98%' , ThreatType: 'Threat Type: Enemy Vessel' },
    { id: 'Threat ID: 45280387', longitude: -123.407, latitude: 48.38661, imgSrc: '/yellowpin.png', width: '40px', height: '50px', backgroundColor:'Red', ConfidenceLevel:'Confidence Level: 98%' , ThreatType: 'Threat Type: Unidentified Ship' },
    { id: 'Threat ID: 45280388', longitude: -123.429, latitude: 48.39661, imgSrc: '/greenpin.png', width: '40px', height: '50px', backgroundColor:'Red', ConfidenceLevel:'Confidence Level: 98%' , ThreatType: 'Threat Type: wildlife' },
    // Add more markers if needed
  ];

  const [selectedMarker, setSelectedMarker] = React.useState(false);

  

  

  
  return (
    <div style={{ backgroundColor: 'black', height: '100vh'}}>
      {/* Other content of the WelcomePage */}
      
            {/* Content for the second section */}
            <Map
      mapboxAccessToken="pk.eyJ1IjoibWluaW1hbjczNyIsImEiOiJjbHBhOTlxcjcwNHI4MnBvbTlzMzk0dGxjIn0.UtlyV3M2Vrl4pkuKDQxC6A"
      initialViewState={{
        longitude: -123.40900,
        latitude: 48.40661,
        zoom: 12
      }}
      style={{display:'flex', height:'100vh', justifyContent:'right'}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
     
     {markers.map((marker) => (
          <Marker
          key={`marker-${marker.id}`}
          longitude={marker.longitude}
          latitude={marker.latitude}
          onClick={e => {
            e.originalEvent.stopPropagation()
            setSelectedMarker(marker);
          }}
        >
            <img
              src={marker.imgSrc}
              alt={`Marker ${marker.id}`}
              style={{ width: marker.width, height: marker.height, cursor: 'pointer' }}
              
            />
          </Marker>  
        ))}
        {selectedMarker && (
          <Popup
          style={{fontSize:20}}
            longitude={selectedMarker.longitude}
            latitude={selectedMarker.latitude}
            
            
            anchor="top-right"
            closeOnClick={true}
            onOpen={() => console.log("Opening")}
            onClose={() => {
              setSelectedMarker(null);
              console.log("Closing");
            }}
          >
            {selectedMarker.id}<br/>
            Longitude: {selectedMarker.longitude}° W<br/>
            Latitude: {selectedMarker.latitude}° N<br/>
            {selectedMarker.ConfidenceLevel}<br/>
            {selectedMarker.ThreatType}
             {/* Add your specific marker information here */}
          </Popup>
        )}

    </Map>
    {showRedDiv1 && (    
    <div style={{position: 'absolute',
                top: '7%',
                left: '89%',
                transform: 'translate(-50%, -50%)',
                zIndex: '9999',
                width: '290px',
                height: '80px',
                background: '#F22626',
                borderRadius: 28,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'right',
                textAlign:'center',
                alignItems:'center',
                color:'white'
                }}
                onClick={openModal1}
                >
                  45280381, IED
              </div>)}
              {showRedDiv && (
              <div style={{position: 'absolute',
                top: '18%',
                left: '89%',
                transform: 'translate(-50%, -50%)',
                zIndex: '9999',
                width: '290px',
                height: '80px',
                background: '#F22626',
                borderRadius: 28,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'right',
                textAlign:'center',
                alignItems:'center',
                color:'white'
                }}
                onClick={openModal}>
                  45280385, UUV
              </div>)}
              {showModal && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '9999',
            backgroundColor: 'rgba(250, 0, 0, 0.5)',
            width: '650px',
            height: '650px',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white'
          }}
        >
          <br/>
          <img src='/sonar image.png' style={{borderRadius:28, width:'90%', height:'70%'}}/>
          Alert ID: 45280381 <br/>
          Category: UUV <br/>
          Location: 48.24°N, 125.19°W <br/>
          Confidence level: 97%  <br/>
          Alert time: 20:26:06 28/11/23<br/>
          <p style={{fontSize: 20, fontWeight:80}}>Dismiss High Level Threat?</p>
          <div style={{flexDirection:'row', justifyContent:'left', display:'flex'}}>
            <button style={{background: '#59879B',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: 15, fontSize:'20', color:'white',
      width: '100px',}}onClick={handleConfirm}>Confirm</button>
            <button style={{background: '#59879B',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: 15, fontSize:'20', color:'white',
      width: '100px',}}onClick={handleDecline}>Decline</button>
          </div>
        </div>
      )}


{showModal1 && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '9999',
            backgroundColor: 'rgba(250, 0, 0, 0.5)',
            width: '650px',
            height: '650px',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white'
          }}
        >
          <br/>
          <img src='/sonar image.png' style={{borderRadius:28, width:'90%', height:'70%'}}/>
          Alert ID: 45280385 <br/>
          Category: IED <br/>
          Location: 48.24°N, 125.19°W <br/>
          Confidence level: 97%  <br/>
          Alert time: 20:26:06 28/11/23<br/>
          <p style={{fontSize: 20, fontWeight:80}}>Dismiss High Level Threat?</p>
          <div style={{flexDirection:'row', justifyContent:'left', display:'flex'}}>
            <button style={{background: '#59879B',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: 15, fontSize:'20', color:'white',
      width: '100px',}}onClick={handleConfirm1}>Confirm</button>
            <button style={{background: '#59879B',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: 15, fontSize:'20', color:'white',
      width: '100px',}}onClick={handleDecline1}>Decline</button>
          </div>
        </div>
      )}
      
      
    </div>
  );
};

export default Welcome;


