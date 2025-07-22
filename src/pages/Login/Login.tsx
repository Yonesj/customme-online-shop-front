import { type JSX, useEffect } from "react";
import "./Login.css";

import { NavLink, useNavigate } from "react-router-dom";
import { z } from "zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PrimaryButton from "../../components/PrimaryButton";
import userService, { type LoginPayload } from "../../services/userServices";
import { toast } from "react-toastify";
import axios, { CanceledError } from "axios";
import { useAuth } from "../../context/AuthContext.tsx";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LoginImg from "../../assets/images/loginPhoto.svg";

const loginFormSchema = z.object({
  email: z.string().email("آدرس ایمیل نامعتبر است."),
  password: z.string().min(1, "کلمه عبور نمی‌تواند خالی باشد."),
});

type LoginFormData = z.infer<typeof loginFormSchema>;

function Login(): JSX.Element {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/my-profile/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const processForm: SubmitHandler<LoginFormData> = async (formData) => {
    const loginData: LoginPayload = {
      email: formData.email,
      password: formData.password,
    };

    const { request, cancel } = userService.login(loginData);

    try {
      const response = await request;
      const { access, refresh } = response.data;

      login(access, refresh);

      toast.success("ورود موفقیت آمیز بود!");
      navigate("/my-profile/dashboard");
    } catch (error) {
      if (error instanceof CanceledError) {
        console.log("Login request canceled");
        return;
      }

      console.error("Login failed:", error);

      if (axios.isAxiosError(error) && error.response) {
        const status = error.response.status;

        if (status === 400) {
          toast.error("اطلاعات وارد شده نامعتبر است. (خطای ۴۰۰)");
        } else {
          toast.error("خطایی در سرور رخ داد. لطفا بعدا تلاش کنید.");
        }
      } else {
        toast.error("خطا در ارتباط با سرور. اتصال اینترنت خود را بررسی کنید.");
      }
    }
  };

  return (
    <>
      <Header />

      <main className="flex px-[10.8rem]">
        <div className="color-[#242424] py-[7.2rem] px-[10.4rem] w-[68.6rem] flex flex-col items-center">
          <h4 className="heading-4 mb-[7.2rem]">به کاستومی خوش آمدید</h4>
          <p className="heading-6 color-[#434343] mb-[4.8rem]">
            ورود | ثبت نام
          </p>

          <form className="w-full" onSubmit={handleSubmit(processForm)}>
            <div className="w-full mb-[1.6rem]">
              <label
                className="body-4 mb-[0.4rem] color-[#cbcbcb] block"
                htmlFor="email"
                aria-invalid={errors.email ? "true" : "false"}
              >
                آدرس ایمیل
              </label>
              <input
                {...register("email")}
                className="body-5 w-full p-[0.8rem] border border-[#cbcbcb] rounded-[0.8rem]"
                id="email"
                type="email"
              />
              {errors.email && (
                <p role="alert" className="color-[#a72f3b] text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="w-full mb-[3.2rem]">
              <label
                className="body-4 mb-[0.4rem] color-[#cbcbcb] block"
                htmlFor="password"
              >
                کلمه عبور
              </label>
              <input
                {...register("password")}
                className="body-5 w-full p-[0.8rem] border border-[#cbcbcb] rounded-[0.8rem]"
                id="password"
                type="password"
                aria-invalid={errors.password ? "true" : "false"}
              />
              {errors.password && (
                <p role="alert" className="color-[#a72f3b] text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
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

      <Footer />
    </>
  );
}

export default Login;
