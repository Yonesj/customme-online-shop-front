import { type JSX } from "react";

import PrimaryButton from "./PrimaryButton.tsx";
import MagicPenIcon from "../assets/icons/magicpen.svg?react";

function NavBar(): JSX.Element {
  const navLinks: string[] = [
    "پوشاک",
    "لوازم خانه",
    "قاب موبایل",
    "اکسسوری",
    "مدرسه و اداره",
    "کارت و پوستر",
    "جشن و مهمونی",
  ];

  return (
    <nav
      className="
        flex items-center justify-between
        gap-[2.4rem]
        px-[10.8rem]
        py-[2.4rem] mb-[1.6rem]
      "
    >
      {/* Main call-to-action */}
      <PrimaryButton
        text={"خودت طراحیش کن!"}
        icon={<MagicPenIcon width="2.4rem" height="2.4rem" />}
      />

      {/* Navigation links */}
      <div
        className="
          flex items-center justify-between
          gap-[6.8rem]
          text-[#434343]
        "
      >
        {navLinks.map((item) => (
          <a href="#" className="body-3 px-[0.8rem] text-[#242424]">
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
