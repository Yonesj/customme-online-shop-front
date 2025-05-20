import { type JSX } from "react";

import "./Pagination.css";
import LeftArrowIcon from "../../assets/icons/arrows/arrow-left.svg?react";
import RightArrowIcon from "../../assets/icons/arrows/arrow-right.svg?react";

interface PaginationProps {
  currentPage: number;
}

function Pagination({ currentPage }: PaginationProps): JSX.Element {
  return (
    <div className="pagination-container">
      <button className="arrow-btn">
        <RightArrowIcon
          className="text-[#86262f]"
          width="2.4rem"
          height="2.4rem"
        />
      </button>

      <ul className="pagination-list body-3">
        <li className="page-item">۵۰</li>
        <li className="page-ellipsis" aria-hidden="true">
          …
        </li>
        <li className="page-item">۹</li>
        <li className="page-item">۸</li>
        <li className="page-item">۷</li>
        <li className="page-item">۶</li>
        <li className="page-item">۵</li>
        <li className="page-item">۴</li>
        <li className="page-item">۳</li>
        <li className="page-item page-selected">۲</li>
        <li className="page-item">۱</li>
      </ul>

      <button className="arrow-btn">
        <LeftArrowIcon
          className="text-[#86262f]"
          width="2.4rem"
          height="2.4rem"
        />
      </button>
    </div>
  );
}

export default Pagination;
