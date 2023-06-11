import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Dropdown from '../Reuseable/Dropdown';


const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='flex w-full p-3 border border-black justify-between bg-green-200 '>
                <div className='border w-full ml-10 cursor-pointer '>
                    RoomFinder
                </div>

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
