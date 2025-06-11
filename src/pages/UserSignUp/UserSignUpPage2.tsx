import { type JSX, useEffect } from "react";
import styles from "./UserSignUp.module.css";

import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { ProvinceOptions } from "../../enums/Province.ts";
import contactInfoService from "../../services/contactInfoServices";

import Stepper from "../../components/Stepper";
import Step1 from "../../assets/icons/stepper/user.svg?react";
import Step2 from "../../assets/icons/stepper/call.svg?react";
import SignUpImg2 from "../../assets/images/user_sign_up_img_pg2.svg";
import { CanceledError } from "axios";

interface RegisterContactInfoPayload {
  user: number;
  phone: string;
  home_number?: string;
  province: string;
  city: string;
  postal_code: string;
  address: string;
}

const iranianMobileRegex = /^09\d{9}$/; // Starts with 09, followed by 9 digits
const iranianHomePhoneRegex = /^0\d{2,3}\d{7,8}$/; // Starts with 0, city code (2-3 digits), then 7-8 digits
const iranianPostalCodeRegex = /^\d{10}$/; // 10 digits
const provinceEnumKeys: string[] = Object.keys(ProvinceOptions);

const contactSchema = z.object({
  phone: z.string().regex(iranianMobileRegex, "شماره موبایل نامعتبر است."),
  home_number: z
    .string()
    .regex(
      iranianHomePhoneRegex,
      "شماره تلفن ثابت نامعتبر است (همراه با کد شهر).",
    )
    .optional()
    .or(z.literal("")),
  province: z.enum(provinceEnumKeys),
  city: z.string().min(1, "لطفا شهر را انتخاب کنید."),
  postal_code: z
    .string()
    .regex(iranianPostalCodeRegex, "کد پستی باید ۱۰ رقمی باشد."),
  address: z.string().min(5, "آدرس کامل باید حداقل ۵ کاراکتر باشد."),
});

type ContactFormData = z.infer<typeof contactSchema>;

function UserSignUp(): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state?.userId as number | undefined;

  const steps = [
    { info: "اطلاعات کاربر", icon: <Step1 width="2.4rem" height="2.4rem" /> },
    { info: "اطلاعات تماس", icon: <Step2 width="2.4rem" height="2.4rem" /> },
  ];

  useEffect(() => {
    if (!userId) {
      console.error("User ID not found, redirecting to previous step.");
      toast.error("خطا: اطلاعات کاربر یافت نشد. لطفا از مرحله اول شروع کنید.");
      navigate("/users/sign-up");
    }
  }, [userId, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      phone: "",
      city: "",
      postal_code: "",
      address: "",
    },
  });

  const processContactForm: SubmitHandler<ContactFormData> = async (data) => {
    console.log("Contact form data:", data);
    if (!userId) {
      toast.error("خطا: شناسه کاربر برای ثبت اطلاعات تماس موجود نیست.");
      return;
    }

    const payload: RegisterContactInfoPayload = {
      ...data,
      user: userId,
      home_number: data.home_number === "" ? undefined : data.home_number,
    };

    const { request, cancel } = contactInfoService.registerContactInfo(payload);

    try {
      const response = await request;
      console.log("contact info registered successfully:", response.data);
      navigate("/");
    } catch (err) {
      if (err instanceof CanceledError) {
        console.log("Request canceled");
        return;
      }

      console.error("Sign up failed:", err);
      toast.error("اطلاعات تماس ثبت نشد. لطفا دوباره تلاش کنید.");
    }
  };

  return (
    <main>
      <Stepper currentStepIndex={1} steps={steps} />

      <h2 className="heading-6 color-[#b95962] px-[10.8rem] mb-[3.2rem]">
        فرم ثبت اطلاعات
      </h2>

      <div className={styles["form-section"]}>
        <form
          className={styles.form}
          onSubmit={handleSubmit(processContactForm)}
        >
          <div className={styles["form-group"]}>
            <label htmlFor="phone" className="body-4">
              شماره موبایل
            </label>
            <input
              {...register("phone")}
              className={`body-5 ${errors.phone ? styles["input-error"] : ""}`}
              type="tel"
              id="phone"
              placeholder="مثال: 09123456789"
              aria-invalid={errors.phone ? "true" : "false"}
            />
            {errors.phone && (
              <p role="alert" className={styles["error-message"]}>
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="home_number" className="body-4">
              شماره تلفن (همراه با کد شهر)
            </label>
            <input
              {...register("home_number")}
              className={`body-5 ${errors.home_number ? styles["input-error"] : ""}`}
              type="tel"
              id="home_number"
              placeholder="مثال: 02188776655"
              aria-invalid={errors.home_number ? "true" : "false"}
            />
            {errors.home_number && (
              <p role="alert" className={styles["error-message"]}>
                {errors.home_number.message}
              </p>
            )}
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="province" className="body-4">
              استان
            </label>
            <select
              {...register("province")}
              id="province"
              className={`body-5 ${errors.province ? styles["input-error"] : ""}`}
              aria-invalid={errors.province ? "true" : "false"}
            >
              <option value="">انتخاب کنید</option>
              {Object.entries(ProvinceOptions).map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
              ))}
            </select>
            {errors.province && (
              <p role="alert" className={styles["error-message"]}>
                {errors.province.message}
              </p>
            )}
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="city" className="body-4">
              شهر
            </label>
            <input
              {...register("city")}
              id="city"
              type="text"
              className={`body-5 ${errors.city ? styles["input-error"] : ""}`}
              aria-invalid={errors.city ? "true" : "false"}
            />
            {errors.city && (
              <p role="alert" className={styles["error-message"]}>
                {errors.city.message}
              </p>
            )}
          </div>

          <div className={styles["form-group"]}>
            <label className="body-4">کد پستی</label>
            <input
              {...register("postal_code")}
              className={`body-5 ${errors.postal_code ? styles["input-error"] : ""}`}
              type="text"
              id="postal_code"
              maxLength={10}
              placeholder="مثال: 1234567890"
              aria-invalid={errors.postal_code ? "true" : "false"}
            />
            {errors.postal_code && (
              <p role="alert" className={styles["error-message"]}>
                {errors.postal_code.message}
              </p>
            )}
          </div>

          <div className={`${styles["form-group"]} ${styles.address}`}>
            <label className="body-4">آدرس کامل</label>
            <input
              {...register("address")}
              className={`body-5 ${styles["address-textarea"]} ${errors.address ? styles["input-error"] : ""}`} // Add specific style for textarea if needed
              id="address"
              placeholder="خیابان، کوچه، پلاک، واحد"
              aria-invalid={errors.address ? "true" : "false"}
            />
            {errors.address && (
              <p role="alert" className={styles["error-message"]}>
                {errors.address.message}
              </p>
            )}
          </div>

          <div className={styles["form-footer"]}>
            <button className={styles["form-footer-btn"]} type="submit">
              <span className="button-2">ثبت اطلاعات</span>
            </button>
          </div>
        </form>

        <figure>
          <img src={SignUpImg2} alt="illustration" />
        </figure>
      </div>
    </main>
  );
}

export default UserSignUp;
