import { type JSX, type ReactNode } from "react";
import "./SectionHeader.css";

interface SectionHeaderProps {
  icon: ReactNode;
  title: string;
  hasBtn: boolean;
}

function SectionHeader({
  icon,
  title,
  hasBtn,
}: SectionHeaderProps): JSX.Element {
  return (
    <div className="section-header mb-[1.6rem] xl:[2.4rem]">
      <div className="section-title">
        <span className="hidden xl:inline-block">{icon}</span>
        <h1
          className="
            caption-1
            xl:!font-bold xl:!text-[2.4rem] xl:!leading-[140%]
          "
        >
          {title}
        </h1>
      </div>

      <div className="flex-1 h-px bg-transparent xl:bg-[#d6d6d6]"></div>

      {hasBtn && (
        <div className="more-btn">
          <span
            className="
              caption-4
              xl:!font-medium xl:!text-[1.4rem] xl:!leading-[2.4rem]
            "
          >
            مشاهده بیشتر
          </span>
        </div>
      )}
    </div>
  );
}

export default SectionHeader;
