import { type JSX, useEffect, useState } from "react";

import "./UserProfile.css";

import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import UserProfileCard from "../../components/UserProfileCard";
import ProductCard from "../../components/ProductCard";

import { useAuth } from "../../context/AuthContext.tsx";
import customerService from "../../services/customerServices.ts";
import productServices from "../../services/productServices.ts";
import { CanceledError } from "axios";

import ProfileImg from "../../assets/images/prof_picture.svg";
import OrderIcon1 from "../../assets/icons/my_orders_details/my_orders-detail_icon_1.svg?react";
import OrderIcon2 from "../../assets/icons/my_orders_details/my_orders-detail_icon_2.svg?react";
import OrderIcon3 from "../../assets/icons/my_orders_details/my_orders-detail_icon_3.svg?react";
import OrderIcon4 from "../../assets/icons/my_orders_details/my_orders-detail_icon_4.svg?react";
import OrderIcon5 from "../../assets/icons/my_orders_details/my_orders-detail_icon_5.svg?react";
import OrderIcon6 from "../../assets/icons/my_orders_details/my_orders-detail_icon_6.svg?react";
import LeftArrowIcon from "../../assets/icons/arrows/arrow-left.svg?react";
import ProductImg1 from "../../assets/images/product_card/product_img1.svg";

interface ProductCardInterface {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  price: number;
}

