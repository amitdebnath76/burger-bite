
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GrLike } from "react-icons/gr";
import { GiSelfLove } from "react-icons/gi";

const Ourmenu = () => {
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "Classic Cheeseburger",
      details:
        "A juicy beef patty with melted cheddar cheese, lettuce, tomato, and pickles.",
      price: 8.99,
      image: "/assets/menu/burger-11.jpg",
      isLike: false,
      isLove: false,
    },
    {
      id: 2,
      name: "BBQ Bacon Burger",
      details:
        "Smoky BBQ sauce, crispy bacon, cheddar cheese, and caramelized onions on a toasted bun.",
      price: 10.99,
      image: "/assets/menu/burger-12.jpg",
      isLike: false,
      isLove: false,
    },
    {
      id: 3,
      name: "Spicy Jalapeño Burger",
      details:
        "A zesty burger with jalapeños, pepper jack cheese, spicy mayo, and lettuce.",
      price: 9.49,
      image: "/assets/menu/burger-13.jpg",
      isLike: false,
      isLove: false,
    },
    {
      id: 4,
      name: "Mushroom Swiss Burger",
      details:
        "A savory blend of mushrooms, Swiss cheese, garlic aioli, and fresh greens.",
      price: 10.49,
      image: "/assets/menu/burger-14.jpg",
      isLike: false,
      isLove: false,
    },
    {
      id: 5,
      name: "Avocado Veggie Burger",
      details:
        "A plant-based patty with avocado, tomato, lettuce, and a tangy vegan aioli.",
      price: 9.99,
      image: "/assets/menu/burger-15.jpg",
      isLike: false,
      isLove: false,
    },
    {
      id: 6,
      name: "Hawaiian Pineapple Burger",
      details:
        "A tropical twist with grilled pineapple, teriyaki glaze, ham, and provolone cheese.",
      price: 11.49,
      image: "/assets/menu/burger-16.jpg",
      isLike: false,
      isLove: false,
    },
    {
      id: 7,
      name: "Blue Cheese Delight",
      details:
        "Crumbled blue cheese, caramelized onions, arugula, and a balsamic glaze drizzle.",
      price: 10.99,
      image: "/assets/menu/burger-17.jpg",
      isLike: false,
      isLove: false,
    },
    {
      id: 8,
      name: "Double Stack Burger",
      details:
        "Two beef patties, American cheese, lettuce, tomato, onions, and special house sauce.",
      price: 12.49,
      image: "/assets/menu/burger-18.jpg",
      isLike: false,
      isLove: false,
    },
  ]);

  const handleLike = (id) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isLike: !item.isLike } : item
      )
    );
  };

  const handleLove = (id) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isLove: !item.isLove } : item
      )
    );
  };

  return (
    <>
      <div className="mt-20">
        <h1 className="text-6xl font-semibold text-center">OUR MENU</h1>
        <h1 className="text-6xl font-semibold text-center mt-6">
          OUR CRAZY BURGERS
        </h1>
        <div className="grid grid-cols-4 gap-7 px-16 mt-20">
          {menuItems.map((menu) => (
            <div key={menu.id} className="card bg-base-100 w-full shadow-xl">
              <Image
                src={menu.image}
                height={400}
                width={400}
                alt={menu.details}
                className="rounded-xl"
              ></Image>
              <div className="card-body">
                <h6 className="text-xl font-bold">{menu.name}</h6>
                <h6 className="card-title text-sm">{menu.details}</h6>

                <div className="flex justify-between items-center gap-3 mt-4">
                  <p className="font-bold text-xl ">${menu.price}</p>
                  <button className="btn bg-yellow-400">Add To Cart</button>
                </div>
                <div className="flex justify-between pt-3">
                  {/* Like Button */}
                  <button
                    onClick={() => handleLike(menu.id)}
                    style={{
                      color: menu.isLike ? "blue" : "gray",
                    }}
                  >
                    <GrLike className="text-2xl" />
                  </button>
                  {/* Love Button */}
                  <button
                    onClick={() => handleLove(menu.id)}
                    style={{
                      color: menu.isLove ? "red" : "gray",
                    }}
                  >
                    <GiSelfLove className="text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Ads Section */}
    <div className='flex gap-14 mt-20 px-16'>
    <div>
          <div className="relative">
            <Image
              src="/assets/menu/ads-1.jpg"
              alt="Ads Image"
              height={500}
              width={500}
              // className="w-full h-auto"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-end text-right pr-6">
              <h1 className="text-white text-4xl font-bold mb-2">
                GET YOUR FREE
              </h1>
              <h1 className="text-white text-4xl font-bold mb-4">
                CHEESE FRIES
              </h1>
              <button className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-500">
                EXPLORE MORE
              </button>
            </div>
          </div>
      </div>
    <div>
          <div className="relative">
            <Image
              src="/assets/menu/ads-2.jpg"
              alt="Ads Image"
              height={800}
              width={800}
              // className="w-full h-auto"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-end text-right pr-6">
              <h1 className="text-white text-4xl font-bold mb-2">
                GET YOUR FREE
              </h1>
              <h1 className="text-white text-4xl font-bold mb-4">
                CHEESE FRIES
              </h1>
              <button className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-500">
                EXPLORE MORE
              </button>
            </div>
          </div>
      </div>
    </div>
      </div>
    </>
  );
};

export default Ourmenu;
