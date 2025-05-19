import { type JSX, type ReactNode } from "react";
import "./Category.css";

interface CategoryProps {
  text: string;
  image: ReactNode;
}

function Category({ text, image }: CategoryProps): JSX.Element {
  return (
    <div className="category">
      <div className="product-img">{image}</div>
      <p className="category-text caption-1">{text}</p>
    </div>
  );
}

export default Category;
