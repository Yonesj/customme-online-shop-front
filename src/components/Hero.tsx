import { type JSX } from "react";

import heroImg from "../assets/images/hero_img.png";
import BrushIcon from "../assets/icons/brush.svg?react";

function Hero(): JSX.Element {
  return (
    <div
      className="
        h-[44.4rem] rounded-[1.6rem] bg-[#edd5d8]
        flex items-center
        px-[4.8rem] py-[2.8rem]
        my-[1.6rem]
      "
    >
      {/* Description */}
      <div>
        <h1 className="heading-3 text-[#434343] m-0">آنلاین شاپ کاستومی</h1>
        <p
          className="
            body-2 text-[#434343]
            w-[39.9rem]
            mt-[1rem] mb-[3.5rem]
          "
        >
          آنلاین شاپ کاستومی محصولات متنوعی داره و این امکان رو بهتون میده
          خودتون رنگ و طرح و نوشته ی روی محصولات رو انتخاب کنید
        </p>

        <div className="flex gap-[1.5rem]">
          <button
            type="button"
            className="
              h-[4.4rem] w-[18.4rem] rounded-[0.8rem]
              flex items-center justify-center
              bg-[#a72f3b] text-[#fff]
              cursor-pointer border-none
            "
          >
            <BrushIcon className="mr-[0.2rem]" width="2.4rem" height="2.4rem" />
            <p className="button-2 m-0">شروع طراحی</p>
          </button>

          <button
            type="button"
            className="
              h-[4.4rem] w-[18.4rem] rounded-[0.8rem]
              flex items-center justify-center
              bg-transparent
              text-[#a72f3b]
              cursor-pointer
              border-[0.1rem] border-[#a72f3b]
            "
          >
            <p className="button-2 m-0">دیدن محصولات</p>
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="relative flex-shrink-0">
        <img src={heroImg} alt="Hero Image" />
      </div>
    </div>
  );
}

export default Hero;
