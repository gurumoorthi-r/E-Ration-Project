import React from 'react'
import image from "../../assets/Group 2014.png"
import { motion } from 'framer-motion'
import { CustomerLogin } from '../../components/CustomerLogin'
export const LoginPage1 = () => {
  return (
    <>

      <div className="">
        <div className="flex ">
          <CustomerLogin />
          
          <div className="">
          <motion.img 
          initial={{x:1000}}
          animate={{x:0}}
          transition={{delay:0.1}}

          src={image} className='h-full w-full' alt="" ></motion.img>
        </div>
        </div>
        

      </div>


    </>
  )
}
