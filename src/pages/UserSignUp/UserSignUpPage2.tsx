import { type JSX } from "react";
import styles from "./UserSignUp.module.css";

import Stepper from "../../components/Stepper";
import Step1 from "../../assets/icons/stepper/user.svg?react";
import Step2 from "../../assets/icons/stepper/call.svg?react";
import SignUpImg2 from "../../assets/images/user_sign_up_img_pg2.svg";

function UserSignUp(): JSX.Element {
  const steps = [
    { info: "اطلاعات کاربر", icon: <Step1 width="2.4rem" height="2.4rem" /> },
    { info: "اطلاعات تماس", icon: <Step2 width="2.4rem" height="2.4rem" /> },
  ];

  return (
    <main>
      <Stepper currentStepIndex={1} steps={steps} />

      <h2 className="heading-6 color-[#b95962] px-[10.8rem] mb-[3.2rem]">
        فرم ثبت اطلاعات
      </h2>

      <div className={styles["form-section"]}>
        <form className={styles.form}>
          <div className={styles["form-group"]}>
            <label className="body-4">شماره موبایل</label>
            <input className="body-5" type="text" name="phone_number" />
          </div>

          <div className={styles["form-group"]}>
            <label className="body-4">شماره تلفن (همراه با کد شهر)</label>
            <input className="body-5" type="text" name="home_number" />
          </div>

          <div className={styles["form-group"]}>
            <label className="body-4">استان</label>
            <select className="body-5" name="state">
              <option>تهران</option>
            </select>
          </div>

          <div className={styles["form-group"]}>
            <label className="body-4">شهر</label>
            <select className="body-5" name="town">
              <option>تهران</option>
            </select>
          </div>

          <div className={styles["form-group"]}>
            <label className="body-4">کد پستی</label>
            <input className="body-5" type="text" name="post" />
          </div>

          <div className={`${styles["form-group"]} ${styles.address}`}>
            <label className="body-4">آدرس کامل</label>
            <input className="body-5" type="text" name="address" />
          </div>

          <div className={styles["form-footer"]}>
            <button className="button-2" type="submit">
              ثبت اطلاعات
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
