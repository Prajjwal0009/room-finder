import React from 'react'
import { Link } from 'react-router-dom'
import LocationComponent from './LocationComponent'

const CardRoom = (props: any) => {
  const { selectRoomType, roomData, onClick } = props
  return (
    <div className='w-full h-[80px] bg-gray-200 ' onClick={onClick}>
      <div className='w-full flex '>
        <div className='p-2 w-16 bg-red-600 h-full flex items-center justify-center '>
          {selectRoomType}
        </div>
        <div className='w-full p-1'>
          <div className='flex gap-4'><p>Location:</p><p className='font-bold'>{roomData?.location}</p></div>
          <div className='flex gap-4'><p>Price:</p><p className='font-bold'>{roomData?.price}</p></div>
          <div className='flex gap-4'><p>GotoDetails:</p><Link to={`room-details/${roomData?.id}`} className='text-red-400'>Details---</Link></div>
        </div>
      </div>
    </div>
  )
}

export default CardRoom