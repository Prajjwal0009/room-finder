import React, { useEffect, useState } from 'react';
import loadable from "@loadable/component"
import useGetHook from '../../customHooks/useGetHook';
import axios from 'axios';
const RoomComponent = loadable(() => import("../../component/Room/Room"));

function App() {
  const [selectedObject, setSelectedObject] = useState("");
  const [isOpen, setIsOpen] = useState(false);


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

  async function deleteDataFromAPI() {
    try {
      const response = await axios.delete(`http://localhost:8000/api/rooms/${selectedObject}`);
      console.log(response.data);
      setIsOpen(false)
      window.location.reload(); // Optional: log the response data after successful deletion
      // You can trigger a refresh or update the state in your component after successful deletion.
    } catch (error) {
      console.error('Error deleting data:', error);
      // Handle error scenarios, e.g., show an error message to the user.
    }
  }


  return (
    <RoomComponent
      roomData={roomData}
      setSelectedObject={setSelectedObject}
      deleteDataFromAPI={deleteDataFromAPI}
      selectedObject={selectedObject}
      setIsOpen={setIsOpen}
      isOpen={isOpen}
    />
  );
}

export default App;
