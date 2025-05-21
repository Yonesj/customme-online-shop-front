import { type JSX } from "react";

import "./UserProfile.css";

import NavBar from "../../components/NavBar.tsx";
import UserProfileCard from "../../components/UserProfileCard";
import ProductCard from "../../components/ProductCard";

import ProfileImg from "../../assets/images/prof_picture.svg";
import OrderIcon1 from "../../assets/icons/my_orders_details/my_orders-detail_icon_1.svg?react";
import OrderIcon2 from "../../assets/icons/my_orders_details/my_orders-detail_icon_2.svg?react";
import OrderIcon3 from "../../assets/icons/my_orders_details/my_orders-detail_icon_3.svg?react";
import OrderIcon4 from "../../assets/icons/my_orders_details/my_orders-detail_icon_4.svg?react";
import OrderIcon5 from "../../assets/icons/my_orders_details/my_orders-detail_icon_5.svg?react";
import OrderIcon6 from "../../assets/icons/my_orders_details/my_orders-detail_icon_6.svg?react";
import ProductImg1 from "../../assets/images/product_card/product_img1.svg";

function UserProfile(): JSX.Element {
  return (
    <>
      <NavBar />

      <main className="px-[10.8rem]">
        <h2 className="heading-3 px-[10.8rem] mb-[3.2rem]">پروفایل</h2>

        <div className="container body-1">
          <UserProfileCard
            profilePicPath={ProfileImg}
            username="نگار زمانی"
            email="xxxxx@Yahoo.com"
            credit="100000"
            designsCount={45}
            ordersCount={70}
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
                      <span className="body-2">45 سفارش</span>
                      <span className="body-5">جاری</span>
                    </div>
                  </div>

                  <div className="order-detail">
                    <OrderIcon2 width="2.4rem" height="2.4rem" />
                    <div>
                      <span className="body-2">54 نظر</span>
                      <span className="body-5">ثبت شده</span>
                    </div>
                  </div>
                </div>

                <div className="vertical-separator"></div>

                <div className="my-orders-detail-col">
                  <div className="order-detail">
                    <OrderIcon3 width="2.4rem" height="2.4rem" />
                    <div>
                      <span className="body-2">45 سفارش</span>
                      <span className="body-5">ارسال شده</span>
                    </div>
                  </div>

                  <div className="order-detail">
                    <OrderIcon4 width="2.4rem" height="2.4rem" />
                    <div>
                      <span className="body-2">215 سفارش</span>
                      <span className="body-5">لغو شده</span>
                    </div>
                  </div>
                </div>

                <div className="vertical-separator"></div>

                <div className="my-orders-detail-col">
                  <div className="order-detail">
                    <OrderIcon5 width="2.4rem" height="2.4rem" />
                    <div>
                      <span className="body-2">10 محصول</span>
                      <span className="body-5">در گالری</span>
                    </div>
                  </div>

                  <div className="order-detail">
                    <OrderIcon6 width="2.4rem" height="2.4rem" />
                    <div>
                      <span className="body-2">28 محصول</span>
                      <span className="body-5">فیزیکی</span>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <div className="sub-section">
              <div className="sub-section-header">
                <h4 className="heading-4">علاقه مندی های من</h4>
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
                  />
                ))}

                <div className="left-btn">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.57 5.92993L3.5 11.9999L9.57 18.0699"
                      stroke-width="3"
                      stroke-miterlimit="20"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.5 12H3.67004"
                      stroke-width="3"
                      stroke-miterlimit="20"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="sub-section">
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
                  />
                ))}

                <div className="left-btn">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.57 5.92993L3.5 11.9999L9.57 18.0699"
                      stroke-width="3"
                      stroke-miterlimit="20"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.5 12H3.67004"
                      stroke-width="3"
                      stroke-miterlimit="20"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="sub-section">
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
                  />
                ))}

                <div class="left-btn">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.57 5.92993L3.5 11.9999L9.57 18.0699"
                      stroke-width="3"
                      stroke-miterlimit="20"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.5 12H3.67004"
                      stroke-width="3"
                      stroke-miterlimit="20"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default UserProfile;
