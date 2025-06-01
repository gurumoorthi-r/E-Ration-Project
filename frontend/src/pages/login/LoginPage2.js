import React from 'react';
import { motion } from 'framer-motion';
import image from "../../assets/ManagerImage2.jpg";


import { ManagerLogin } from '../../components/ManagerLogin'
export const LoginPage2 = () => {
  return (
    <>

      <div className="">
        <div className="flex justify-center">
          <ManagerLogin />
          
          <div className="">
          <motion.img
          initial={{x:1000}}
          animate={{x:0}}
          transition={{delay:0.2}}
           src={image} className='pl-12 h-full' alt=""></motion.img>
        </div>
        </div>
        

      </div>


    </>
  )
}
