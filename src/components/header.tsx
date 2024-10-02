import { Github, Twitter } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="container mx-auto flex max-w-5xl items-center justify-between px-4 py-8">
      <Link href="/">
        <div className="text-xl">ui</div>
      </Link>
      <nav className="flex gap-6">
        <a
          href="https://twitter.com/eduardojpanzo"
          target="_blank"
          className="inline-flex"
        >
          <Twitter className="h-6 w-6 transition-colors" />
        </a>
        <a
          href="https://github.com/eduardojpanzo/ui-snippets"
          target="_blank"
          className="inline-flex"
        >
          <Github className="h-6 w-6 transition-colors" />
        </a>
      </nav>
    </header>
  );
}
