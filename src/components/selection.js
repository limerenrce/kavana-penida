import { topPicks } from "@/assets/assets";
import Image from "next/image";

const menuItems = Object.values(topPicks)

export default function Selection() {
  return (
    <section id="menu" className="mt-48 rounded-3xl mx-auto max-w-7xl px-4 bg-gradient-to-bl from-green-900 to-green-800 pb-8 shadow-2xl">
      <div className="py-12 px-4 max-w-screen-xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Our Selection
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-[#f9f4ea] rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={400}
                height={200}
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                  {item.name}
                </h5>
                <p className="mb-2 text-sm text-gray-700 line-clamp-2">
                  {item.description}
                </p>
                <p className="text-sm font-semibold text-green-900">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Button to Full Menu */}
      <div className="flex justify-end px-16 text-right">
        <div>
          <p className="max-w-sm italic text-md text-white">
            &#8220; Just a taste of what we serve — explore the full menu for
            more dishes and drinks. &#8221;
          </p>
          <a href="/menu">
            <button className="mt-4 font-extralight text-sm italic text-gray-200 hover:text-white transition-all duration-300">
              Full Menu →
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

// export default function Selection() {
//   return (
//     <section className="pt-16 px-8 max-w-screen-xl mx-auto">
//       {/* Section Title */}
//       <h2 className="text-3xl font-bold text-gray-800 text-center">
//         Selection Menus
//       </h2>

//       {/* Card Grid */}

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-8 px-24">
//         {menuItems.map((item, idx) => (
//           <div
//             key={idx}
//             className="p-4 bg-white rounded-lg shadow max-w-80 mx-auto"
//           >
//             <Image
//               src={item.image}
//               alt={item.name}
//               className="rounded-md max-h-40 w-full object-cover"
//               width={320}
//               height={160}
//             />
//             <p className="text-gray-900 text-lg font-semibold mt-3">
//               {item.name}
//             </p>
//             <p className="text-gray-500 text-sm mt-1">{item.description}</p>
//             <p className="text-gray-800 text-sm font-medium mt-2">
//               {item.price}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Button */}
//       <div className="mt-10 text-center">
//         <a href="/menu">
//           <button className="bg-green-900 text-white px-6 py-3 rounded-full hover:bg-green-800 transition-all duration-300 shadow-md">
//             See Full Menu
//           </button>
//         </a>
//       </div>
//     </section>
//   );
// }

// export default function SelectionFlip() {
//   return (
//     <section className="py-10 px-4">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
//         {menuItems.map((item, idx) => (
//           <div
//             key={idx}
//             className="group w-80 h-64 [perspective:1000px] cursor-pointer"
//           >
//             <div className="relative w-full h-full transition-transform duration-800 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
//               {/* Front Side */}
//               <div className="absolute w-full h-full [backface-visibility:hidden] rounded-md overflow-hidden border border-gray-200 shadow-md">
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   width={300}
//                   height={300}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Back Side */}
//               <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-md bg-green-900 text-white p-4 flex flex-col justify-center items-center text-center shadow-md">
//                 <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
//                 <p className="text-sm mb-4">{item.description}</p>
//                 <span className="font-bold">{item.price}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
