import { type JSX, ReactNode } from "react";

interface Props {
  text: string;
  icon?: ReactNode;
}

function PrimaryButton({ text, icon }: Props): JSX.Element {
  return (
    <button
      className="
        flex items-center justify-center gap-[0.4rem] text-[#FFF] bg-[#a72f3b]
        py-[0.8rem] px-[2.4rem] border-none rounded-[0.8rem]"
    >
      {icon}
      <span className="button-2">{text}</span>
    </button>
  );
}

export default PrimaryButton;
