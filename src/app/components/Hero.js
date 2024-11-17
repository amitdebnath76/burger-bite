"use client";
import Image from "next/image";
import Navber from "./Navber";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { useState } from "react";

const Hero = ({ children }) => {
  const menuItem = [
    { title: "HOME", link: "/" },
    { title: "ABOUT", link: "/pages/about" },
    { title: "OURMENU", link: "/pages/ourmenu" },
    { title: "SHOP", link: "/pages/shop" },
    { title: "BLOG", link: "/pages/blog" },
    { title: "CONTACT", link: "/pages/contact" },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
    <div >
    <div  className="relative h-screen md:h-[75vh] lg:h-screen bg-cover bg-center "
        style={{ backgroundImage: "url('assets/hero/hero-1.jpg')" }}
        
        >
      <div>
      {/* Extra part */}

        <div className="fixed top-0 w-full z-10 shadow-md">
          <nav className="flex items-center justify-between px-4 md:px-8 lg:mx-32 py-4">
            {/* Logo */}
            <Image
              src="/assets/logo/logo.png"
              height={100}
              width={100}
              alt="Logo Image"
              className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16"
            />

            {/* Menu */}
            <div className="hidden md:block">
              {/* Menu Items */}
              <ul className="flex items-center gap-4 md:gap-6">
                {menuItem.map((menu) => (
                  <li key={menu.title}>
                    <Link
                      className="text-sm md:text-lg lg:text-xl text-white font-medium hover:text-yellow-400"
                      href={menu.link}
                    >
                      {/* <a>{menu.title}</a> */}
                      {menu.title}
                    </Link>
                  </li>
                ))}
                <CiShoppingCart className="text-xl md:text-2xl lg:text-3xl bg-yellow-400 rounded-xl p-1" />
              </ul>
            </div>

            {/* Hamburger Menu (Mobile) */}
            <div className="block md:hidden">
              <button
                className="text-white text-2xl"
                onClick={() => setIsMenuOpen(!isMenuOpen)} // State management for mobile menu
              >
                ☰
              </button>
            </div>

            {/* Mobile Dropdown */}
            {isMenuOpen && (
              <div className="absolute top-[70px] right-0 w-full md:hidden">
                <ul className="flex flex-col items-center gap-4 py-4">
                  {menuItem.map((menu) => (
                    <li key={menu.title}>
                      <Link
                        className="text-white text-lg hover:text-yellow-400"
                        href={menu.link}
                      >
                        {menu.title}
                      </Link>
                    </li>
                  ))}
                  <CiShoppingCart className="text-3xl bg-yellow-400 rounded-xl p-1" />
                </ul>
              </div>
            )}
          </nav>
        </div>
      </div>
      <div className="  lg:flex absolute top-[30%] gap-24 mx-4 md:mx-20 lg:mx-32 ">
        <div className="relative mx-auto max-w-xs md:max-w-md lg:max-w-lg">
          <Image
            className="relative "
            src="/assets/hero/hero-2.png"
            alt="Burger Image"
            height={2500}
            width={2500}
          ></Image>
          <div className="absolute top-[-15%] left-1/2 transform -translate-x-1/2">
            <Image
              className="relative"
              src="/assets/hero/price-badge-yellow.png"
              alt="Price discount"
              height={150}
              width={150}
            ></Image>

            <h1 className="absolute inline-block top-[5%] left-[5%] lg:top-[25%] lg:left-[25%] text-white text-xl md:text-2xl lg:text-4xl font-bold">
              <span>Only</span> <span>$9.99</span>
            </h1>
          </div>
       
        </div>
        <div className="space-y-4 px-4 md:px-10 lg:px-20 text-center">
          <h1 className="text-white text-xl md:text-2xl lg:text-6xl font-bold">
            NEW
          </h1>
          <h1 className="text-white text-xl md:text-2xl lg:text-6xl font-bold">
            BURGER
          </h1>
          <h1 className="text-white text-lg md:text-xl lg:text-4xl font-bold">
            WITH ONION
          </h1>
          <p className="text-white text-sm md:text-base lg:text-lg font-medium">
            Introducing our new Onion Burger—a savory delight that combines a
            juicy, perfectly seasoned beef patty topped with caramelized onions,
            melted cheese, and a hint of tangy sauce. Every bite offers a
            mouthwatering blend of flavors, served on a toasted bun for the
            ultimate burger experience. Try it today!
          </p>
          <button className="btn btn-warning text-white px-4 py-2 text-sm md:text-base lg:text-lg">
            ORDER NOW
          </button>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Hero;
