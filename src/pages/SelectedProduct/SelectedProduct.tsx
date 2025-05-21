import { type JSX } from "react";

import "./SelectedProduct.css";

import NavBar from "../../components/NavBar.tsx";
import ProductDetail from "../../components/ProductDetail";
import Comment from "../../components/Comment";

import LikeIcon from "../../assets/icons/comment/like_btn.svg?react";
import ProductImgS from "../../assets/images/product_detail/product_img_smaller.svg";

function SelectedProduct(): JSX.Element {
  return (
    <>
      <NavBar />

      <main className="px-[10.8rem]">
        <div className="flex flex-col">
          <ProductDetail />

          <div className="comment-sct">
            <div className="overall-score-box">
              <h4 className="heading-4">امتیاز و دیدگاه کاربران</h4>

              <div className="overall-score">
                <span className="heading-4 score-field">۴.۱</span>
                <span className="heading-5">از ۵</span>
              </div>

              <div className="rating-info">
                <div className="stars-row">
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    className="fill-star"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 1.62978L9.90277 5.48522L10.0191 5.72094L10.2792 5.75874L14.534 6.37698L11.4552 9.37803L11.267 9.56151L11.3114 9.82059L12.0382 14.0581L8.23267 12.0574L8 11.9351L7.76733 12.0574L3.96178 14.0581L4.68858 9.82059L4.73301 9.56151L4.54478 9.37802L1.46603 6.37698L5.72076 5.75874L5.98089 5.72094L6.09723 5.48522L8 1.62978Z"
                      stroke="#F4B740"
                    />
                  </svg>

                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    className="fill-star"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 1.62978L9.90277 5.48522L10.0191 5.72094L10.2792 5.75874L14.534 6.37698L11.4552 9.37803L11.267 9.56151L11.3114 9.82059L12.0382 14.0581L8.23267 12.0574L8 11.9351L7.76733 12.0574L3.96178 14.0581L4.68858 9.82059L4.73301 9.56151L4.54478 9.37802L1.46603 6.37698L5.72076 5.75874L5.98089 5.72094L6.09723 5.48522L8 1.62978Z"
                      stroke="#F4B740"
                    />
                  </svg>

                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    className="fill-star"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 1.62978L9.90277 5.48522L10.0191 5.72094L10.2792 5.75874L14.534 6.37698L11.4552 9.37803L11.267 9.56151L11.3114 9.82059L12.0382 14.0581L8.23267 12.0574L8 11.9351L7.76733 12.0574L3.96178 14.0581L4.68858 9.82059L4.73301 9.56151L4.54478 9.37802L1.46603 6.37698L5.72076 5.75874L5.98089 5.72094L6.09723 5.48522L8 1.62978Z"
                      stroke="#F4B740"
                    />
                  </svg>

                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    className="fill-star"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 1.62978L9.90277 5.48522L10.0191 5.72094L10.2792 5.75874L14.534 6.37698L11.4552 9.37803L11.267 9.56151L11.3114 9.82059L12.0382 14.0581L8.23267 12.0574L8 11.9351L7.76733 12.0574L3.96178 14.0581L4.68858 9.82059L4.73301 9.56151L4.54478 9.37802L1.46603 6.37698L5.72076 5.75874L5.98089 5.72094L6.09723 5.48522L8 1.62978Z"
                      stroke="#F4B740"
                    />
                  </svg>

                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 1.62978L9.90277 5.48522L10.0191 5.72094L10.2792 5.75874L14.534 6.37698L11.4552 9.37803L11.267 9.56151L11.3114 9.82059L12.0382 14.0581L8.23267 12.0574L8 11.9351L7.76733 12.0574L3.96178 14.0581L4.68858 9.82059L4.73301 9.56151L4.54478 9.37802L1.46603 6.37698L5.72076 5.75874L5.98089 5.72094L6.09723 5.48522L8 1.62978Z"
                      stroke="#F4B740"
                    />
                  </svg>
                </div>
                <span className="body-4">از مجموع ۱۲۰ امتیاز</span>
              </div>

              <p className="body-4 comment-promp">نظر خود را ثبت کنید</p>

              <button className="secondary-btn">
                <span className="button-2">ثبت دیدگاه</span>
              </button>
            </div>

            <div className="comments">
              <header className="button-2">
                <div className="satisfaction-info">
                  <LikeIcon width="2.4rem" height="2.4rem" />
                  <span> ۷۰٪ ( ۱۲۰ نفر) از خرید این محصول رضایت داشته اند</span>
                </div>

                <div className="users-uploaded-imgs">
                  <img src={ProductImgS} alt="product image" />
                  <img src={ProductImgS} alt="product image" />
                  <img src={ProductImgS} alt="product image" />
                </div>

                <span>مشاهده بیشتر</span>
              </header>

              <Comment
                date="۱۶ آذر ۱۴۰۲"
                username="نگار زمانی"
                commentText="بسیار عالی و با کیفیت"
                stars={4}
                positiveProps={["خنک", "با کیفیت"]}
                negativeProps={["گران"]}
              />

              <Comment
                date="۱۶ آذر ۱۴۰۲"
                username="نگار زمانی"
                commentText="بسیار عالی و با کیفیت"
                stars={4}
                positiveProps={["خنک", "با کیفیت"]}
                negativeProps={["گران"]}
              />

              <Comment
                date="۱۶ آذر ۱۴۰۲"
                username="نگار زمانی"
                commentText="بسیار عالی و با کیفیت"
                stars={4}
                positiveProps={["خنک", "با کیفیت"]}
                negativeProps={["گران"]}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default SelectedProduct;
