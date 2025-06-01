import React, { useState } from 'react'

import {toast} from "react-toastify"
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
export const Register = () => {
    const navigate= useNavigate();


    const [data,setData]=useState(
        {
            Eid:'',
            First_name:'',
            Last_name:'',
            Gender:'',
            Date_of_Birth:'',
            Phone_Number:'',
            Address:'',
            City:'',
            Pincode:'',
            Designation:'',
            Email:'',
            Pass_word:'',
            Emergency_no:'',
            Domain:''
            
            

        }  );
    const [pass,setPass]=useState('')    
    const handleGenderChange = (e) => {
            setData({ ...data, Gender: e.target.value });
        };
        
    const handleRegister= async(e)=>
     {

           e.preventDefault();
           if(pass !==data.Pass_word)
           {
            toast.error('Password does not match')
           }
           else
           {
            const response = await axios.post('http://localhost:4000/register',data);
            console.log(response);
            toast.success('Registered Succesfully');
            navigate('/login')

           }
           
     }   
  
  return (
    <div className="form-container" style={{ backgroundImage: "url('./WhatsApp Image 2024-04-09 at 5.53.00 PM.jpeg')"}}>
    <h2>Employee Registration</h2>
    <form onSubmit={handleRegister}>
        <div className="form-group">
            <label  htmlfor="employeeId">Employee ID:</label>
            <input type="text" id="employeeId" name="employeeId" onChange={(e)=>setData({...data,Eid:e.target.value})} required/>
        </div>
        <div className="form-group">
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" onChange={(e)=>setData({...data,First_name:e.target.value})} required/>
        </div>
        <div className="form-group">
            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName"onChange={(e)=>setData({...data,Last_name:e.target.value})} required/>
        </div>
        <div className="form-group">
            <label for="gender">Gender:</label>
            <select id="gender" name="gender" onChange={handleGenderChange} value={data.Gender} required>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
        </div>
        <div className="form-group">
            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" onChange={(e)=>setData({...data,Date_of_Birth:e.target.value})} required/>
        </div>
        <div className="form-group">
            <label for="phoneNumber">Phone Number:</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" onChange={(e)=>setData({...data,Phone_Number:e.target.value})}required/>
        </div>
        <div className="form-group">
            <label for="address">Address:</label>
            <input type="text" id="address" name="address" placeholder="Door No, Street Name, Area" onChange={(e)=>setData({...data,Address:e.target.value})} required/>
        </div>
        <div className="form-group">
            <label for="city">City:</label>
            <input type="text" id="city" name="city"onChange={(e)=>setData({...data,City:e.target.value})} required/>
        </div>
        <div className="form-group">
            <label for="pincode">Pincode:</label>
            <input type="text" id="pincode" name="pincode"onChange={(e)=>setData({...data,Pincode:e.target.value})} required/>
        </div>
        <div className="form-group">
            <label for="designation">Designation:</label>
            <input type="text" id="designation" name="designation"onChange={(e)=>setData({...data,Designation:e.target.value})} required/>
        </div>
        <div className="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required placeholder="abcd1234@gmail.com"onChange={(e)=>setData({...data,Email:e.target.value})}/>
        </div>
        <div className="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required onChange={(e)=>setData({...data,Pass_word:e.target.value})}/>
        </div>
        <div className="form-group">
            <label for="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" onChange={(e)=>setPass(e.target.value)} required/>
        </div>
        <div className="form-group">
            <label for="emergencyContact">Emergency Contact Number:</label>
            <input type="tel" id="emergencyContact" name="emergencyContact" onChange={(e)=>setData({...data,Emergency_no:e.target.value})}required/>
        </div>
        <div className="form-group">
            <label for="domain">Domain:</label>
            <input type="text" id="domain" name="domain"onChange={(e)=>setData({...data,Domain:e.target.value})} required/>
        </div>
        <button type="submit" >Register</button>
    </form>
</div>
  )
}
