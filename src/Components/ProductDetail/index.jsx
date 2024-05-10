import React from 'react'
import { useContext } from 'react'
import { IoMdClose } from "react-icons/io";
import './style.css'
import { ShoppingCartContext } from '../../Context';

export default function ProductDetail() {
  const context = useContext(ShoppingCartContext)
  console.log('PRODUCT TO SHOW: ', context.productToShow)

  return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : "hidden"} product-detail flex flex-col fixed right-0 bg-white border border-black rounded-lg`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='text-xl font-thin'>Detail</h2>
                <IoMdClose className='w-6 h-6 cursor-pointer' onClick={() => context.closeProductDetail()} />
            </div>
            <figure>
              <img src={context.productToShow.images ? context.productToShow.images[0]: ''} />
            </figure>
            <p>
              <span>${context.productToShow.price}</span>
              <span>${context.productToShow.name}</span>
              <span>${context.productToShow.color}</span>
            </p>
        </aside>
  )
}
