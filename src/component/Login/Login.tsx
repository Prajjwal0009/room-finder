import React, { useState } from 'react'
import Divider from '../Reuseable/Divider'
import Button from '../Reuseable/Button'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
    // const onSubmit = (data: any) => {
    //     console.log(data)
    //     navigate('/admin')

    // }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        // Replace this condition with your actual login logic
        if (email === 'user@example.com' && password === 'password') {
            setLoggedIn(true);
            navigate('/admin')
        } if (email === 'admin@example.com' && password === 'admin') {
            setLoggedIn(true);
            navigate('/admin')
        }else{
            alert("please enter valid email and Password")
        }
    };

    const handleLogout = () => {
        setLoggedIn(false);
        setEmail('');
        setPassword('');
    };
    return (
        <>
            <div className="flex items-center justify-center w-full bg-gray-600 h-screen">
                <div className="border border-black bg-red-100 w-[500px] h-3/4">
                    <div className="flex w-full justify-center items-center mt-10 text-3xl font-bold text-indigo-600">
                        LOGIN
                    </div>
                    <div className="border-b border-gray-300 my-4" />

                    <div className="grid grid-rows-2 grid-flow-col p-10">
                        <p className="text-sm mt-2 font-semibold">
                            Email or username:
                        </p>
                        <p className="text-sm mt-7 font-semibold">
                            Password:
                        </p>
                        <input
                            type="email"
                            className="ml-4 rounded w-full h-[40px]"
                            placeholder="a@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            className="ml-4 rounded w-full mt-4 h-[40px]"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <button
                            className="bg-red-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                            onClick={handleLogin}
                        >
                            Submit
                        </button>
                    </div>
                    <div className="flex justify-center items-center mt-10 text-indigo-600 italic underline">
                        Forgot Password??
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login