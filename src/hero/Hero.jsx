import React from 'react'
import { TiTick } from 'react-icons/ti'
import Number from './Number'
import Para from './Para'
// import AOS from 'aos';


const Hero = () => {
  return (
    <>
      <div className=" bg-[rgb(6,7,9)] text-white  ">
        <div className="grid md:grid-cols-2 py-9 ">
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <div
              className="rounded-full"
              style={{
                width: '10rem',
                height: '10rem',
                borderRadius: '100%',
                backgroundColor: '#1e1e22',
                position: 'absolute',
                top: 160,
                left: -20,
                zIndex: 1,
                padding: '1rem',
              }}
            >
              <p className="px-5 py-5">
                <span className="text-orange-400">Trusted by</span> <br /> 1000+
                clients
              </p>
            </div>
            <img
              src="https://www.makemywebsite.com.au/wp-content/uploads/2022/01/makemywebiste-about.jpeg"
              alt="image"
              style={{ width: '31rem', borderRadius: '50%' }}
            />
          </div>

          <div>
            <h2 className="py-3 font-serif font-bold text-2xl">
              Web Design Melbourne
            </h2>
            <h2 className="text-4xl font-bold py-3">
              Bringing in innovations to Web Design
            </h2>
            <div className="parent md:flex space-x-3 py-4 ">
              <div
                style={{ width: '21rem' }}
                className=" border flex border-gray-500 my-4 py-4 md:p-4"
              >
                <TiTick className="text-red-700 text-4xl" />
                <p>
                  High-quality solutions for small <br /> & medium-sized
                  business
                </p>
              </div>

              <div
                style={{ width: '15rem' }}
                className=" border flex border-gray-500  md:p-4 py-4  my-4"
              >
                <TiTick className="text-red-700 text-4xl" />
                <p>
                  Helping businesses <br /> Succeeded online
                </p>
              </div>
            </div>
            <p className="md:font-serif">
              We have put on our creative hats to level up web design
              Melbourne-wide. Its about time to put forth your business on the
              world wide web and be second to none.
            </p>{' '}
            <br />
            <p className="md:font-serif">
              Innovation is the key to creating designs that dont let users hit
              the “back” button, and that is what we strive for at Make My
              Website.
            </p>{' '}
            <br />
            <p className="md:font-serif">
              If you have envisioned to be the foremost choice for your clients-
              its time to make a decision. We are curious to know about your
              goals, and venture into helping you to achieve those, using the
              digital space. So lets get in touch and build a stunning website
              for you.
            </p>
          </div>
        </div>
        <Number />
        <Para />
      </div>
    </>
  )
}

export default Hero
