import { NavLink } from "react-router-dom";
import { type JSX } from "react";

import LogoIcon from "../../assets/icons/header/logoImg.svg?react";
import SearchIcon from "../../assets/icons/header/search-normal.svg?react";
import ShoppingCartIcon from "../../assets/icons/header/shopping-cart.svg?react";
import LoggingIcon from "../../assets/icons/header/login.svg?react";
import MenuIcon from "../../assets/icons/header/menu.svg?react";
import MobileLogoIcon from "../../assets/icons/header/LOGO-Mobile.svg?react";

function Header(): JSX.Element {
  return (
    <header
      className="
        flex items-center justify-between mx-auto
        w-[36rem] xl:w-[144rem]
        h-[4rem] xl:h-[10.4rem]
        gap-[1.6rem] xl:gap-[3.2rem]
        py-[4.8rem] xl:py-[1.2rem]
        xl:border-b xl:border-[#f0f0f0]
      "
    >
      <figure className="hidden xl:block">
        <NavLink to="/" end>
          <LogoIcon className="w-[18.9rem] h-auto block" />
        </NavLink>
      </figure>

      <figure className="block xl:hidden">
        <MenuIcon className="w-[2.4rem] h-[2.4rem]" />
      </figure>

      <div
        className="
          flex items-center justify-between
          border border-[#afafaf] rounded-[1.6rem]
          bg-transparent px-[1.2rem]
          w-full xl:w-[59.6rem]
          h-[3.2rem] xl:h-[4.8rem]
        "
      >
        <input
          type="search"
          placeholder="جستجو"
          className="
            flex-1
            body-4
            text-[#a72f3b] text-right
            bg-transparent border-none outline-none outline-hidden
            placeholder:text-[#a72f3b]
          "
        />
        <SearchIcon
          className="
            w-[1.6rem] xl:w-[2.4rem]
            h-[1.6rem] xl:h-[2.4rem]
          "
        />
      </div>

      <div className="hidden xl:flex items-center gap-[3.2rem]">
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

      <MobileLogoIcon className="w-[4rem] h-[4rem] xl:hidden" />
    </header>
  );
}

export default Header;
