import Image from 'next/image'
import React from 'react'

const Ourmenu = () => {
  const menuItem = [
    {
      "name": "Classic Cheeseburger",
      "details": "A juicy beef patty with melted cheddar cheese, lettuce, tomato, and pickles.",
      "price": 8.99,
      "image": "/assets/menu/burger-11.jpg"
    },
    {
      "name": "BBQ Bacon Burger",
      "details": "Smoky BBQ sauce, crispy bacon, cheddar cheese, and caramelized onions on a toasted bun.",
      "price": 10.99,
      "image": "/assets/menu/burger-12.jpg"
    },
    {
      "name": "Spicy Jalapeño Burger",
      "details": "A zesty burger with jalapeños, pepper jack cheese, spicy mayo, and lettuce.",
      "price": 9.49,
      "image": "/assets/menu/burger-13.jpg"
    },
    {
      "name": "Mushroom Swiss Burger",
      "details": "A savory blend of mushrooms, Swiss cheese, garlic aioli, and fresh greens.",
      "price": 10.49,
      "image": "/assets/menu/burger-14.jpg"
    },
    {
      "name": "Avocado Veggie Burger",
      "details": "A plant-based patty with avocado, tomato, lettuce, and a tangy vegan aioli.",
      "price": 9.99,
      "image": "/assets/menu/burger-15.jpg"
    },
    {
      "name": "Hawaiian Pineapple Burger",
      "details": "A tropical twist with grilled pineapple, teriyaki glaze, ham, and provolone cheese.",
      "price": 11.49,
      "image": "/assets/menu/burger-16.jpg"
    },
    {
      "name": "Blue Cheese Delight",
      "details": "Crumbled blue cheese, caramelized onions, arugula, and a balsamic glaze drizzle.",
      "price": 10.99,
      "image": "/assets/menu/burger-17.jpg"
    },
    {
      "name": "Double Stack Burger",
      "details": "Two beef patties, American cheese, lettuce, tomato, onions, and special house sauce.",
      "price": 12.49,
      "image": "/assets/menu/burger-18.jpg"
    }
  ]
  
  return (
    <>
    <div className='mt-20'>
   <h1 className='text-6xl font-semibold text-center'>OUR MENU</h1>
    <h1 className='text-6xl font-semibold text-center mt-6'>OUR CREAZY BURGERS</h1>
    <div className='grid grid-cols-4 gap-7 px-16'>
    {
      menuItem.map((menu,index)=> <div key={index} className="card bg-base-100 w-full shadow-xl ">
     
      <Image src={menu.image} height={400} width={400} alt={menu.details} className=' rounded-xl'></Image>
      <div className="card-body">
        <h6 className='text-xl font-bold'>{menu.name}</h6>
        <h6 className="card-title text-sm">{menu.details}</h6>
        
        <div className="flex justify-between items-center gap-3 mt-4">
        <p className='font-bold text-xl '>${menu.price}</p>
          <button className="btn  bg-yellow-400">Add To Card</button>
        </div>
      </div>
    </div> )
    }
    </div>
    
   </div>
    </>
  )
}

export default Ourmenu