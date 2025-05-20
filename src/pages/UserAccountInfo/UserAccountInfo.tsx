import { type JSX } from "react";

import "./UserAccountInfo.css";

import Header from "../../components/Header.tsx";
import NavBar from "../../components/NavBar.tsx";
import UserProfileCard from "../../components/UserProfileCard";
import Footer from "../../components/Footer.tsx";
import ProfileImg from "../../assets/images/prof_picture.svg";

function UserAccountInfo(): JSX.Element {
  return (
    <>
      <Header />
      <NavBar />

      <main className="px-[10.8rem]">
        <h2 className="heading-3 mb-[1.6rem]">پروفایل</h2>

        <div className="container body-1">
          <UserProfileCard
            profilePicPath={ProfileImg}
            username="نگار زمانی"
            email="xxxxx@Yahoo.com"
            credit="100000"
            designsCount={45}
            ordersCount={70}
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
              <form className="form">
                <div className="form-group">
                  <label className="body-4">نام و نام خانوادگی</label>
                  <input className="body-5" type="text" name="full_name" />
                </div>

                <div className="form-group">
                  <label className="body-4">کد ملی</label>
                  <input className="body-5" type="text" name="national_id" />
                </div>

                <div className="form-group">
                  <label className="body-4">تحصیلات (اختیاری)</label>
                  <select className="body-5" name="education">
                    <option>انتخاب کنید</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="body-4">شغل (اختیاری)</label>
                  <select className="body-5" name="job">
                    <option>انتخاب کنید</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="body-4">تاریخ تولد</label>
                  <input
                    className="body-5"
                    type="text"
                    name="birthdate"
                    placeholder="مثال: ۱۳۸۳/۰۵/۰۱"
                  />
                </div>

                <div className="form-group">
                  <label className="body-4">آدرس ایمیل</label>
                  <input className="body-5" type="email" name="email" />
                </div>

                <div className="form-group">
                  <label className="body-4">کلمه عبور جدید</label>
                  <input className="body-5" type="password" name="password" />
                </div>

                <div className="form-group">
                  <label className="body-4">تکرار کلمه عبور جدید</label>
                  <input className="body-5" type="password" name="password" />
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
