import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Dropdown from '../Reuseable/Dropdown';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='fixed top-0 left-0 w-full h-[60px] z-10 flex p-3 border border-black overflow-hidden justify-between bg-gray-900'>
        <div className='text-white font-semibold  ml-10'>
          RoomFinder
        </div>
        <div className='flex gap-4 ml-10 w-full'>
          <div className='text-white font-semibold cursor-pointer' onClick={() => navigate('/')}>
            Home
          </div>
          <div className='text-white font-semibold cursor-pointer' onClick={() => navigate('aboutus')}>
            About
          </div>
          <div className='text-white font-semibold cursor-pointer' onClick={() => navigate('contact')}>
            Contact Us
          </div>
        </div>
        <div className='w-full'>
          <input type='search' className="rounded-md focus:outline-none h-[30px] p-2" placeholder='searchHere' />
        </div>
        <div>
          <p className='text-gray-400 w-full flex items-center mr-20'>
            Contact: anujmainali200@gmail.com/9876543210
          </p>
        </div>
        <div className='mr-10'>
          <Dropdown
            onClick={() => navigate('/login')}
            onClickSignup={() => navigate('/signup')}
          />
        </div>
      </div>
      <div style={{ paddingTop: '90px', backgroundColor: "gray" }}>
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
