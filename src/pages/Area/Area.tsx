import React from 'react'
import loadable from "@loadable/component"
const AreaComponent = loadable(() => import("../../component/Area/Area"));




const Area = () => {
  return (
    <AreaComponent />
  )
}

export default Area