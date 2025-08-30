import React from 'react'
import { images } from '../../../assets/images'
const Sideimages = () => {
  return (
    <div className='font-sans'>
        {/* Highlight Single Door */}
      <div className="bg-gradient-to-r from-white to-[#94fbf6]/50 flex flex-col md:flex-row items-center gap-10 px-6 md:px-20 py-16 text-[#1ec2b9]">
        <img
          src={images.about4}
          alt="Single Mesh Door"
          className="md:w-[50%] md:h-[40%] shadow-lg "
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">Perfect Single Mesh Door</h2>
          <p className=" mb-6">
            Built with strength and style, our single mesh doors offer both
            safety and elegance for your home.
          </p>
          <button className="bg-[#94fbf6] text-white px-6 py-3 rounded-lg shadow-2xl hover:bg-[#1ec2b9] transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Highlight Double Door */}
      <div className="bg-gradient-to-r from-[#94fbf6]/50 to-white flex flex-col md:flex-row-reverse items-center gap-10 px-6 md:px-20 py-16 text-[#1ec2b9] ">
        <img
          src={images.about3}
          alt="Double Mesh Door"
          className=" shadow-lg md:w-[50%] md:h-[40%]"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">Elegant Double Mesh Door</h2>
          <p className="mb-6">
            Perfect for main entrances, these double mesh doors combine
            durability with modern design.
          </p>
          <button className="bg-[#94fbf6] text-white px-6 py-3 rounded-lg shadow-2xl hover:bg-[#1ec2b9] transition">
            Learn More
          </button>
        </div>
      </div>
      </div>
  )
}

export default Sideimages