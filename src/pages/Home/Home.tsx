import { type JSX } from "react";

import "./Home.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Hero from "../../components/Hero";
import Category from "../../components/Category";
import SectionHeader from "../../components/SectionHeader";
import ProductCard from "../../components/ProductCard";
import DesignerProfileCard from "../../components/DesignerProfileCard";
import GiftBanner from "../../components/GiftBanner";
import CallToAction from "../../components/CallToAction";

import MedalIcon from "../../assets/icons/home/medal-star.svg?react";
import DiscountIcon from "../../assets/icons/home/discount-shape.svg?react";
import MostPopularSctHeaderIcon from "../../assets/icons/home/like-shapes.svg?react";
import StarIcon from "../../assets/icons/home/star.svg?react";
import BrushIcon from "../../assets/icons/home/brush2.svg?react";
import MyFavoriteSctHeaderIcon from "../../assets/icons/home/like_stc_icon.svg?react";
import LeftArrowIcon from "../../assets/icons/arrows/arrow-left.svg?react";

import CategoryImg1 from "../../assets/images/category/category_img1.svg";
import CategoryImg2 from "../../assets/images/category/category_img2.svg";
import CategoryImg3 from "../../assets/images/category/category_img3.svg";
import CategoryImg4 from "../../assets/images/category/category_img4.svg";
import CategoryImg5 from "../../assets/images/category/category_img5.png";
import CategoryImg6 from "../../assets/images/category/category_img6.svg";

import ProductImg1 from "../../assets/images/product_card/product_img1.svg";
import ProductImg4 from "../../assets/images/product_card/product_img4.svg";

import DiscountImg1 from "../../assets/images/discount_sct/discount_img1.svg";
import DiscountImg2 from "../../assets/images/discount_sct/discount_img2.svg";
import DiscountImg3 from "../../assets/images/discount_sct/discount_img3.svg";
import DiscountImg4 from "../../assets/images/discount_sct/discount_img4.svg";
import DiscountImg5 from "../../assets/images/discount_sct/discount_img5.svg";

import ProfileImg from "../../assets/images/prof_picture.svg";
import ShowCaseImg from "../../assets/images/designer_show_case.png";

import DadImg from "../../assets/images/gifts/dadi 1.svg";
import MomImg from "../../assets/images/gifts/mom 1.svg";

import InfoImg from "../../assets/images/new_designs_pic.svg";
import InfoImgMobile from "../../assets/images/new_designs_mobile.svg";

