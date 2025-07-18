import { type JSX, type ReactNode } from "react";
import "./Category.css";

interface CategoryProps {
  text: string;
  image: ReactNode;
}

function Category({ text, image }: CategoryProps): JSX.Element {
  return (
    <div
      className="
        category
        w-[7rem] h-[7rem] p-[0.4rem] rounded-[0.8rem]
        xl:h-[12.8rem] xl:w-auto xl:p-[0.8rem] xl:rounded-[1.6rem]
      "
    >
      <div className="h-auto w-full">{image}</div>
      <p
        className="
          caption-4
          xl:!font-bold  xl:!text-[1.4rem] xl:!leading-[180%]
        "
      >
        {text}
      </p>
    </div>
  );
}

export default Category;
