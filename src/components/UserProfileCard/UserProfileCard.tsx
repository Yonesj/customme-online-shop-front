import { type JSX } from "react";
import styles from "./UserProfileCard.module.css";

import CameraIcon from "../../assets/icons/user_profile/camera_icon.svg?react";
import ListIcon1 from "../../assets/icons/user_profile/prof_icon_1.svg?react";
import ListIcon2 from "../../assets/icons/user_profile/prof_icon_2.svg?react";
import ListIcon3 from "../../assets/icons/user_profile/prof_icon_3.svg?react";
import ListIcon4 from "../../assets/icons/user_profile/prof_icon_4.svg?react";
import ListIcon5 from "../../assets/icons/user_profile/prof_icon_5.svg?react";
import ListIcon6 from "../../assets/icons/user_profile/prof_icon_6.svg?react";
import ListIcon7 from "../../assets/icons/user_profile/prof_icon_7.svg?react";

interface UserProfileCardProps {
  profilePicPath: string;
  username: string;
  email: string;
  credit: string;
  designsCount: number;
  ordersCount: number;
}

function UserProfileCard({
  profilePicPath,
  username,
  email,
  credit,
  designsCount,
  ordersCount,
}: UserProfileCardProps): JSX.Element {
  return (
    <aside className={styles["profile-sidebar"]}>
      <div className={styles["top-prof"]}>
        <div className={styles.information}>
          <div className={styles["profile-picture"]}>
            <img src={profilePicPath} alt="profile picture" />
            <CameraIcon width="4rem" height="4rem" />
          </div>

          <span>{username}</span>
          <span>{email}</span>
        </div>

        <div>
          <div className={styles.dashbord}>
            <span>اعتبار خرید</span>
            <span>{credit} تومان</span>
          </div>
          <div className={styles.dashbord}>
            <span>تعداد طرح ها</span>
            <span>{designsCount}</span>
          </div>
          <div className={styles.dashbord}>
            <span>تعداد سفارش ها</span>
            <span>{ordersCount}</span>
          </div>
        </div>
      </div>

      <div className={styles["sections"]}>
        <div className={`${styles["profile-sct"]} ${styles.selected}`}>
          <ListIcon1 width="2.4rem" height="2.4rem" />
          <span>داشبورد</span>
        </div>

        <div className={styles["profile-sct"]}>
          <ListIcon2 width="2.4rem" height="2.4rem" />
          <span>تاریخچه سفارشات</span>
        </div>

        <div className={styles["profile-sct"]}>
          <ListIcon3 width="2.4rem" height="2.4rem" />
          <span>گالری</span>
        </div>

        <div className={styles["profile-sct"]}>
          <ListIcon4 width="2.4rem" height="2.4rem" />
          <span>آدرس ها</span>
        </div>

        <div className={styles["profile-sct"]}>
          <ListIcon5 width="2.4rem" height="2.4rem" />
          <span>دنبال‌شوندگان</span>
        </div>

        <div className={styles["profile-sct"]}>
          <ListIcon6 width="2.4rem" height="2.4rem" />
          <span>اطلاعات حساب کاربری</span>
        </div>

        <div className={styles["profile-sct"]}>
          <ListIcon7 width="2.4rem" height="2.4rem" />
          <span>خروج</span>
        </div>
      </div>
    </aside>
  );
}

export default UserProfileCard;
