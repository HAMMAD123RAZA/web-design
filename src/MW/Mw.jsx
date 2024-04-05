import React from 'react'
import Layer from './Layer'

const Mw = () => {
  return (
    <>
      <div className='relative overflow-hidden bg-cover bg-no-repeat' style={{backgroundImage:`url('https://www.makemywebsite.com.au/wp-content/uploads/2022/01/front-banner.jpg')`,height:"100vh"}}>

{/* card */}
<div className="absolute top-20 left-7">

      <div  className='card text-center font-bold md:w-[31rem] w-[19rem] h-80 bg-black bg-opacity-70 text-white  shadow-lg  py-5'>
  <h2 className='text-3xl text-center mb-4'>Have A Project In Mind?</h2>
  <p className='text-center mb-2 font-bold'>Want to collaborate and give wings to your dream project?</p>
  <p className=' mb-6  font-bold'>Lets talk!</p>
  <button className='bg-red-600 text-black ms-4 hover:bg-red-800 px-6 py-3 rounded-md transition duration-300'>GET QUOTE</button>
</div>
</div>

<Layer/>

      </div>
      
    </>
  )
}

export default Mw
