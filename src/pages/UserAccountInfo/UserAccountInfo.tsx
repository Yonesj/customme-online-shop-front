import { type JSX, useEffect, useState } from "react";
import { CanceledError } from "axios";
import { useAuth } from "../../context/AuthContext.tsx";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import "./UserAccountInfo.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import UserProfileCard from "../../components/UserProfileCard";

import ProfileImg from "../../assets/images/prof_picture.svg";
import customerService from "../../services/customerServices.ts";
import userService from "../../services/userServices.ts";
import { EducationOptions } from "../../enums";
import { JobOptions } from "../../enums";
import { toast } from "react-toastify";

const educationEnumKeys = Object.keys(EducationOptions);
const jobEnumKeys = Object.keys(JobOptions);

const formatDateToYYYYMMDD = (date: Date): string => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};

interface UpdateAccountInfoPayload {
  full_name: string;
  national_id: string;
  education: string;
  job: string;
  email: string;
  birth_date: string;
  new_password?: string;
  retyped_password?: string;
}

const schema = z
  .object({
    full_name: z.string().min(3, "نام کامل حداقل باید ۳ کاراکتر باشد."),
    national_id: z
      .string()
      .regex(/^\d{10}$/, "کد ملی باید ۱۰ رقمی و فقط شامل اعداد باشد."),
    education: z.enum(educationEnumKeys).optional().or(z.literal("")),
    job: z.enum(jobEnumKeys).optional().or(z.literal("")),
    email: z.string().email("آدرس ایمیل نامعتبر است."),
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
    new_password: z
      .string()
      .min(8, "کلمه عبور جدید باید حداقل ۸ کاراکتر باشد.")
      .optional()
      .or(z.literal("")),
    retyped_password: z
      .string()
      .min(8, "تکرار کلمه عبور باید حداقل ۸ کاراکتر باشد.")
      .optional()
      .or(z.literal("")),
  })
  .refine(
    (data) => {
      if (data.new_password && data.new_password !== "") {
        return data.retyped_password === data.new_password;
      }
      return true;
    },
    {
      message: "کلمه عبور جدید و تکرار آن باید یکسان باشند.",
      path: ["retyped_password"],
    },
  )
  .refine(
    (data) => {
      if (
        data.retyped_password &&
        data.retyped_password !== "" &&
        (!data.new_password || data.new_password === "")
      ) {
        return false;
      }
      return true;
    },
    {
      message: "لطفا ابتدا کلمه عبور جدید را وارد کنید.",
      path: ["new_password"],
    },
  );

type AccountFormData = z.infer<typeof schema>;

function UserAccountInfo(): JSX.Element {
  const { isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [profile, setProfile] = useState({
    profile: ProfileImg,
    full_name: "نگار زمانی",
    email: "xxxxx@Yahoo.com",
    credit: 100000,
    designs_count: 45,
    orders_count: 75,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (!isAuthenticated) {
      setIsLoading(false);
      return;
    }
    const { request, cancel } = customerService.retrieveProfile();

    request
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) {
          console.log(
            "Profile fetch canceled by component unmount or new request",
          );
          return;
        }
        console.error("Failed to fetch profile:", err);
        setError(
          err.message || "متاسفانه بارگذاری اطلاعات پروفایل با مشکل مواجه شد.",
        );
      })
      .finally(() => setIsLoading(false));

    return () => cancel();
  }, [isAuthenticated]);

  useEffect(() => {
    const { request, cancel } = userService.retrieveAccountInfo();

    request
      .then((res) => {
        const accountData = res.data;

        reset({
          full_name: accountData.full_name,
          national_id: accountData.national_id,
          education: accountData.education || "",
          job: accountData.job || "",
          email: accountData.email,
          birth_date: accountData.birth_date,
          new_password: "",
          retyped_password: "",
        });
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        console.error("Failed to fetch account info:", err);
        toast.error("بارگذاری اطلاعات حساب با مشکل مواجه شد.");
      });

    return () => cancel();
  }, [isAuthenticated, reset]);

  const processAccountUpdate: SubmitHandler<AccountFormData> = async (
    formData,
  ) => {
    const payload: Partial<UpdateAccountInfoPayload> = {
      full_name: formData.full_name,
      national_id: formData.national_id,
      education: formData.education,
      job: formData.job,
      email: formData.email,
    };

    if (formData.birth_date) {
      payload.birth_date = formatDateToYYYYMMDD(formData.birth_date);
    }

    if (formData.new_password && formData.new_password !== "") {
      payload.new_password = formData.new_password;
      payload.retyped_password = formData.retyped_password;
    }

    console.log("Submitting update payload:", payload);

    try {
      const response = await userService.updateAccountInfo(
        payload as UpdateAccountInfoPayload,
      );

      console.log("Account info updated successfully:", response.data);
      toast.success("اطلاعات حساب با موفقیت بروزرسانی شد!");
    } catch (error) {
      console.error("Account update failed:", error);
      toast.error("بروزرسانی اطلاعات با خطا مواجه شد. لطفا دوباره تلاش کنید.");
    }
  };

  return (
    <>
      <Header />
      <NavBar />

      <main className="px-[10.8rem]">
        <h2 className="heading-3 mb-[1.6rem]">پروفایل</h2>

        <div className="container body-1">
          <UserProfileCard
            profilePicPath={profile.profile}
            username={profile.full_name}
            email={profile.email}
            credit={profile.credit}
            designsCount={profile.designs_count}
            ordersCount={profile.orders_count}
            selected="اطلاعات حساب کاربری"
          />

          <div className="profile-main-section">
            <header>
              <h4 className="heading-4">اطلاعات حساب کاربری</h4>
              <div className="body-3">
                <span className="selected">اطلاعات کاربری</span>
                <span>اطلاعات تماس</span>
              </div>
            </header>

            <div className="form-container">
              <form
                className="form"
                onSubmit={handleSubmit(processAccountUpdate)}
              >
                <div className="form-group">
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
                    <p role="alert" className="error-message">
                      {errors.full_name.message}
                    </p>
                  )}
                </div>

                <div className="form-group">
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
                    <p role="alert" className="error-message">
                      {errors.national_id.message}
                    </p>
                  )}
                </div>

                <div className="form-group">
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
                    <p role="alert" className="error-message">
                      {errors.education.message}
                    </p>
                  )}
                </div>

                <div className="form-group">
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
                    <p role="alert" className="error-message">
                      {errors.job.message}
                    </p>
                  )}
                </div>

                <div className="form-group">
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

                <div className="form-group">
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
                    <p role="alert" className="error-message">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label className="body-4" htmlFor="new_password">
                    کلمه عبور جدید
                  </label>
                  <input
                    {...register("new_password")}
                    className="body-5"
                    type="password"
                    id="new_password"
                    aria-invalid={errors.new_password ? "true" : "false"}
                  />
                  {errors.new_password && (
                    <p role="alert" className="error-message">
                      {errors.new_password.message}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label className="body-4" htmlFor="retyped_password">
                    تکرار کلمه عبور جدید
                  </label>
                  <input
                    {...register("retyped_password")}
                    className="body-5"
                    type="password"
                    id="retyped_password"
                  />
                  {errors.retyped_password && (
                    <p role="alert" className="error-message">
                      {errors.retyped_password.message}
                    </p>
                  )}
                </div>

                <div className="form-footer">
                  <button className="button-2" type="submit">
                    مرحله بعدی
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default UserAccountInfo;
