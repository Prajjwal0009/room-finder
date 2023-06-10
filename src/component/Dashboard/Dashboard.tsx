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
          <div>
            Home
          </div>
          <div>
            About
          </div>
          <div>
            Contact Us
          </div>
        </div>
        <div className='w-full'>
          <input type='search' className="h-[30px] p-2"  placeholder='searchHere' />
        </div>
        <div><p className='text-gray-400 w-full'>Contact:anujmainali200@gmail.com/9876543210</p></div>
        <div className='ml-10 w-full'>
          <Dropdown
            onClick={() => navigate('/login')}
            onClickSignup={() => navigate('/signup')}
          />
        </div>

      </div>
    </>
  )
}
export default Dashboard;