function UserProfile(): JSX.Element {
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
  const [orderDetails, setOrderDetails] = useState({
    current_count: 0,
    canceled_count: 0,
    completed_count: 0,
    gallery_count: 0,
    comment_count: 0,
  });
  const [likedProducts, setLikedProducts] = useState<ProductCardInterface[]>();

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }

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

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }

    const { request, cancel } = customerService.retrieveOrderDetails();

    request
      .then((res) => {
        setOrderDetails(res.data);
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

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }

    const { request, cancel } = productServices.retrieveLikedProducts();

    request
      .then((res) => {
        setLikedProducts(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) {
          console.log(
            "product fetch canceled by component unmount or new request",
          );
          return;
        }
        console.error("Failed to fetch profile:", err);
        setError(
          err.message ||
            "متاسفانه بارگذاری اطلاعات کالاهای مورد علاقه با مشکل مواجه شد.",
        );
      });

    return () => cancel();
  }, []);

  return (
    <>
      <div className="hidden xl:block">
        <Header />
        <NavBar />
      </div>

      <main className="w-[32rem] mx-auto xl:w-auto xl:px-[10.8rem]">
        <h2 className="heading-3 mb-[3.2rem] hidden xl:block">پروفایل</h2>

        <div
          className="
            body-1
            flex justify-start
            flex-col items-center
            xl:gap-[2rem] xl:mb-[10.8rem] xl:flex-row xl:items-start
          "
        >
          <UserProfileCard
            profilePicPath={profile.profile}
            username={profile.full_name}
            email={profile.email}
            credit={profile.credit}
            designsCount={profile.designs_count}
            ordersCount={profile.orders_count}
            selected="داشبورد"
          />

          <div
            className="
              w-[32rem] mx-auto
              xl:border xl:border-[#ededed] xl:rounded-[1.6rem] xl:w-full xl:mx-0
            "
          >
            <header
              className="
                border-b border-[#ededed] flex flex-col
                justify-between py-[2.4rem] gap-[2.4rem]
                xl:justify-start xl:gap-[3.2rem] xl:px-[3.2rem]
              "
            >
              <h4
                className="
                  heading-6
                  xl:!font-bold xl:!text-[2.4rem] xl:!leading-[140%]
                "
              >
                سفارشات من
              </h4>

              {/*<div className="body-2 my-order-details">*/}
              <div className="body-2 flex xl:items-stretch justify-between text-[#434343]">
                {/*<div className="my-orders-detail-col">*/}
                <div
                  className="
                    flex flex-col justify-center gap-[1.6rem]
                    xl:px-[4.8rem]
                  "
                >
                  <div className="order-detail">
                    <OrderIcon1 className="mt-[0.2rem] w-[2rem] h-[2rem] xl:w-[2.4rem] xl:h-[2.4rem]" />
                    <div>
                      <span className="body-4 xl:!font-normal xl:!text-[1.8rem] xl:!leading-[180%]">
                        {orderDetails.current_count} سفارش
                      </span>
                      <span className="caption-4 xl:!font-normal xl:!text-[1.2rem] xl:!leading-[180%]">
                        جاری
                      </span>
                    </div>
                  </div>

                  <div className="order-detail">
                    <OrderIcon2 className="mt-[0.2rem] w-[2rem] h-[2rem] xl:w-[2.4rem] xl:h-[2.4rem]" />
                    <div>
                      <span className="body-4 xl:!font-normal xl:!text-[1.8rem] xl:!leading-[180%]">
                        {orderDetails.comment_count} نظر
                      </span>
                      <span className="caption-4 xl:!font-normal xl:!text-[1.2rem] xl:!leading-[180%]">
                        ثبت شده
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#ededed] w-[1px] hidden xl:block"></div>

                <div
                  className="
                    flex flex-col justify-center gap-[1.6rem]
                    xl:px-[4.8rem]
                  "
                >
                  <div className="order-detail">
                    <OrderIcon3 className="mt-[0.2rem] w-[2rem] h-[2rem] xl:w-[2.4rem] xl:h-[2.4rem]" />
                    <div>
                      <span className="body-4 xl:!font-normal xl:!text-[1.8rem] xl:!leading-[180%]">
                        {orderDetails.completed_count} سفارش
                      </span>
                      <span className="caption-4 xl:!font-normal xl:!text-[1.2rem] xl:!leading-[180%]">
                        ارسال شده
                      </span>
                    </div>
                  </div>

                  <div className="order-detail">
                    <OrderIcon4 className="mt-[0.2rem] w-[2rem] h-[2rem] xl:w-[2.4rem] xl:h-[2.4rem]" />
                    <div>
                      <span className="body-4 xl:!font-normal xl:!text-[1.8rem] xl:!leading-[180%]">
                        {orderDetails.canceled_count} سفارش
                      </span>
                      <span className="caption-4 xl:!font-normal xl:!text-[1.2rem] xl:!leading-[180%]">
                        لغو شده
                      </span>
                    </div>
                  </div>
                </div>

                {/*<div className="vertical-separator"></div>*/}
                <div className="bg-[#ededed] w-[1px] hidden xl:block"></div>

                <div
                  className="
                    flex flex-col justify-center gap-[1.6rem]
                    xl:px-[4.8rem]
                  "
                >
                  <div className="order-detail">
                    <OrderIcon5 className="mt-[0.2rem] w-[2rem] h-[2rem] xl:w-[2.4rem] xl:h-[2.4rem]" />
                    <div>
                      <span className="body-4 xl:!font-normal xl:!text-[1.8rem] xl:!leading-[180%]">
                        {orderDetails.gallery_count} محصول
                      </span>
                      <span className="caption-4 xl:!font-normal xl:!text-[1.2rem] xl:!leading-[180%]">
                        در گالری
                      </span>
                    </div>
                  </div>

                  <div className="order-detail">
                    <OrderIcon6 className="mt-[0.2rem] w-[2rem] h-[2rem] xl:w-[2.4rem] xl:h-[2.4rem]" />
                    <div>
                      <span className="body-4 xl:!font-normal xl:!text-[1.8rem] xl:!leading-[180%]">
                        {orderDetails.gallery_count} محصول
                      </span>
                      <span className="caption-4 xl:!font-normal xl:!text-[1.2rem] xl:!leading-[180%]">
                        فیزیکی
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <div
              className="
                flex flex-col relative gap-[2.4rem] border-b border-[#ededed] py-[2.4rem] h-[40rem]
                xl:pr-[3.2rem] xl:h-[50rem]
              "
            >
              <div className="sub-section-header">
                <h4 className="heading-6 xl:!font-bold xl:!text-[2.4rem] xl:!leading-[140%]">
                  علاقه مندی های من
                </h4>
                <a
                  href="#"
                  className="button-2 text-[#a72f3b] py-[0.8rem] xl:px-[2.4rem]"
                >
                  مشاهده بیشتر
                </a>
              </div>

              <div className="products-row">
                {likedProducts?.map((product) => (
                  <ProductCard
                    key={product.id}
                    image={
                      <img src={product.thumbnail} alt="product thumbnail" />
                    }
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    isLiked={true}
                  />
                ))}

                {likedProducts?.length >= 3 && (
                  <button className="left-btn hidden xl:flex">
                    <LeftArrowIcon
                      width="2.4rem"
                      height="2.4rem"
                      stroke="#86262f"
                      stroke-width="0.3rem"
                    />
                  </button>
                )}
              </div>
            </div>

            <div
              className="
                flex flex-col relative gap-[2.4rem] border-b border-[#ededed] py-[2.4rem]
                xl:pr-[3.2rem] xl:h-[50rem]
              "
            >
              <div className="sub-section-header">
                <h4 className="heading-6 xl:!font-bold xl:!text-[2.4rem] xl:!leading-[140%]">
                  خرید های پرتکرار من
                </h4>
                <a
                  href="#"
                  className="button-2 text-[#a72f3b] py-[0.8rem] xl:px-[2.4rem]"
                >
                  مشاهده بیشتر
                </a>
              </div>

              <div className="products-row">
                {[1, 2, 3].map((i) => (
                  <ProductCard
                    key={i}
                    image={<img src={ProductImg1} alt="product_img4" />}
                    title="کیف زنانه"
                    description="دارای رنگبندی، قابل طراحی"
                    price="150000"
                    isLiked={false}
                  />
                ))}

                <button className="left-btn hidden xl:flex">
                  <LeftArrowIcon
                    width="2.4rem"
                    height="2.4rem"
                    stroke="#86262f"
                    stroke-width="0.3rem"
                  />
                </button>
              </div>
            </div>

            <div
              className="
                flex flex-col relative gap-[2.4rem] py-[2.4rem]
                xl:pr-[3.2rem] xl:pl-0 xl:h-[50rem]
              "
            >
              <div className="sub-section-header">
                <h4 className="heading-6 xl:!font-bold xl:!text-[2.4rem] xl:!leading-[140%]">
                  گالری من
                </h4>
                <a
                  href="#"
                  className="button-2 text-[#a72f3b] py-[0.8rem] xl:px-[2.4rem]"
                >
                  مشاهده بیشتر
                </a>
              </div>

              <div className="products-row">
                {[1, 2, 3].map((i) => (
                  <ProductCard
                    key={i}
                    image={<img src={ProductImg1} alt="product_img4" />}
                    title="کیف زنانه"
                    description="دارای رنگبندی، قابل طراحی"
                    isLiked={true}
                  />
                ))}

                <button className="left-btn hidden xl:flex">
                  <LeftArrowIcon
                    width="2.4rem"
                    height="2.4rem"
                    stroke="#86262f"
                    stroke-width="0.3rem"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer showAll={false} />
    </>
  );
}

export default UserProfile;
