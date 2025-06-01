import React from 'react'
import { Routes,Route } from 'react-router-dom'

import {LoginPage1} from '../pages/login/LoginPage1'
import { ManagerRegister } from '../pages/register/ManagerRegister'
import { CustomerRegister } from '../pages/register/CustomerRegister'
import { LoginPage2 } from '../pages/login/LoginPage2';
import { HomePage } from '../pages/customer/HomePage';
import { AllProducts } from '../pages/customer/AllProducts';
import { Cart } from '../pages/customer/Cart'
import { CustomerDetails } from '../pages/customer/CustomerDetails'

export const AllRoutes = () => {
  return (
   <Routes>
    
     <Route path='/Customer-login' element={<LoginPage1/>}/>
     <Route path='/customer-register' element={<CustomerRegister />}/>

     

     <Route path='/manager-register' id='manager-register' element={<ManagerRegister/>}/>

     <Route path='/manager-login' id='manager-login' element={<LoginPage2/>}/>

     <Route path='/' id='home' element={<HomePage/>}/>


     <Route path='/allProducts' id='allProducts' element={<AllProducts/>}/>

     <Route path='/myCart' id='myCart' element={<Cart/>}/>
    
     <Route path='/myProfile' id='myProfile' element={<CustomerDetails/>}/>



     

   </Routes>
  )
}
