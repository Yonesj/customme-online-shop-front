import { type JSX } from "react";
import "./GiftBanner.css";

interface GiftBannerProps {
  title: string;
  imagePath: string;
}

function GiftBanner({ title, imagePath }: GiftBannerProps): JSX.Element {
  return (
    <div className="gift-banner">
      <div
        className="
          banner-description
          p-[0.8rem] gap-[0.8rem]
          xl:p-[2.8rem] xl:pl-[4.8rem] xl:gap-[2.4rem]
        "
      >
        <h4
          className="
            body-5
            xl:!font-bold xl:!text-[2.4rem] xl:!leading-[140%]
        "
        >
          {title}
        </h4>
        <button
          className="
            banner-btn
            self-center
            xl:self-start xl:rounded-[0.8rem] xl:border xl:border-[#a72f3b]
          "
        >
          <span
            className="
              caption-4
              xl:!font-normal xl:!text-[1.8rem] xl:!leading-[180%]
            "
          >
            دیدن محصولات
          </span>
        </button>
      </div>

      <img src={imagePath} alt="dad Image" className="w-[50%] xl:w-full" />
    </div>
  );
}

export default GiftBanner;
