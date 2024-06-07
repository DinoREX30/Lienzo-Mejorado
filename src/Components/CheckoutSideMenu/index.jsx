import React from 'react'
import { Link } from 'react-router-dom'
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

  const handleCheckout = () => {
    const orderToAdd = {
      date: '2021-09-01',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }

    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
    context.setCount(0)
  }

  return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : "hidden"} checkout-side-menu flex flex-col fixed right-0 bg-white border border-black rounded-lg`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='text-xl font-thin'>My Order</h2>
                <IoMdClose className='w-6 h-6 cursor-pointer' onClick={() => context.closeCheckoutSideMenu()} />
            </div>
            <div className=' overflow-y-scroll flex-1'>
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
            <div className='p-5 justify-between flex'>
              <span className=' font-thin'>Total:</span>
              <span className=' bg-black text-white font-thin rounded-md text-center w-20'>${totalPrice(context.cartProducts)}</span>
            </div>
            <Link className='p-4' to='/my-orders/last'>
              <button className=' w-full bg-black text-white rounded-md py-3' onClick={() => handleCheckout()}>Checkout</button>
            </Link>
        </aside>
  )
}
