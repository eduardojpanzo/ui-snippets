import twitterLogo from "./assets/logo-twitter.svg";
import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  Sparkle,
  User,
} from "@phosphor-icons/react";
import Tweet from "./components/Tweet";

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

function App() {
  return (
    <div className="layout">
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

      <div className="content">
        <main className="timeline">
          <div className="timeline-header">
            Home <Sparkle />
          </div>

          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/eduardopanzo.png" alt="João Panzo" />
              <textarea id="tweet" placeholder="What's happening?" />
            </label>

            <button type="submit">Tweet</button>
          </form>

          <div className="separator"></div>

          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </main>
      </div>
    </div>
  );
}

export default App;
