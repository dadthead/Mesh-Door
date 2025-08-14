import React from "react";
import { images } from "../../../assets/images";
import { motion } from "framer-motion";

const MdContent = () => {
  return (
    <section className="py-18 px-6 md:px-16 lg:px-28 bg-gradient-to-r from-white to-[#94fbf6]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center font-['Inter']">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6 }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-[#44b4af] mb-6">
            Premium Mesh Door Solutions
          </h1>

          {/* Intro */}
          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            Our business specializes in high-quality mesh doors designed to
            combine durability, style, and functionality. We deliver products
            that enhance ventilation and natural light while providing
            long-lasting protection against insects and dust.
          </p>

          {/* Applications */}
          <h3 className="text-2xl font-semibold text-[#44b4af] mb-3">
            Designed for Every Space
          </h3>
          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            From residential balconies to commercial entrances, our mesh door
            systems are tailored to meet the demands of any environment. We
            ensure precise fit, smooth operation, and a finish that complements
            modern interiors and exteriors.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6 }}
          className="flex justify-center"
        >
          <img
            src={images.img1}
            alt="Mesh Door Solutions"
            className="rounded-xl shadow-lg w-full md:w-[90%] lg:w-[80%] object-cover"
          />
        </motion.div>
      </div>

      {/* Why Choose Us */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6 }}
        className="text-center w-full py-20 font-['Inter']"
      >
        <h3 className="text-2xl font-semibold text-[#44b4af] mb-5">
          Why Choose Our Products
        </h3>
        <p className="text-gray-700 text-lg mb-15 leading-relaxed">
          We use robust frames, premium-grade mesh, and precision-engineered
          mechanisms to deliver doors that operate flawlessly for years. Our
          solutions require minimal maintenance and are available in multiple
          styles and finishes to match your preferences.
        </p>

        <h3 className="text-2xl font-semibold text-[#44b4af] mb-5">
          Tailored to Your Requirements
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          Every order is custom-built to exact measurements, ensuring a perfect
          fit and smooth operation. Whether you need a sliding mesh system or a
          hinged design, we provide reliable solutions backed by quality
          craftsmanship.
        </p>
      </motion.div>

      {/* Video + Business Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10 font-['Inter']">

        {/* Left - Video */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6 }}
          className="flex justify-center"
        >
          <video
            src={images.video}
            autoPlay
            loop
            muted
            className="rounded-xl shadow-lg w-full lg:w-[90%] object-cover"
          />
        </motion.div>

        {/* Right - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6 }}
          className="text-center md:text-left"
        >
          <h3 className="text-3xl font-semibold text-[#44b4af] mb-5">
            About Our Business
          </h3>
          <p className="text-gray-700 text-lg  leading-relaxed">
            We operate with a commitment to delivering premium mesh door systems
            that meet the highest standards of design and performance. By focusing
            on quality materials and precise manufacturing, we ensure every
            product adds both value and functionality to your space.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default MdContent;
