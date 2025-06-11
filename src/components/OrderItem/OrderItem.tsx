import { type JSX } from "react";

import "./OrderItem.css";
import ProcessIcon from "../../assets/icons/order_history/processing_icon.svg?react";
import DeliveredIcon from "../../assets/icons/order_history/delivered.svg?react";
import CancelIcon from "../../assets/icons/order_history/canceled_icon.svg?react";
import BillIcon from "../../assets/icons/order_history/bill.svg?react";

// type OrderState = "pending" | "delivered" | "canceled";

interface OrderItemProps {
  state: string;
  createdAt: string;
  orderCode: string;
  totalCost: string;
  discount: string;
  orderImagePaths: string[];
}

const stateConfig: Record<string, { text: string; icon: JSX.Element }> = {
  pending: {
    text: "در حال پردازش",
    icon: <ProcessIcon className="w-[2.4rem] h-[2.4rem]" />,
  },
  delivered: {
    text: "تحویل شده",
    icon: <DeliveredIcon className="w-[2.4rem] h-[2.4rem]" />,
  },
  canceled: {
    text: "لغو شده",
    icon: <CancelIcon className="w-[2.4rem] h-[2.4rem]" />,
  },
};

function OrderItem({
  state,
  createdAt,
  orderCode,
  totalCost,
  discount,
  orderImagePaths,
}: OrderItemProps): JSX.Element {
  const { text, icon } = stateConfig[state];

  return (
    <div className="order">
      <div className="order-info body-3">
        <div className="order-state">
          {icon}
          <span>{text}</span>
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
