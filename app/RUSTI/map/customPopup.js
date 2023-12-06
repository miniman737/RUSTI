import React from 'react';

const CustomPopup = ({ marker, closePopup }) => {

    const handlePopupClose = () => {
        console.log('closing pop up');
        setSelectedMarker(null);
      };

  return (
    <div style={{ backgroundColor: 'white', padding: '10px' }}>
      <h3>Marker Info</h3>
      <p>Latitude: {marker?.latitude}</p>
      <p>Longitude: {marker?.longitude}</p>
      {/* Other marker information */}
      <button onClick={handlePopupClose}>Close</button>
    </div>
  );
};

export default CustomPopup;
