import twitterLogo from "./assets/logo-twitter.svg";
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

function App() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <img className="logo" src={twitterLogo} alt="logo" />

        <nav className="main-navigation">
          <a className="active" href="#">
            <House /> Home
          </a>
          <a href="#">
            <Hash /> Explore
          </a>
          <a href="#">
            <Bell /> Notification
          </a>
          <a href="#">
            <Envelope /> Messages
          </a>
          <a href="#">
            <BookmarkSimple /> Bookmarks
          </a>
          <a href="#">
            <FileText /> Lista
          </a>
          <a href="#">
            <User /> Profile
          </a>
          <a href="#">
            <DotsThreeCircle /> More
          </a>
        </nav>

        <button className="new-tweet" type="button">
          Tweet
        </button>
      </aside>

      <div className="content"></div>
    </div>
  );
}

export default App;
