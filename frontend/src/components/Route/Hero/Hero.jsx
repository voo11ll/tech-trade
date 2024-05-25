import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dqtz5reh6/image/upload/v1716489292/test/Apple-iPhone-15-_bjpzqx.jpg)",
          backgroundSize: "100% 100%"
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[45px] text-[#3d3a3a] font-[600] `}
          style={{ marginLeft: '-120px' }}
        >
          Откройте для себя новые <br /> возможности с TechTrade
        </h1>
        {/* <p className="pt-5 text-[19px] font-[Poppins] font-[400] text-[#000000ba]">
          Ведущий онлайн-магазин, предлагающий последние инновационные модели iPhone, iPad <br /> и других продуктов Apple по конкурентным ценам с быстрой и надежной доставкой в любой уголок Крыма{" "}
          <br />
        </p> */}
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}
            style={{ marginLeft: '90px' }}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
