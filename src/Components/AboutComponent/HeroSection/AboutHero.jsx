import React from "react";
import { images } from "../../../assets/images";

function App() {
  return (
    <div className="font-sans">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#94fbf6]/40 to-white text-[#1ec2b9]/100 text-center py-20">
        <h1 className="text-xl md:text-4xlfont-bold mb-4 ">Mesh Door Designs</h1>
        <p className="text-lg mb-6 px-6">
          Stylish and strong mesh doors for modern homes
        </p>
        <button className="bg-white text-[#1ec2b9] px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#94fbf6] hover:text-white transition">
          Explore More
        </button>
      </section>

      {/* Door Deeds Section */}
      <section className="py-16 px-6 md:px-20 text-[#1ec2b9]/100">
        <h2 className="text-3xl font-bold text-center mb-10">Our Door Styles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg shadow-[#94fbf6] p-6 hover:shadow-2xl transition ">
            <img
              src={images.about1}
              alt="Single Mesh Door"
              className="rounded-xl mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Single Mesh Door</h3>
            <p>
              Simple, elegant, and perfect for smaller entrances.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg  shadow-[#94fbf6] p-6 hover:shadow-2xl transition">
            <img
              src={images.about2}
              alt="Double Mesh Door"
              className="rounded-xl mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Double Mesh Door</h3>
            <p>
              Strong and stylish, ideal for main entrances.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg shadow-[#94fbf6] p-6 hover:shadow-2xl transition">
            <img
              src={images.about1}
              alt="Designer Mesh Door"
              className=" mb-4  items-center justify-center"
            />
            <h3 className="text-xl font-bold mb-2">Designer Mesh Door</h3>
            <p>
              Premium designs that add charm to your home.
            </p>
          </div>
        </div>
      </section>

      {/* Highlight Single Door */}
      <section className="bg-gradient-to-r from-white to-[#94fbf6]/50 flex flex-col md:flex-row items-center gap-10 px-6 md:px-20 py-16 text-[#1ec2b9]">
        <img
          src={images.about4}
          alt="Single Mesh Door"
          className="md:w-[50%] md:h-[40%] shadow-lg shadow-[#94fbf6]"
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
      </section>

      {/* Highlight Double Door */}
      <section className="bg-gradient-to-r from-[#94fbf6]/50 to-white flex flex-col md:flex-row-reverse items-center gap-10 px-6 md:px-20 py-16 text-[#1ec2b9] ">
        <img
          src={images.about3}
          alt="Double Mesh Door"
          className=" shadow-lg md:w-[50%] md:h-[40%] shadow-[#94fbf6]"
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
      </section>

    </div>
  );
}

export default App;
