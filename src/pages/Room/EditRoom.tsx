import React, { useEffect, useState } from 'react'
import loadable from "@loadable/component"
import { useNavigate, useParams } from 'react-router-dom';
const EditRoomComponent = loadable(() => import("../../component/Room/EditRoom"));



const EditRoom = () => {
  const { id } = useParams()
  console.log(id, "aaaaa")
  const navigate = useNavigate()
  const [singleRoomData, setRoomData] = useState<any>([]);

  useEffect(() => {
    fetchRoomData();
  }, []);

  async function fetchRoomData() {
    try {
      const response = await fetch(`http://localhost:8000/api/rooms/${id}`);
      const data = await response.json();
      setRoomData(data);
    } catch (error) {
      console.log('Error:', error);
    }
  }
  console.log(singleRoomData)

  const postData = async (dataToSend: any, queryKey?: string) => {
    try {
      // Construct the query parameter string if queryKey is provided
      const queryParams = queryKey ? `?queryKey=${encodeURIComponent(queryKey)}` : '';

      const response = await fetch(`http://localhost:8000/api/rooms/${id}/${queryParams}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      const responseData = await response.json();
      console.log('Response from the server:', responseData);

    } catch (error) {
      console.error('An error occurred while sending data:', error);
    }
  };
  useEffect(() => {
    postData({ key: 'value' });
  }, []);
  const onSubmit = (data: any) => {
    postData({ room_type: data?.category, description: data?.description, location: data?.location, price: data?.price, latitude: data?.Latitude, longitude: data?.Longitude, is_water_supply: data?.is_water_supply, is_drainage_available: data?.is_drainage_available, is_drinking_water: data?.is_drinking_water, is_electriciy_charge: data?.is_electriciy_charge }, "someValue");
    navigate("/room")
  }
  return (

    <EditRoomComponent
      roomData={singleRoomData}
      onSubmit={onSubmit}
    />
  )
}

export default EditRoom