function Home(): JSX.Element {
  const categories = [
    {
      text: "قاب موبایل",
      image: (
        <img src={CategoryImg1} alt="قاب موبایل" className="category-img" />
      ),
    },
    {
      text: "کارت تبریک",
      image: (
        <img src={CategoryImg2} alt="کارت تبریک" className="category-img" />
      ),
    },
    {
      text: "اکسسوری",
      image: <img src={CategoryImg3} alt="اکسسوری" className="category-img" />,
    },
    {
      text: "لوازم تحریر",
      image: (
        <img src={CategoryImg4} alt="لوازم تحریر" className="category-img" />
      ),
    },
    {
      text: "لباس",
      image: <img src={CategoryImg5} alt="لباس" className="category-img" />,
    },
    {
      text: "دکور خانه",
      image: (
        <img src={CategoryImg6} alt="دکور خانه" className="category-img" />
      ),
    },
  ];

  return (
    <>
      <Header />
      <NavBar />

      {/*<div className="px-[3.2rem] xl:px-[10.8rem] w-[36rem] mx-auto xl:w-auto xl:mx-0">*/}
      <div className="xl:px-[10.8rem] w-[36rem] mx-auto xl:w-auto xl:mx-0">
        <Hero />

        {/* دسته بندی محصولات */}
        <div className="my-[3.2rem]">
          <SectionHeader
            icon={<MedalIcon width="4rem" height="4rem" />}
            title="دسته بندی محصولات"
            hasBtn={false}
          />

          <div className="flex align-center gap-[1.2rem] my-[1.6rem] xl:justify-between">
            {categories.map((item, index) => (
              <Category key={index} text={item.text} image={item.image} />
            ))}
          </div>
        </div>

        {/* پر فروش ترین ها */}
        <div className="mb-[2.4rem] xl:mb-[4.8rem]">
          <SectionHeader
            icon={<MedalIcon width="4rem" height="4rem" />}
            title="پر فروش ترین ها"
            hasBtn={true}
          />

          <div
            className="
              w-full mb-[3.2rem] grid gap-[2.4rem]
              grid-cols-2
              xl:grid-cols-4 xl:grid-row-2 xl:grid-flow-row
            "
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i, idx) => (
              <div key={i} className={idx >= 4 ? "hidden xl:block" : ""}>
                <ProductCard
                  key={i}
                  image={<img src={ProductImg4} alt="product_img4" />}
                  title="تیشرت زنانه"
                  description="دارای رنگبندی، قابل طراحی"
                  price="150000"
                />
              </div>
            ))}
          </div>
        </div>

        {/* فروش ویژه */}
        <div className="mb-[2.4rem] xl:mb-[4.8rem]">
          <SectionHeader
            icon={<DiscountIcon width="4rem" height="4rem" />}
            title="فروش ویژه"
            hasBtn={false}
          />

          <div
            className="
              w-full mb-[3.2rem] grid grid-cols-4 grid-rows-2
              gap-[1.2rem]
              xl:gap-[2.4rem]
            "
          >
            {[
              DiscountImg1,
              DiscountImg2,
              DiscountImg3,
              DiscountImg4,
              DiscountImg5,
            ].map((imgSource, index) => (
              <img
                key={index}
                src={imgSource}
                alt="discount image"
                className={`
                  w-full h-auto
                  ${index === 0 ? "col-span-2 row-span-2" : ""}
                `}
              />
            ))}
          </div>
        </div>

        {/* طرح های پرطرفدار */}
        <div className="mb-[2.4rem] xl:mb-[4.8rem]">
          <SectionHeader
            icon={<MostPopularSctHeaderIcon width="4rem" height="4rem" />}
            title="طرح های پرطرفدار"
            hasBtn={true}
          />

          <div
            className="
              w-full mb-[3.2rem] grid gap-[2.4rem]
              grid-cols-2
              xl:grid-cols-4 xl:grid-row-2 xl:grid-flow-row
            "
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i, idx) => (
              <div key={i} className={idx >= 4 ? "hidden xl:block" : ""}>
                <ProductCard
                  key={i}
                  image={<img src={ProductImg1} alt="product image" />}
                  title="کیف زنانه"
                  description="دارای رنگبندی، قابل طراحی"
                />
              </div>
            ))}
          </div>
        </div>

        {/* طراحان برتر */}
        <div className="mb-[2.4rem] xl:mb-[4.8rem]">
          <SectionHeader
            icon={<StarIcon width="4rem" height="4rem" />}
            title="طراحان برتر"
            hasBtn={false}
          />

          <div
            className="
              w-full mb-[3.2rem] grid gap-[2.4rem]
              grid-cols-2
              xl:grid-cols-4 xl:grid-row-2 xl:grid-flow-row
            "
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i, idx) => (
              <div key={i} className={idx >= 4 ? "hidden xl:block" : ""}>
                <DesignerProfileCard
                  key={i}
                  profileImg={
                    <img
                      src={ProfileImg}
                      alt="profile image"
                      className="
                        h-auto
                        w-[5.6rem]
                        xl:w-[8.2rem]
                      "
                    />
                  }
                  name="نگار زمانی"
                  showcases={[
                    <img src={ShowCaseImg} alt="show case 1" />,
                    <img src={ShowCaseImg} alt="show case 1" />,
                    <img src={ShowCaseImg} alt="show case 1" />,
                  ]}
                />
              </div>
            ))}
          </div>
        </div>

        <div
          className="
            mb-[4.8rem] flex items-center gap-[2.4rem]
            flex-col
            xl:flex-row
          "
        >
          <GiftBanner
            title="محصولات مناسب هدیه دادن به آقایان"
            imagePath={DadImg}
          />
          <GiftBanner
            title="محصولات مناسب هدیه دادن به خانم ها"
            imagePath={MomImg}
          />
        </div>

        <div className="mb-[2.4rem] xl:mb-[4.8rem]">
          <SectionHeader
            icon={<BrushIcon width="4rem" height="4rem" />}
            title="جدیدترین طرح های هفته"
            hasBtn={true}
          />

          <div
            className="
              w-full mb-[3.2rem] grid gap-[2.4rem]
              grid-cols-2
              xl:grid-cols-4 xl:grid-row-2 xl:grid-flow-row
            "
          >
            <img
              className="col-span-2 xl:hidden"
              src={InfoImgMobile}
              alt="information about designs"
            />
            <img
              className="hidden xl:block"
              src={InfoImg}
              alt="information about designs"
            />

            {[1, 2, 3, 4, 5, 6, 7].map((i, idx) => (
              <div key={i} className={idx >= 4 ? "hidden xl:block" : ""}>
                <ProductCard
                  key={i}
                  image={<img src={ProductImg4} alt="product_img4" />}
                  title="تیشرت زنانه"
                  description="دارای رنگبندی، قابل طراحی"
                  price="150000"
                />
              </div>
            ))}
          </div>
        </div>

        <CallToAction />

        {/* علاقمندی ها */}
        <div className="mb-[2.4rem] xl:mb-[4.8rem]">
          <SectionHeader
            icon={<MyFavoriteSctHeaderIcon width="4rem" height="4rem" />}
            title="علاقمندی ها"
            hasBtn={false}
          />

          <div
            className="
              w-full
              grid grid-cols-2 gap-[1.6rem]
              xl:flex xl:items-center xl:justify-between xl:relative
            "
          >
            {[1, 2, 3, 4].map((i) => (
              <ProductCard
                key={i}
                image={<img src={ProductImg4} alt="product_img4" />}
                title="تیشرت زنانه"
                description="دارای رنگبندی، قابل طراحی"
                price="150000"
                isLiked={true}
              />
            ))}

            <div
              className="
                home-left-btn
                hidden
                xl:flex
              "
            >
              <LeftArrowIcon
                width="24"
                height="24"
                style={{ stroke: "#86262f" }}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
