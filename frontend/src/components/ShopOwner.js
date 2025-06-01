import React from 'react'
import { Link } from 'react-router-dom'
export const ShopOwner = () => {
  return (
    <div>
         <div className=" mx-44 mt-16 w-8/12 h-5/5 rounded-xl shadow-xl p-4 bg-white border border-gray-300" >
            <div className="flex flex-col ">

              <p className='text-xl mt-4 px-8 font-bold' style={{'color': '#F47458'}}>Welcome back!!</p>
              <h1 className='text-4xl font-bold  mt-4 px-10'>Log In</h1>

              <label htmlFor="" className='p-4 mx-5 mt-2 font-semibold'>Shop ID</label>
              <input type="text" name="" id=""style={{'background-color': '#fff6f4'}} className='focus:ring-orange-500 rouded-2xl  mx-8 p-2 ' />
              
              <label htmlFor="" className='p-4 mx-5 mt-2 font-semibold'>Shop Manager ID</label>
              <input type="text" name="" id=""style={{'background-color': '#fff6f4'}} className='focus:ring-orange-500 rouded-2xl  mx-8 p-2 ' />

              <label htmlFor="" className='p-4 mx-5 mt-2 font-semibold'>Password</label>
              <input type="password" name="" id="" style={{'background-color': '#fff6f4'}}className='rouded-2xl  mx-8 p-2 ' />

            </div>
            <div className="flex flex-col justify-center items-center">
              <button className='mt-12 rounded-2xl border p-2 px-8 text-white text-xl bg-orange-500  hover:bg-orange-600' >Log In</button>

            </div>
            <div className=" flex flex-row justify-center items-center my-4 ">
              <p>Don't have an account?</p>

              <Link to="/signup" className='p-2'style={{'color': '#F47458'}}>Sign Up</Link>
            </div>

          </div>
    </div>
  )
}
