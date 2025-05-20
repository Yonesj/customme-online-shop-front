import { type JSX } from "react";

import "./CartItem.css";
import TruckIcon from "../../assets/icons/cart/truck-fast.svg?react";
import CloseIcon from "../../assets/icons/cart/close-square.svg?react";

interface CartItemProps {
  imagePath: string;
  title: string;
  price: string;
}

function CartItem({ imagePath, title, price }: CartItemProps): JSX.Element {
  return (
    <div className="cart-item">
      <div className="product-sct caption-4">
        <div className="product-detail">
          <CloseIcon width="2.4rem" height="2.4rem" />

          <img src={imagePath} alt="product image" />

          <div className="caption-1 flex justify-between w-[23.7rem] text-[#242424]">
            <span>{title}</span>
            <div>
              <span>{price}</span>
              <span>تومان</span>
            </div>
          </div>
        </div>

        <div className="product-count caption-1">
          <span>+</span>
          <div className="vertical-separator"></div>
          <span>1</span>
          <div className="vertical-separator"></div>
          <span>-</span>
        </div>
      </div>

      <div className="transition-detail">
        <TruckIcon width="2.4rem" height="2.4rem" />
        <span className="body-4">ارسال از ۳ روز آینده</span>
      </div>
    </div>
  );
}

export default CartItem;
