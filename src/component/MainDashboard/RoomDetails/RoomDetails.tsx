import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import leftArrow from '../../../assets/icons/addIcon.svg'
import rightArrow from '../../../assets/icons/addIcon.svg'

import Button from '../../Reuseable/Button';
import { useNavigate } from 'react-router-dom';
import { classNames } from '../../../utils/classNames';


const RoomDetails = (props: any) => {
  const { singleRoomDetails } = props
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
          <p>Location:</p><p className='ml-10'>{singleRoomDetails?.location}</p>
          <p>Price:</p><p className='ml-10'>Rs {singleRoomDetails?.price}</p>
          <p>Description:</p><p className='ml-9 ' >{singleRoomDetails?.description}</p>
          <p>Electricity Charge:</p><p className={classNames(singleRoomDetails?.is_electriciy_charge === true?"ml-9 text-gray-600":"ml-9 text-red-400")}>{singleRoomDetails?.is_electriciy_charge === true ? "included charge" : "notinclude"}</p>
          <p>Drainage & Wastage :</p><p className={classNames(singleRoomDetails?.is_drainage_available === true?"ml-9 text-gray-600":"ml-9 text-red-400")}>{singleRoomDetails?.is_drainage_available === true ? "included the charge" : "notinclude"}</p>
          <p>Drinking Water Charge:</p><p className={classNames(singleRoomDetails?.is_drinking_water === true?"ml-9 text-gray-600":"ml-9 text-red-400")}>{singleRoomDetails?.is_drinking_water === true ? "Charges will be added" : "Please manage by yourself"}</p>
          <p>Other Water Charge:</p><p className={classNames(singleRoomDetails?.is_water_supply === true?"ml-9 text-gray-600":"ml-9 text-red-400")}>{singleRoomDetails?.is_water_supply === true ? "Charges Will be done according to usebiltiy" : "Not included you should manage"}</p>
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
