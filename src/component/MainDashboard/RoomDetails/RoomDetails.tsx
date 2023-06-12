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
                <img src={rightArrow} alt="Next" /><span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="black" width="25px" height="25px" viewBox="0 0 24 24" id="next" data-name="Line Color" className="icon line-color"><path id="primary" d="M17,12,5,21V3Z" className={"fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"} /></svg>
                </span>
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
            <div className='w-[350px] bg-gray-300'>
                <Slider {...settings}>
                    <div>
                        <img src="https://i.pinimg.com/736x/b7/78/6b/b7786b4f85bee0411ac72ac21d4fcfed.jpg" alt="Image 1" />
                    </div>
                    <div>
                        <img src='https://th.bing.com/th/id/OIP.4KtPsICVK-a16RfqH_zZIwHaE8?pid=ImgDet&rs=1' alt="Image 2" />
                    </div>
                    <div>
                        <img src="https://th.bing.com/th/id/OIP.Z3QELZzPR0o9P2EV5YSCJwHaFj?pid=ImgDet&rs=1 " alt="Image 3" />
                    </div>
                </Slider>

            </div>
            <div className='p-4'>
                <p className='text-2xl font-semibold text-indigo-600'>Room Details</p>
                <div className='p-10 grid grid-cols-2 w-full gap-4'>
                    <p>Location:</p><p className='ml-10'>Chabhil</p>
                    <p>Price:</p><p className='ml-10'>Rs 6000</p>
                    <p>Description:</p><p className=' w-[400px] p-2 h-[200px] ' >This room is the best which provide both water and electricity with good view</p>
                </div>
                <div className='mt-10'>
                    <Button
                        title='BookNow'
                        onClick={() => navigate('/signup')}
                    />
                </div>
            </div>
        </div>
    );

};

export default RoomDetails;
