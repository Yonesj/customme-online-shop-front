import { type JSX, type ReactNode } from "react";
import "./ProductCard.css";

import FilledLoveIcon from "../../assets/icons/product_card/FilledLike.svg?react";
import LoveIcon from "../../assets/icons/product_card/Like.svg?react";
import GalleryIcon from "../../assets/icons/product_card/gallery.svg?react";

interface ProductCardProps {
  image: ReactNode;
  title: string;
  description: string;
  price?: number;
  isLiked: boolean;
}

function ProductCard({
  image,
  title,
  description,
  price,
  isLiked,
}: ProductCardProps): JSX.Element {
  return (
    <div
      className="
        product-card-box
        w-[15.2rem] gap-[1.2rem] p-[1.2rem]
        xl:w-[28.8rem] xl:gap-[1.6rem] xl:p-[1.6rem]
      "
    >
      {image}
      <div className="product-info">
        <div className="product-description">
          <div
            className="
              product-name caption-1
              xl:!font-bold xl:!text-[1.8rem] xl:!leading-[140%]
            "
          >
            <span>{title}</span>
            {isLiked ? (
              <FilledLoveIcon width="2.4rem" height="2.4rem" />
            ) : (
              <LoveIcon width="2.4rem" height="2.4rem" />
            )}
          </div>
          <span
            className="
              caption-2
              xl:!font-normal xl:!text-[1.4rem] xl:!leading-[180%]
            "
          >
            {description}
          </span>
        </div>

        {price ? (
          <div className="product-price heading-6 xl:!font-bold xl:!text-[2rem]   xl:!leading-[140%]">
            <span>{price}</span>
            <span>تومان</span>
          </div>
        ) : (
          <div className="add-to-gallery-btn px-[1.6rem] py-[0.4rem] xl:px-[2.4rem] xl:py-[0.8rem]">
            <GalleryIcon className="w-[1.6rem] h-[1.6rem] xl:w-[2.4rem] xl:h-[2.4rem]" />
            <span
              className="
                caption-4
                xl:!font-medium xl:!text-[1.4rem] xl:!leading-[2.4rem]
              "
            >
              افزودن به گالری
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
