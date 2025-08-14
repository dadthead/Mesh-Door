import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Ruler, Wrench, Package, DoorOpen, Wind } from "lucide-react"; // icons

const Services = () => {
  const services = [
    {
      icon: ShieldCheck,
      title: "Premium Mesh Doors",
      description:
        "High-quality sliding and hinged mesh door systems built for durability, smooth operation, and style."
    },
    {
      icon: DoorOpen,
      title: "uPVC Doors",
      description:
        "Energy-efficient, weather-resistant uPVC doors that provide excellent insulation and modern aesthetics."
    },
    {
      icon: Wind,
      title: "Cloth Drying Wall Hanging Rope",
      description:
        "Space-saving, retractable cloth drying systems for balconies, utility areas, and indoor use."
    },
    {
      icon: Ruler,
      title: "Custom Sizing",
      description:
        "Every product is made-to-measure to ensure a perfect fit for your specific requirements."
    },
    {
      icon: Wrench,
      title: "Professional Installation",
      description:
        "Precise, quick, and clean installation with expert fitting for smooth, hassle-free operation."
    },
    {
      icon: Package,
      title: "Variety of Designs",
      description:
        "Multiple frame finishes, mesh types, and design options to complement your interiors."
    }
  ];

  return (
    <section className="py-20 px-6 md:px-16 lg:px-28 bg-white font-['Inter']">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-[#44b4af] mb-4">
          Our Services
        </h2>
        <p className="text-gray-700 text-xl max-w-2xl mx-auto leading-relaxed">
          Delivering premium-quality home and lifestyle solutions designed to
          enhance comfort, style, and functionality.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.1 }}
            className="bg-[#f8fdfd] rounded-xl p-6 shadow-2xl shadow-[#94fbf6] hover:shadow-xl  transition-shadow duration-300"
          >
            <service.icon className="w-12 h-12 text-[#44b4af] mb-4" />
            <h3 className="text-xl font-semibold text-[#44b4af] hover:underline underline-offset-1 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
