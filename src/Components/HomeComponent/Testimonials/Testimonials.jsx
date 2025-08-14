
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { images } from "../../../assets/images";

const testimonialsData = [
  {
    id: 1,
    name: "Ramesh Kumar",
    role: "Homeowner, Hyderabad",
    img: images.c1,
    rating: 5,
    text:
      "Excellent build quality and a precise fit. The mesh door slides smoothly and looks premium. Installation was timely and professional."
  },
  {
    id: 2,
    name: "Geetha Rao",
    role: "Apartment Owner, Guntur",
    img: images.c2,
    rating: 5,
    text:
      "We chose a custom sliding system — it transformed our balcony. Sturdy, low-maintenance, and visually neat. Highly recommend."
  },
  {
    id: 3,
    name: "Madhuri",
    role: "Shopfront Owner, Hyderabad",
    img: images.c3,
    rating: 4,
    text:
      "Quality materials and quick installation. The product gave improved ventilation while keeping insects out."
  }
];

const AUTO_ADVANCE_MS = 6000;

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, [index]);

  const startAuto = () => {
    stopAuto();
    timerRef.current = setTimeout(() => {
      handleNext();
    }, AUTO_ADVANCE_MS);
  };

  const stopAuto = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const handlePrev = () => {
    stopAuto();
    setIndex((i) => (i - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    stopAuto();
    setIndex((i) => (i + 1) % testimonialsData.length);
  };

  const goTo = (i) => {
    stopAuto();
    setIndex(i);
  };

  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-28 bg-white">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#44b4af]">
          What Clients Say
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Real feedback from customers who chose our mesh door and uPVC solutions.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <AnimatePresence initial={false} mode="wait">
          {testimonialsData.map((t, i) =>
            i === index ? (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.6 }}
                className="relative bg-[#f8feff] rounded-2xl border-t-2 border-[#44b4af] shadow-2xl shadow-[#94fbf6]  p-6 sm:p-8 md:p-10 overflow-visible"
              >
                {/* Avatar floating on top-left */}
                <div className="absolute -top-5 -left-5">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-4 border-[#44b4af] shadow-lg overflow-hidden">
                    <img
                      src={t.img}
                      alt={`${t.name} avatar`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-14 sm:mt-16 md:mt-20">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className={`w-4 h-4 ${
                          s < t.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-800 text-base sm:text-lg md:text-xl mb-4 leading-relaxed">
                    “{t.text}”
                  </p>
                  <h4 className="font-semibold text-[#0f766e]">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        {/* Controls */}
        <div className="flex items-center justify-between mt-6">
          <button
            aria-label="Previous testimonial"
            onClick={handlePrev}
            className="p-2 rounded-full bg-white shadow hover:bg-gray-50"
          >
            <ChevronLeft className="w-6 h-6 text-[#44b4af]" />
          </button>

          <div className="flex gap-2 items-center">
            {testimonialsData.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-3 h-3 rounded-full ${
                  i === index ? "bg-[#44b4af]" : "bg-gray-300"
                } transition`}
              />
            ))}
          </div>

          <button
            aria-label="Next testimonial"
            onClick={handleNext}
            className="p-2 rounded-full bg-white shadow hover:bg-gray-50"
          >
            <ChevronRight className="w-6 h-6 text-[#44b4af]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
