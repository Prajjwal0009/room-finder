import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Dropdown from '../Reuseable/Dropdown';


const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='flex p-3 border border-black justify-between bg-green-200 '>
        <div className='border ml-10 '>
          RoomFinder
        </div>
        <div className='flex gap-4 ml-10 w-full'>
          <div className='cursor-pointer' onClick={() => navigate('home')}>
            Home
          </div>
          <div className='cursor-pointer' onClick={() => navigate('aboutus')}>
            About
          </div>
          <div className='cursor-pointer' onClick={() => navigate('contact')}>
            Contact Us
          </div>
        </div>
        <div className='w-full'>
          <input type='search' className="h-[30px] p-2" placeholder='searchHere' />
        </div>
        <div><p className='text-gray-400 w-full flex items-center mr-12'>Contact:anujmainali200@gmail.com/9876543210</p></div>
        <div className='mr-10'>
          <Dropdown
            onClick={() => navigate('/login')}
            onClickSignup={() => navigate('/signup')}
          />
        </div>

      </div>
      <Outlet />

    </>
  )
}
export default Dashboard;
