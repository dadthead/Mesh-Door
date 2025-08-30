import React from "react";
import { Shield, Smartphone, Lightbulb, Image } from "lucide-react";

const features = [
  {
    icon: <Shield className="w-10 h-10 text-teal-500" />,
    title: "Cool Set",
    desc: "High security and trusted setup for better experience.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-teal-500" />,
    title: "Anywhere",
    desc: "You can access our service from anywhere.",
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-teal-500" />,
    title: "Customer",
    desc: "We always focus on customer satisfaction.",
  },
  {
    icon: <Image className="w-10 h-10 text-teal-500" />,
    title: "Real Clarity",
    desc: "Clear and transparent solutions for your needs.",
  },
];

const AboutSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#94fbf6] to-white py-16 text-[#1ec2b9]/100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Best about</h2>
          <p className="text-[#1ec2b9] mt-2">
            Praesent placerat risus quis eros. Fusce pellentesque suscipit nibh. 
            Integer vitae libero ac risus egestas placerat.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-3">
              {feature.icon}
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className=" text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
