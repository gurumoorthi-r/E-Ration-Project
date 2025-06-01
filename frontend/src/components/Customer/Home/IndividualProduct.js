import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useEffect } from 'react';
import {toast} from "react-toastify"

import { add,  change_status } from '../../../store/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
export const IndividualProduct = ({ obj }) => {
    const [quant, setQuant] = useState(0);
    const dispatch = useDispatch();
    const [cartlist, setCartlist] = useState(obj);
    

    const handleQuantity = () => {
        if (quant > 0) {
            let x = quant - 1
            setQuant(x)
        }

        else
            setQuant(0)

    }
    const handleAdd =  () => {
        console.log(quant);
        let a = cartlist.quantity + quant;
        console.log(a);
        setCartlist(p=> ({...p,
            quantity: p.quantity + quant
        }));
    };
    useEffect(() => {
        if(cartlist.quantity>0)
            {  dispatch(add(cartlist))
               toast.info('Item added to cart')
               dispatch(change_status())

            }
     
    }, [cartlist,dispatch]);
    



    return (
        <>


            <div className="ml-16 mt-12 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                <a href="/">
                    <img className="p-8 rounded-t-lg" src={obj.image} alt="product card" />
                </a>
                <div className="px-5 pb-5">
                    <div className='flex  justify-between items-center'>
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">{obj.pname}</h5>
                        <div className="mt-4 flex justify-between items-center border border-gray-300 w-28` h-8 rounded-xl">
                            <div className="flex justify-center items-center ">
                                <div className="ml-3">
                                    <button className='text-4xl'
                                        onClick={handleQuantity}
                                    ><RemoveIcon /></button>
                                </div>
                                <div className="border ml-3 h-8 border-gray-200"></div>
                            </div>
                            <div className="flex justify-center items-center ">
                                <div className="ml-3">
                                    {quant}
                                </div>
                                <div className="border ml-3 h-8 border-gray-200"></div>
                            </div>
                            <div className="flex justify-center items-center ">

                                <button className='text-3xl ml-1 mr-3 text-center' onClick={() =>
                                    setQuant((prev) =>
                                        prev + 1

                                    )}><AddIcon /></button>

                            </div>

                        </div>
                    </div>
                    <div className="flex items-center mt-2.5 mb-5">

                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200  ms-3">5.0</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 "></span>
                        <button href="" className="text-white bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " onClick={handleAdd}>Add to cart</button>
                    </div>
                </div>
            </div>

        </>
    )
}
