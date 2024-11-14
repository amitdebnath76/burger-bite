import React from "react";
import Navber from "../components/Navber";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div >
        <div
          className="relative h-screen bg-cover bg-center "
          style={{ backgroundImage: "url('assets/hero/hero-1.jpg')" }}
        >
          <div className="pt-10">
            <Navber className="absolute top-0  left-0 w-full  "></Navber>
          </div>
        </div>
        <div className="flex absolute top-[30%] gap-24 mx-32 ">
          <div >
            <Image className="relative"
              src="/assets/hero/hero-2.png"
              alt="Burger Image"
              height={2500}
              width={2500}
            ></Image>
           <div className="absolute top-[-10%] ">
           <Image className="relative"  src="/assets/hero/price-badge-yellow.png" alt="Price discount" height={150} width={150}></Image>
           
            <h1 className="absolute inline-block top-[25%] left-[25%] text-white text-4xl font-bold">Only <span>$9.99</span></h1>

           
           </div>
          </div>
          <div className="space-y-4 items-center">
            <h1 className="text-white text-8xl font-bold text-center">NEW</h1>
            <h1 className="text-white text-8xl font-bold text-center ">BURGER</h1>
            <h1 className="text-white text-5xl font-bold text-center">WITH ONION</h1>
            <p className="text-white  font-bold pb-10 text-center">
              Introducing our new Onion Burger—a savory delight that combines a
              juicy, perfectly seasoned beef patty topped with caramelized
              onions, melted cheese, and a hint of tangy sauce. Every bite
              offers a mouthwatering blend of flavors, served on a toasted bun
              for the ultimate burger experience. Try it today!
            </p>
            <button className="btn btn-warning text-white px-5 py-2 outline items-center flex justify-center ">ORDER NOW</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
