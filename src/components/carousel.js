// "use client";
// import { useState, useEffect } from "react";

// const carousel = () => {
//     "use client";

// import { useState } from "react";

// const Carousel = ({ images }) => {

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {

//     setCurrentIndex((prevIndex) =>

//       prevIndex === 0 ? images.length - 1 : prevIndex - 1

//     );

//   };

//   const handleNext = () => {

//     setCurrentIndex((prevIndex) =>

//       prevIndex === images.length - 1 ? 0 : prevIndex + 1

//     );

//   };

//   return (
// <div className="relative w-[500px] h-[300px] m-auto overflow-hidden">

//       {/* Images */}
// <div

//         className="flex transition-transform duration-500"

//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
// >

//         {images.map((image, index) => (
// <img

//             key={index}

//             src={image}

//             className="w-[500px] h-[300px] object-cover"

//           />

//         ))}
// </div>

//       {/* Previous Button */}
// <button

//         className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"

//         onClick={handlePrev}
// >

//         ❮
// </button>

//       {/* Next Button */}
// <button

//         className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"

//         onClick={handleNext}
// >

//         ❯
// </button>

//       {/* Indicators */}
// <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">

//         {images.map((_, index) => (
// <div

//             key={index}

//             className={`w-3 h-3 rounded-full cursor-pointer ${

//               index === currentIndex ? "bg-[#AA714A]" : "bg-gray-300"

//             }`}

//             onClick={() => setCurrentIndex(index)}
// ></div>

//         ))}
// </div>
// </div>

//   );

// };

// export default Carousel;
// "use client";

// import { useState } from "react";

// import { HeartClickIcon } from "../../../assets/HeartClickIcon";

// import { FilledHeartIcon } from "../../../assets/FilledHeartIcon";

// const Menu = () => {

//   const [favorites, setFavorites] = useState({});

//   const toggleFavorite = (itemName) => {

//     setFavorites((prev) => ({

//       ...prev,

//       [itemName]: !prev[itemName],

//     }));

//   };

//   const items = [

//     { name: "iced americano", img: "/Images/iced-americano.png" },

//     { name: "iced latte", img: "/Images/iced-latte.png" },

//     { name: "iced machhiato", img: "/Images/machhiato.png" },

//     { name: "iced mocha", img: "/Images/mocha.png" },

//     { name: "esspresso", img: "/Images/esspresso.png" },

//     { name: "affogato", img: "/Images/affogato.png" },

//   ];

//   return (
// <div className="flex flex-wrap w-fit gap-[20px] font-[600]">

//       {items.map((item) => (
// <div

//           key={item.name}

//           className="flex relative flex-col justify-center items-center gap-[8px]"
// >
// <img className="w-[305px] h-[295px] rounded-[15px]" src={item.img} />
// <div

//             className="absolute right-[21px] top-[16px] z-10 cursor-pointer"

//             onClick={() => toggleFavorite(item.name)}
// >

//             {favorites[item.name] ? <FilledHeartIcon /> : <HeartClickIcon />}
// </div>
// <div className="text-[20px] font-[600px] text-[#28282A]">

//             {item.name}
// </div>
// </div>

//       ))}
// </div>

//   );

// };

// export default Menu;
// "use client";

// import { useState } from "react";

// import { HeartClickIcon } from "../../../assets/HeartClickIcon";

// import { FilledHeartIcon } from "../../../assets/FilledHeartIcon";

// const Menu = () => {

//   const [heartState, setHeartState] = useState({

//     americano: false,

//     latte: false,

//     machhiato: false,

//     mocha: false,

//     esspresso: false,

//     affogato: false,

//   });

//   const toggleHeart = (item) => {

//     setHeartState((prevState) => ({

//       ...prevState,

//       [item]: !prevState[item],

//     }));

//   };

//   return (
// <div className="flex flex-wrap w-fit gap-[20px] font-[600]">

//       {/* Iced Americano */}
// <div className="flex relative flex-col justify-center items-center gap-[8px]">
// <img

//           className="w-[305px] h-[295px] rounded-[15px]"

//           src="/Images/iced-americano.png"

//         />
// <div

//           className="absolute right-[21px] top-[16px] z-10 cursor-pointer"

//           onClick={() => toggleHeart("americano")}
// >

//           {heartState.americano ? <FilledHeartIcon /> : <HeartClickIcon />}
// </div>
// <div className="text-[20px] font-[600px] text-[#28282A]">

//           iced americano
// </div>
// </div>

//       {/* Iced Latte */}
// <div className="flex relative flex-col justify-center items-center gap-[8px]">
// <img

//           className="w-[305px] h-[295px] rounded-[15px]"

//           src="/Images/iced-latte.png"

//         />
// <div

//           className="absolute right-[21px] top-[16px] z-10 cursor-pointer"

//           onClick={() => toggleHeart("latte")}
// >

//           {heartState.latte ? <FilledHeartIcon /> : <HeartClickIcon />}
// </div>
// <div className="text-[20px] font-[600px] text-[#28282A]">iced latte</div>
// </div>

//       {/* Iced Machhiato */}
// <div className="flex relative flex-col justify-center items-center gap-[8px]">
// <img

//           className="w-[305px] h-[295px] rounded-[15px]"

//           src="/Images/machhiato.png"

//         />
// <div

//           className="absolute right-[21px] top-[16px] z-10 cursor-pointer"

//           onClick={() => toggleHeart("machhiato")}
// >

//           {heartState.machhiato ? <FilledHeartIcon /> : <HeartClickIcon />}
// </div>
// <div className="text-[20px] font-[600px] text-[#28282A]">

//           iced machhiato
// </div>
// </div>

//       {/* Iced Mocha */}
// <div className="flex relative flex-col justify-center items-center gap-[8px]">
// <img

//           className="w-[305px] h-[295px] rounded-[15px]"

//           src="/Images/mocha.png"

//         />
// <div

//           className="absolute right-[21px] top-[16px] z-10 cursor-pointer"

//           onClick={() => toggleHeart("mocha")}
// >

//           {heartState.mocha ? <FilledHeartIcon /> : <HeartClickIcon />}
// </div>
// <div className="text-[20px] font-[600px] text-[#28282A]">iced mocha</div>
// </div>
// </div>

//   );

// };

// export default Menu;
// }
