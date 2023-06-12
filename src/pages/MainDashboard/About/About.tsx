import React from 'react'
import loadable from "@loadable/component"
const AboutComponent = loadable(() => import("../../../component/MainDashboard/About/About"));




const About = () => {
  return (
    <AboutComponent />
  )
}

export default About