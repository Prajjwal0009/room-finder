
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Link } from 'react-router-dom';

const LeafletMap = ({ center, locations, roomData }) => {
  console.log(roomData, "hhh")
  // Define the red marker icon
  const redMarkerIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize: [41, 41],
  });

  return (
    <MapContainer center={center} zoom={15} style={{ width: '100%', height: '500px' ,position:'absolute',zIndex:0 }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location, index) => (
        <Marker key={index} position={location} icon={redMarkerIcon}>
          <Popup>
            Room_Type : <b>{roomData[index].room_type}</b><br />
            Location : <b>{roomData[index].location}</b><br />
            Price : <b>{roomData[index].price}</b><br />
            Description : <b>{roomData[index].description}</b><br />
            Coordinates:<b>{roomData[index].latitude},{roomData[index].longitude}</b><br/>
            Go to Details:<b><Link to={`room-details/${roomData[index].id}`}>RoomDetails</Link></b>
          </Popup>
        </Marker>
      ))}

    </MapContainer>

  );
};

export default LeafletMap;