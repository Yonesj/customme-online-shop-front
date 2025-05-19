import { type JSX } from "react";
import "./CallToAction.css";

import PrimaryButton from "../PrimaryButton.tsx";
import BrushIcon from "../../assets/icons/brush.svg?react";

import WeddingImg1 from "../../assets/images/call_to_action/wedding-img1.svg";
import WeddingImg2 from "../../assets/images/call_to_action/wedding-img2.svg";
import WeddingImg3 from "../../assets/images/call_to_action/wedding-img3.svg";
import WeddingImg4 from "../../assets/images/call_to_action/wedding-img4.svg";

function CallToAction(): JSX.Element {
  return (
    <div className="call-to-action-sct">
      <div className="wedding-gallery">
        <img src={WeddingImg1} alt="wedding-img" />
        <img src={WeddingImg2} alt="wedding-img" />
        <img src={WeddingImg3} alt="wedding-img" />
        <img src={WeddingImg4} alt="wedding-img" />
      </div>

      <h4 className="heading-4">کارت دعوت عروسی رو خودتون طراحی کنید</h4>

      <PrimaryButton
        text="شروع طراحی"
        icon={
          <BrushIcon className="mr-[0.2rem]" width="2.4rem" height="2.4rem" />
        }
      />
    </div>
  );
}

export default CallToAction;
