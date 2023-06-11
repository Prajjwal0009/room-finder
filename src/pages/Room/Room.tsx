import React from 'react'
import loadable from "@loadable/component"
const RoomComponent = loadable(() => import("../../component/Room/Room"));
const Room = () => {
    return (
        <div><RoomComponent /></div>
    )
}

export default Room




