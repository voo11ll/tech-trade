// import React from "react";
// import { Link } from "react-router-dom";
// import styles from "../../../styles/styles";

// const Hero = () => {
//   return (
//     <div
//       className={`relative min-h-[70vh] md:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
//       style={{
//         backgroundImage:
//           "url(https://res.cloudinary.com/dqtz5reh6/image/upload/v1716489292/test/Apple-iPhone-15-_bjpzqx.jpg)",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className={`${styles.section} w-[90%] md:w-[60%]`}>
//         <h1 className="text-[25px] leading-[1.2] sm:text-[30px] md:text-[35px] lg:text-[45px] text-[#3d3a3a] font-[600] text-center md:text-left md:ml-[-10px] lg:ml-[-20px]">
//           Откройте для себя новые <br /> возможности с TechTrade
//         </h1>
//         <Link to="/products" className="inline-block">
//           <div
//             className={`${styles.button} mt-5 mx-auto md:mx-0`}
//             style={{ backgroundColor: "black" }}
//           >
//             <span className="text-[#fff] font-[Poppins] text-[16px] md:text-[18px]">
//               Shop Now
//             </span>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] md:min-h-[80vh] w-full bg-no-repeat bg-center bg-cover flex items-center justify-center`}
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dqtz5reh6/image/upload/v1716489292/test/Apple-iPhone-15-_bjpzqx.jpg)",
      }}
    >
      <div className="bg-white bg-opacity-75 p-5 rounded-lg text-center">
        <h1 className="text-[25px] leading-[1.2] sm:text-[30px] md:text-[35px] lg:text-[45px] text-[#3d3a3a] font-[600]">
          Откройте для себя новые <br /> возможности с TechTrade
        </h1>
        <Link to="/products" className="inline-block mt-5">
          <div
            className="bg-black py-2 px-4 rounded text-white text-[16px] md:text-[18px] font-[Poppins]"
          >
            Купить
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
