import React from 'react'
import loadable from "@loadable/component"
const AddRoomComponent = loadable(() => import("../../component/Room/AddRoom"));



const AddRoom = () => {
    return (

        <AddRoomComponent />
    )
}

export default AddRoom




