import { type JSX } from "react";

import "./Invoice.css";

import PrimaryButton from "../PrimaryButton";
import LeftArrowIcon from "../../assets/icons/arrows/arrow-left-2.svg?react";

function Invoice(): JSX.Element {
  return (
    <div className="invoice-component body-4">
      <div className="discount-sct">
        <h4 className="body-4">کد تخفیف</h4>

        <p className="caption-4">
          کد تخفیف کد معرف کارت هدیه خود را در زیر وارد کرده و دکمه ثبت رو بزنید
          تا در صورت داشتن اعتبار به سفارش شما اعمال شود
        </p>

        <div className="discount-field">
          <input type="text" />
          <div className="submit-discount-btn">
            <span className="button-2">ثبت</span>
          </div>
        </div>
      </div>

      <div className="invoice-details-sct">
        <div className="invoice-detail">
          <span>قیمت کالاها</span>
          <div className="price-tag">
            <span>240000</span>
            <span>تومان</span>
          </div>
        </div>

        <div className="invoice-detail">
          <span>مجموع تخفیف روی کالا ها</span>
          <div className="price-tag">
            <span>20000</span>
            <span>تومان</span>
          </div>
        </div>

        <div className="invoice-detail">
          <span>سود شما از خرید</span>
          <div className="price-tag">
            <span>30000</span>
            <span>تومان</span>
          </div>
        </div>

        <div className="invoice-detail">
          <span>هزینه ارسال</span>
          <div className="price-tag">
            <span>20000</span>
            <span>تومان</span>
          </div>
        </div>
      </div>

      <div className="submit-sct">
        <div className="invoice-detail">
          <span>جمع مبلغ قابل پرداخت</span>
          <div className="price-tag">
            <span>240000</span>
            <span>تومان</span>
          </div>
        </div>

        <PrimaryButton
          text="ثبت سفارش"
          icon={<LeftArrowIcon width="2.4rem" height="2.4rem" />}
        />
      </div>
    </div>
  );
}

export default Invoice;
