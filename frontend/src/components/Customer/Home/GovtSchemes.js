import React from 'react'
import { IndividualScheme } from './IndividualScheme'
import sch1 from "../../../assets/schemes/Kmut_1.avif";
import sch2 from "../../../assets/schemes/Antyodaya.png";
import sch3 from "../../../assets/schemes/Annapoorna.jpg"
export const GovtSchemes = () => {
    const desc1="KMUT Scheme, i.e. Kalaignar Magalir Urimai Thogai Scheme, is a scheme announced by the Government of Tamil Nadu, under which financial assistance of Rs 1000 will be given monthly to economically weaker women. Any society can develop only when the development of women living in that society is ensured.";

    const schemes=
       [{ 
        'title':'KMUT',
        'image':sch1,
        'desc':"KMUT Scheme, i.e. Kalaignar Magalir Urimai Thogai Scheme, is a scheme announced by the Government of Tamil Nadu, under which financial assistance of Rs 1000 will be given monthly to economically weaker women. Any society can develop only when the development of women living in that society is ensured.",
        'url':'https://s3e21e4e58ad9ab56e8a4634046da90113.s3waas.gov.in/'
    },{
        'title':'Antyodaya',
        'image':sch2,
        'desc':" Antyodaya Anna Yojana (AAY) is one of the biggest initiatives undertaken by the Government of India. It is a public distribution system scheme that was implemented in India in 2000. The main purpose of the system is to provide food security to the people and to end hunger in India",

       
    },{
        'title':'Annapoorna',
        'image':sch3,
        'desc':"The GOI have sponsored a scheme called 'Annapoorna' for providing food grains to the indigent Senior Citizens aged 65 years. The Government of Tamil Nadu is implementing this scheme from the year 2002-2003. Under this scheme, the eligible beneficiaries are being supplied 10 kg of rice on free of cost "

       

    },]
  return (
    <>
    
<div className="mt-16 flex flex-row justify-around items-center flex-wrap max-w-350px ">

{
    schemes.map((obj,index)=>(
        <div key={index} >
            <IndividualScheme obj={obj}/>
        </div>
    ))
}
</div>


    </>
  )
}
