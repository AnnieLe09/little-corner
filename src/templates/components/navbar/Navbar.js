import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Favorite, Home, Feed } from "@mui/icons-material";
import { Card } from "@mui/material";
import "./Navbar.scss";
import styles from "../../../App.scss";

function NavbarItem({ icon, label, href }) {
  return (
    <a
      className="no-underline text-inherit hover:no-underline focus:no-underline"
      href={href}
    >
      <div className="flex flex-col items-center justify-center p-2">
        {icon}
        <div className={`text-${styles.peachColor}`}>{label}</div>
      </div>
    </a>
  );
}

export default function Navbar() {
  const menu = [
    { label: "Home", icon: <Home />, href: "/" },
    { label: "Favorites", icon: <Favorite />, href: "/" },
    { label: "Blogs", icon: <Feed />, href: "/" },
  ];
  return (
    <div className="flex justify-center glass-bg fixed bottom-[20px] left-1/2 -translate-x-1/2 w-fit !rounded-[10px] pr-3 pl-3">
      {menu.map((item) => (
        <NavbarItem
          key={item.label}
          label={item.label}
          icon={item.icon}
          href={item.href}
        />
      ))}
    </div>
  );
}
