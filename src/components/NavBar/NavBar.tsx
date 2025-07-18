import { type JSX, useEffect, useRef, useState } from "react";

import PrimaryButton from "../PrimaryButton/PrimaryButton.tsx";
import MagicPenIcon from "../../assets/icons/magicpen.svg?react";
import IphoneImg from "../../assets/images/iphone_img.svg";

interface NavBtn {
  text: string;
  clickHandler: () => void;
}

function NavBar(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showMobileCoverPopup, setShowMobileCoverPopup] = useState(false);

  const navButtons: NavBtn[] = [
    { text: "پوشاک", clickHandler: () => {} },
    { text: "لوازم خانه", clickHandler: () => {} },
    {
      text: "قاب موبایل",
      clickHandler: () => setShowMobileCoverPopup(true),
    },
    { text: "اکسسوری", clickHandler: () => {} },
    { text: "مدرسه و اداره", clickHandler: () => {} },
    { text: "کارت و پوستر", clickHandler: () => {} },
    { text: "جشن و مهمونی", clickHandler: () => {} },
  ];

  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setShowMobileCoverPopup(false);
      }
    }

    if (showMobileCoverPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMobileCoverPopup]);

  return (
    <nav
      className="
        hidden xl:flex items-center justify-between
        gap-[2.4rem]
        px-[10.8rem]
        py-[2.4rem] mb-[1.6rem]
        relative
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
        {navButtons.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveIndex(index);
              item.clickHandler();
            }}
            className={`
                body-3 px-[0.8rem] bg-transparent border-none
                transition-colors duration-200
                ${
                  activeIndex === index
                    ? "text-[#86262f]"
                    : "text-[#242424] hover:text-[#86262f]"
                }
              `}
          >
            {item.text}
          </button>
        ))}
      </div>

      {showMobileCoverPopup && (
        <div
          ref={popupRef}
          className="
            absolute z-10 top-[65%] left-[15%] p-[1.6rem] flex align-center gap-[1.6rem] bg-[#FFF]
            rounded-r-[0.8rem] rounded-l-[0.8rem]
          "
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="
                flex flex-col items-center h-[10.4rem] p-[0.4rem]
                transition-colors duration-400
                hover:border border-[#86262f] rounded-[0.4rem]
              "
            >
              <img src={IphoneImg} alt="phone cover image" />
              <span className="body-5 text-[#434343]">آیفون</span>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}

export default NavBar;
