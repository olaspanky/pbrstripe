import React from 'react'
import Card from "./Cards"
import alldata from "./data"

const Hero =() => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-3xl my-5 font-bold '>Chart Your Course to Success - <span className='text-[#1567E0]'>Order Your Report Today</span></h1>

        <div className='mx-1 my-20'>

        <Card data={alldata}
      />

        </div>
    </div>


  )
}

export default Hero
