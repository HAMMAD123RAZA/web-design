import React from 'react';

const Layer = () => {
  return (
    <>
      <div className="bg-black w-full h-[48vh] bg-opacity-70 text-white text-center absolute mt-40 top-80">
        <div className='py-10'>
          <h1 className='md:text-4xl text-2xl font-bold md:py-3 '>We team up with the leading names of the industry</h1>
          <p>We have established a close channel with major technology brands across the world and it enables us to bring the best to every business, every time.</p>
        </div>

        <div className="md:grid md:grid-cols-5 md:px-10 grid grid-cols-4">
          <img src="magnet.png" alt="" className='w-[10rem] h-[10rem] m-3'/>
          <img src="https://www.makemywebsite.com.au/wp-content/uploads/2022/01/google-partner-licon.png" alt="" className='w-[10rem] h-[10rem] m-3'/>
          <img src="https://www.makemywebsite.com.au/wp-content/uploads/2022/01/Shopify-licon.png" alt="" className='w-[10rem] h-[10rem] m-3'/>
          <img src="https://www.makemywebsite.com.au/wp-content/uploads/2022/01/Magento-licon.png" alt="" className='w-[10rem] h-[10rem] m-3'/>
          <img src="https://www.makemywebsite.com.au/wp-content/uploads/2022/01/wordpress-licon.png" alt="" className='w-[10rem] h-[10rem] m-3'/>
        </div>
      </div>
    </>
  );
}

export default Layer;
