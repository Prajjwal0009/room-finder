import React, { useEffect, useState } from 'react'
import loadable from "@loadable/component"
import { useParams } from 'react-router-dom';
const EditRoomComponent = loadable(() => import("../../component/Room/EditRoom"));



const EditRoom = () => {
    const{id}=useParams()
    console.log(id,"aaaaa")
    const [singleRoomData, setRoomData] = useState<any>([]);

    useEffect(() => {
        fetchRoomData();
    }, []);

    async function fetchRoomData() {
        try {
            const response = await fetch(`http://localhost:8000/api/v1/room/${id}`);
            const data = await response.json();
            setRoomData(data);
        } catch (error) {
            console.log('Error:', error);
        }
    }
    console.log(singleRoomData)
    return (

        <EditRoomComponent
        roomData={singleRoomData}
        />
    )
}

export default EditRoom




