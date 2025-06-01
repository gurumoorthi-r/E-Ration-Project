import React from 'react'

export const ManagerRegister = () => {
  return (
    <>

<div className="flex flex-col items-center mx-40 mt-12 w-9/12 h-3/5 rounded-xl shadow-2xl p-4 bg-white border border-gray-30 mb-12"  >

<h1 className='text-center font-bold text-4xl' style={{'color': '#F47458'}}>Manager Register</h1>

<div className=" mx-20 mt-12 flex flex-row ">

    <div className="mx-12 flex flex-col ">
        <label htmlFor="" className='p-4 mx-5 mt-2 font-semibold'>Ration Number</label>
        <input type="text" name="" id="" style={{ 'background-color': '#fff6f4' }} className='rounded-4xl  mx-8 p-2 w-full' />

        
        <label htmlFor="" className='p-4 mx-5 mt-2 font-semibold'>Ration Type</label>
        <input type="text" name="" id="" style={{ 'background-color': '#fff6f4' }} className='rounded-4xl  mx-8 p-2 w-full' />


        <label htmlFor="" className='p-4 mx-5 mt-2 font-semibold'>First Name</label>
        <input type="text" name="" id="" style={{ 'background-color': '#fff6f4' }} className='rounded-4xl  mx-8 p-2 w-full' />

        <label htmlFor="" className='p-4 mx-5 mt-2 font-semibold'>Last Name</label>
        <input type="text" name="" id="" style={{ 'background-color': '#fff6f4' }} className='rounded-4xl  mx-8 p-2 w-full' />

        <label htmlFor="" className='p-4 mx-5 mt-2 font-semibold'>Gender</label>
        <input type="text" name="" id="" style={{ 'background-color': '#fff6f4' }} className='rounded-4xl  mx-8 p-2 w-full' />

        <label htmlFor="" className='p-4 mx-5 mt-2 font-semibold'>Family Size</label>
        <input type="text" name="" id="" style={{ 'background-color': '#fff6f4' }} className='rounded-4xl  mx-8 p-2 w-full' />



    </div>
    <div className="mx-12 flex flex-col ">
        <label htmlFor="" className='p-4 mx-5 mt-2 font-semibold'>Age</label>
        <input type="text" name="" id="" style={{ 'background-color': '#fff6f4' }} className='rounded-4xl  mx-8 p-2 w-full' />

        <label htmlFor="" className='p-4 mx-5 mt-2 font-semibold'>Date-of-birth jn</label>
        <input type="text" name="" id="" style={{ 'background-color': '#fff6f4' }} className='rounded-4xl  mx-8 p-2 w-full' />

        <label htmlFor="" className='p-4 mx-5 mt-2 font-semibold'>Address</label>
        <input type="text" name="" id="" style={{ 'background-color': '#fff6f4' }} className='rounded-4xl  mx-8 p-2 w-full' />

        <label htmlFor="" className='p-4 mx-5 mt-2 font-semibold'>City</label>
        <input type="text" name="" id="" style={{ 'background-color': '#fff6f4' }} className='rounded-4xl  mx-8 p-2 w-full' />

        <label htmlFor="" className='p-4 mx-5 mt-2 font-semibold'>Pincode</label>
        <input type="text" name="" id="" style={{ 'background-color': '#fff6f4' }} className='rounded-4xl  mx-8 p-2 w-full' />

        <label htmlFor="" className='p-4 mx-5 mt-2 font-semibold'>Phone Number</label>
        <input type="text" name="" id="" style={{ 'background-color': '#fff6f4' }} className='rounded-4xl  mx-8 p-2 w-full' />

    </div>
    
</div>
<button className='mt-12 rounded-2xl border  p-2 px-8 text-white text-xl bg-orange-500 hover:bg-orange-600' >Register</button>
</div>
    </>
  )
}
