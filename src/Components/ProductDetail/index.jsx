import React from 'react'
import { useContext } from 'react'
import { IoMdClose } from "react-icons/io";
import './style.css'
import { ShoppingCartContext } from '../../Context';

export default function ProductDetail() {
  const context = useContext(ShoppingCartContext)
  console.log('PRODUCT TO SHOW: ', context.productToShow)

  const { imageSrc, price, name, color } = context.productToShow;

  return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : "hidden"} product-detail flex flex-col fixed right-0 bg-white border border-black rounded-lg`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='text-xl font-thin'>Detail</h2>
                <IoMdClose className='w-6 h-6 cursor-pointer' onClick={() => context.closeProductDetail()} />
            </div>
            <figure>
              {imageSrc ? (
                <img className='p-4 rounded-lg' src={imageSrc} alt={name || 'Product Image'} />
                ) : (
                <p>No image available</p>
              )}
            </figure>
            <p className='flex flex-col text-center my-16 font-thin'>
              <span className='my-4'>{price}</span>
              <span className='my-4'>{name}</span>
              <span className='my-4'>{color}</span>
            </p>
        </aside>
  )
}
