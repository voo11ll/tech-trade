import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import logo from '../../Assests/image/image.svg';

const Footer = () => {
  return (
    <div className="bg-[#000] text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#696969] py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-[#FFE4B5]">Подпишитесь</span> на нас, чтобы получать новости{" "}
          <br />
          информацию и предложения
        </h1>
        <div>
          <input
            type="text"
            required
            placeholder="Enter your email..."
            className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button className="bg-[#FFE4B5] hover:bg-teal-500 duration-300 px-5 py-2.5 rounded-md text-black md:w-auto w-full">
            Подписаться
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <img
            src={logo}
            alt="Gadget Crimea Logo"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <br />
          <p>Лучшие технологии Apple в один клик.</p>
          <div className="flex items-center mt-[15px]">
            <a href="https://instagram.com/techtrade.store" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram size={25} style={{ marginLeft: "15px", cursor: "pointer" }} />
            </a>
            <a href="https://t.me/techtradestore" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane size={25} style={{ marginLeft: "15px", cursor: "pointer" }} />
            </a>
            <a href="https://wa.me/79783362979" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={25} style={{ marginLeft: "15px", cursor: "pointer" }} />
            </a>
          </div>
        </ul>
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Контактная информация</h1>
          <li>Телефон: +7 (978) 336-29-79</li>
          <li>Email: techtradeoffers@gmail.com</li>
        </ul>
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Режим работы</h1>
          <li>Вт-Вс с 08:00 до 20:00</li>
          <li>Пн - выходной</li>
        </ul>
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Остались вопросы?</h1>
          <li>Задайте их нашим консультантам через онлайн чат, напишите обращение в мессенджер или просто позвоните</li>
        </ul>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2024 Все права защищены.</span>
        <span>Условия · Политика конфиденциальности</span>
      </div>
    </div>
  );
};

export default Footer;





// import React from "react";
// import {
//   AiFillFacebook,
//   AiFillInstagram,
//   AiFillYoutube,
//   AiOutlineTwitter,
// } from "react-icons/ai";
// import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
// import { Link } from "react-router-dom";
// import {
//   footercompanyLinks,
//   footerProductLinks,
//   footerSupportLinks,
// } from "../../static/data";
// import logo from '../../Assests/image/image.svg';

// const Footer = () => {
//   return (
//     <div className="bg-[#000] text-white">
//       <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#696969] py-7">
//         <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
//           <span className="text-[#FFE4B5]">Подпишитесь</span> на нас, чтобы получать новости{" "}
//           <br />
//           информацию и предложения
//         </h1>
//         <div>
//           <input
//             type="text"
//             required
//             placeholder="Enter your email..."
//             className="text-gray-800
//                 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
//           />
//           <button className="bg-[#FFE4B5] hover:bg-teal-500 duration-300 px-5 py-2.5 rounded-md text-black md:w-auto w-full">
//             Подписаться
//           </button>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
//         <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
//           <img
//             src={logo}
//             alt=""
//             // style={{ height: 'auto', width: '250px', marginLeft: '12px' }}
//             style={{ filter: "brightness(0) invert(1)" }}
//           />
//           <br />
//           <p>Лучшие технологии Apple в один клик.</p>
//           <div className="flex items-center mt-[15px]">
//           <a href="https://instagram.com/techtrade.store" target="_blank" rel="noopener noreferrer">
//         <AiFillInstagram size={25} style={{ marginLeft: "15px", cursor: "pointer" }} />
//       </a>
//             <a href="https://t.me/techtradestore" target="_blank" rel="noopener noreferrer">
//         <FaTelegramPlane size={25} style={{ marginLeft: "15px", cursor: "pointer" }} />
//         </a>
//         <a href="https://wa.me/79783362979" target="_blank" rel="noopener noreferrer">
//        <FaWhatsapp size={25} style={{ marginLeft: "15px", cursor: "pointer" }} />
//        </a>
//           </div>
//         </ul>

//         {/* <ul className="text-center sm:text-start">
//           <h1 className="mb-1 font-semibold">Company</h1>
//           {footerProductLinks.map((link,index) => (
//             <li key={index}>
//               <Link
//                 className="text-gray-400 hover:text-teal-400 duration-300
//                    text-sm cursor-pointer leading-6"
//                 to={link.link}
//               >
//                 {link.name}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         <ul className="text-center sm:text-start">
//           <h1 className="mb-1 font-semibold">Shop</h1>
//           {footercompanyLinks.map((link,index) => (
//             <li key={index}>
//               <Link
//                 className="text-gray-400 hover:text-teal-400 duration-300
//                    text-sm cursor-pointer leading-6"
//                 to={link.link}
//               >
//                 {link.name}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         <ul className="text-center sm:text-start">
//           <h1 className="mb-1 font-semibold">Support</h1>
//           {footerSupportLinks.map((link,index) => (
//             <li key={index}>
//               <Link
//                 className="text-gray-400 hover:text-teal-400 duration-300
//                    text-sm cursor-pointer leading-6"
//                 to={link.link}
//               >
//                 {link.name}
//               </Link>
//             </li>
//           ))}
//         </ul> */}
//       </div>

//       <div
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
//          text-center pt-2 text-gray-400 text-sm pb-8"
//       >
//         <span>© 2024 Все права защищены.</span>
//         <span>Условия · Политика конфиденциальности </span>
//         <div className="sm:block flex items-center justify-center w-full">
//           <img
//             // src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
