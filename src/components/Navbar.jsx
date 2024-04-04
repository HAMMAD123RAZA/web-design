import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'
import { Link } from 'react-router-dom'
import { FaPhoneAlt } from 'react-icons/fa'

const navLinks = [
  {
    title: 'Home',
    path: '#Home',
  },
  {
    title: 'About Us',
    path: '#about',
  },
  {
    title: 'Services',
    path: '#services',
  },
  {
    title: 'Portfolio',
    path: '#portfolio',
  },
  {
    title: 'Blog',
    path: '#Blog',
  },
  {
    title: 'Contact',
    path: '#contact',
  },
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <>
      <div
        className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/22/1e/f0/221ef058e4718a06627d098b1addc51a.jpg')`,
          height: '100vh',
        }}
      >
        <nav className="fixed top-0 left-0 right-0 z-10 bg-transparent bg-opacity-100 overflow-hidden">
          <div className="container mx-auto px-4 lg:py-4 flex items-center justify-between">
            <div className="flex items-center">
              <Link to={'/'} className="">
                <img
                  src="mmw-light-logo-min.png"
                  alt="logo"
                  style={{ width: '5rem', height: '4rem' }}
                />
              </Link>
            </div>
            <div className="md:hidden">
              {!navbarOpen ? (
                <button
                  onClick={() => setNavbarOpen(true)}
                  className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                >
                  <Bars3Icon className="h-5 w-5" />
                </button>
              ) : (
                <button
                  onClick={() => setNavbarOpen(false)}
                  className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-secondary-500 hover:border-white"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              )}
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:flex-grow">
              <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                  </li>
                ))}
              </ul>
              <button className="px-4 ms-20 py-1 bg-red-700 rounded text-white flex items-center">
                <FaPhoneAlt className="text-white" />
                <span className="ms-2">87456821</span>
              </button>
            </div>
          </div>
          {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
      </div>
    </>
  )
}

export default Navbar
