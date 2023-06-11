import React from 'react'
import Divider from '../Reuseable/Divider'
import Button from '../Reuseable/Button'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any) => {
        console.log(data)
        navigate('/admin')

    }
    return (
        <>
            <div className=' flex items-center justify-center w-full bg-gray-600 h-screen'>
                <div className='border border-black bg-red-100 w-[500px] h-3/4'>
                    <div className='flex w-full justify-center items-center mt-10 text-3xl font-bold text-indigo-600 '>
                        LOGIN
                    </div>
                    <Divider />
                    <div className='grid grid-rows-2 grid-flow-col p-10'>
                        <p className='text-sm flex justify-center items-center font-semibold mt-10' >Email or username:</p>
                        <p className='text-sm flex justify-center items-center font-semibold mt-10' >Password:</p>
                        <input type='email' className='ml-4 rounded w-full mt-10 h-[40px]'  {...register('email')} placeholder='a@gmail.com' />
                        <input type='password' className='ml-4 rounded w-full mt-10 h-[40px]' {...register('password')} />
                    </div>
                    <div className='flex justify-center items-center'>
                        <Button
                            title="Submit"
                            onClick={handleSubmit(onSubmit)}
                        />
                    </div>
                    <div className='flex justify-center items-center text-indigo-600 italic underline'>Forgot Password ??</div>

                </div>
            </div>
        </>
    )
}

export default Login