import React from 'react'
import loadable from "@loadable/component"
const AdminDashboardComponent = loadable(() => import("../../component/Dashboard/AdminDashboard"));




const Dashboard = () => {
    return (
        <AdminDashboardComponent />
    )
}

export default Dashboard