import { type JSX } from "react";

import "./OrdersHistory.css";

import Header from "../../components/Header.tsx";
import NavBar from "../../components/NavBar.tsx";
import UserProfileCard from "../../components/UserProfileCard";
import Footer from "../../components/Footer.tsx";
import OrderItem from "../../components/OrderItem";

import ProfileImg from "../../assets/images/prof_picture.svg";
import OrderImg1 from "../../assets/images/order_history/order_pic1.svg";
import OrderImg2 from "../../assets/images/order_history/order_pic2.svg";
import OrderImg3 from "../../assets/images/order_history/order_pic3.svg";
import OrderImg4 from "../../assets/images/order_history/order_pic4.svg";
import OrderImg5 from "../../assets/images/order_history/order_pic5.svg";
import OrderImg6 from "../../assets/images/order_history/order_pic6.svg";
import OrderImg7 from "../../assets/images/order_history/order_pic7.svg";
import OrdersNotFound from "../../assets/images/order_history/no_orders_found.svg";

function OrdersHistory(): JSX.Element {
  const currentOrders = [
    // {
    //   createdAt: "3 شهریور 1402",
    //   orderCode: "354534521",
    //   totalCost: "545.000",
    //   discount: "545.000",
    //   orderImagePaths: [
    //     OrderImg1,
    //     OrderImg2,
    //     OrderImg3,
    //     OrderImg4,
    //     OrderImg5,
    //     OrderImg6,
    //     OrderImg7,
    //   ],
    // },
    // {
    //   createdAt: "3 شهریور 1402",
    //   orderCode: "354534521",
    //   totalCost: "545.000",
    //   discount: "545.000",
    //   orderImagePaths: [
    //     OrderImg1,
    //     OrderImg2,
    //     OrderImg3,
    //     OrderImg4,
    //     OrderImg5,
    //     OrderImg6,
    //     OrderImg7,
    //   ],
    // },
  ];

  return (
    <>
      <Header />
      <NavBar />

      <main className="px-[10.8rem]">
        <h2 className="heading-3">پروفایل</h2>

        <div className="container body-1">
          <UserProfileCard
            profilePicPath={ProfileImg}
            username="نگار زمانی"
            email="xxxxx@Yahoo.com"
            credit="100000"
            designsCount={45}
            ordersCount={70}
            selected="تاریخچه سفارشات"
          />

          <div className="profile-main-section">
            <header>
              <h4 className="heading-4">تاریخچه سفارشات</h4>
              <div className="body-3">
                <span className="selected">جاری 0</span>
                <span>تحویل شده 26</span>
                <span>مرجوع شده 4</span>
                <span>لغو شده 4</span>
              </div>
            </header>

            {currentOrders.length === 0 && (
              <div className="not-found-img-container">
                <img src={OrdersNotFound} alt="orders not found" />
              </div>
            )}

            <div className="orders-container">
              {currentOrders.length > 0 &&
                currentOrders.map((order, i) => (
                  <OrderItem
                    createdAt={order.createdAt}
                    orderCode={order.orderCode}
                    totalCost={order.totalCost}
                    discount={order.discount}
                    orderImagePaths={order.orderImagePaths}
                  />
                ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default OrdersHistory;
