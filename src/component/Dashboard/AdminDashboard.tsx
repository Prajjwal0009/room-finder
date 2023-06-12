import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import DropdownAdmin from './DropdownAdmin';
import Divider from '../Reuseable/Divider';

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="flex w-full h-screen overflow-hidden">
            {/* Sidebar */}
            <div className="bg-gray-800 text-white sticky top-0 left-0 h-[1000px] w-1/5 p-4 ">
                <h2 className="text-2xl font-bold">ROOMFINDER</h2>
                <ul className="mt-8">
                    <li className="py-2 cursor-pointer" onClick={() => { navigate('/dashboard') }}>Dashboard</li>
                    <li className="py-2 cursor-pointer" onClick={() => { navigate('/room') }}>Rooms</li>
                    <li className="py-2 cursor-pointer" onClick={() => { navigate('/area') }}>Area</li>
                    <li className="py-2 cursor-pointer">Settings</li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto">
                {/* Top Navigation Bar */}
                <div className="bg-green-200 h-16 px-4 flex sticky top-0 left-0 items-center justify-between  left-1/5">
                    <h2 className="text-xl font-bold">Admin Dashboard</h2>
                    <DropdownAdmin
                        onClick={() => navigate('/login')}
                        onClickSignup={() => navigate('/signup')}
                    />
                </div>
                {/* Dashboard Content */}
                <div className="p-8">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
