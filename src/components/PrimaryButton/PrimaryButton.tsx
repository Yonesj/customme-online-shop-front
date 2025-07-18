import { type JSX, ReactNode } from "react";
import clsx from "clsx";

interface Props {
  text: string;
  icon?: ReactNode;
  className?: string;
}

function PrimaryButton({ text, icon, className }: Props): JSX.Element {
  return (
    <button
      className={clsx(
        "flex items-center justify-center gap-[0.4rem] text-[#FFF] bg-[#a72f3b] py-[0.8rem] px-[2.4rem] border-none rounded-[0.8rem]",
        className ?? "",
      )}
    >
      {icon}
      <span
        className="
          caption-4
          xl:!font-medium xl:!text-[1.4rem] xl:!leading-[2.4rem]
        "
      >
        {text}
      </span>
    </button>
  );
}

export default PrimaryButton;
