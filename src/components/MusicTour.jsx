import React, { useRef } from "react";
import Card1 from '../../public/images/Card1.png';
import Card2 from '../../public/images/Card2.png';
import Card3 from '../../public/images/Card3.png';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MusicTour = () => {

   const musicTourTxt = useRef(null);
   const musicTourP = useRef(null);

   useGSAP(() => {
      gsap.fromTo(musicTourTxt.current, { y: -50 },
         {
            y: 0,
            duration: 1,
            scrollTrigger: {
               trigger: musicTourTxt.current,
               scroller: 'body',
               start: 'top 90%'
            }
         },
      )

      gsap.fromTo(musicTourP.current, { y: 50 },
         {
            y: 0,
            duration: 1,
            scrollTrigger: {
               trigger: musicTourP.current,
               scroller: 'body',
               start: 'top 90%'
            }
         },
      )
   })

   return (
      <>
         <div className='bg-[#111522] w-full relative overflow-hidden'>
            <div className="w-full mt-20">
               <h1 className="text-5xl text-white font-semibold leading-none uppercase text-center" ref={musicTourTxt}>Music Tour</h1>
               <p className="text-[#e7e9e9] px-4 md:px-20 text-[15px] md:text-xl text-center mt-5" ref={musicTourP}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit assumenda consectetur, iste ab asperiores.</p>
            </div>

            <div className="w-full flex flex-col mt-16 md:mt-10 items-center justify-around px-10 pb-20 gap-10 md:flex-row">
               <div className="card w-full md:w-[300px] h-[420px] md:h-[420px] overflow-hidden bg-[#fbebd2] relative hover:scale-105 duration-300">
                  <h1 className="pl-10 pr-20 pb-2 mt-5 text-md font-medium text-[#f17893]">Lorem ipsum dolor sit amet.</h1>
                  <h1 className="font-bold uppercase text-[#f2547f] text-2xl absolute -right-2 md:-right-6 rotate-90 top-20 md:top-15">America</h1>
                  <img src={Card1} className="-ml-5" />
               </div>

               <div className="card w-full md:w-[300px] h-[420px] md:h-[420px] overflow-hidden bg-[#afea60] relative hover:scale-105 duration-300">
                  <h1 className="pl-10 pr-20 pb-2 mt-5 text-md font-medium text-zinc-900/90">Lorem ipsum dolor sit amet.</h1>
                  <img src={Card2} className="-ml-10" />
                  <h1 className="font-bold uppercase text-[#101721] text-2xl absolute -right-5 md:-right-6 top-24 rotate-90">Australia</h1>
               </div>

               <div className="card w-full md:w-[300px] h-[420px] md:h-[420px] overflow-hidden bg-[#f2547e] relative hover:scale-105 duration-300">
                  <h1 className="pl-10 pr-20 pb-2 mt-5 text-md font-medium text-slate-100/80">Lorem ipsum dolor sit amet.</h1>
                  <img src={Card3} />
                  <h1 className="font-bold uppercase text-white text-2xl absolute right-5 md:right-3 top-16 rotate-90">Asia</h1>
               </div>
            </div>
         </div>
      </>
   )
}

export default MusicTour;