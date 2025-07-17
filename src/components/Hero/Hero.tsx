import { type JSX } from "react";

import heroImg from "../../assets/images/hero_img.png";
import BrushIcon from "../../assets/icons/brush.svg?react";

function Hero(): JSX.Element {
  return (
    <div
      className="
        flex items-center bg-[#edd5d8]
        flex-col justify-center
        w-full rounded-[0.8rem]
        gap-[0.8rem] p-[0.8rem]
        my-[1.6rem]

        xl:flex-row xl:justify-start xl:w-full xl:h-[44.4rem] xl:mx-auto
        xl:rounded-[1.6rem] xl:gap-0 xl:px-[4.8rem] xl:py-[2.8rem]
      "
    >
      <img
        className="w-[32rem] h-auto flex-shrink-0 xl:hidden"
        src={heroImg}
        alt="Hero Image"
      />

      {/* Description */}
      <div>
        <h1
          className="
            text-[#434343]
            heading-6 text-center
            xl:!text-[3.2rem] m-0 xl:text-right
          "
        >
          آنلاین شاپ کاستومی
        </h1>
        <p
          className="
            text-[#434343]

            body-5 w-[32rem] px-[.8rem] mb-[1.6rem]

            xl:w-[39.9rem] xl:!text-[1.8rem] xl:px-[0]
            xl:mt-[1rem] xl:mb-[3.5rem]
          "
        >
          آنلاین شاپ کاستومی محصولات متنوعی داره و این امکان رو بهتون میده
          خودتون رنگ و طرح و نوشته ی روی محصولات رو انتخاب کنید
        </p>

        <div className="flex gap-[1.5rem] justify-center xl:justify-start">
          <button
            type="button"
            className="
              flex items-center justify-center
              bg-[#a72f3b] text-[#fff]
              cursor-pointer border-none rounded-[0.8rem]

              h-[3.2rem] w-[13.2rem]

              xl:h-[4.4rem] xl:w-[18.4rem]
            "
          >
            <BrushIcon className="mr-[0.2rem] w-[1.6rem] h-[1.6rem] xl:!w-[2.4rem] xl:!h-[2.4rem]" />
            <p
              className="
                caption-4 m-0
                xl:!font-medium xl:!text-[1.4rem] xl:!leading-[2.4rem]
              "
            >
              شروع طراحی
            </p>
          </button>

          <button
            type="button"
            className="
              flex items-center justify-center
              bg-transparent
              text-[#a72f3b]
              cursor-pointer
              border-[0.1rem] border-[#a72f3b] rounded-[0.8rem]

              h-[3.2rem] w-[13.2rem]

              xl:h-[4.4rem] xl:w-[18.4rem]
            "
          >
            <p
              className="
                caption-4 m-0
                xl:!font-medium xl:!text-[1.4rem] xl:!leading-[2.4rem]
              "
            >
              دیدن محصولات
            </p>
          </button>
        </div>
      </div>

      <img className="hidden xl:inline" src={heroImg} alt="Hero Image" />
    </div>
  );
}

export default Hero;
