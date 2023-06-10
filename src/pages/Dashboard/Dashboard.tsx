import React from 'react'
import loadable from "@loadable/component"
const DashboardComponent = loadable(() => import("../../component/Dashboard/Dashboard"));




const Dashboard = () => {
  return (
    <DashboardComponent />
  )
}

export default Dashboard