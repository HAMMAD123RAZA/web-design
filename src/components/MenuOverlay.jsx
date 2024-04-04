import React from 'react'
import NavLink from './NavLink'
// import { FaPhoneAlt } from 'react-icons/fa'

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <>
          <li key={index}>
            <NavLink href={link.path} title={link.title} />
          </li>
        </>
      ))}
      <button className="px-5 py-2 bg-red-700 text-white  ">
        {' '}
       contact
      </button>
    </ul>
  )
}

export default MenuOverlay
