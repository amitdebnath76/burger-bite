import Image from 'next/image'
import React from 'react'

const Shop = () => {
  return (
    <>
    <div className='bg-lime-200 flex gap-12 px-20 py-10 mt-24'>
      <div ><Image src='/assets/promotion/pro.png' alt='Promotion Image' width={600} height={1000} className='h-full w-full'></Image> </div>
      <div className='space-y-8'>
        <h1 className='text-5xl font-bold text-center'>NOTHING BRINGS PEOPLE</h1>
        <h1  className='text-5xl font-bold text-center'>TOGETHER LIKE A GOOD</h1>
        <h1  className='text-5xl font-bold text-center'>BURGER</h1>
        <p className='text-2xl font-extrabold '>Key Features</p>
        <ul className='space-y-3'>
            <li><span className='font-bold'>Delicious Variety:</span> From classic cheeseburgers to gourmet creations, explore a menu tailored to satisfy every craving.</li>
            <li><span className='font-bold'>Customizable Orders:</span> Personalize your burger with a wide range of toppings, sauces, and sides. Your burger, your way!</li>
            <li><span className='font-bold'>Seamless Ordering:</span> Experience hassle-free navigation and easy checkout. Get your favorites delivered or pick them up without delay.</li>
            <li><span className='font-bold'>Quality Assurance:</span> Every bite is crafted using fresh, high-quality ingredients, prepared with utmost care.</li>
        </ul>
        <p className='text-xl font-semibold'>Download our burger app today and dive into a world of flavor. It’s not just a meal—it’s an experience waiting to be savored!</p>
      </div>

    </div>
    {/* Download App section */}
    <div className='bg-yellow-400 flex gap-12 px-20 py-10 mt-24'>
      <div className='space-y-10'>
      <h1 className='text-6xl font-bold'>DOWNLOAD MOBILE APP AND</h1>
      <h1 className='text-6xl font-bold'>SAVE UP TO 20%</h1>
        <div className='flex  gap-10'>
          <Image src='/assets/shop/appstore.png' alt='Mobile Store App'  height={200} width={200}></Image>
          <Image src='/assets/shop/googleplay.png' alt='Google App'  height={200} width={200}></Image>
        </div>
      </div>
      <div>
        <Image src='/assets/shop/e-shop.png' alt='Our Shop Image' width={600} height={800}></Image>
      </div>
    </div>
    </>
  )
}

export default Shop