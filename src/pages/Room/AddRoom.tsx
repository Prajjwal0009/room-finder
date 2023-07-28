import React, { useEffect, useState } from 'react'
import loadable from "@loadable/component"
import APIS from '../../contants/EndPoints';
import useGetHook from '../../customHooks/useGetHook';
const AddRoomComponent = loadable(() => import("../../component/Room/AddRoom"));
const AddRoom = () => {
  const postData = async (dataToSend: any) => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/room/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Set the appropriate content-type for your API
        },
        body: JSON.stringify(dataToSend),
      });

      const responseData = await response.json();
      console.log('Response from the server:', responseData);
      // You can update state or perform other actions based on the response from the server.
    } catch (error) {
      console.error('An error occurred while sending data:', error);
    }
  };
  useEffect(() => {
    postData({ key: 'value' }); // Replace { key: 'value' } with your actual data to send.
  }, []);
  const onSubmit = (data: any) => {
    postData({ room_type: data?.category, description: data?.description, location: data?.location, price: data?.price });
  }
  return (
    <AddRoomComponent
      onSubmit={onSubmit}
    />
  )
}
export default AddRoom




