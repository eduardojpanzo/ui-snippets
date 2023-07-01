import { Sparkle } from "@phosphor-icons/react";
import "./header.css";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <div className="timeline-header">
      {title} <Sparkle />
    </div>
  );
}
