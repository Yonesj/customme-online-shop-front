import { type JSX } from "react";

import InstaIcon from "../assets/icons/footer/Instagram_icon.svg?react";
import FaceBookIcon from "../assets/icons/footer/facebook.svg?react";
import PinterestIcon from "../assets/icons/footer/Pinterest_icon.svg?react";
import YoutubeIcon from "../assets/icons/footer/YouTube_icon.svg?react";
import Certificate1 from "../assets/icons/footer/cert1.svg?react";
import Certificate2 from "../assets/icons/footer/cert2.svg?react";
import Certificate3 from "../assets/icons/footer/cert3.svg?react";

function Footer(): JSX.Element {
  const columns = [
    {
      title: "همراه با کاستومی",
      items: ["فروش محصولات", "فرصت همکاری", "تماس با ما", "نقشه سایت"],
    },
    {
      title: "خدمات مشتریان",
      items: ["سوالات متداول", "حریم خصوصی", "ثبت شکایت", "ضمانت نامه محصولات"],
    },
    {
      title: "راهنمای خرید",
      items: [
        "راهنمای ثبت سفارش",
        "شیوه های پرداخت",
        "نحوه ارسال سفارش ها",
        "شرایط بازگرداندن محصول",
      ],
    },
  ];

  return (
    <footer className="bg-[#a72f3b] text-[#FFF]">
      <div className="bg-[#641c23] h-[18rem] flex justify-between items-center gap-[2rem] px-[12rem]">
        <form className="h-[6.8rem] flex flex-col">
          <label className="body-5" htmlFor="email">
            برای دریافت آخرین اخبار و تخفیف های جدید،ایمیل خود را وارد نمایید
          </label>
          <div className="flex gap-[0.5rem] mt-[0.5rem]">
            <input
              className="
                body-5
                bg-[#641c23] text-white
                p-[0.5rem]
                rounded-[0.4rem]
                border border-white
                w-[40rem]
                placeholder:text-white
                outline-none
              "
              type="email"
              id="email"
              placeholder="ایمیل شما"
            />
            <button
              type="submit"
              className="
                py-[0.8rem] px-[2.4rem]
                bg-[#a72f3b] text-[#FFF]
                rounded-[0.8rem]
                border-none
                cursor-pointer
              "
            >
              ثبت
            </button>
          </div>
        </form>

        <div className="w-[33rem] flex flex-col items-center gap-[1.6rem]">
          <p className="body-5">ما را در شبکه های اجتماعی دنبال کنید</p>
          <div className="flex gap-[2.4rem]">
            {[InstaIcon, FaceBookIcon, PinterestIcon, YoutubeIcon].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="flex justify-center items-center h-[2.4rem] w-[2.4rem]"
                >
                  <Icon height="2.4rem" width="2.4rem" />
                </a>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="h-[28rem] px-[10.8rem] flex justify-between items-center gap-[2rem]">
        <div className="flex justify-between items-start gap-[15rem]">
          {columns.map((col, i) => (
            <div key={i}>
              <h4 className="caption-1 mb-[1.6rem] underline">{col.title}</h4>
              <ul className="list-none p-0 m-0">
                {col.items.map((li, j) => (
                  <li
                    key={j}
                    className="body-5 mb-[0.5rem] cursor-pointer transition-colors duration-300 hover:text-[#ffcccb]"
                  >
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="w-[36rem] flex flex-col justify-center items-center gap-[2.4rem]">
          <h3 className="heading-6">فروشگاه اینترنتی کاستومی</h3>
          <div className="flex gap-[1.6rem]">
            <p className="caption-4">تماس با پشتیبانی : 0000-345-021</p>
            <p className="caption-4">پاسخگویی 24 ساعته، 7 روز هفته</p>
          </div>
          <div className="flex items-center gap-[3.2rem]">
            <Certificate1 width="5.4rem" height="6.4rem" />
            <Certificate2 width="5.4rem" height="6.4rem" />
            <Certificate3 width="5.4rem" height="6.4rem" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="px-[10.8rem] pb-[1rem] text-[#ccc]">
        <p className="caption-4">
          تمام حقوق این وب‌سایت متعلق به فروشگاه آنلاین کاستومی می‌باشد
        </p>
      </div>
    </footer>
  );
}

export default Footer;
