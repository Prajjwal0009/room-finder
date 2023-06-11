import React from 'react'
import Button from '../Reuseable/Button'
import Divider from '../Reuseable/Divider'
import { useForm } from 'react-hook-form'

const Signup = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data: any) => {
        console.log(data)
    }
    return (
        <div>
            <div className=' flex items-center justify-center w-full bg-gray-600 h-screen'>
                <div className='border border-black bg-red-100 w-[700px] '>
                    <div className='flex w-full justify-center items-center mt-10 text-3xl font-bold text-indigo-600 '>
                        SIGNUP
                    </div>
                    <Divider />
                    <div className='grid grid-rows-5 grid-flow-col p-10'>

                        <p className='text-xl flex ml-5 items-center font-semibold mt-10'>Full Name:</p>
                        <p className='text-xl flex ml-5 items-center font-semibold mt-10'>Email Address:</p>
                        <p className='text-xl flex ml-5 items-center font-semibold mt-10'>Phone Number:</p>
                        <p className='text-xl flex ml-5  items-center font-semibold mt-10'>Password:</p>
                        <p className='text-xl  flex ml-5  items-center font-semibold mt-10'> Confirm Password:</p>
                        <input type='text' className='w-full focus:outline-none p-2 rounded  mt-10 h-[40px]' placeholder='' {...register('fullName')} />
                        <input type='email' className='w-full focus:outline-none p-2 rounded  mt-10 h-[40px]' placeholder='a@gmail.com' {...register('Email')} />
                        <input type='text' className='w-full focus:outline-none p-2 rounded  mt-10 h-[40px]' placeholder='' {...register('PhoneNo')} />
                        <input type='password' className='w-full focus:outline-none p-2 rounded  mt-10 h-[40px]' {...register('Password')} />
                        <input type='password' className='w-full focus:outline-none p-2 rounded  mt-10 h-[40px]' {...register('confirmPassword')} />
                    </div>
                    <div className='flex justify-center items-center'>
                        <Button
                            title="Submit"
                            onClick={handleSubmit(onSubmit)}
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Signup