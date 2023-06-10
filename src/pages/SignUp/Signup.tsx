import React from 'react'
import loadable from "@loadable/component"
const SignupComponent = loadable(() => import("../../component/Signup/Signup"));
const Signup = () => {
    return (
        <div><SignupComponent /></div>
    )
}

export default Signup