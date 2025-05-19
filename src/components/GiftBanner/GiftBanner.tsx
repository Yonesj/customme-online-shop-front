import { type JSX, type ReactNode } from "react";
import "./GiftBanner.css";

interface GiftBannerProps {
  title: string;
  imagePath: string;
}

function GiftBanner({ title, imagePath }: GiftBannerProps): JSX.Element {
  return (
    <div className="gift-banner">
      <div className="banner-description">
        <h4 className="heading-4">{title}</h4>
        <button className="banner-btn">
          <span className="button-2">دیدن محصولات</span>
        </button>
      </div>

      <img src={imagePath} alt="dad Image" />
    </div>
  );
}

export default GiftBanner;
