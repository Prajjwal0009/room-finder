import React, { useState } from 'react';
import Card from '../../Reuseable/Card';

const Home = (props: any) => {
  const { roomData } = props
  const [selectedOption, setSelectedOption] = useState('flat');

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className='absolute top-[80px] right-10'>
        <select className="w-[120px] h-[40px] text-xl text-white font-bold bg-gray-800 " onChange={handleOptionChange}>
          <option value='flat'>flat</option>
          <option value='1Room'>1Room</option>
          <option value='2Room'>2Room</option>
        </select>
      </div>
      <div className='p-10 grid grid-cols-4 gap-4'>
        {roomData?.map((items: any, index: number) => (<>
          {selectedOption === items?.room_type && (
            <>
              <Card id={items?.id} />
            </>
          )}
        </>
        )
        )}
      </div>
    </>
  );
};

export default Home;
