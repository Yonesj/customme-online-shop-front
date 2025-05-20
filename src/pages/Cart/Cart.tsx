import { type JSX } from "react";

import "./Cart.css";

import Header from "../../components/Header.tsx";
import NavBar from "../../components/NavBar.tsx";
import Stepper from "../../components/Stepper";
import CartItem from "../../components/CartItem";
import Invoice from "../../components/Invoice";
import Footer from "../../components/Footer.tsx";

import LocationIcon from "../../assets/icons/stepper/location.svg?react";
import CartIcon from "../../assets/icons/stepper/shopping-cart_bold.svg?react";
import PayIcon from "../../assets/icons/stepper/money-send.svg?react";
import ExclamationMarkIcon from "../../assets/icons/cart/info-circle.svg?react";

import ProductImg5 from "../../assets/images/product_card/product_image5.svg";

function Cart(): JSX.Element {
  const steps = [
    { info: "سبد خرید", icon: <CartIcon width="2.4rem" height="2.4rem" /> },
    {
      info: "اطلاعات آدرس",
      icon: <LocationIcon width="2.4rem" height="2.4rem" />,
    },
    { info: "پرداخت", icon: <PayIcon width="2.4rem" height="2.4rem" /> },
  ];

  return (
    <>
      <Header />
      <NavBar />

      <main className="px-[10.8rem]">
        <Stepper currentStepIndex={0} steps={steps} />

        <div className="content">
          <div className="cart-items-sct">
            <h2 className="body-2">سبد خرید</h2>

            <CartItem
              imagePath={ProductImg5}
              title="تیشرت سفید طرح دار"
              price="240000"
            />

            <CartItem
              imagePath={ProductImg5}
              title="تیشرت سفید طرح دار"
              price="240000"
            />
          </div>

          <aside>
            <Invoice />

            <div className="cart-warning-component">
              <ExclamationMarkIcon width="2.4rem" height="2.4rem" />

              <ul className="warnings body-5">
                <li>ارسال رایگان برای سفارش های بالای ۷۰۰.۰۰۰ تومن</li>
                <li>در صورت اتمام موجودی‌، کالاها از سبد خرید حذف میشوند.</li>
                <li>لطفا در طول مراحل خرید فیلتر شکن خود را خاموش کنید.</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Cart;
