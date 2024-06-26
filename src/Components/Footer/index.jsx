import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
        <div className='flex justify-start font-thin p-10 px-24 gap-14 items-center'>
            <Link>HOME</Link>
            <Link>NOSOTROS</Link>
            <Link>CONTACTANOS</Link>
            <a href="https://www.instagram.com/lienzolienzo/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                    <FaInstagram size={20} />
            </a>
            <a href="https://www.facebook.com/proyectolienzo" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                    <FaFacebook size={20} />
            </a>

        </div>
    </footer>
  )
}
