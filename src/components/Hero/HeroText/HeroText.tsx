import "./HeroText.css";

interface HeroTextProps {
  text: string;
}

export default function HeroText({ text }: HeroTextProps) {
  return <p id="hero-text">{text}</p>;
}
