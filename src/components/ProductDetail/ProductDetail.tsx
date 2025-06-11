import { type JSX } from "react";
import { NavLink } from "react-router-dom";

import PrimaryButton from "../PrimaryButton.tsx";
import SecondaryButton from "../SecondaryButton";

import DownArrowIcon from "../../assets/icons/arrows/down_arrow.svg?react";
import SmallDownArrowIcon from "../../assets/icons/arrows/arrow-down.svg?react";
import MagicPenIcon from "../../assets/icons/magicpen.svg?react";
import ShoppingCartIcon from "../../assets/icons/header/shopping-cart.svg?react";

import ProductImgB from "../../assets/images/product_detail/product_img_big.svg";
import ProductImgS from "../../assets/images/product_detail/product_img_smaller.svg";

function ProductDetail(): JSX.Element {
  return (
    <div className="flex items-center justify-between mb-[4.8rem]">
      {/* Images */}
      <div className="flex items-start gap-[3.6rem] w-[67rem] ">
        <div className="flex flex-col items-start gap-[3.2rem] ">
          <img src={ProductImgS} alt="product image" />
          <img src={ProductImgS} alt="product image" />
          <img src={ProductImgS} alt="product image" />
          <img src={ProductImgS} alt="product image" />

          <DownArrowIcon
            className="self-center text-[#86262f]"
            width="4rem"
            height="4rem"
          />
        </div>

        <img src={ProductImgB} alt="product image" />
      </div>

      {/* Details */}
      <div className=" w-[52.2rem] flex flex-col items-start gap-[1.6rem] ">
        <header className="flex flex-col gap-[4rem] w-full">
          <h4 className="heading-4 text-[#86262f]">مشخصات محصول</h4>

          <div className="flex flex-col gap-[1.2rem] body-1 text-[#434343] ">
            <span>جنس: نخ، پلی استر</span>
            <span>شستشو: با دست</span>
            <span>سایز ها: S, M, L, XL, XXL, XXXL</span>
            <span>رنگ ها: مشکی، سفید، قرمز، سبز، نارنجی، زرشکی، بنفش</span>
            <span>قد: ۶۰ سانتی متر</span>
          </div>
        </header>

        <button
          type="button"
          className="flex items-center justify-center gap-[0.8rem] py-[0.8rem] px-[1.6rem] border border-[#86262f] rounded-[0.8rem] "
        >
          <span className="button-2">M</span>
          <SmallDownArrowIcon width="2.4rem" height="2.4rem" />
        </button>

        <div className="self-end w-[39.2rem] h-[14.6rem] flex flex-col items-end justify-between text-[#242424] ">
          <h4 className="heading-4">۱۲۷,۰۰۰ تومان</h4>

          <div className="flex items-center justify-between w-full">
            <SecondaryButton
              text="شخصی سازی محصول"
              icon={
                <MagicPenIcon
                  className="text-[#86262f]"
                  width="2.4rem"
                  height="2.4rem"
                />
              }
            />
            <NavLink to="/cart">
              <PrimaryButton
                text="افزودن به سبد"
                icon={
                  <ShoppingCartIcon
                    className="text-[#FFF]"
                    width="2.4rem"
                    height="2.4rem"
                  />
                }
              />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
