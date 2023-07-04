import twitterLogo from "../assets/logo-twitter.svg";
import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  Pencil,
  User,
} from "@phosphor-icons/react";

import "./sidebar.css";
import { NavLink } from "react-router-dom";

const menuItems = [
  { to: "/", Icon: House, value: "Home" },
  { to: "/explore", Icon: Hash, value: "Explore" },
  { to: "/notification", Icon: Bell, value: "Notification" },
  { to: "/messages", Icon: Envelope, value: "Messages" },
  { to: "/bookmarks", Icon: BookmarkSimple, value: "Bookmarks" },
  { to: "/lista", Icon: FileText, value: "Lista" },
  { to: "/profile", Icon: User, value: "Profile" },
  { to: "/more", Icon: DotsThreeCircle, value: "More" },
];
export function SideBar() {
  return (
    <aside className="sidebar">
      <img className="logo" src={twitterLogo} alt="logo" />

      <nav className="main-navigation">
        {menuItems.map(({ value, Icon, to }) => (
          <NavLink key={value} to={to}>
            <Icon weight={"fill"} /> <span>{value}</span>
          </NavLink>
        ))}
      </nav>

      <button className="new-tweet" type="button">
        <Pencil />
        <span>Tweet</span>
      </button>
    </aside>
  );
}
