"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";

export default function CallToAction() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "1",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, date, time, guests, notes } = formData;

    // Build message line by line
    let message = `KAVANA PENIDA\nReservation Request:\n- Name: ${name}`;

    if (email) message += `\n- Email: ${email}`;
    message += `\n- Date: ${date}`;
    message += `\n- Time: ${time}`;
    message += `\n- Guests: ${guests}`;
    if (notes) message += `\n- Notes: ${notes}`;

    const encodedMessage = encodeURIComponent(message);

    const phoneNumber = "6281237558789";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");
  };

  return (
    <section
      id="booking"
      className="w-full bg-gradient-to-r from-green-900 to-green-800 py-20 px-4 md:px-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 bg-[#f9f4ea] shadow-2xl rounded-2xl overflow-hidden p-6 md:p-12">
        {/* Left Side: Text + Form */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Reserve Your Table Today
          </h2>
          <p className="text-gray-600 text-base mb-8">
            Whether it’s a romantic sunset dinner or a group celebration, secure
            your spot at KAVANA Penida now.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm"
              />
              <input
                type="email"
                name="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address (optional)"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm"
              />
              <input
                type="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm"
              />
              <input
                type="number"
                name="guests"
                min={1}
                required
                value={formData.guests}
                onChange={handleChange}
                placeholder="Guests"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm"
              />
            </div>

            <input
              type="text"
              name="notes" 
              value={formData.notes}
              onChange={handleChange}
              placeholder="Notes (optional)"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm"
            />

            <button
              type="submit"
              className="cursor-pointer mt-4 bg-gradient-to-tr from-green-900 to-green-800  hover:bg-green-600 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 active:scale-95 shadow-md w-full sm:w-fit"
            >
              Confirm Reservation
            </button>
          </form>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2">
          <Image
            width={600}
            height={500}
            src={assets.restaurant_4}
            alt="Dining Table"
            className="rounded-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
