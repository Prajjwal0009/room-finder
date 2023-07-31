import React, { useState } from 'react'
import LeafletMap from '../../Dashboard/GoogleMaps';
import CardRoom from './CardRoom';
import LocationComponent from './LocationComponent';

const Maps = (props: any) => {
  const { roomData, setSelectRoomType, selectRoomType, setInputValues, inputValues, setInputLocation, inputLocation } = props
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const handleKeyDown = (event: any) => {
    if (event.keyCode === 13) { // Check if Enter key is pressed
      console.log('Input value:', inputLocation);
    }
  };
  const handlePriceChange = (event: any) => {
    const { value } = event.target;
    setInputValues(value);
  };
  const handleLocationChange = (event: any) => {
    const { value } = event.target;
    setInputLocation(value)
  }
  const handleOptionChange = (event: any) => {
    setSelectRoomType(event.target.value);
  };
  const handleChange = (items: any) => {
    setLongitude(items?.longitude)
    setLatitude(items?.latitude)
  }
  const initialCenter = [latitude || 27.6894279, longitude || 85.345417];
  const locations = roomData?.map((room: any) => {
    if (room.map_location && room.map_location.latitude && room.map_location.longitude) {
      return [room.map_location.latitude, room.map_location.longitude];
    } else {
      return [0, 0];
    }
  }) || [];


  const [inputValue, setInputValue] = useState('');
  const [destination, setDestination] = useState(initialCenter);

  return (
    <div style={{ display: 'flex', height: '90vh' }}>
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
          <div className='flex w-full justify-between gap-2 '> <select className="w-[120px] h-[40px] text-xl text-white font-bold bg-gray-800" onChange={handleOptionChange} >
            <option value='flat'>flat</option>
            <option value='1Room'>1Room</option>
            <option value='2Room'>2Room</option>
          </select><input type='text' placeholder='price' className='w-40 p-1 border-2' value={inputValues}
            onChange={handlePriceChange} onKeyDown={handleKeyDown}
            /></div>
          <input type='text' placeholder='Location' className='w-60 mt-2 border-2 p-1'
            onChange={handleLocationChange} onKeyDown={handleKeyDown}
          />
          {roomData?.map((items: any, index: number) => (
            <div className='w-full mt-4 cursor-pointer'>
              <CardRoom selectRoomType={selectRoomType} roomData={items} onClick={() => handleChange(items)} />

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