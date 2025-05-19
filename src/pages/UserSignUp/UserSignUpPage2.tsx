import { type JSX } from "react";

import "./UserSignUp.css";

import Header from "../../components/Header.tsx";
import Stepper from "../../components/Stepper";
import Footer from "../../components/Footer.tsx";

import Step1 from "../../assets/icons/stepper/user.svg?react";
import Step2 from "../../assets/icons/stepper/call.svg?react";
import SignUpImg2 from "../../assets/images/user_sign_up_img_pg2.svg";

function UserSignUp(): JSX.Element {
  const steps = [
    { info: "اطلاعات کاربر", icon: <Step1 width="2.4rem" height="2.4rem" /> },
    { info: "اطلاعات تماس", icon: <Step2 width="2.4rem" height="2.4rem" /> },
  ];

  return (
    <>
      <Header />

      <main>
        <Stepper currentStepIndex={1} steps={steps} />

        <h2 className="heading-6">فرم ثبت اطلاعات</h2>

        <div className="form-section">
          <form className="form">
            <div className="form-group">
              <label className="body-4">شماره موبایل</label>
              <input className="body-5" type="text" name="phone_number" />
            </div>

            <div className="form-group">
              <label className="body-4">شماره تلفن (همراه با کد شهر)</label>
              <input className="body-5" type="text" name="home_number" />
            </div>

            <div className="form-group">
              <label className="body-4">استان</label>
              <select className="body-5" name="state">
                <option>تهران</option>
              </select>
            </div>

            <div className="form-group">
              <label className="body-4">شهر</label>
              <select className="body-5" name="town">
                <option>تهران</option>
              </select>
            </div>

            <div className="form-group">
              <label className="body-4">کد پستی</label>
              <input className="body-5" type="text" name="post" />
            </div>

            <div className="form-group address">
              <label className="body-4">آدرس کامل</label>
              <input className="body-5" type="text" name="address" />
            </div>

            <div className="form-footer">
              <button class="button-2" type="submit">
                ثبت اطلاعات
              </button>
            </div>
          </form>

          <figure>
            <img src={SignUpImg2} alt="illustration" />
          </figure>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default UserSignUp;
