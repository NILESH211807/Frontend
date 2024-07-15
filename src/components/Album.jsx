import React from "react";
import Card1 from '../../public/images/Card1.png';
import Card2 from '../../public/images/Card2.png';
import Card3 from '../../public/images/Card3.png';

const Album = () => {
   return (
      <>
         <div className='w-full bg-[#fbebd2] relative overflow-hidden text-center'>
            <h1 className="text-5xl text-zinc-900 font-semibold leading-none uppercase text-center mt-20">Full album</h1>

            <div className="w-full flex flex-col md:flex-row gap-10 justify-around px-10 mt-14">

               <div className="card w-full md:w-[300px] h-[420px] md:h-[420px] overflow-hidden bg-[#f2547d] relative hover:scale-105 duration-300">
                  <h1 className="font-bold uppercase text-[#FFF] text-6xl absolute -right-10 rotate-90 top-24">Bella</h1>
                  <img src={Card2} className="-ml-20 mt-8" />
               </div>

               <div className="card w-full md:w-[300px] h-[420px] md:h-[420px] overflow-hidden bg-[#afeb5f] relative hover:scale-105 duration-300">
                  <h1 className="font-bold uppercase text-[#000] text-5xl my-8 -ml-8">Jackson</h1>
                  <img src={Card1} className="-ml-2" />
               </div>
               <div className="card w-full md:w-[300px] h-[420px] md:h-[420px] overflow-hidden bg-[#f2547d] relative hover:scale-105 duration-300">
                  <h1 className="font-bold uppercase text-[#000] text-6xl my-8 -ml-8">Janne</h1>
                  <img src={Card3} />
               </div>

            </div>

            <p className="text-3xl px-10 my-14 md:px-40 text-zinc-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis delectus voluptatibus quis?</p>
         </div>
      </>
   )
}

export default Album;