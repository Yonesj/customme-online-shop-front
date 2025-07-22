import { type JSX } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { CanceledError } from "axios";
import { toast } from "react-toastify";

import userService, {
  type SignUpPayload,
} from "../../services/userServices.ts";

import styles from "./UserSignUp.module.css";

import { EducationOptions } from "../../enums";
import { JobOptions } from "../../enums";

import Header from "../../components/Header";
import Stepper from "../../components/Stepper";
import Footer from "../../components/Footer";

import Step1 from "../../assets/icons/stepper/user.svg?react";
import Step2 from "../../assets/icons/stepper/call.svg?react";
import CalenderIcon from "../../assets/icons/calendar.svg?react";
import SignUpImg from "../../assets/images/designer_sign_up_img.svg";
import RightArrowIcon from "../../assets/icons/arrows/arrow-right.svg?react";

const educationEnumKeys = Object.keys(EducationOptions);
const jobEnumKeys = Object.keys(JobOptions);

const formatDateToYYYYMMDD = (date: Date): string => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const schema = z.object({
  full_name: z.string().min(3, "نام کامل حداقل باید ۳ کاراکتر باشد."),
  national_id: z
    .string()
    .regex(/^\d{10}$/, "کد ملی باید ۱۰ رقمی و فقط شامل اعداد باشد."),
  education: z.enum(educationEnumKeys).optional().or(z.literal("")),
  job: z.enum(jobEnumKeys).optional().or(z.literal("")),
  email: z.string().email("آدرس ایمیل نامعتبر است."),
  password: z.string().min(8, "کلمه عبور باید حداقل ۸ کاراکتر باشد."),
  birth_date: z.coerce.date({
    errorMap: (issue, ctx) => {
      if (issue.code === z.ZodIssueCode.invalid_date) {
        return {
          message: "تاریخ تولد نامعتبر است. لطفا فرمت صحیح را وارد کنید.",
        };
      }
      return { message: ctx.defaultError };
    },
  }),
});

type FormData = z.infer<typeof schema>;

