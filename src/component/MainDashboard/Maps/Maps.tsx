import React, { useState } from 'react'
import LeafletMap from '../../Dashboard/GoogleMaps';

const Maps = (props: any) => {
  const { roomData } = props

  const initialCenter = [27.709115, 85.321752];
  const locations = roomData.map((room: any) => {
    if (room.map_location && room.map_location.latitude && room.map_location.longitude) {
      return [room.map_location.latitude, room.map_location.longitude];
    } else {
      return [0, 0];
    }
  });

  const [inputValue, setInputValue] = useState('');
  const [destination, setDestination] = useState(initialCenter);

  const handleSearch = () => {
    const [latitude, longitude] = inputValue.split(',');
    if (latitude && longitude) {
      setDestination([parseFloat(latitude), parseFloat(longitude)]);
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: '4', position: 'relative' }}>
        <LeafletMap center={destination} locations={locations} roomData={roomData}/>
      </div>
      <div
        style={{
          position: 'relative',
          background: 'white',
          boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
          padding: '10px',
          height: '100%',
          overflowY: 'auto',
        }}
      >
      </div>
    </div>
  );
};
export default Maps