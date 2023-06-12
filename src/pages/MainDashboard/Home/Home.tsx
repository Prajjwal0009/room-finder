import React from 'react'
import loadable from "@loadable/component"
const HomeComponent = loadable(() => import("../../../component/MainDashboard/Home/Home"));

const Home = () => {
    return (
        <HomeComponent />
    )
}

export default Home