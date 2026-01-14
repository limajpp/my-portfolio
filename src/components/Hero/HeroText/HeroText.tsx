import { type ElementType, type HTMLAttributes, type ReactNode } from "react";
import "./HeroText.css";

interface HeroTextProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children: ReactNode;
  variant?: "greeting" | "title" | "description";
}

export default function HeroText({
  as: Tag = "p",
  children,
  className = "",
  variant,
  ...props
}: HeroTextProps) {
  const finalClass = `hero-text ${
    variant ? `hero-${variant}` : ""
  } ${className}`;

  return (
    <Tag className={finalClass} {...props}>
      {children}
    </Tag>
  );
}
