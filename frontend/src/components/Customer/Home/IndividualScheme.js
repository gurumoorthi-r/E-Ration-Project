import React from 'react'
import img from "../../../assets/ManagerImage2.jpg"
export const IndividualScheme = ({obj}) => {
  return (
    <>
    <div className="mx-4 mt-8 w-full h-full max-w-xl bg-white border border-gray-200 rounded-lg shadow">
    <div className='obj-fill'>
        <img className="rounded-t-lg" src={obj.image} alt=""  />
    </div>
    <div className="p-5">
        <a href="/">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{obj.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{obj.desc}</p>
        <a href={obj.url} target="_blank" rel="noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none ">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

    </>
  )
}
