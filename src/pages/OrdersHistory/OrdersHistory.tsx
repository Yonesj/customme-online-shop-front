import { type JSX, useEffect, useState } from "react";

import "./OrdersHistory.css";

import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import UserProfileCard from "../../components/UserProfileCard";
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
import { useAuth } from "../../context/AuthContext.tsx";
import customerService from "../../services/customerServices.ts";
import { CanceledError } from "axios";

function OrdersHistory(): JSX.Element {
  const [tab, setTab] = useState("pending");
  const currentOrders = [
    {
      createdAt: "3 شهریور 1402",
      orderCode: "354534521",
      totalCost: "545.000",
      discount: "545.000",
      orderImagePaths: [
        OrderImg1,
        OrderImg2,
        OrderImg3,
        OrderImg4,
        OrderImg5,
        OrderImg6,
        OrderImg7,
      ],
    },
    {
      createdAt: "3 شهریور 1402",
      orderCode: "354534521",
      totalCost: "545.000",
      discount: "545.000",
      orderImagePaths: [
        OrderImg1,
        OrderImg2,
        OrderImg3,
        OrderImg4,
        OrderImg5,
        OrderImg6,
        OrderImg7,
      ],
    },
  ];

  const { isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [profile, setProfile] = useState({
    profile: ProfileImg,
    full_name: "نگار زمانی",
    email: "xxxxx@Yahoo.com",
    credit: 100000,
    designs_count: 45,
    orders_count: 75,
  });

  useEffect(() => {
    const { request, cancel } = customerService.retrieveProfile();

    request
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) {
          console.log(
            "Profile fetch canceled by component unmount or new request",
          );
          return;
        }
        console.error("Failed to fetch profile:", err);
        setError(
          err.message || "متاسفانه بارگذاری اطلاعات پروفایل با مشکل مواجه شد.",
        );
      });

    return () => cancel();
  }, []);

  return (
    <>
      <Header />
      <NavBar />

      <main className="px-[10.8rem]">
        <h2 className="heading-3 mb-[1.6rem]">پروفایل</h2>

        <div className="order-history-container body-1">
          <UserProfileCard
            profilePicPath={profile.profile}
            username={profile.full_name}
            email={profile.email}
            credit={profile.credit}
            designsCount={profile.designs_count}
            ordersCount={profile.orders_count}
            selected="تاریخچه سفارشات"
          />

          <div className="profile-main-section">
            <header>
              <h4 className="heading-4">تاریخچه سفارشات</h4>
              <div className="body-3 tab-container">
                <span
                  className={tab === "pending" ? "selected" : ""}
                  onClick={() => setTab("pending")}
                >
                  جاری 0
                </span>
                <span
                  className={tab === "delivered" ? "selected" : ""}
                  onClick={() => setTab("delivered")}
                >
                  تحویل شده 26
                </span>
                <span>مرجوع شده 4</span>
                <span
                  className={tab === "canceled" ? "selected" : ""}
                  onClick={() => setTab("canceled")}
                >
                  لغو شده 4
                </span>
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
                    state={tab}
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
