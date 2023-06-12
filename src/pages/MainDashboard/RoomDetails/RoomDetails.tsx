import React from 'react'
import loadable from "@loadable/component"
const RoomDetailsComponent = loadable(() => import("../../../component/MainDashboard/RoomDetails/RoomDetails"));

const Home = () => {
    return (
        <RoomDetailsComponent />
    )
}

export default Home