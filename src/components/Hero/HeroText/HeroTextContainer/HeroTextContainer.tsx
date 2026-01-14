import "./HeroTextContainer.css";
import type { ReactNode } from "react";

interface HeroTextContainerProps {
  children: ReactNode;
}

export default function HeroTextContainer({
  children,
}: HeroTextContainerProps) {
  return <div id="hero-text-container">{children}</div>;
}
