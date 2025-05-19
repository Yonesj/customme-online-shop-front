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
    <div className="designer-profile-card">
      <div className="designer-profile-pic">{profileImg}</div>

      <div className="desinger-info">
        <span className="designer-name body-3">{name}</span>

        <div className="designer-attributes caption-4">
          <span>دنبال کنندگان : ۴۰۰</span>
          <div className="designer-info-vertical-separator"></div>
          <span> تعداد طرح ها : ۵۶</span>
          <div className="designer-info-vertical-separator"></div>
          <span> آمار فروش : ۳۷۰ </span>
        </div>

        <div className="designer-show-cases">{...showcases}</div>

        <button className="follow-btn">
          <SubscribeIcon />
          <span className="button-2">دنبال کردن</span>
        </button>
      </div>
    </div>
  );
}

export default DesignerProfileCard;
