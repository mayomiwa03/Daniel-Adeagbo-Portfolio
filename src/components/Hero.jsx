import ThreeBackground from "./ThreeBackground";

import { HeroContainer, HeroContent } from "./Hero.styles";
import Header from "./Header";
import HeroBody from "./HeroBody";

function Hero() {
  return (
    <HeroContainer>
      <ThreeBackground />

      <HeroContent>
        <Header />
        <HeroBody />
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
