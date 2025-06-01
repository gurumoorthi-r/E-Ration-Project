import React from 'react'
import { useSelector } from 'react-redux'
import { CartCard } from '../../components/Customer/Customer-Details/CartCard';


export const Cart = () => {


    const products = useSelector( state => state.cartState.cartList);
    const total = useSelector( state => state.cartState.total);

    
  return (
    <main>
      <section className="">
        <h1 className='text-4xl text-center mt-4 font-bold text-blue-900'>Cart Items: {products.length} / ${total}</h1>
        { products.map((product) => (
          <CartCard key={product.id} product={product} />
        )) } 
        <div className="flex justify-center items-center ">
          <button className=' bg-orange-500 w-40 h-12 rounded-lg text-white'>Place Order</button>
          </div>       
      </section>
    </main>
  )
}
