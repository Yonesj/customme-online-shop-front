import { type JSX } from "react";

import styles from "./UserSignUp.module.css";

import Header from "../../components/Header";
import Stepper from "../../components/Stepper";
import Footer from "../../components/Footer";

import Step1 from "../../assets/icons/stepper/user.svg?react";
import Step2 from "../../assets/icons/stepper/call.svg?react";
import SignUpImg from "../../assets/images/designer_sign_up_img.svg";

function UserSignUp(): JSX.Element {
  const steps = [
    { info: "اطلاعات کاربر", icon: <Step1 width="2.4rem" height="2.4rem" /> },
    { info: "اطلاعات تماس", icon: <Step2 width="2.4rem" height="2.4rem" /> },
  ];

  return (
    <>
      <Header />

      <main>
        <Stepper currentStepIndex={0} steps={steps} />

        <h2 className="heading-6">فرم ثبت اطلاعات</h2>

        <div className={styles["form-section"]}>
          <form className={styles.form}>
            <div className={styles["form-group"]}>
              <label className="body-4">کد ملی</label>
              <input className="body-5" type="text" name="national_id" />
            </div>

            <div className={styles["form-group"]}>
              <label className="body-4">نام و نام خانوادگی</label>
              <input className="body-5" type="text" name="full_name" />
            </div>

            <div className={styles["form-group"]}>
              <label className="body-4">تحصیلات (اختیاری)</label>
              <select className="body-5" name="education">
                <option>انتخاب کنید</option>
              </select>
            </div>

            <div className={styles["form-group"]}>
              <label className="body-4">شغل (اختیاری)</label>
              <select className="body-5" name="job">
                <option>انتخاب کنید</option>
              </select>
            </div>

            <div className={styles["form-group"]}>
              <label className="body-4">آدرس ایمیل</label>
              <input className="body-5" type="email" name="email" />
            </div>

            <div className={styles["form-group"]}>
              <label className="body-4">کلمه عبور</label>
              <input className="body-5" type="password" name="password" />
            </div>

            <div className={styles["form-group"]}>
              <label className="body-4">تاریخ تولد</label>
              <input
                className="body-5"
                type="text"
                name="birthdate"
                placeholder="مثال: ۱۳۸۳/۰۵/۰۱"
              />
            </div>

            <div className={styles["form-footer"]}>
              <button className="button-2" type="submit">
                مرحله بعدی
              </button>
            </div>
          </form>

          <figure>
            <img src={SignUpImg} alt="illustration" />
          </figure>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default UserSignUp;
