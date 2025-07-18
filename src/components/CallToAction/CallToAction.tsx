import { type JSX } from "react";
import "./CallToAction.css";

import PrimaryButton from "../PrimaryButton";
import BrushIcon from "../../assets/icons/brush.svg?react";

import WeddingImg1 from "../../assets/images/call_to_action/wedding-img1.svg";
import WeddingImg2 from "../../assets/images/call_to_action/wedding-img2.svg";
import WeddingImg3 from "../../assets/images/call_to_action/wedding-img3.svg";
import WeddingImg4 from "../../assets/images/call_to_action/wedding-img4.svg";
import WeddingImg1Mobile from "../../assets/images/call_to_action/wedding-img1-mobile.svg";
import WeddingImg2Mobile from "../../assets/images/call_to_action/wedding-img2-mobile.svg";
import WeddingImg3Mobile from "../../assets/images/call_to_action/wedding-img3-mobile.svg";

function CallToAction(): JSX.Element {
  return (
    <div className="call-to-action-sct gap-[1.2rem] xl:gap-[2.4rem]">
      <div className="hidden xl:flex xl:items-center xl:gap-[2.4rem]">
        <img src={WeddingImg1} alt="wedding-img" className="w-full h-auto" />
        <img src={WeddingImg2} alt="wedding-img" className="w-full h-auto" />
        <img src={WeddingImg3} alt="wedding-img" className="w-full h-auto" />
        <img src={WeddingImg4} alt="wedding-img" className="w-full h-auto" />
      </div>

      <div className="flex items-center justify-center gap-[2rem] xl:hidden">
        <img src={WeddingImg1Mobile} alt="wedding-img" />
        <img src={WeddingImg2Mobile} alt="wedding-img" />
        <img src={WeddingImg3Mobile} alt="wedding-img" />
      </div>

      <h4
        className="
          caption-3
          xl:!font-bold xl:!text-[2.4rem] xl:!leading-[140%]
        "
      >
        کارت دعوت عروسی رو خودتون طراحی کنید
      </h4>

      <PrimaryButton
        text="شروع طراحی"
        icon={
          <BrushIcon className="mr-[0.2rem] w-[1.6rem] h-[1.6rem] xl:w-[2.4rem] xl:h-[2.4rem]" />
        }
        className="w-full xl:w-auto"
      />
    </div>
  );
}

export default CallToAction;
