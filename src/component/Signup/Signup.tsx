import React from 'react'
import Button from '../Reuseable/Button'
import Divider from '../Reuseable/Divider'

const Signup = () => {
    return (
        <div>
            <div className=' flex items-center justify-center w-full bg-gray-600 h-screen'>
                <div className='border border-black bg-red-100 w-[900px] '>
                    <div className='flex w-full justify-center items-center mt-10 text-3xl font-bold text-indigo-600 '>
                        SIGNUP
                    </div>
                    <Divider />
                    <div className='grid grid-rows-5 grid-flow-col p-9'>

                        <p className='text-xl flex items-center font-semibold mt-10'>Full Name:</p>
                        <p className='text-xl flex items-center font-semibold mt-10'>Email Address:</p>
                        <p className='text-xl flex items-center font-semibold mt-10'>Phone Number:</p>
                        <p className='text-xl flex  items-center font-semibold mt-10'>Password:</p>
                        <p className='text-xl  flex  items-center font-semibold mt-10'> Confirm Password:</p>
                        <input type='text' className='w-full focus:outline-none p-2 rounded  mt-10 h-[40px]' placeholder='' />
                        <input type='email' className='w-full focus:outline-none p-2 rounded  mt-10 h-[40px]' placeholder='a@gmail.com' />
                        <input type='text' className='w-full focus:outline-none p-2 rounded  mt-10 h-[40px]' placeholder='' />
                        <input type='password' className='w-full focus:outline-none p-2 rounded  mt-10 h-[40px]' />
                        <input type='password' className='w-full focus:outline-none p-2 rounded  mt-10 h-[40px]' />
                    </div>
                    <div className='flex justify-center items-center'>
                        <Button
                            title="Submit"
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Signup