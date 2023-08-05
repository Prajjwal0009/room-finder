import React, { useEffect } from 'react'
import Button from '../Reuseable/Button'
import Divider from '../Reuseable/Divider'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const EditRoom = (props: any) => {
  const { roomData, onSubmit } = props
  console.log(roomData, "iii")
  const navigate = useNavigate()
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      category: roomData?.room_type || '', // Provide a default value in case roomData is undefined
      location: roomData?.location || '',
      description: roomData?.description || '',
      price: roomData?.price || '',
      Longitude: roomData?.longitude || "",
      Latitude: roomData?.latitude || "",
      is_electriciy_charge: roomData?.is_electriciy_charge,
      is_drainage_available: roomData?.is_drainage_available,
      is_drinking_water: roomData?.is_drinking_water,
      is_water_supply: roomData?.is_water_supply

    }
  });

  // If you want to set default values from roomData dynamically, you can use the setValue function
  useEffect(() => {
    setValue('category', roomData?.room_type || '');
    setValue('location', roomData?.location || '');
    setValue('description', roomData?.description || '');
    setValue('price', roomData?.price || '');
    setValue('Longitude', roomData?.longitude || '');
    setValue('Latitude', roomData?.latitude || '');
    setValue('is_water_supply', roomData?.is_water_supply || '');
    setValue('is_drainage_available', roomData?.is_drainage_available || '');
    setValue('is_drinking_water', roomData?.is_drinking_water || '');
    setValue('is_electriciy_charge', roomData?.is_electriciy_charge || '');
  }, [roomData, setValue]);

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
          <select id="category" className='rounded-md p-1 border-x-2 border-t-2' {...register('category')}>
            <option>flat</option>
            <option>1Room</option>
            <option>2Room</option>

          </select>
        </div>
        <div className='flex flex-col mt-3'>
          <h3 className='text-left font-semibold'>Room details <span className='text-red-500'>*</span></h3>
          <div className='border border-[#BFBFBF] p-4 bg-[#EEF1F8] flex flex-col'>
            <label htmlFor="name" className='text-left'>Location</label>
            <input type="text" className='rounded-sm border-y border-[#BFBFBF] p-1' {...register('location')} />
            <label htmlFor="room-image" className='text-left'>Room Image</label>
            <input type="file" className='rounded-sm border-y border-[#BFBFBF] p-1' />
            <label htmlFor="description" className='text-left mt-3'>Description</label>
            <div className='bg-[#D9DDE7] rounded-sm p-2 font-semibold'>Text Editor Button</div>
            <textarea id="description" cols={30} rows={7} {...register('description')} />
          </div>
        </div>
        <div className='flex flex-col mt-3'>
          <label htmlFor="price" className='text-left font-semibold'>Price <span className='text-red-500'>*</span></label>
          <input type="text" className='rounded-sm border border-[#BFBFBF] p-1 px-2' {...register('price')} />
        </div>
        <div className='text-gray-600'>Charges:</div>
        <div className='flex justify-between p-4'>
          <div className='flex gap-2'><input type='checkbox' {...register('is_electriciy_charge')} /><label>Electicity</label></div>
          <div className='flex gap-2'><input type='checkbox' {...register('is_drainage_available')} /><label>Wastage</label></div>
          <div className='flex gap-2'><input type='checkbox' {...register('is_drinking_water')} /><label>Drinking Water</label></div>
          <div className='flex gap-2'><input type='checkbox' {...register('is_water_supply')} /><label>Other Water</label></div>
        </div>
        <div className='flex mt-3 justify-between w-full'>
          <div><p>Latitude</p>
            <input type="text" className='rounded-sm w-full border border-[#BFBFBF] p-1 px-2' {...register('Latitude')} />
          </div>
          <div><p>Longitude</p>
            <input type="text" className='rounded-sm w-full border border-[#BFBFBF] p-1 px-2' {...register('Longitude')} />
          </div>
        </div>
        <div className='flex flex-col mt-3'>

          <button className='bg-red-200 p-2 rounded-md' onClick={handleSubmit(onSubmit)}>SAVE</button>
        </div>

      </div>

    </>
  )
}

export default EditRoom