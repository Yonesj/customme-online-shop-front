import { type JSX } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import styles from "./UserSignUp.module.css";

import { EducationOptions } from "../../enums";
import { JobOptions } from "../../enums";

import Stepper from "../../components/Stepper";
import Step1 from "../../assets/icons/stepper/user.svg?react";
import Step2 from "../../assets/icons/stepper/call.svg?react";
import CalenderIcon from "../../assets/icons/calendar.svg?react";
import SignUpImg from "../../assets/images/designer_sign_up_img.svg";

const educationEnumKeys = Object.keys(EducationOptions);
const jobEnumKeys = Object.keys(JobOptions);

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

  const processForm = async (data: FormData) => {
    console.log("Form data submitted:", data);
  };

  return (
    <main>
      <Stepper currentStepIndex={0} steps={steps} />

      <h2 className="heading-6 color-[#b95962] px-[10.8rem] mb-[3.2rem]">
        فرم ثبت اطلاعات
      </h2>

      <div className={styles["form-section"]}>
        <form className={styles.form} onSubmit={handleSubmit(processForm)}>
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
              {Object.entries(EducationOptions).map(([value, displayName]) => (
                <option key={value} value={value}>
                  {displayName}
                </option>
              ))}
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
              <option value="">انتخاب کنید</option>
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

          <div className={styles["form-footer"]}>
            <button className={styles["form-footer-btn"]} type="submit">
              <span className="button-2"> مرحله بعدی</span>
            </button>
          </div>
        </form>

        <figure>
          <img src={SignUpImg} alt="illustration" />
        </figure>
      </div>
    </main>
  );
}

export default UserSignUp;
