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
    <div className="section-header">
      <div className="section-title">
        {icon}
        <h1 className="heading-4">{title}</h1>
      </div>

      <div className="section-divider"></div>

      {hasBtn && (
        <div className="more-btn">
          <span className="button-2">مشاهده بیشتر</span>
        </div>
      )}
    </div>
  );
}

export default SectionHeader;
