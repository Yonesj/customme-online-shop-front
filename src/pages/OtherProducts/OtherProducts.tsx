import { type JSX } from "react";

import "./OtherProducts.css";

import NavBar from "../../components/NavBar.tsx";
import FilterPanel from "../../components/FilterPanel";
import ProductCard from "../../components/ProductCard";
import Pagination from "../../components/Pagination";

import ProductImg4 from "../../assets/images/product_card/product_img4.svg";

function OtherProducts(): JSX.Element {
  return (
    <>
      <NavBar />

      <main className="main-section content px-[10.8rem]">
        <FilterPanel />

        <div className="product-section">
          <div className="product-nav body-3">
            <ul>
              <li className="selected-tab">
                <a href="#">پربازدیدترین</a>
              </li>
              <li>
                <a href="#">جدیدترین</a>
              </li>
              <li>
                <a href="#">پرفروش ترین</a>
              </li>
              <li>
                <a href="#">گران ترین</a>
              </li>
              <li>
                <a href="#">ارزان ترین</a>
              </li>
            </ul>
          </div>

          <div className="product-grid">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
              <ProductCard
                key={i}
                image={<img src={ProductImg4} alt="product_img4" />}
                title="تیشرت زنانه"
                description="دارای رنگبندی، قابل طراحی"
                price="150000"
              />
            ))}
          </div>

          <Pagination currentPage={2} />
        </div>
      </main>
    </>
  );
}

export default OtherProducts;
