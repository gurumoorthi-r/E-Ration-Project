import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {toast} from 'react-toastify';

import axios from "axios"
export const Login = () => {
    const [ data,setData ]=useState({
        employeeID : 0,
        Username : "",
        Password_ : ""
    })
    const handleLogin= async(e)=>
    {
        e.preventDefault();
       
        try{
            const response = await axios.post('http://localhost:8080/login',data); 
            console.log(response)
            if(response.data.length>0)
            {
                toast.success('Logged In successfully')
                
            }
            else
            {
                toast.error('User not found')
            }


        }
        catch(error)
        {

        }
       

    }
    return (
        <>
            <div className="container">
                <form className="form-1" onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={data.email}
                        onChange={(e)=>setData({...data,Username: e.target.value})}
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={data.password}
                        onChange={(e)=>setData({...data,Password_: e.target.value})}
                        required
                    />
                    <button type="submit" className="button">Login</button>
                   
                </form>
            </div>
        </>
    );
};