import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

function HeroCarousel({ images, withIndicators, isHero, height }) {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  const slides = images.map((url) => {
    return (
      <Carousel.Slide
        key={url}
        className={`${
          height ? `object-bottom  overflow-hidden ${height} ` : ""
        }`}>
        <img className="object-cover h-full w-[440px] " src={url}></img>
      </Carousel.Slide>
    );
  });

  return (
    <Carousel
      plugins={[autoplay.current]}
      height={400}
      loop
      color={"white"}
      controlSize={28}
      withControls={isHero ? true : false}
      withIndicators={withIndicators}
      draggable
      containScroll="keepSnaps"
      className={`rounded-xl overflow-hidden ${isHero ? "hero" : ""} ${
        height ? height + " mb-6" : ""
      }`}>
      {slides}
    </Carousel>
  );
}

export default HeroCarousel;
