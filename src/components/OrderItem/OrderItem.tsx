import { type JSX } from "react";

import "./OrderItem.css";
import ProcessIcon from "../../assets/icons/order_history/processing_icon.svg?react";
import BillIcon from "../../assets/icons/order_history/bill.svg?react";

interface OrderItemProps {
  createdAt: string;
  orderCode: string;
  totalCost: string;
  discount: string;
  orderImagePaths: string[];
}

function OrderItem({
  createdAt,
  orderCode,
  totalCost,
  discount,
  orderImagePaths,
}: OrderItemProps): JSX.Element {
  return (
    <div className="order">
      <div className="order-info body-3">
        <div className="order-state">
          <ProcessIcon className="w-[2.4rem] h-[2.4rem]" />
          <span>در حال پردازش</span>
        </div>

        <div className="order-details">
          <span className="order-label">{createdAt}</span>

          <div>
            <span className="order-label">کد سفارش </span>
            <span>{orderCode}</span>
          </div>

          <div>
            <span className="order-label">مبلغ </span>
            <span>{totalCost} تومان</span>
          </div>

          <div>
            <span className="order-label">تخفیف </span>
            <span>{discount} تومان</span>
          </div>
        </div>
      </div>

      <div className="order-pictures">
        {orderImagePaths.map((path) => (
          <img src={path} alt="order picture" />
        ))}
      </div>

      <div className="btn-container">
        <button className="view-order-btn border-none bg-transparent">
          <BillIcon className="w-[2.4rem] h-[2.4rem]" />
          <span className="button-2">مشاهده سفارش</span>
        </button>
      </div>
    </div>
  );
}

export default OrderItem;
