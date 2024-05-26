import React from 'react'
import { totalPrice } from '../../utils';
import { useContext } from 'react'
import { IoMdClose } from "react-icons/io";
import './styles.css'
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard';

export default function CheckoutSideMenu() {
  const context = useContext(ShoppingCartContext)

  const handleDelete =(id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
  }

  return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : "hidden"} checkout-side-menu flex flex-col fixed right-0 bg-white border border-black rounded-lg`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='text-xl font-thin'>My Order</h2>
                <IoMdClose className='w-6 h-6 cursor-pointer' onClick={() => context.closeCheckoutSideMenu()} />
            </div>
            <div className=' overflow-y-scroll'>
              {
                context.cartProducts.map(product => (
                  <OrderCard 
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    imageSrc={product.imageSrc}
                    price={product.price}
                    handleDelete={handleDelete}
                  />
                ))
              }
            </div>
            <div>
              <span>Total:</span>
              <span>${totalPrice(context.cartProducts)}</span>
            </div>
        </aside>
  )
}
