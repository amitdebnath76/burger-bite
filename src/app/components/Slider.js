'use client'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "/assets/brands/brand-11.png" },
  { url: "/assets/brands/brand-12.png" },
  { url: "/assets/brands/brand-13.png" },
  { url: "/assets/brands/brand-14.png" },
  { url: "/assets/brands/brand-15.png" },
  { url: "/assets/brands/brand-16.png" },
  { url: "/assets/brands/brand-17.png" },
  { url: "/assets/brands/brand-18.png" },
];

const Slider = () => {
  return (
    <>
    <h1 className='mt-36 text-7xl font-bold mb-16 text-center'>OUR OTHERS BRANDS</h1>
        <div className="flex items-center justify-center bg-lime-300 p-4 rounded-md">
        
        <SimpleImageSlider
        
         loop = {true}
          bgColor={'#FEFEFE'}
          width={400}
          height={400}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
    </>
  );
}
export default Slider;