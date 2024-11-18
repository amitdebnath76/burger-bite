import Image from "next/image";
import React from "react";

const Carusel = () => {
  return (
    <div>
      Carusel
      <div className="carousel rounded-box">
        <div className="carousel-item">
          <Image src='/assets/brands/brand-11.png' alt='brand Image' height={300} width={300}></Image>
        </div>
        <div className="carousel-item">
        <Image src='/assets/brands/brand-12.png' alt='brand Image'  height={300} width={300}></Image>
        </div>
        <div className="carousel-item">
        <Image src='/assets/brands/brand-13.png' alt='brand Image'  height={300} width={300}></Image>
          
        </div>
        <div className="carousel-item">
        <Image src='/assets/brands/brand-14.png' alt='brand Image'  height={300} width={300}></Image>
        </div>
        <div className="carousel-item">
        <Image src='/assets/brands/brand-15.png' alt='brand Image'  height={300} width={300}></Image>
        </div>
        <div className="carousel-item">
        <Image src='/assets/brands/brand-16.png' alt='brand Image'  height={300} width={300}></Image>
        </div>
        <div className="carousel-item">
        <Image src='/assets/brands/brand-17.png' alt='brand Image' height={300} width={300}></Image>
        </div>
        <div className="carousel-item">
        <Image src='/assets/brands/brand-18.png' alt='brand Image' height={300} width={300}></Image>
        </div>
      </div>
    </div>
  );
};

export default Carusel;
