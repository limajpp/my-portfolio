import "./Hero.css";
import HeroImage from "./HeroImage/HeroImage";
import HeroText from "./HeroText/HeroText";
import HeroTextContainer from "./HeroText/HeroTextContainer/HeroTextContainer";

export default function Hero() {
  return (
    <div id="hero">
      <HeroTextContainer>
        <HeroText as="span" variant="greeting">
          Hey, I'm João Pedro 👋
        </HeroText>
        <HeroText as="h1" variant="title">
          Fullstack Developer
        </HeroText>
        <HeroText as="p" variant="description">
          I am a fullstack developer currently on an internship building lots of
          projects. Also, I'm on the 6th period of my Computer Science course at
          UNIFOR.
        </HeroText>
      </HeroTextContainer>
      <HeroImage
        imgSrc="src/public/imgs/profile-pic.png"
        imgAlt="My personal professional profile picture"
      />
    </div>
  );
}
