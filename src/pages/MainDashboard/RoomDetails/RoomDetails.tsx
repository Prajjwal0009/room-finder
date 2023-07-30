import React, { useEffect, useState } from 'react'
import loadable from "@loadable/component"
import { useParams } from 'react-router-dom';
const RoomDetailsComponent = loadable(() => import("../../../component/MainDashboard/RoomDetails/RoomDetails"));

const Home = () => {
  const { id } = useParams()
  console.log(id,"id")
  const [singleRoomDetails, setSingleRoomDetails] = useState<any>([]);
  useEffect(() => {
    fetchRoomData();
  }, []);
  async function fetchRoomData() {
    try {
      const response = await fetch(`http://localhost:8000/api/rooms/${id}`);
      const data = await response.json();
      setSingleRoomDetails(data);
    } catch (error) {
      console.log('Error:', error);
    }
  }
  console.log(singleRoomDetails)
  return (
    <RoomDetailsComponent
    singleRoomDetails={singleRoomDetails}
    />
  )
}

export default Home