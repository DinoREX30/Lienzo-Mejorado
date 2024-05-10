import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { ShoppingCartContext } from '../../Context'

export default function Navbar() {

    const context = useContext(ShoppingCartContext)
    const activeStyle = "underline underline-offset-4"


  return (
    <nav className='flex justify-between items-center fixed w-full py-4 px-8 z-10 text-sm font-thin top-0'>
        <ul className='flex items-center gap-5'>
            <li>
               <img src="../public/lienzoLogo.png" alt="Lienzo" className='h-10 w-10'/>
            </li>
            <li>
                <NavLink 
                to='/'
                className={({ isActive }) => 
                isActive ? activeStyle : undefined
                }>
                    HOME
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/vestidos'
                className={({ isActive }) => 
                isActive ? activeStyle : undefined
                }>
                    VESTIDOS
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/tops'
                className={({ isActive }) => 
                isActive ? activeStyle : undefined
                }>
                    TOPS
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/accesorios'
                className={({ isActive }) => 
                isActive ? activeStyle : undefined
                }>
                    ACCESORIOS
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/nosotros'
                className={({ isActive }) => 
                isActive ? activeStyle : undefined
                }>
                    NOSOTROS
                </NavLink>
            </li>
        </ul>
        <ul className='flex items-center gap-5'>
            <li>
                daiela@hotmail.com
            </li>
            <li>
                <NavLink 
                to='/my-orders'
                className={({ isActive }) => 
                isActive ? activeStyle : undefined
                }>
                    MY ORDERS
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/my-account'
                className={({ isActive }) => 
                isActive ? activeStyle : undefined
                }>
                    MY ACCOUNT
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/sign-in'
                className={({ isActive }) => 
                isActive ? activeStyle : undefined
                }>
                    SIGN IN
                </NavLink>
            </li>
            <li className='flex items-center gap-2'>
                <CiShoppingCart className='h-6 w-6' />
                {context.count}
            </li>
        </ul>
    </nav>
  )
}
