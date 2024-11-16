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
   
        <div className='fixed top-0 w-full z-10 shadow-md mt-8'>
        <nav  className='lg:flex items-center justify-between mx-3 lg:mx-32  '>
        <Image src='/assets/logo/logo.png' height={150} width={150} alt='Logo Image'></Image>
            <div>
            <ul className=' gap-3 lg:flex  lg:gap-6 '>
            {
            menuItem.map((menu)=>(<Link className='text-xl text-white font-medium hover:text-yellow-400' key={menu.title} href={menu.link}>{menu.title}</Link>))
        }
        <CiShoppingCart className='text-3xl bg-yellow-400 rounded-xl  '/>
            </ul>
            </div>
        </nav>
        </div>
        
   
    </>
  )
}

export default Navber