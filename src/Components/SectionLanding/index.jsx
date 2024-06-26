import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { IoStorefrontOutline } from "react-icons/io5";
import { GiLargeDress } from "react-icons/gi";




export default function SectionLanding() {
  return (
    <div className='grid grid-cols-3 gap-40 p-44 content-center w-full text-center font-thin'>
        <div className='border-gray-300 border-2 flex flex-col items-center justify-center p-10'>
            <CiDeliveryTruck className='w-8 h-8 mb-3' />
            <h1>Envíos a todo México</h1>
        </div>
        <div className='border-gray-300 border-2 flex flex-col items-center justify-center p-10'>
            <IoStorefrontOutline className='w-8 h-8 mb-3' />
            <h1>Visita nuestra tienda en Oaxaca</h1>
        </div>
        <div className='border-gray-300 border-2 flex flex-col items-center justify-center p-10'>
            <GiLargeDress className='w-8 h-8 mb-3' />
            <h1>Consejos para el cuidado de tu Lienzo</h1>
        </div>
    </div>

  )
}
