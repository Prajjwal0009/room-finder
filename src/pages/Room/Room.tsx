import React, { useEffect, useState } from 'react';
import loadable from "@loadable/component"
const RoomComponent = loadable(() => import("../../component/Room/Room"));

function App() {
    const [roomData, setRoomData] = useState<any>([]);

    useEffect(() => {
        fetchRoomData();
    }, []);

    async function fetchRoomData() {
        try {
            const response = await fetch('http://localhost:8000/api/v1/room/');
            const data = await response.json();
            setRoomData(data);
        } catch (error) {
            console.log('Error:', error);
        }
    }
    console.log(roomData)
    return (
        <RoomComponent
        roomData={roomData}
        />
    );
}

export default App;
