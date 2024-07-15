import React, { useEffect, useRef, useState } from 'react';
import BannerLogo from '../../public/images/bannerLogo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { toast } from 'react-toastify';

const Banner = () => {

   const BannerText = useRef(null);
   const BannerP = useRef(null);

   useGSAP(() => {
      gsap.fromTo(BannerText.current, { x: -500 },
         { x: 0, duration: 1 }
      );

      gsap.fromTo(BannerP.current, { x: 500 },
         {
            x: 0,
            duration: 1
         }
      )
   })

   const [token, setToken] = useState(localStorage.getItem('token'));
   const isloggedIn = !!token;

   const navigate = useNavigate();

   const handleLogout = () => {
      localStorage.setItem('token', '');
      navigate('/')
   }

   return (
      <>
         <div className='Banner w-full flex flex-col-reverse md:flex-row relative overflow-hidden top-14 pb-20'>
            <div className='leftSide md:px-20 px-10 md:py-20 py-10 w-full md:w-1/2'>
               <h1 className='text-[50px] md:text-[6vw] font-semibold leading-none text-[#db4c71] tracking-tighter' ref={BannerText}>Live Music</h1>
               <p className='mt-5 font-semibold text-[15px] md:text-xl text-zinc-900/80' ref={BannerP}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores reiciendis quos nam eaque quas repellendus. Eaque quo quidem delectus minima.</p>

               {
                  isloggedIn ? <>

                     <button onClick={handleLogout} className='bg-[#db4c71] px-8 py-[10px] tracking-wider font-semibold mt-6 text-white md:text-xl text-[12px] uppercase rounded-full'>Logout</button>
                  </> : <>

                     <NavLink to="/register">
                        <button className='bg-[#db4c71] px-8 py-[10px] tracking-wider font-semibold mt-6 text-white md:text-xl text-[12px] uppercase rounded-full'>Register Now</button>
                     </NavLink>
                  </>
               }

               <h1 className=' md:text-2xl text-[15px] uppercase font-semibold mt-8 leading-none text-[#0b1223]'>Live streaming from london!</h1>
            </div>
            <div className='rightSide w-full md:w-1/2 p-5 relative z-40 md:-mt-5 flex items-center justify-center'>
               <div className='w-80 h-80 md:w-96 md:h-96 rounded-full bg-[#f2547e] overflow-hidden mt-10'>
                  <img src={BannerLogo} className='mt-7' />
               </div>
            </div>
         </div>
      </>
   )
}

export default Banner;