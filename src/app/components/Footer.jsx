import React from 'react'
import location from "../../../public/assets/location.svg"
import logo from "../../../public/assets/logo.svg"
import Image from 'next/image'


const footer = () => {
  return (
    <div className='bg-footer bg-[#1b1448] bg-cover mb-10 bg-no-repeat text-[#ABABAB] px-7 py-10'>
       

        <div className='border border-1 m-5'></div>

        <div className='flex justify-between mx-7'>
            <div className='col-span-1 flex flex-col gap-3 '>
                <div className='grid grid-cols-12 flex items-center'>
                <div className='col-span-1'>
                    <Image src={location} alt=''/>

                </div>
                <div className='col-span-10 flex flex-col gap-2'>
                    <h1 className='text-sm font-bold my-1'>PBR International</h1>
                    <p className='text-xs'>Kemp House, 152-160 City  Road,London EC1V 2NX,United Kingdom</p>
                </div>
                </div>
                <div className='grid grid-cols-12 flex items-center'>
                <div className='col-span-1'>
                    <Image src={location} alt=''/>

                </div>
                <div className='col-span-10 flex flex-col gap-2'>
                    <h1 className='text-sm font-bold my-1'>PBR Sub-Saharan Africa</h1>
                    <p className='text-xs'>70B Olorunlogbon Street,Anthony Village,Lagos,Nigeria</p>
                </div>
                </div>
            </div>

            <div className='col-span-1'>
                <h1 className='text-xs text-end'>Reach us at marketanalytics@pbrinsight.com <br/> or through our online contact form.</h1>

               
            </div>
        </div>


        <div className='text-xs flex gap-3 text-white m-7'>
            <p>2022 PBr</p>
            <p>Privacy</p>
            <p>Terms</p>
        </div>
    </div>
  )
}

export default footer