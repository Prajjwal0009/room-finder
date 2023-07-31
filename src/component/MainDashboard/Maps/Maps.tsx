import React, { useState } from 'react'
import LeafletMap from '../../Dashboard/GoogleMaps';
import CardRoom from './CardRoom';
import LocationComponent from './LocationComponent';

const Maps = (props: any) => {
  const { roomData, setSelectRoomType, selectRoomType } = props
  // const [selectedOption, setSelectedOption] = useState('flat');
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const handleOptionChange = (event: any) => {
    setSelectRoomType(event.target.value);
  };

  const initialCenter = [latitude || 27.6894279, longitude || 85.345417];
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
      <div style={{ flex: '4', position: 'relative', }}>
        <LeafletMap center={destination} locations={locations} roomData={roomData} />
      </div>
      <div
        style={{
          flex: 1,
          position: 'relative',
          background: 'white',
          boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
          padding: '10px',
          height: '100%',
          overflowY: 'auto',
        }}
      >
        <div>
          <div> <select className="w-[120px] h-[40px] text-xl text-white font-bold bg-gray-800" onChange={handleOptionChange} >
            <option value='flat'>flat</option>
            <option value='1Room'>1Room</option>
            <option value='2Room'>2Room</option>
          </select></div>
          {roomData?.map((items: any, index: number) => (
            <div className='w-full mt-4'>
              <CardRoom selectRoomType={selectRoomType} roomData={items} />
            </div>
          ))
          }
          <LocationComponent setLatitude={setLatitude} latitude={latitude} setLongitude={setLongitude} longitude={longitude} />

        </div>

      </div>
    </div>
  );
};
export default Maps