import { type JSX, useEffect, useState } from "react";

import "./UserProfile.css";

import NavBar from "../../components/NavBar.tsx";
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
      <NavBar />

      <main className="px-[10.8rem]">
        <h2 className="heading-3 px-[10.8rem] mb-[3.2rem]">پروفایل</h2>

        <div className="container body-1">
          <UserProfileCard
            profilePicPath={profile.profile}
            username={profile.full_name}
            email={profile.email}
            credit={profile.credit}
            designsCount={profile.designs_count}
            ordersCount={profile.orders_count}
            selected="داشبورد"
          />

          <div className="profile-main-sct">
            <header>
              <h4 className="heading-4">سفارشات من</h4>
              <div className="body-2 my-order-details">
                <div className="my-orders-detail-col">
                  <div className="order-detail">
                    <OrderIcon1 width="2.4rem" height="2.4rem" />
                    <div>
                      <span className="body-2">
                        {orderDetails.current_count} سفارش
                      </span>
                      <span className="body-5">جاری</span>
                    </div>
                  </div>

                  <div className="order-detail">
                    <OrderIcon2 width="2.4rem" height="2.4rem" />
                    <div>
                      <span className="body-2">
                        {orderDetails.comment_count} نظر
                      </span>
                      <span className="body-5">ثبت شده</span>
                    </div>
                  </div>
                </div>

                <div className="vertical-separator"></div>

                <div className="my-orders-detail-col">
                  <div className="order-detail">
                    <OrderIcon3 width="2.4rem" height="2.4rem" />
                    <div>
                      <span className="body-2">
                        {orderDetails.completed_count} سفارش
                      </span>
                      <span className="body-5">ارسال شده</span>
                    </div>
                  </div>

                  <div className="order-detail">
                    <OrderIcon4 width="2.4rem" height="2.4rem" />
                    <div>
                      <span className="body-2">
                        {orderDetails.canceled_count} سفارش
                      </span>
                      <span className="body-5">لغو شده</span>
                    </div>
                  </div>
                </div>

                <div className="vertical-separator"></div>

                <div className="my-orders-detail-col">
                  <div className="order-detail">
                    <OrderIcon5 width="2.4rem" height="2.4rem" />
                    <div>
                      <span className="body-2">
                        {orderDetails.gallery_count} محصول
                      </span>
                      <span className="body-5">در گالری</span>
                    </div>
                  </div>

                  <div className="order-detail">
                    <OrderIcon6 width="2.4rem" height="2.4rem" />
                    <div>
                      <span className="body-2">
                        {orderDetails.gallery_count} محصول
                      </span>
                      <span className="body-5">فیزیکی</span>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <div className="sub-section h-[50rem]">
              <div className="sub-section-header">
                <h4 className="heading-4">علاقه مندی های من</h4>
                <a href="#" className="button-2 more-info-btn">
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
                  <button className="left-btn">
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

            <div className="sub-section h-[50rem]">
              <div className="sub-section-header">
                <h4 className="heading-4">خرید های پرتکرار من</h4>
                <a href="#" className="button-2 more-info-btn">
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

                <button className="left-btn">
                  <LeftArrowIcon
                    width="2.4rem"
                    height="2.4rem"
                    stroke="#86262f"
                    stroke-width="0.3rem"
                  />
                </button>
              </div>
            </div>

            <div className="sub-section h-[50rem]">
              <div className="sub-section-header">
                <h4 className="heading-4">گالری من</h4>
                <a href="#" className="button-2 more-info-btn">
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

                <button className="left-btn">
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
    </>
  );
}

export default UserProfile;
