import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import { BiAddToQueue } from "react-icons/bi";
import { CiShoppingCart } from "react-icons/ci";

const Navber = () => {
    const menuItem = [
        {title: 'HOME',
        link : '/'},
        {title: 'ABOUT',
        link : '/About'},
        {title: 'OURMENU',
        link : '/Ourmenu'},
        {title: 'SHOP',
        link : '/Shop'},
        {title: 'BLOG',
        link : '/Blog'},
        {title: 'CONTACT',
        link : '/Contact'}
    ]
  return (
    <>
    <div className='flex items-center justify-between mx-32  '>
        <div><Image src='/assets/logo/logo.png' height={150} width={150} alt='Logo Image'></Image></div>
        <nav>
            <ul className='flex gap-6 '>
            {
            menuItem.map((menu)=>(<Link className='text-xl text-white font-medium hover:text-yellow-400' key={menu.title} href={menu.link}>{menu.title}</Link>))
        }
        <CiShoppingCart className='text-3xl bg-yellow-400 rounded-xl  '/>
            </ul>
        </nav>
        
    </div>
    </>
  )
}

export default Navber