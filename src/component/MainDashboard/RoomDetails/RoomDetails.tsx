import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import leftArrow from '../../../assets/icons/addIcon.svg'
import rightArrow from '../../../assets/icons/addIcon.svg'

import Button from '../../Reuseable/Button';
import { useNavigate } from 'react-router-dom';


const RoomDetails = () => {
    const navigate = useNavigate()
    const ArrowLeft = (props: any) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            >
                <img src={leftArrow} alt="Previous" />
            </div>
        );
    };

    const ArrowRight = (props: any) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            >
                <img src={rightArrow} alt="Next" />
            </div>
        );
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <ArrowLeft />,
        nextArrow: <ArrowRight />
    };

    return (
        <div className='w-full flex'>
            <div className='w-[350px]'>
                <Slider {...settings}>
                    <div>
                        <img src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80" alt="Image 1" />
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80' alt="Image 2" />
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80 " alt="Image 3" />
                    </div>
                </Slider>

            </div>
            <div className='p-4'>
                <p className='text-2xl font-semibold text-indigo-600'>Room Details</p>
                <div className='p-10 grid grid-cols-2 w-full gap-4'>
                    <p>Location:</p><p className='ml-10'>Chabhil</p>
                    <p>Price:</p><p className='ml-10'>Rs 6000</p>
                    <p>Description:</p><textarea className='border-2 border-black w-[400px] disabled h-[200px] ' placeholder='kvhhglvjvhkvjghkkjvhkkjgjvhhvlkhvlkkhvlkkh' />
                </div>
                <div className='mt-10'>
                    <Button
                        title='BookNow'
                        onClick={()=>navigate('/signup')}
                    />
                </div>
            </div>
        </div>
    );

};

export default RoomDetails;
