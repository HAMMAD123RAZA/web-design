import React from 'react'

const Number = () => {
  return (
    <>
      <div className="parent py-5 grid grid-cols-2 md:grid-cols-4 px-12 border border-white gap-x-4">
        <div className=" border-white border-r">
          <img
            style={{ width: '4rem' }}
            className="py-3"
            src="https://www.makemywebsite.com.au/wp-content/uploads/2021/08/Expertise_mmw.png"
            alt=""
          />
          <p className="text-4xl py-3 font-bold">10+</p>
          <p className="text-xl py-2 font-bold"> Years Of Expertise</p>
        </div>
        <div className=" border-white border-r">
          <img
            style={{ width: '4rem' }}
            className="py-3"
            src="https://www.makemywebsite.com.au/wp-content/uploads/2021/08/Australian_Owned_mmw.png.webp"
            alt=""
          />
          <p className="text-4xl py-3 font-bold">100%</p>
          <p className="text-xl py-2 font-bold"> Austrailian Owned</p>
        </div>
        <div className=" border-white border-r">
          <img
            style={{ width: '4rem' }}
            className="py-3"
            src="https://www.makemywebsite.com.au/wp-content/uploads/2021/08/5_star_rated_mmw.png"
            alt=""
          />
          <p className="text-4xl py-3 font-bold">5-Star rated</p>
          <p className="text-xl py-2 font-bold"> Web Design Agency</p>
        </div>
        <div className=" border-white border-r">
          <img
            style={{ width: '4rem' }}
            className="py-3"
            src="https://www.makemywebsite.com.au/wp-content/uploads/2021/09/Satisfied-Clients.png.webp"
            alt=""
          />
          <p className="text-4xl py-3 font-bold">1,000+</p>
          <p className="text-xl py-2 font-bold"> Satisfied Clients</p>
        </div>
      </div>
    </>
  )
}

export default Number
