import React, { useState } from 'react';
import Card from '../../Reuseable/Card';

const Home = () => {
    const [selectedOption, setSelectedOption] = useState('Flat');

    const handleOptionChange = (event: any) => {
        setSelectedOption(event.target.value);
    };

    return (
        <>
            <div className='absolute top-[80px] right-10'>
                <select className = "w-[120px] h-[40px] text-xl text-white font-bold bg-gray-800 " onChange={handleOptionChange}>
                    <option value='Flat'>Flat</option>
                    <option value='1Room'>1Room</option>
                    <option value='2Room'>2Room</option>
                </select>
            </div>
            <div className='p-10 grid grid-cols-4 gap-4'>
                {selectedOption === 'Flat' && (
                    <>
                        <Card />
                        <Card />
                        <Card />
                    </>
                )}
                {selectedOption === '1Room' && (
                    <>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </>
                )}
                {selectedOption === '2Room' && (
                    <>
                        <Card />
                    </>
                )}
            </div>
        </>
    );
};

export default Home;
