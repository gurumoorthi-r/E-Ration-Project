import React from 'react'
import img1 from "../../../assets/products/rice.jpeg";
import img2 from "../../../assets/products/sugar.jpg";
import img3 from "../../../assets/products/wheat.jpeg";
import { IndividualProduct } from './IndividualProduct';
export const FeauturedProduct = () => {
    const products = [
        {
            'id':1,
            'image':img1,
            'pname':'Rice',
            'price':25,
            'quantity':0,
            'maxQuantity':0 
        },
        {
            'id':2,
            'image':img2,
            'pname':'Sugar',
            'price':20,
            'quantity':0,
            'maxQuantity':0 
        },
        {
            'id':3,
            'image':img3,
            'pname':'Wheat',
            'price':30,
            'quantity':0,
            'maxQuantity':0 
        }
    ]
  return (
    <>
   
{
    products.map((obj,index)=>(
        <div className="flex justify-between items-center flex-wrap max-w-104 " key={index}>
            <IndividualProduct obj={obj} />
        </div>
        
    ))
}


    </>
  )
}
