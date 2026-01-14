import "./HeroImage.css";

interface HeroImage {
  imgSrc: string;
  imgAlt: string;
}

export default function HeroImage({ imgSrc, imgAlt }: HeroImage) {
  return <img id="hero-img" src={imgSrc} alt={imgAlt} />;
}
