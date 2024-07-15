import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {

   const footerItems = [
      {
         title: 'about',
         items: ['history', 'Our Team', 'event', 'Artist & Song', 'Privacy Policy']
      },
      {
         title: 'service',
         items: ['How To Book', 'Our Event', 'Order Status', 'Promo', 'Payment Method']
      },
      {
         title: 'other',
         items: ['Contact Us', 'Help', 'Privacy']
      },
   ];

   return (
      <>
         <div className="w-full bg-[#111423] px-10 py-20 tracking-wider">
            <div className="w-full flex flex-col md:flex-row ">
               <div className="leftSide w-full md:w-40%]">
                  <h1 className="text-white text-3xl uppercase font-bold">Music urban</h1>
                  <p className="text-xl text-white my-5 md:pr-32">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae molestiae ullam minus. Perferendis itaque unde</p>
                  <div className="flex gap-5 mt-10 mb-20">
                     <div className="w-12 h-12 cursor-pointer bg-white flex items-center justify-center rounded-full">
                        <FaInstagram size="1.5em" />
                     </div>
                     <div className="w-12 h-12 cursor-pointer bg-white flex items-center justify-center rounded-full">
                        <FaFacebookF size="1.5em" />
                     </div>
                     <div className="w-12 h-12 cursor-pointer bg-white flex items-center justify-center rounded-full">
                        <FaTwitter size="1.5em" />
                     </div>
                     <div className="w-12 h-12 cursor-pointer bg-white flex items-center justify-center rounded-full">
                        <FaWhatsapp size="1.5em" />
                     </div>
                  </div>
               </div>

               <div className="rightSide flex flex-col md:flex-row gap-14 mr-2">
                  {
                     footerItems.map((footer, index) => {

                        return (
                           <div className="about" key={index}>
                              <h1 className="text-white text-3xl uppercase font-bold mb-7">{footer.title}</h1>
                              <div className="aboutItems flex flex-col mt-2">
                                 {
                                    footer.items.map((item, index) => {
                                       return (
                                          <a key={index} className="text-white text-[15px] mb-2 uppercase" href="/">{item}</a>
                                       )
                                    })
                                 }
                              </div>
                           </div>
                        )
                     })
                  }
               </div>
            </div>
         </div>
      </>
   )
}

export default Footer;