function UserSignUp(): JSX.Element {
  let navigate = useNavigate();
  const steps = [
    { info: "اطلاعات کاربر", icon: <Step1 width="2.4rem" height="2.4rem" /> },
    { info: "اطلاعات تماس", icon: <Step2 width="2.4rem" height="2.4rem" /> },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const processForm: SubmitHandler<FormData> = async (data) => {
    const formattedBirthDate = formatDateToYYYYMMDD(data.birth_date);
    const payload: SignUpPayload = {
      ...data,
      birth_date: formattedBirthDate,
      job: data.job || "NONE",
    };
    // console.log(payload);
    const { request, cancel } = userService.signUp(payload);

    try {
      const response = await request;
      console.log("Sign up successful:", response.data);
      navigate("/users/sign-up/complete", {
        state: { userId: response.data.id },
      });
    } catch (err) {
      if (err instanceof CanceledError) {
        console.log("Request canceled");
        return;
      }

      console.error("Sign up failed:", err);
      toast.error("ثبت نام با خطا مواجه شد. لطفا دوباره تلاش کنید.");
    }
  };

  return (
    <>
      <div className="hidden xl:block">
        <Header />
      </div>

      <div
        className="
          w-full flex items-center gap-[0.8rem] px-[3.2rem] py-[1.6rem] border-b-3 border-b-[#EDEDED]
          xl:hidden
        "
      >
        <NavLink to="/users/login">
          <RightArrowIcon width="2rem" height="2rem" />
        </NavLink>
        <span className="text-[#242424] body-5"> فرم ثبت نام</span>
      </div>

      <main>
        <Stepper currentStepIndex={0} steps={steps} />

        <h2
          className="
            hidden
            xl:block heading-6 color-[#b95962] px-[10.8rem] mb-[3.2rem]
          "
        >
          فرم ثبت اطلاعات
        </h2>

        <div
          className="
            flex
            flex-col
            xl:flex-row xl:justify-between xl:gap-[4.4rem] xl:px-[10.8rem] xl:mb-[4rem]
          "
        >
          <form
            className="
              flex flex-col items-center gap-[1.6rem] mb-[4rem] w-[28.8rem] mx-auto
              xl:grid xl:grid-cols-2 xl:gap-y-[1.4rem] xl:gap-x-[2.4rem] xl:w-[64.8rem]
              xl:border xl:border-[#ededed] xl:rounded-[0.8rem] xl:p-[2.4rem] xl:mx-0
            "
            onSubmit={handleSubmit(processForm)}
          >
            <div className={styles["form-group"]}>
              <label htmlFor="national_id" className="body-4">
                کد ملی
              </label>
              <input
                {...register("national_id")}
                className="body-5"
                type="text"
                id="national_id"
                aria-invalid={errors.national_id ? "true" : "false"}
              />
              {errors.national_id && (
                <p role="alert" className={styles["error-message"]}>
                  {errors.national_id.message}
                </p>
              )}
            </div>

            <div className={styles["form-group"]}>
              <label className="body-4" htmlFor="full_name">
                نام و نام خانوادگی
              </label>
              <input
                {...register("full_name")}
                className="body-5"
                type="text"
                id="full_name"
                aria-invalid={errors.full_name ? "true" : "false"}
              />
              {errors.full_name && (
                <p role="alert" className={styles["error-message"]}>
                  {errors.full_name.message}
                </p>
              )}
            </div>

            <div className={styles["form-group"]}>
              <label className="body-4" htmlFor="education">
                تحصیلات (اختیاری)
              </label>
              <select
                {...register("education")}
                className="body-5"
                id="education"
                aria-invalid={errors.education ? "true" : "false"}
              >
                <option value="">انتخاب کنید</option>
                {Object.entries(EducationOptions).map(
                  ([value, displayName]) => (
                    <option key={value} value={value}>
                      {displayName}
                    </option>
                  ),
                )}
              </select>
              {errors.education && (
                <p role="alert" className={styles["error-message"]}>
                  {errors.education.message}
                </p>
              )}
            </div>

            <div className={styles["form-group"]}>
              <label className="body-4" htmlFor="job">
                شغل (اختیاری)
              </label>
              <select
                {...register("job")}
                className="body-5"
                id="job"
                aria-invalid={errors.job ? "true" : "false"}
              >
                <option value="NONE">انتخاب کنید</option>
                {Object.entries(JobOptions).map(([value, displayName]) => (
                  <option key={value} value={value}>
                    {displayName}
                  </option>
                ))}
              </select>
              {errors.job && (
                <p role="alert" className={styles["error-message"]}>
                  {errors.job.message}
                </p>
              )}
            </div>

            <div className={styles["form-group"]}>
              <label className="body-4" htmlFor="email">
                آدرس ایمیل
              </label>
              <input
                {...register("email")}
                className="body-5"
                type="email"
                id="email"
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <p role="alert" className={styles["error-message"]}>
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className={styles["form-group"]}>
              <label className="body-4" htmlFor="password">
                کلمه عبور
              </label>
              <input
                {...register("password")}
                className="body-5"
                type="password"
                id="password"
                aria-invalid={errors.password ? "true" : "false"}
              />
              {errors.password && (
                <p role="alert" className={styles["error-message"]}>
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className={styles["form-group"]}>
              <label className="body-4" htmlFor="birth_date">
                تاریخ تولد
              </label>
              <input
                {...register("birth_date")}
                className="body-5"
                type="date"
                id="birth_date"
              />
            </div>

            <div
              className="
                self-end justify-self-end
                xl:row-[5] xl:col-[2]
              "
            >
              <button
                className="
                  inline-block text-[#FFF] bg-[#a72f3b] py-[0.8rem] border border-[#a72f3b] rounded-[0.8rem]
                  px-[2.4rem]
                  xl:px-[4rem]
                "
                type="submit"
              >
                <span className="button-2"> مرحله بعدی</span>
              </button>
            </div>
          </form>

          <figure
            className="
              h-auto
              w-[18.4rem] order-first self-center
              xl:w-[52rem] xl:order-last
            "
          >
            <img src={SignUpImg} alt="illustration" />
          </figure>
        </div>
      </main>

      <div className="hidden xl:block">
        <Footer />
      </div>
    </>
  );
}

export default UserSignUp;
