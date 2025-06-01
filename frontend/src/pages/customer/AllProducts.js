import React from 'react'
import { IndividualProduct } from '../../components/Customer/Home/IndividualProduct'
import { Navbar } from '../customer/Navbar'

export const AllProducts = () => {
  const products =[1,2,3,4,5,6]
  return (
    <>
    <div className="">
      <Navbar/>
    </div>
    <div className="mt-24">

    <h2 className='text-center text-3xl font-bold'>Products that are available today</h2>

<div className="mt-16 flex flex-row justify-items items-center flex-wrap max-w-350px ">
 {
   products.map((i)=>(
   <IndividualProduct />
   ))
 }

</div>


    </div>
      
    </>
  )
}
