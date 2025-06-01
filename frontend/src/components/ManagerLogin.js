import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
export const ManagerLogin = () => {
  return (
    <>
    <motion.div 
     initial={{x:-500}}
     animate ={{x:0}}
    className=" mb-4 ml-40 mt-12 w-11/12 h-4/5 rounded-xl shadow-xl p-4 bg-white border border-gray-300" >
                <div className="flex flex-col ">

                    <motion.h1
                     initial={{x:-500}}
                     animate ={{x:0}}
                    className='text-xl mt-4 px-8 font-bold' style={{ 'color': '#F47458' }}>Welcome back!!</motion.h1>
                    <motion.h2
                    initial={{x:-500}}
                    animate ={{x:0}}
                    className='text-4xl font-bold  mt-4 px-10'>Manager Log In</motion.h2>

                    <label htmlFor="" className='p-4 mx-5 mt-2 font-semibold'>Shop Number</label>
                    <input type="text" name="" id="" style={{ 'background-color': '#fff6f4' }} className='focus:ring-orange-500 rouded-2xl  mx-8 p-2 ' />
                    

                    <label htmlFor="" className='p-4 mx-5 mt-2 font-semibold'>Manager ID</label>
                    <motion.input
                    whileFocus={{
                        boxShadow:"0px 0px 8px rgb(255,255,255)"
                    }}
                     type="text" name="" id="" style={{ 'background-color': '#fff6f4' }} className='focus:ring-orange-500 rouded-2xl  mx-8 p-2 ' />

                    <label htmlFor="" className='p-4 mx-5 mt-2 font-semibold'>Password</label>
                    <input type="password" name="" id="" style={{ 'background-color': '#fff6f4' }} className='rouded-2xl  mx-8 p-2 ' />

                </div>



                <div className="flex flex-col justify-center items-center">
                    <motion.button 
                    initial={{x:-500}}
                    animate={{x:0}}
                    transition={{delay:0}}
                    whileHover={{
                        scale:1.1,
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                        boxShadow:"0px 0px  8px rgb(255, 95, 31)"

                    }}
                    className='mt-12 rounded-2xl border p-2 px-8 text-white text-xl bg-orange-500  hover:bg-orange-600' >Log In</motion.button>

                </div>
                <div className="">

                </div>
                <div className=" flex flex-row justify-center items-center mt-4 ">
                    <p>Don't have an account?</p>

                    <Link to="/manager-register" className='p-2' style={{ 'color': '#F47458' }}>Sign Up</Link>
                </div>

                <div className="my-4 flex flex-row justify-center items-center mx-4 ">
                    <Link className="text-orange-500" to="/">  Login as Customer </Link> 

                    


                </div>

            </motion.div></>
  )
}
