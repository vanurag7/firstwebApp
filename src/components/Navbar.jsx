import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import React from 'react'


const Navbar = () => {
  const [nav,setNav]=useState(false)
  const handleNav=()=>{
    setNav(!nav)
  }
  return (
    <nav className='p-2'>
        <div className="text-white flex justify-between items-center container mx-auto">
            <div className="logo text-3xl font-bold  text-[#00df9a]">React</div>
            <ul className=' hidden md:flex'>
                <li className=' hover:text-green-400 duration-300'>Home</li>
                <li className='ml-4 hover:text-green-400 duration-300'>Account</li>
                <li className='ml-4 hover:text-green-400 duration-300'>Sign In</li>
                <li className='ml-4 hover:text-green-400 duration-300'><button>Get Started</button></li>
            </ul>
               <div className='md:hidden text-2xl' onClick={handleNav}> {nav? <AiOutlineClose />:<GiHamburgerMenu/>}</div>
        </div>
            <ul className={nav?'flex flex-col  bg-black fixed top-0 justify-center items-center left-0 h-full w-[60%] font-medium text-4 ml-4 text-white' :'fixed left-[100%]'}>
                <li className='mt-4 hover:text-green-500 duration-300 '>Home</li>
                <li className='mt-4 hover:text-green-500 duration-300 '>Account</li>
                <li className='mt-4 hover:text-green-500 duration-300'>Sign In</li>
                <li className='mt-4 hover:text-green-500 duration-300'><button>Get Started</button></li>
            </ul>
    </nav>
  )
}

export default Navbar