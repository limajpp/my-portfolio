import "./Hero.css";
import data from "../../public/utils/data";
import HeroImage from "./HeroImage/HeroImage";
import HeroText from "./HeroText/HeroText";
import HeroTextContainer from "./HeroText/HeroTextContainer/HeroTextContainer";

export default function Hero() {
  return (
    <div id="hero">
      <HeroTextContainer>
        <HeroText as="span" variant="greeting">
          {data.HeroText.heroPresentation}
        </HeroText>
        <HeroText as="h1" variant="title">
          {data.HeroText.heroOccupation}
        </HeroText>
        <HeroText as="p" variant="description">
          {data.HeroText.heroAbout}
        </HeroText>
      </HeroTextContainer>
      <HeroImage
        imgSrc="src/public/imgs/profile-pic.png"
        imgAlt="My personal professional profile picture"
      />
    </div>
  );
}
