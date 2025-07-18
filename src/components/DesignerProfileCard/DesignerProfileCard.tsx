import { type JSX, type ReactNode } from "react";
import "./DesignerProfileCard.css";

import SubscribeIcon from "../../assets/icons/subscribe_icon.svg?react";

interface DesignerProfileCardProps {
  profileImg: ReactNode;
  name: string;
  showcases: ReactNode[];
}

function DesignerProfileCard({
  profileImg,
  name,
  showcases,
}: DesignerProfileCardProps): JSX.Element {
  return (
    <div
      className="
        designer-profile-card
        gap-[0.8rem]
        xl:gap-[1.6rem]
      "
    >
      <div
        className="
          designer-profile-pic
          h-[4.7rem] mb-[1.6rem]
          xl:h-[7.2rem] xl:mb-[4.1rem]
        "
      >
        {profileImg}
      </div>

      <div className="desinger-info">
        <span
          className="
            designer-name body-3 p-[0.8rem]
            caption-3 pb-0
            xl:!font-normal xl:!text-[1.6rem] xl:!leading-[180%]
          "
        >
          {name}
        </span>

        <div
          className="
            designer-attributes caption-4
            flex-col
            xl:flex-row
          "
        >
          <span className="text-center">دنبال کنندگان : ۴۰۰</span>
          <div
            className="
              designer-info-vertical-separator
              hidden
              xl:block
            "
          ></div>
          <span className="text-center"> تعداد طرح ها : ۵۶</span>
          <div
            className="
              designer-info-vertical-separator
              hidden
              xl:block
            "
          ></div>
          <span className="text-center"> آمار فروش : ۳۷۰ </span>
        </div>

        <div
          className="
            hidden
            xl:flex xl:items-center xl:justify-between xl:px-[0.4rem]
          "
        >
          {...showcases}
        </div>

        <button
          className="
            follow-btn py-[0.8rem]
            gap-[0.4rem] px-[1.2rem]
            xl:gap-[0.8rem] xl:px-[2.4rem]
          "
        >
          <SubscribeIcon className="w-[1.6rem] h-[1.6rem] xl:w-[2.4rem] xl:h-[2.4rem]" />
          <span
            className="
              caption-4
              xl:!font-medium xl:!text-[1.4rem] xl:!leading-[2.4rem]
            "
          >
            دنبال کردن
          </span>
        </button>
      </div>
    </div>
  );
}

export default DesignerProfileCard;
