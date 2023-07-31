import React, { useEffect, useState } from 'react'
import loadable from "@loadable/component"
const MapsComponent = loadable(() => import("../../../component/MainDashboard/Maps/Maps"));

const Maps = () => {
  const [popupId, setPopupId] = useState("")
  const [selectRoomType, setSelectRoomType] = useState('flat')
  console.log(selectRoomType,"selectRoomType")
  const [mapData, setMapData] = useState<any>([]);
  useEffect(() => {
    fetchRoomData();
  }, [selectRoomType]);
  async function fetchRoomData() {
    try {
      const response = await fetch(`http://localhost:8000/api/rooms/?room_type__in=${selectRoomType}`);
      const data = await response.json();
      setMapData(data);
    } catch (error) {
      console.log('Error:', error);
    }
  }
  console.log(mapData,"datas")
  return (
    <MapsComponent
      roomData={mapData}
      setPopupId={setPopupId}
      popupId={popupId}
      setSelectRoomType={setSelectRoomType}
      selectRoomType={selectRoomType}
    />
  )
}

export default Maps