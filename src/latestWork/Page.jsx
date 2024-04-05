import React from 'react'
import Work from './Work'

const Page = () => {

  return (
    <>
      <h2 id="text-center" className="text-5xl font-bold md:ps-24 ps-16 py-10">
        Latest Work
      </h2>
      <div className="flex flex-wrap justify-center gap-20 py-4 ">
        <Work />
        <Work />
        <Work />
        <Work />
        <Work />
        <Work />
        <button
          className="md:px-7 md:py-3 px-3 py-3  bg-red-600 hover:bg-red-800 rounded text-white "
        >
          <span className="ms-2 ">View All Projects</span>
        </button>
      </div>
    </>
  )
}

export default Page
