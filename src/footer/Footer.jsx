import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const links=['Abous Us','FAQs','Our Portfolio','Services','Blog','Careers'];

const Footer = () => {
  return (
    <>
      <div className="md:grid grid-cols-4 px-6 py-4 bg-black text-white ">
        <div className='py-4'>
            <h2 className='text-red-700 text-3xl py-5'>Victoria</h2>
            <div className="flex "> <IoLocationOutline  style={{ fontSize: '24px'}} className='mt-2 text-white mx-2' /> <p>Baldia Town , <br /> karachi , street 12</p> </div>


            <div className='flex gap-5 pt-11'>

            <h2 style={{ display: 'flex', alignItems: 'center' }}>
  <FaCheckCircle style={{ marginRight: '5px' }} />
  <span className='font-bold'>Web Design</span>
</h2>


            <h2 style={{ display: 'flex', alignItems: 'center' }}>
  <FaCheckCircle style={{ marginRight: '5px' }} />
  <span className='font-bold'>Seo</span>
</h2>

</div>
   <div className="flex py-4">
            <img src="https://www.makemywebsite.com.au/wp-content/uploads/2020/11/client-partners-verified.png" className='w-[10rem]' alt="image" />

                <img src="https://www.makemywebsite.com.au/wp-content/uploads/2020/11/google-partner-badge.jpg" className='w-[8rem] ' alt="image" />

            </div>

            <div className="flex gap-4 py-2">
                <p className='hover:text-red-600 cursor-pointer'>Privacy Policy</p>
                <p className='hover:text-red-600 cursor-pointer'>Terms Condition</p>
            </div>
        </div>

        {/* 2nd */}
        <div className='py-4'>
            
            <h2 className='text-red-700 text-3xl py-5'>New South Wales</h2>
            <div className="flex "> <IoLocationOutline  style={{ fontSize: '24px'}} className='mt-2 text-white mx-2' /> <p>Baldia Town , <br /> karachi , street 12</p> </div>
            
        </div>

        <div className='py-4'>
            <h2 className='text-red-700 text-3xl py-5'>Quick Links</h2>
            {links.map((el,id)=>{
                return  <>
                <div className="flex gap-2">
                 <FaCheckCircle  />
                <p key={id} className='hover:text-red-600 cursor-pointer'>{el}</p> 
                </div>
                </>
            })}
        </div>


        <div className='py-4 pr-1'>
            <p className=''>We love to exceed our clients expectations, following a comprehensive approach. Come and share your thoughts to create a breathtaking digital experience.</p>
            <p className='hover:text-red-500 cursor-pointer py-4 border-b-2 border-red-600 '>ABC@gmail.com  </p>
            <p className='hover:text-red-500 cursor-pointer py-4 border-b-2 border-red-600 '>XYZ@gmail.com</p>

                <div className="icons flex gap-8 py-4">
                    <FaFacebookF size={23} className= "text-red-600 hover:text-white cursor-pointer" />
                    <FaInstagramSquare size={23} className= "text-red-600 hover:text-white cursor-pointer" />

                    <FaLinkedin size={23} className= "text-red-600 hover:text-white cursor-pointer" />

                    <FaYoutube size={23} className= "text-red-600 hover:text-white cursor-pointer" />

                </div>

        </div>

      </div>
    </>
  )
}

export default Footer
