"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "We stumbled on KAVANA after snorkeling at Crystal Bay. The food was delicious and the sunset cocktails were the perfect way to end the day!",
    name: "Maya",
    location: "Bali traveller",
    rating: 5,
  },
  {
    quote:
      "Hands down the best restaurant near Crystal Bay Beach. Fresh seafood, friendly staff and just a short walk from the sand.",
    name: "Rizal & Anita",
    location: "Jakarta",
    rating: 5,
  },
  {
    quote:
      "If you’re looking for a relaxing spot in Nusa Penida with amazing cocktails and island‑fresh plates, this is it!",
    name: "Liam",
    location: "Australia",
    rating: 4,
  },
  {
    quote:
      "Loved everything about KAVANA from the ambiance to the cocktails. Don’t miss the grilled Mahi‑Mahi!",
    name: "Tania",
    location: "Singapore",
    rating: 5,
  },
  {
    quote:
      "Incredible food, amazing beach vibes, and warm staff. We came back twice during our trip!",
    name: "Alex & Sarah",
    location: "UK",
    rating: 5,
  },
];

export default function Testimoni() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[currentIndex];

  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <section className="mt-32 text-center px-4 ">
      <h1 className="text-3xl font-bold">What Guests Are Saying</h1>
      {/* <p className="text-sm md:text-base text-gray-500 mt-4 max-w-xl mx-auto">
        Real stories from real guests who found something special at KAVANA.
      </p> */}

      <div className="flex flex-col mx-auto max-w-4xl items-center justify-center p-6 md:p-14 w-full ">
        {/* Quote icon */}
              <svg
                width="44"
                height="40"
                viewBox="0 0 44 40"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.172 5.469q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 26.539 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.923-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203m-20.625 0q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 5.914 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.922-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203"
                  fill="#14532b"
                />
              </svg>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={fadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start p-6 rounded-lg min-h-[280]"
          >
            <div className="flex flex-col justify-center items-center">
              

              <p className="mt-4 md:text-xl text-lg text-center">
                {testimonial.quote}
              </p>
              {/* Stars */}
              <div className="flex gap-1 mt-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                      fill={i < testimonial.rating ? "#FF532E" : "#E5E7EB"}
                    />
                  </svg>
                ))}
              </div>
              <div className="items-center text-sm mt-8">
                <p className="font-medium text-lg">{testimonial.name}</p>
                <p>{testimonial.location}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
         <div className="flex items-center gap-2">
                <div className="w-2 h-2 md:w-2 md:h-2 bg-gray-400 rounded-full"></div>
                <div className="w-2 h-2 md:w-2 md:h-2 bg-gray-600 rounded-full"></div>
                <div className="w-2 h-2 md:w-2 md:h-2 bg-gray-600 rounded-full"></div>
            </div>
      </div>
 
    </section>
  );
}
