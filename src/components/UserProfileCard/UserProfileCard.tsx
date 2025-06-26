import { type JSX } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import styles from "./UserProfileCard.module.css";

import { useAuth } from "../../context/AuthContext.tsx";

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
  credit: number;
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
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const sections = [
    {
      icon: <ListIcon1 width="2.4rem" height="2.4rem" />,
      title: "داشبورد",
      link: "/my-profile/dashboard",
    },
    {
      icon: <ListIcon2 width="2.4rem" height="2.4rem" />,
      title: "تاریخچه سفارشات",
      link: "/my-profile/orders",
    },
    {
      icon: <ListIcon3 width="2.4rem" height="2.4rem" />,
      title: "گالری",
      link: "#",
    },
    {
      icon: <ListIcon4 width="2.4rem" height="2.4rem" />,
      title: "آدرس ها",
      link: "#",
    },
    {
      icon: <ListIcon5 width="2.4rem" height="2.4rem" />,
      title: "دنبال‌شوندگان",
      link: "#",
    },
    {
      icon: <ListIcon6 width="2.4rem" height="2.4rem" />,
      title: "اطلاعات حساب کاربری",
      link: "/my-profile/info",
    },
  ];

  const handleLogout = () => {
    if (!isAuthenticated) {
      return;
    }

    try {
      logout();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <aside className={styles["profile-sidebar"]}>
      <div className={styles["top-prof"]}>
        <div className={styles.information}>
          <div className={styles["profile-picture"]}>
            <img src={profilePicPath} alt="profile picture" />
            <CameraIcon
              className={styles["camera-btn"]}
              width="4rem"
              height="4rem"
            />
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
          let classes = [
            "py-[0.8rem] flex justify-start items-center gap-[0.8rem] border-b border-b-solid",
          ];

          if (s.title === selected) {
            classes.push("text-[#b95962] border-b-[#b95962] stroke-[#b95962]");
          } else {
            classes.push("border-b-[#ededed]");
          }

          return (
            <NavLink className="text-[#656565]" to={s.link}>
              <div key={i} className={classes.join(" ")}>
                {s.icon}
                <span>{s.title}</span>
              </div>
            </NavLink>
          );
        })}

        <button
          onClick={() => handleLogout()}
          className="bg-transparent py-[0.8rem] flex justify-start items-center gap-[0.8rem] border-none"
        >
          <ListIcon7 width="2.4rem" height="2.4rem" />
          <span className="text-[#656565] body-1">خروج</span>
        </button>
      </div>
    </aside>
  );
}

export default UserProfileCard;
