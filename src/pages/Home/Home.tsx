import { type JSX } from "react";

import "./Home.css";

import Header from "../../components/Header.tsx";
import NavBar from "../../components/NavBar.tsx";
import Hero from "../../components/Hero.tsx";
import Category from "../../components/Category";
import SectionHeader from "../../components/SectionHeader";
import ProductCard from "../../components/ProductCard";
import DesignerProfileCard from "../../components/DesignerProfileCard";
import GiftBanner from "../../components/GiftBanner";
import CallToAction from "../../components/CallToAction";
import Footer from "../../components/Footer.tsx";

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

      <div className="px-[10.8rem]">
        <Hero />

        {/* دسته بندی محصولات */}
        <div className="my-[3.2rem]">
          <SectionHeader
            icon={<MedalIcon width="4rem" height="4rem" />}
            title="دسته بندی محصولات"
            hasBtn={false}
          />

          <div className="category-grid">
            {categories.map((item, index) => (
              <Category key={index} text={item.text} image={item.image} />
            ))}
          </div>
        </div>

        {/* پر فروش ترین ها */}
        <div className="section-container">
          <SectionHeader
            icon={<MedalIcon width="4rem" height="4rem" />}
            title="پر فروش ترین ها"
            hasBtn={true}
          />

          <div className="grid-4x2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <ProductCard
                key={i}
                image={<img src={ProductImg4} alt="product_img4" />}
                title="تیشرت زنانه"
                description="دارای رنگبندی، قابل طراحی"
                price="150000"
              />
            ))}
          </div>
        </div>

        {/* فروش ویژه */}
        <div className="section-container">
          <SectionHeader
            icon={<DiscountIcon width="4rem" height="4rem" />}
            title="فروش ویژه"
            hasBtn={false}
          />

          <div className="grid-4x2">
            {[
              DiscountImg1,
              DiscountImg2,
              DiscountImg3,
              DiscountImg4,
              DiscountImg5,
            ].map((imgSource) => (
              <img
                className="discount-img"
                src={imgSource}
                alt="discount image"
              />
            ))}
          </div>
        </div>

        {/* طرح های پرطرفدار */}
        <div className="section-container">
          <SectionHeader
            icon={<MostPopularSctHeaderIcon width="4rem" height="4rem" />}
            title="طرح های پرطرفدار"
            hasBtn={true}
          />

          <div className="grid-4x2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <ProductCard
                key={i}
                image={<img src={ProductImg1} alt="product image" />}
                title="کیف زنانه"
                description="دارای رنگبندی، قابل طراحی"
              />
            ))}
          </div>
        </div>

        {/* طراحان برتر */}
        <div className="section-container">
          <SectionHeader
            icon={<StarIcon width="4rem" height="4rem" />}
            title="طراحان برتر"
            hasBtn={false}
          />

          <div className="grid-4x2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <DesignerProfileCard
                key={i}
                profileImg={<img src={ProfileImg} alt="profile image" />}
                name="نگار زمانی"
                showcases={[
                  <img src={ShowCaseImg} alt="show case 1" />,
                  <img src={ShowCaseImg} alt="show case 1" />,
                  <img src={ShowCaseImg} alt="show case 1" />,
                ]}
              />
            ))}
          </div>
        </div>

        <div className="gift-section">
          <GiftBanner
            title="محصولات مناسب هدیه دادن به آقایان"
            imagePath={DadImg}
          />
          <GiftBanner
            title="محصولات مناسب هدیه دادن به خانم ها"
            imagePath={MomImg}
          />
        </div>

        <div className="section-container">
          <SectionHeader
            icon={<BrushIcon width="4rem" height="4rem" />}
            title="جدیدترین طرح های هفته"
            hasBtn={true}
          />

          <div className="grid-4x2">
            <img src={InfoImg} alt="information about designs" />

            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <ProductCard
                key={i}
                image={<img src={ProductImg4} alt="product_img4" />}
                title="تیشرت زنانه"
                description="دارای رنگبندی، قابل طراحی"
                price="150000"
              />
            ))}
          </div>
        </div>

        <CallToAction />

        {/* علاقمندی ها */}
        <div className="section-container">
          <SectionHeader
            icon={<MyFavoriteSctHeaderIcon width="4rem" height="4rem" />}
            title="علاقمندی ها"
            hasBtn={false}
          />

          <div className="product-row">
            {[1, 2, 3, 4].map((i) => (
              <ProductCard
                key={i}
                image={<img src={ProductImg4} alt="product_img4" />}
                title="تیشرت زنانه"
                description="دارای رنگبندی، قابل طراحی"
                price="150000"
              />
            ))}

            <div className="left-btn">
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
