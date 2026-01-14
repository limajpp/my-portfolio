import "./Hero.css";
import HeroText from "./HeroText/HeroText";
import HeroImage from "./HeroImage/HeroImage";
import HeroTextContainer from "./HeroText/HeroTextContainer/HeroTextContainer";
import data from "../../public/utils/data";

export default function Hero() {
  return (
    <div id="hero">
      <HeroTextContainer>
        {data.HeroText.map((paragraph, index) => {
          return <HeroText key={index} text={paragraph} />;
        })}
      </HeroTextContainer>
      <HeroImage
        imgSrc="src/public/imgs/profile-pic.png"
        imgAlt="My personal professional profile picture"
      />
    </div>
  );
}
