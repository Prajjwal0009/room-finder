import React from 'react'
import Button from '../Reuseable/Button'
import Divider from '../Reuseable/Divider'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const EditRoom = () => {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const onSubmit = (data: any) => {
        console.log(data)
    }
    return (
        <>
            <div className='bg-white rounded-lg p-4'>
                <div className='bg-[#EEF1F8] rounded-lg'>
                    <p className='flex items-center p-2'>
                        <img src={""} className='inline-block mr-2' alt="" />
                        The fields preceded with a red &nbsp;<span className='text-red-500'>*</span>&nbsp; are mandatory</p>
                </div>
                <div className='flex flex-col mt-3'>
                    <label htmlFor="category" className='text-left font-semibold'>Choose Room <span className='text-red-500'>*</span></label>
                    <select name="category" id="category" className='rounded-md p-1 border-x-2 border-t-2'>
                        <option>Flat</option>
                        <option>1 room</option>
                        <option>2 room</option>

                    </select>
                </div>
                <div className='flex flex-col mt-3'>
                    <h3 className='text-left font-semibold'>Room details <span className='text-red-500'>*</span></h3>
                    <div className='border border-[#BFBFBF] p-4 bg-[#EEF1F8] flex flex-col'>
                        <label htmlFor="name" className='text-left'>Location</label>
                        <input type="text" className='rounded-sm border-y border-[#BFBFBF] p-1' />
                        <label htmlFor="room-image" className='text-left'>Room Image</label>
                        <input type="file" className='rounded-sm border-y border-[#BFBFBF] p-1' />
                        <label htmlFor="description" className='text-left mt-3'>Description</label>
                        <div className='bg-[#D9DDE7] rounded-sm p-2 font-semibold'>Text Editor Button</div>
                        <textarea name="description" id="description" cols={30} rows={7} />
                    </div>
                </div>
                <div className='flex flex-col mt-3'>
                    <label htmlFor="price" className='text-left font-semibold'>Price <span className='text-red-500'>*</span></label>
                    <input type="text" className='rounded-sm border border-[#BFBFBF] p-1 px-2' />
                </div>
                <div className='flex flex-col mt-3'>

                    <button className='bg-red-200 p-2 rounded-md' onClick={() => navigate('/room')}>SAVE</button>
                </div>

            </div>

        </>
    )
}

export default EditRoom