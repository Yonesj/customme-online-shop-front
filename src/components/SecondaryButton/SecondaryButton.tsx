import { type JSX, ReactNode } from "react";

import "./SecondaryButton.css";

interface SecondaryButtonProps {
  text: string;
  icon?: ReactNode;
}

function SecondaryButton({ text, icon }: SecondaryButtonProps): JSX.Element {
  return (
    <button className="secondary-btn">
      {icon}
      <span className="button-2">{text}</span>
    </button>
  );
}
export default SecondaryButton;
