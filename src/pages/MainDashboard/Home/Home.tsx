import React, { useEffect, useState } from 'react'
import loadable from "@loadable/component"
const HomeComponent = loadable(() => import("../../../component/MainDashboard/Home/Home"));

const Home = () => {
  const [roomData, setRoomData] = useState<any>([]);

  useEffect(() => {
    fetchRoomData();
  }, []);

  async function fetchRoomData() {
    try {
      const response = await fetch('http://localhost:8000/api/rooms/');
      const data = await response.json();
      setRoomData(data);
    } catch (error) {
      console.log('Error:', error);
    }
  }
  console.log(roomData)
  return (
    <HomeComponent 
    roomData={roomData}
    />
  )
}

export default Home