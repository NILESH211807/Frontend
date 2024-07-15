import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Statistics = () => {

   const clubCount = useRef(null);
   const activeMemb = useRef(null);
   const artistCount = useRef(null);

   useGSAP(() => {

      const clubCountNumb = 1240;
      const activeMembNumb = 999;
      const artistCountNum = 658;

      gsap.fromTo(
         clubCount.current, { innerText: 0 },
         {
            innerText: clubCountNumb,
            duration: 1,
            snap: { innerText: 1 },
            scrollTrigger: {
               trigger: clubCount.current,
               scroller: 'body',
               start: "top 70%",
            }
         }

      );

      gsap.fromTo(
         activeMemb.current, { innerText: 0 },
         {
            innerText: activeMembNumb,
            duration: 1,
            snap: { innerText: 1 },
            scrollTrigger: {
               trigger: activeMemb.current,
               scroller: 'body',
               start: "top 70%",
            }
         }
      )

      gsap.fromTo(artistCount.current,
         { innerText: 0 },
         {
            innerText: artistCountNum,
            duration: 1,
            snap: { innerText: 1 },
            scrollTrigger: {
               trigger: artistCount.current,
               scroller: 'body',
               start: "top 70%",
            }
         }
      )

   })

   return (
      <>
         <div className='w-full  bg-[#111423] relative overflow-hidden text-center px-8'>
            <h1 className="text-4xl md:text-7xl uppercase font-semibold text-white mt-24">Our Statistics</h1>
            <p className="text-xl text-slate-200/90 mt-10 text-white md:px-32">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repellendus sequi tempora laborum architecto!</p>
            <div className="statistics mt-20 flex flex-col-reverse md:flex-row gap-10 mb-20 md:justify-between md:px-32">
               <div>
                  <h1 ref={clubCount} className="text-5xl font-bold text-white">1240+</h1>
                  <h5 className="text-xl text-white uppercase tracking-wider text-slate-100/90 my-5">Club</h5>
               </div>
               <div>
                  <h1 ref={activeMemb} className="text-5xl font-bold text-white">2000+</h1>
                  <h5 className="text-xl text-white uppercase tracking-wider text-slate-100/90 my-5">Active Member</h5>
               </div>
               <div>
                  <h1 ref={artistCount} className="text-5xl font-bold text-white">1.000+</h1>
                  <h5 className="text-xl text-white uppercase tracking-wider text-slate-100/90 my-5">Artist & Song</h5>
               </div>
            </div>
         </div>
      </>
   )
}


export default Statistics;