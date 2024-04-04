import React from 'react'
import Data from './Data'

const Card = () => {
  return (
    <div className="grid grid-cols-3">
      {Data.map((el, id) => (
        <div
          key={id}
          className="relative w-64 h-80 m-4 shadow-lg rounded-lg overflow-hidden"
        >
          <img
            className="w-full h-full object-cover transition-transform transform-gpu scale-100 hover:scale-105"
            src={el.image}
            alt={`Image ${id}`}
          />
          <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black bg-opacity-100 opacity-0 transition-opacity hover:opacity-100">
            <h3 className="text-4xl">{el.title}</h3>
            <p className="text-lg font-semibold">{el.para}</p>
            <button className="mt-4 px-3 py-3 bg-gray-500 text-black">
              Explore
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card
