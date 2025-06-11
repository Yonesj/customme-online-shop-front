import { type JSX } from "react";
import "./Login.css";

import { NavLink } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton";
import LoginImg from "../../assets/images/loginPhoto.svg";

function Login(): JSX.Element {
  return (
    <main className="flex px-[10.8rem]">
      <div className="color-[#242424] py-[7.2rem] px-[10.4rem] w-[68.6rem] flex flex-col items-center">
        <h4 className="heading-4 mb-[7.2rem]">به کاستومی خوش آمدید</h4>
        <p className="heading-6 color-[#434343] mb-[4.8rem]">ورود | ثبت نام</p>

        <form className="w-full">
          <div className="w-full mb-[1.6rem]">
            <label
              className="body-4 mb-[0.4rem] color-[#cbcbcb] block"
              htmlFor="email"
            >
              آدرس ایمیل
            </label>
            <input
              className="body-5 w-full p-[0.8rem] border-[#cbcbcb] rounded-[0.8rem]"
              id="email"
              type="email"
            />
          </div>

          <div className="w-full mb-[3.2rem]">
            <label
              className="body-4 mb-[0.4rem] color-[#cbcbcb] block"
              htmlFor="password"
            >
              کلمه عبور
            </label>
            <input
              className="body-5 w-full p-[0.8rem] border-[#cbcbcb] rounded-[0.8rem]"
              id="password"
              type="password"
            />
          </div>

          <p className="caption-3 text-center mb-[3.2rem]">
            ورود و عضویت شما به منزله پذیرفتن قوانین و مقررات می باشد.
          </p>

          <PrimaryButton
            type="submit"
            text="ورود به سایت "
            className="w-full mb-[1.6rem]"
          />
        </form>

        <NavLink
          to="/users/sign-up"
          className="
            flex justify-center items-center py-[1.6rem] px-[0.8rem]
            text-[#a72f3b] no-underline
          "
        >
          <span className="button-2 color-[#a72f3b]">ثبت نام در سایت</span>
        </NavLink>
      </div>

      <figure className="w-full flex items-center justify-center">
        <img src={LoginImg} alt="login image" />
      </figure>
    </main>
  );
}

export default Login;
