import { Navbar } from "./Navbar";
import { Carousel } from 'flowbite-react';

import img1 from "../../assets/Group 2014.png";
import img2 from "../../assets/ManagerImage.jpg";
import img3 from "../../assets/carousel/Tamil Nadu Government E-Ration.jpg";
import img4 from "../../assets/carousel/gorcery_slider.jpg"
import delivery from "../../assets/theme_delivery.png";

import { motion } from "framer-motion";

import {Footer } from "../../components/Customer/Home/Footer"
import { BestSellers } from '../../components/Customer/Home/BestSellers';
import { FeauturedProduct } from "../../components/Customer/Home/FeauturedProduct";
import { GovtSchemes } from "../../components/Customer/Home/GovtSchemes";
import { Link } from "react-router-dom";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { useRef } from "react";
import { useScroll } from "framer-motion";


export const HomePage = () => {
  
 
  return (
    <>
      <div className="">
        <div className="w-full ">
          <Navbar className="  " />
        </div>

        <div className="mt-16 h-90 sm:h-64 xl:h-80 2xl:h-96  mb-28">
          <Carousel className=' h-104'>
            <img src={img4} alt=".." />
            <img src={img2} alt=".." />
            <img src={img4} alt=".." className="w-full" />
            <img src={img4} alt=".." />
          </Carousel>
        </div>
        {/*  About Section */}
        <div className=" mt-56" >
          <h2 className="text-center text-4xl font-bold"></h2>
          <div className="mt-8 bg-gray flex flex-row justify-center items-center">
            <motion.div className=" w-1/2 ml-8 "  >
              
              <img src={delivery} alt="" className="h-200 w-200" />
            </motion.div>
            <div className="w-1/2 ">
              <h1 className="text-4xl font-bold mb-4 mt-0">What is <span className="text-4xl text-orange-500">E-Ration </span>?</h1>
              <div className="mt-8 text-2xl w-5/6">
                <div className="mr-16"><FormatQuoteIcon className="w-20"/></div>
                A digital hub helps you to order your essentials with only a few clicks. plus, we'll deliver your products straight to your doorstep, so you can skip waiting in queue for hours. and the price of the products is also mentioned. And no worries!! your details will be more secured and locked, can be accessed only by you!! HAPPY ORDERING!!!
                <span>
                <FormatQuoteIcon className="w-20"/>
                </span>
                </div>

            </div>
            
          </div>

        </div>



            {/* Featured Products */}

        <div className="mt-24">
        
        <div className="flex-col justify-center items-center ">
        <h2 className="text-center text-4xl font-bold group  hover:text-amber-500">Available Products Today

        <div className="bg-amber-500 h-[4px] text-center  w-0 group-hover:w-40 transition-all duration-500 "></div>
        
        </h2>
      
          
        </div>
         
          <div className="mt-4 flex flex-row">
            <FeauturedProduct />
             
          </div >
          <div className=" mt-16 flex justify-center items-center">
          <button className="border p-5 bg-orange-500 rounded-lg text-white text-2xl">
            <Link to="/allProducts">view all products</Link>
          </button>
          </div>
          
          </div>    
   

    {/* Government Schemes */}
    <div className="mt-16">
    <h2 className="text-center text-4xl font-bold">Government Schemes</h2>
    <div className="flex  ">

<GovtSchemes/>

</div>
    </div>
    

        <div className="">

          <BestSellers />

        </div>
{/* Footer*/}
<div className="mt-4 ">
  <Footer/>
</div>
     
      </div>
    </>
  );
};
