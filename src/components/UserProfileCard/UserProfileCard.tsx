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
  selected: string;
}

function UserProfileCard({
  profilePicPath,
  username,
  email,
  credit,
  designsCount,
  ordersCount,
  selected,
}: UserProfileCardProps): JSX.Element {
  const sections = [
    {
      icon: <ListIcon1 width="2.4rem" height="2.4rem" />,
      title: "داشبورد",
    },
    {
      icon: <ListIcon2 width="2.4rem" height="2.4rem" />,
      title: "تاریخچه سفارشات",
    },
    {
      icon: <ListIcon3 width="2.4rem" height="2.4rem" />,
      title: "گالری",
    },
    {
      icon: <ListIcon4 width="2.4rem" height="2.4rem" />,
      title: "آدرس ها",
    },
    {
      icon: <ListIcon5 width="2.4rem" height="2.4rem" />,
      title: "دنبال‌شوندگان",
    },
    {
      icon: <ListIcon6 width="2.4rem" height="2.4rem" />,
      title: "اطلاعات حساب کاربری",
    },
    {
      icon: <ListIcon7 width="2.4rem" height="2.4rem" />,
      title: "خروج",
    },
  ];

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
        {sections.map((s, i) => {
          let classes = [styles["profile-sct"]];
          if (s.title === selected) {
            classes.push(styles["selected"]);
          }
          return (
            <div key={i} className={classes.join(" ")}>
              {s.icon}
              <span>{s.title}</span>
            </div>
          );
        })}
      </div>
    </aside>
  );
}

export default UserProfileCard;
