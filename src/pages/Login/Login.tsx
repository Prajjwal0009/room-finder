import React from 'react'
import loadable from "@loadable/component"
const LoginComponent = loadable(() => import("../../component/Login/Login"));
const Login = () => {
    return (
        <div><LoginComponent /></div>
    )
}

export default Login