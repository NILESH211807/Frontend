import React, { useRef } from 'react';
import Logo from '../../public/images/logo.jpg';
import { FaSearch } from "react-icons/fa";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {
   const nav = useRef(null);
   useGSAP(() => {
      gsap.fromTo(nav.current, {
         opacity: 0,
         y: -20
      }, {
         opacity: 2,
         y: 0,
         duration: 1,
         ease: 'power3.out'
      }
      )
   });

   return (
      <>
         <nav ref={nav} className='w-full px-8 py-4 bg-black text-white flex items-center justify-between z-50 fixed top-0 left-0'>
            <div>
               <img className='w-10' src={Logo} />
            </div>
            <div className='flex gap-6 uppercase tracking-wider'>
               <h1 className='md:hidden font-semibold text-xl tracking-wider'>NILESH</h1>
               <li className='hidden md:block list-none'><a className=' font-bold' href="/">Home</a></li>
               <li className='hidden md:block list-none'><a className=' font-bold' href="/">Event</a></li>
               <li className='hidden md:block list-none'><a className=' font-bold' href="/">About</a></li>
               <li className='hidden md:block list-none'><a className=' font-bold' href="/">Artist</a></li>
               <li className='hidden md:block list-none'><a className=' font-bold' href="/">Contact</a></li>
            </div>
            <div className='cursor-pointer'>
               <FaSearch size="1.2em" />
            </div>
         </nav>
      </>
   )
}


export default Navbar;