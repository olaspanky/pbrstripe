import React, { useState } from 'react';
import Image from 'next/image';
import arrow from "../../../public/assets/farrow.svg"
import eye from "../../../public/assets/eye.svg"
import Link from 'next/link';

const BoxGrid = ({ data }) => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const handleHover = (index) => {
    if (index !== 0) {
      setHoveredIndex(index);
    } else {
      setHoveredIndex(0);
    }
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
      {data.map((box, index) => (
        <div
        key={box.id}
         
        ><div className="w-full">
          <div className="flex rounded-md shadow-md flex-col gap-3 w-full">
            <div className="">
              <Image alt="alt"  src={box.icon} className='w-full' />
            </div>
            <div className='px-5 text-xs'>
              <p>{box.location}</p>
            </div>
            <div className='flex justify-between px-5 text-xs text-[#1567E0] pb-5'>
              <div className='flex gap-2'>
              <p className="">
              {box.price}
            </p>
            <Link href={`/pages/${box.id}`}>
            <Image src={arrow}/>
            </Link>
              </div>
              <div className='flex gap-2'>
              <p className="">
              {box.view}
            </p>
                <Image src={eye}/>
              </div>
           
           
            </div>
          </div>
          <div>
           
          </div>
        </div>
        </div>
      ))}
    </div>
  );
};

export default BoxGrid;
