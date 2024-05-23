import React from 'react'
import { useContext } from 'react'
import { IoMdClose } from "react-icons/io";
import './styles.css'
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard';

export default function CheckoutSideMenu() {
  const context = useContext(ShoppingCartContext)
  console.log('PRODUCT TO SHOW: ', context.productToShow)

  return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : "hidden"} checkout-side-menu flex flex-col fixed right-0 bg-white border border-black rounded-lg`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='text-xl font-thin'>My Order</h2>
                <IoMdClose className='w-6 h-6 cursor-pointer' onClick={() => context.closeCheckoutSideMenu()} />
            </div>
            {
              context.cartProducts.map(product => (
                <OrderCard 
                  key={product.id}
                  name={product.name}
                  imageSrc={product.imageSrc}
                  price={product.price}
                />
              ))
            }
        </aside>
  )
}
