import React, { useState, useContext } from 'react';
import ReactMapGL, {Marker, Popup } from 'react-map-gl';

const CustomMarker = ({index, marker, openPopup}) => {
    return (
      <Marker
        longitude={marker.longitude}
        latitude={marker.latitude}>
        
        <div className="marker" onClick={() => openPopup(index)}>
           <img src={marker.imageSource} alt={`Marker ${index}`} style={{ width: marker.width, height: marker.height }} /> 
          <span><b>{index + 1}</b></span>
        </div>
      </Marker>
  )};export default CustomMarker;