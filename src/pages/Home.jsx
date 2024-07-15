import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import MusicTour from "../components/MusicTour";
import Concert from "../components/Concert";
import Statistics from "../components/Statistics";
import Album from "../components/Album";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {

   const cursor = useRef(null);

   const cursorMove = (event) => {
      gsap.to(cursor.current, {
         x: event.clientX,
         y: event.clientY,
         duration: 1,
      });
   };

   return (
      <>
         <div onMouseMove={cursorMove}>
            <div ref={cursor} className="w-10 h-10 bg-zinc-900/95 fixed top-20 left-20 z-[100] rounded-full"></div>
            <Navbar />
            <Banner />
            <MusicTour />
            <Concert />
            <Statistics />
            <Album />
            <Subscribe />
            <Footer />
         </div>
      </>
   )
}


export default Home;