import React from 'react'
import Card from './Card'

const Services = () => {
  return (
    <>
      <div className="parent md:grid grid-cols-2 py-5 space-x-12">
        <div className="text-center">
          <h2 className="md:text-7xl text-3xl  font-bold">Our Services</h2>
          <p className="py-3 er">
            We lay our complete focus on developing a website thats <br />
            professional, well-structured and fully optimised <br />, thoroughly
            justifying your business goals.
          </p>
        </div>
        <div className="py-4 text-center pe-10 ">
          <button className="md:px-7 md:py-3 px-3 py-3  bg-black hover:bg-red-600 rounded text-white ">
            <span className="ms-2 ">View All Services</span>
          </button>
        </div>
      </div>
      <Card />
    </>
  )
}

export default Services
