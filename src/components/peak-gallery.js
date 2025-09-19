import { assets } from '@/assets/assets';
import Image from 'next/image';
import { useState } from 'react';

export default function Peak() {
  const thumbnails = [
    assets.pancake_1,
    assets.sunny_egg_2,
    assets.toast_egg_1,
    assets.pasta_keju_2,
    assets.mie_goreng_2,
    assets.pasta_beef_1,
  ];

  const [mainImage, setMainImage] = useState(thumbnails[0]);

  return (
    <div className="mt-16 flex flex-col items-center space-y-4 py-8">
       <h1 className="text-3xl font-bold">Our Gallery</h1>
      {/* Main Image */}
      <div className="w-full max-w-3xl mt-4">
        <Image
          width={600}
          height={400}
          src={mainImage}
          alt="Main"
          className="w-full rounded-lg object-cover"
          priority 
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-6 max-w-5xl gap-4">
        {thumbnails.map((src, idx) => (
          <Image
            key={idx}
            src={src} 
            alt={`Thumbnail ${idx + 1}`}
            width={150}
            height={100}
            className="rounded-lg object-cover cursor-pointer hover:opacity-80"
            onClick={() => setMainImage(src)}
          />
        ))}
      </div>
    </div>
  );
}


// import { assets } from '@/assets/assets';
// import Image from 'next/image';
// import { useEffect, useRef, useState } from 'react';

// export default function Peak() {
//   const thumbnails = [
//     assets.pancake_1,
//     assets.sunny_egg_2,
//     assets.toast_egg_1,
//     assets.pasta_keju_2,
//     assets.mie_goreng_2,
//     assets.pasta_beef_1,
//   ];

//   const [currentSlide, setCurrentSlide] = useState(1); // Start at 1 because of fake first slide
//   const sliderRef = useRef(null);
//   const totalSlides = thumbnails.length;

//   // Create duplicated slides: [last, ...realSlides, first]
//   const extendedSlides = [
//     thumbnails[thumbnails.length - 1],
//     ...thumbnails,
//     thumbnails[0],
//   ];

//   const goToSlide = (index, instant = false) => {
//     const slider = sliderRef.current;
//     if (!slider) return;

//     const slideWidth = slider.clientWidth;
//     if (instant) {
//       slider.style.transition = 'none';
//     } else {
//       slider.style.transition = 'transform 1s ease-in-out';
//     }
//     slider.style.transform = `translateX(-${index * slideWidth}px)`;
//   };

//   // Handle real infinite loop effect
//   useEffect(() => {
//     if (currentSlide === 0) {
//       // Moved to the fake last slide (before first real)
//       setTimeout(() => {
//         goToSlide(totalSlides, true); // jump to real last slide instantly
//         setCurrentSlide(totalSlides);
//       }, 6000);
//     } else if (currentSlide === totalSlides + 1) {
//       // Moved to the fake first slide (after last real)
//       setTimeout(() => {
//         goToSlide(1, true); // jump to real first slide instantly
//         setCurrentSlide(1);
//       }, 6000);
//     } else {
//       goToSlide(currentSlide);
//     }
//   }, [currentSlide, totalSlides]);

//   // Auto-slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => prev + 1);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex flex-col items-center mt-16 py-8 space-y-6">
//       <h1 className="text-3xl font-bold">Our Gallery</h1>

//       <div className="max-w-3xl overflow-hidden relative">
//         <div
//           ref={sliderRef}
//           className="flex"
//           style={{ width: `${100 * extendedSlides.length}%` }}
//         >
//           {extendedSlides.map((src, idx) => (
//             <div key={idx} className="w-full flex-shrink-0">
//               <Image
//                 src={src}
//                 alt={`Slide ${idx}`}
//                 width={700}
//                 height={400}
//                 className="rounded-lg object-cover"
//                 priority={idx === 1}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Dot Indicators */}
//       <div className="flex items-center mt-4 space-x-2">
//         {thumbnails.map((_, idx) => (
//           <span
//             key={idx}
//             onClick={() => setCurrentSlide(idx + 1)} // shift by 1 for fake slide
//             className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
//               currentSlide === idx + 1 ? 'bg-black' : 'bg-black/20'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
