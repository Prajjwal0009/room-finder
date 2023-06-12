import React, { useState } from 'react';
import Card from '../../Reuseable/Card';

const Home = () => {
    const [selectedOption, setSelectedOption] = useState('Flat');

    const handleOptionChange = (event: any) => {
        setSelectedOption(event.target.value);
    };

    return (
        <>
            <div className='absolute top-[60px] right-10'>
                <select onChange={handleOptionChange}>
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
