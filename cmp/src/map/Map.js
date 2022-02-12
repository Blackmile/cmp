import React from 'react';
import './Map.css';
import Places from '../places/Places'

function Map() {
  return (
    <div className='map'>
        <h1>This is the map component</h1>
        <Places />
    </div>
  );
}

export default Map;
