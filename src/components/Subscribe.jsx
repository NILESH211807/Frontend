import React from "react";

const Subscribe = () => {

   return (
      <>
         <div className="w-full bg-[#f2547d] px-10 py-20 tracking-wider">
            <h1 className="text-center text-6xl uppercase font-bold text-white">Subscribe</h1>
            <p className="md:px-40 text-center my-10 text-slate-100/90 text-3xl tracking-wide text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eum ad aliquam animi ratione.</p>
            <div className="mt-32 md:mt-20 md:px-48">
               <div className="w-full h-16 bg-white flex items-center justify-between rounded-full">
                  <input type="email" placeholder="Your Email" className="w-full h-16 rounded-full outline-none border-none px-8 text-[18px] md:text-xl bg-white" />
                  <button type="button" className="bg-[#111423] px-5 py-3 mr-2 text-[13px] md:text-xl font-bold uppercase text-white rounded-full">Subscribe</button>
               </div>
            </div>
         </div>
      </>
   )
}

export default Subscribe;