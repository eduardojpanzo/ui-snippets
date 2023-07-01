import twitterLogo from "../assets/logo-twitter.svg";
import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  User,
} from "@phosphor-icons/react";

import "./sidebar.css";

const menuItems = [
  { opt: "active", Icon: House, value: "Home" },
  { opt: "", Icon: Hash, value: "Explore" },
  { opt: "", Icon: Bell, value: "Notification" },
  { opt: "", Icon: Envelope, value: "Messages" },
  { opt: "", Icon: BookmarkSimple, value: "Bookmarks" },
  { opt: "", Icon: FileText, value: "Lista" },
  { opt: "", Icon: User, value: "Profile" },
  { opt: "", Icon: DotsThreeCircle, value: "More" },
];
export function SideBar() {
  return (
    <aside className="sidebar">
      <img className="logo" src={twitterLogo} alt="logo" />

      <nav className="main-navigation">
        {menuItems.map(({ value, Icon, opt }) => (
          <a key={value} className={opt} href="#">
            <Icon weight={opt === "active" ? "fill" : "thin"} /> {value}
          </a>
        ))}
      </nav>

      <button className="new-tweet" type="button">
        Tweet
      </button>
    </aside>
  );
}
