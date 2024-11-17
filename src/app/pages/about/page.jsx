import Image from "next/image";
import React from "react";

const about = () => {
  return (
    <>
      <div
        className="relative h-screen md:h-[75vh] lg:h-screen bg-cover bg-center "
        style={{ backgroundImage: "url('assets/about/about-1.jpg')" }}
      >
        <div className="px-20 mt-14 space-y-5 absolute top-0">
          <h1 className="text-5xl font-bold text-center">
            THE BURGER TASTES BETTER WHEN
          </h1>
          <h1 className="text-5xl font-bold text-center">
            YOU EAT IT WITH YOUR FAMILY
          </h1>
          <p className="text-xl font-semi-bold text-center">
            We are passionate about crafting mouthwatering burgers that satisfy
            your cravings. Our juicy patties, fresh toppings, and secret sauce
            come together to create a flavor explosion in every bite. We are
            committed to using high-quality ingredients and delivering
            exceptional customer service. Whether you are a burger connoisseur
            or a casual diner, we have got something for everyone. Order online
            or visit us today to experience the burger difference.
          </p>
          <button className="bg-red-700 hover:bg-yellow-400 px-7 py-5 rounded-xl text-center text-xl flex item-center mx-auto">
            EXPLORE FULL MENU
          </button>
        </div>
      </div>
      {/* card section */}
      <div className="bg-yellow-400 flex justify-around">
        <div className="card items-center text-center p-7  w-96 shadow-xl">
          <Image
            className="flex "
            src="/assets/about/pizza.png"
            alt="PIzza Icon"
            height={150}
            width={150}
          ></Image>
          <div className="card-body">
            <h2 className="card-title text-center text-3xl">ORIGINAL FOOD</h2>
            <p className="text-center">
              Indulge your taste buds with our mouthwatering, handcrafted
              pizzas! Our secret recipe, passed down through generations,
              creates a flavor explosion in every bite. From classic Margherita
              to bold BBQ Chicken, our menu offers a symphony of tastes for
              every palate.Order online today and experience pizza perfection
              delivered right to your doorstep.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card items-center text-center p-7  w-96 shadow-xl">
          <Image
            className="flex "
            src="/assets/about/salad.png"
            alt="PIzza Icon"
            height={150}
            width={150}
          ></Image>
          <div className="card-body">
            <h2 className="card-title text-center text-3xl">QUALITY FOODS</h2>
            <p className="text-center">
              We believe in using only the finest ingredients to craft our
              pizzas. From our hand-tossed dough to our premium toppings, every
              bite is a testament to our commitment to quality.Taste the
              difference with our gourmet pizzas, made with love and care. Order
              now and savor the flavor!
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card items-center text-center p-7  w-96 shadow-xl">
          <Image
            className="flex "
            src="/assets/about/delivery-bike.png"
            alt="PIzza Icon"
            height={150}
            width={150}
          ></Image>
          <div className="card-body">
            <h2 className="card-title text-center text-3xl">
              FASTEST DELIVERY
            </h2>
            <p className="text-center">
              Do not let hunger pangs ruin your day! Our dedicated delivery team
              is committed to bringing you piping-hot, delicious pizza in record
              time. With our efficient delivery system, you will enjoy your
              favorite pizza in no time.Order now and experience the future of
              pizza delivery - swift, reliable, and satisfying
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
