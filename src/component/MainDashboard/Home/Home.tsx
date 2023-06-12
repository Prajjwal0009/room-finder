import React from 'react'
import Card from '../../Reuseable/Card'

const Home = () => {
    return (
        <>
            <div className='absolute top-[60px] right-10'>
                <select><option>Flat</option><option>1Room</option><option>2Room</option></select>
            </div>
            <div className='p-10 grid grid-cols-4  gap-4'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>)
}

export default Home