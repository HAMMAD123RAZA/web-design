import React, { useEffect } from 'react'
import '../App.css'
import 'aos/dist/aos.css'
import AOS from 'aos'

const Work = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div id="container " data-aos="flip-left">
      <div id="row">
        <div id="col-md-4 col-md-offset-4 content">
          <div id="screen" className="relative">
            <img src="full.png" alt="Image" />
            <div className="absolute bottom-0 w-full text-white bg-opacity-50 bg-gray-400">
              <p className="p-4 text-center font-bold text-2xl">Sales Force</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work