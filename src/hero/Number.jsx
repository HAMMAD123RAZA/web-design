import React, { useEffect, useState } from 'react'

const Number = () => {
  const [countPercentage, setCountPercentage] = useState(0)
  const [countClients, setCountClients] = useState(0)

  useEffect(() => {
    const duration = 6000 // Animation duration in milliseconds
    const start = 1
    const endPercentage = 100
    const endClients = 10

    let startTime

    const animateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      const valuePercentage = Math.floor(
        start + (endPercentage - start) * progress
      )
      const valueClients = Math.floor(start + (endClients - start) * progress)
      setCountPercentage(valuePercentage)
      setCountClients(valueClients)
      if (progress < 1) requestAnimationFrame(animateCounter)
    }

    requestAnimationFrame(animateCounter)

    return () => {
      startTime = null // Reset start time when component unmounts
    }
  }, [])

  return (
    <div className="parent py-5 grid grid-cols-2 md:grid-cols-4 px-12 border border-white gap-x-4">
      <div className=" border-white border-r">
        <img
          style={{ width: '4rem' }}
          className="py-3"
          src="https://www.makemywebsite.com.au/wp-content/uploads/2021/08/Expertise_mmw.png"
          alt=""
        />
        <p className="text-4xl py-3 font-bold">{countClients}+</p>
        <p className="text-xl py-2 font-bold">Years Of Expertise</p>
      </div>
      <div className=" border-white border-r">
        <img
          style={{ width: '4rem' }}
          className="py-3"
          src="https://www.makemywebsite.com.au/wp-content/uploads/2021/08/Australian_Owned_mmw.png.webp"
          alt=""
        />
        <p className="text-4xl py-3 font-bold">{countPercentage}%</p>
        <p className="text-xl py-2 font-bold">Australian Owned</p>
      </div>
      <div className=" border-white border-r">
        <img
          style={{ width: '4rem' }}
          className="py-3"
          src="https://www.makemywebsite.com.au/wp-content/uploads/2021/08/5_star_rated_mmw.png"
          alt=""
        />
        <p className="text-4xl py-3 font-bold">5-Star rated</p>
        <p className="text-xl py-2 font-bold">Web Design Agency</p>
      </div>
      <div className=" border-white border-r">
        <img
          style={{ width: '4rem' }}
          className="py-3"
          src="https://www.makemywebsite.com.au/wp-content/uploads/2021/09/Satisfied-Clients.png.webp"
          alt=""
        />
        <p className="text-4xl py-3 font-bold">{countClients}+</p>
        <p className="text-xl py-2 font-bold">Satisfied Clients</p>
      </div>
    </div>
  )
}

export default Number
