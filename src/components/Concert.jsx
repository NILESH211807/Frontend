import React from "react";
import Card2 from '../../public/images/Card2.png';
import Card3 from '../../public/images/Card3.png';
import BannerLogo from '../../public/images/bannerLogo.png';

const Concert = () => {
   return (
      <>
         {/* CONCERT A  */}
         <div className="concerta w-full h-screen flex flex-col md:flex-row relative overflow-hidden">
            <div className='leftSide w-full md:w-1/2 relative z-40 flex items-center justify-center md:pb-10'>
               <div className='w-80 h-80 md:w-96 md:h-96 rounded-full mt-20 bg-[#afea60] overflow-hidden'>
                  <img src={Card2} className='mt-7 -ml-9' />
               </div>
            </div>

            <div className="rightSide w-full md:w-1/2">
               <div className="px-10 mt-20 md:mt-32">
                  <h1 className="text-5xl uppercase font-bold leading-none text-white">Concert A</h1>
                  <p className="text-slate-100/80 my-5 text-left mb-10 text-[15px] md:text-xl tracking-wide text-white drop-shadow-md">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ratione, laborum quasi aut laboriosam deserunt eius delectus perspiciatis architecto similique temporibus praesentium minima sunt, minus repellat iusto aspernatur fuga. Porro harum nam recusandae tenetur ullam.</p>
               </div>
            </div>
         </div>

         {/* CONCERT B  */}
         <div className="concertB w-full h-screen relative overflow-hidden flex flex-col-reverse md:flex-row">
            <div className='leftSide w-full md:w-1/2 relative z-40 md:pb-10'>
               <div className="px-10 mt-10 md:mt-60 md:ml-28">
                  <h1 className="text-5xl uppercase font-bold leading-none text-[#151526]">Concert B</h1>
                  <p className="text-[#151526bd] my-5 text-left mb-10 text-[15px] md:text-xl tracking-wide drop-shadow-md">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ratione, laborum quasi aut laboriosam deserunt eius delectus perspiciatis architecto similique temporibus praesentium minima sunt, minus repellat iusto aspernatur fuga. Porro harum nam recusandae tenetur ullam.</p>
               </div>
            </div>
            <div className="rightSide flex items-center justify-center mt-20">
               <div className='w-80 h-80 md:w-96 md:h-96 rounded-full bg-[#f2547e] overflow-hidden md:ml-20'>
                  <img src={BannerLogo} className='mt-7 ml-2' />
               </div>
            </div>
         </div>


         {/* CONCERT C  */}
         <div className="concertC w-full h-screen  bg-[#fbebd2] relative overflow-hidden flex flex-col md:flex-row ">
            <div className="w-[790px] h-[750px] bg-[#afea60] absolute top-0 left-0" style={{ clipPath: 'polygon(100% 0, 0 0, 0 77%)' }}></div>
            <div className="w-[440px] h-[400px] bg-[#f2547d] hidden md:block absolute top-0 right-0" style={{ clipPath: 'polygon(0 0, 100% 85%, 100% 0)' }}></div>

            <div className='leftSide w-full md:w-1/2 relative z-40 flex items-center justify-center md:-ml-10'>
               <div className='w-80 h-80 md:w-96 md:h-96 rounded-full bg-[#f2547e] overflow-hidden md:ml-20'>
                  <img src={Card3} className='mt-7 ml-5' />
               </div>
            </div>

            <div className='rightSide w-full md:w-1/2 relative z-40 md:pb-10'>
               <div className="px-10 mt-10 md:mt-28 md:ml-28">
                  <h1 className="text-5xl uppercase font-bold leading-none text-[#ffffff]">Concert C</h1>
                  <p className="text-[#000000] my-5 text-left mb-10 text-[15px] md:text-xl tracking-wide">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ratione, laborum quasi aut laboriosam deserunt eius delectus perspiciatis architecto similique temporibus praesentium minima sunt, minus repellat iusto aspernatur fuga. Porro harum nam recusandae tenetur ullam.</p>
               </div>
            </div>
         </div>

      </>
   )
}


export default Concert;