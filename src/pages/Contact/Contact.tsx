import React from 'react'
import loadable from "@loadable/component"
const ContactComponent = loadable(() => import("../../component/Contact/Contact"));




const Contact = () => {
  return (
    <ContactComponent />
  )
}

export default Contact