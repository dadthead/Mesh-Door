
import React, { useEffect, useRef, useState } from 'react';
import { images } from '../../../assets/images'; // adjust path as needed
import './Herosection.css';

function SliderCarousel() {
  const originalImages = [
    images.Meshdoor, images.AW2, images.CR1,
    images.AW1, images.Meshdoor2, images.AW3,
  ];

  // Clone first image to make infinite loop
  const imageList = [...originalImages, originalImages[0]];

  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 5000); // 5 seconds each slide

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === imageList.length - 1) {
      // move to cloned slide, then instantly reset to 0
      setTimeout(() => {
        sliderRef.current.style.transition = 'none';
        setIndex(0);
        sliderRef.current.style.transform = `translateX(0%)`;
      }, 1000); // wait for animation to finish before resetting
    } else {
      sliderRef.current.style.transition = 'transform 1s ease-in-out';
      sliderRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  }, [index, imageList.length]);

  return (
<div className='bg-gradient-to-l from-[#94fbf6] to-[#ffffff]'>
<div className=' py-5  mb-10   text-center'>
    <h1 className='text-3xl py-5 font-bold text-[#2fc8c0]' >Welcome to Meshdoor</h1>
    <p className='text-md text-[#2fc8c0] '>Mesh Doors & UPVC – Fresh air, insect protection, and stylish durability. Perfect blend of comfort and elegance for your home.</p>
  </div>
     <div className="carousel-container">
             <div className="carousel-slider" ref={sliderRef}>
         {imageList.map((img, i) => (
           <div className="carousel-slide" key={i}>
             <img src={img} alt={`carousel-${i}`} className='h-[70vh] w-50'/>
           </div>
         ))}
      </div>
     </div>
   </div>
   );
 }




export default SliderCarousel;
