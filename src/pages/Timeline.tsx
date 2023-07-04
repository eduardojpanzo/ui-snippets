import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

const initial = [
  "Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram:",
  "✅ npm start: De 32s para 400ms (sim, demorava 30s) ✅ npm build: De 120s para 22s",
  "Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥",
];

import "./timeline.css";

export default function Timeline() {
  const [tweets, setTweets] = useState(initial);
  const [newTweet, setNewTweet] = useState("");
  function createNewTweet(event: FormEvent) {
    event.preventDefault();

    setTweets([newTweet, ...tweets]);
    setNewTweet("");
  }
  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets]);
      setNewTweet("");
    }
  }

  return (
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/eduardopanzo.png" alt="João Panzo" />
          <textarea
            id="tweet"
            value={newTweet}
            placeholder="What's happening?"
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewTweet(event.target.value);
            }}
          />
        </label>

        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet) => (
        <Tweet key={tweet} content={tweet} />
      ))}
    </main>
  );
}
