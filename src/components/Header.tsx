import { NavLink } from "react-router-dom";
import { type JSX } from "react";

import LogoIcon from "../assets/icons/header/logoImg.svg?react";
import SearchIcon from "../assets/icons/header/search-normal.svg?react";
import ShoppingCartIcon from "../assets/icons/header/shopping-cart.svg?react";
import LoggingIcon from "../assets/icons/header/login.svg?react";

function Header(): JSX.Element {
  return (
    <header
      className="
        h-[10.4rem]
        flex items-center justify-between
        gap-[3.2rem]
        px-[10.8rem] py-[1.2rem]
        border-b border-[#f0f0f0]
      "
    >
      <figure>
        <NavLink to="/" end>
          <LogoIcon className="w-[18.9rem] h-auto block" />
        </NavLink>
      </figure>

      <div
        className="
          flex items-center justify-between
          w-[59.6rem] h-[4.8rem]
          border border-[#afafaf] rounded-[1.6rem]
          px-[1.2rem] bg-[#f8f8f8]
        "
      >
        <input
          type="search"
          placeholder="جستجو"
          className="
            flex-1
            body-4
            leading-[1.8rem]
            text-[#a72f3b] text-right
            bg-transparent border-none outline-none
            placeholder:text-[#a72f3b]
          "
        />
        <SearchIcon className="w-[2.4rem] h-[2.4rem]" />
      </div>

      <div className="flex items-center gap-[3.2rem]">
        <NavLink
          to="/users/login"
          className="
            flex items-center gap-[0.4rem]
            text-[#242424] no-underline
          "
        >
          <LoggingIcon className="w-[2.4rem] h-[2.4rem]" />
          <span className="button-2">ورود | ثبت نام</span>
        </NavLink>
        <NavLink
          to="/cart"
          className="
            flex items-center gap-[0.4rem]
            text-[#242424] no-underline
          "
        >
          <ShoppingCartIcon className="w-[2.4rem] h-[2.4rem]" />
          <span className="button-2">سبد خرید</span>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
