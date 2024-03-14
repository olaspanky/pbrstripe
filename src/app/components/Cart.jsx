import React, { useState } from "react";
import Image from "next/image";
import arrow from "../../../public/assets/farrow.svg";
import eye from "../../../public/assets/eye.svg";
import Link from "next/link";
import pic12 from "../../../public/assets/picturecommerce12.svg";
import pic1 from "../../../public/assets/picturecommerce1.svg";
import bin from "../../../public/assets/trashbin.svg";

const alldata = [
  {
    id: 1,
    location: 'Nigeria',
    icon: pic1,
    price: "$200",
    view: "24",
    description: 'Product 1 is a top-rated item from Nigeria. It comes with amazing features and is perfect for various occasions. Don\'t miss out on this fantastic product!'
  },]

const BoxGrid = ({ card }) => {
  

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-12 place-content-center gap-10 my-20 px-10">
      <div className="col-span-9 ">
        <div className=" flex justify-between mx-5">
          <h1>Name</h1>
          <h1>Price</h1>
        </div>
        <div className="border border-gray-400 w-full"></div>
        <div className="flex justify-between items-center py-3 px-10">
            {/* image */}
          <div className="w-3/10">
            <div className="flex rounded-md shadow-md flex-col gap-3 w-36">
              <div className="">
                <Image alt="alt" src={alldata[0].icon} className="w-full" />
              </div>
              <div className="px-5 text-xs">
                <p>{alldata[0].location}</p>
              </div>
              <div className="flex justify-between px-5 text-xs text-[#1567E0] pb-5">
                <div className="flex gap-2">
                  <p className="">{alldata[0].price}</p>
                </div>
                <div className="flex gap-2">
                  <p className="">{alldata[0].view}</p>
                  <Image src={eye} />
                </div>
              </div>
            </div>
          </div>

          <div className="w-4/10">
            <h1 className="text-xl text-[#1567E0] font-bold">Anti-infective Report Analysis 2023</h1>
          </div>
          <div className="w-3/10 flex flex-row items-center justify-center gap-10">
            <h1 className="text-md">{alldata[0].price}</h1>
            <div>                    <Image src={bin} /></div>
          </div>
        </div>
        <div className="border border-gray-400"></div>

      </div>

      <div className="col-span-3 text-center bg-[#F5F5F5] p-10 rounded-md ">
        <h1 className="my-5"> Your Order</h1>
      <div className='col-span-3 flex flex-col gap-5 items-center w-full justify-center'>
            <button className='rounded-lg  p-3 bg-[#1567E0] text-white text-xs]'>Proceeed to checkout</button>
            <h1>Or</h1>
            <button className='rounded-lg  p-3 bg-[#D1D1D1] '>Continue Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default BoxGrid;
