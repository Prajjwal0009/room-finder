import React from 'react'
import loadable from "@loadable/component"
const EditRoomComponent = loadable(() => import("../../component/Room/EditRoom"));



const EditRoom = () => {
    return (

        <EditRoomComponent />
    )
}

export default EditRoom




