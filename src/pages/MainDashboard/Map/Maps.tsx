import React, { useEffect, useState } from 'react'
import loadable from "@loadable/component"
const MapsComponent = loadable(() => import("../../../component/MainDashboard/Maps/Maps"));

const Maps = () => {
  const [popupId, setPopupId] = useState("")
  const [mapData, setMapData] = useState<any>([]);
  useEffect(() => {
    fetchRoomData();
  }, []);
  async function fetchRoomData() {
    try {
      const response = await fetch('http://localhost:8000/api/rooms/');
      const data = await response.json();
      setMapData(data);
    } catch (error) {
      console.log('Error:', error);
    }
  }
  console.log(mapData)
  return (
    <MapsComponent
      roomData={mapData}
      setPopupId={setPopupId}
      popupId={popupId}
    />
  )
}

export default Maps