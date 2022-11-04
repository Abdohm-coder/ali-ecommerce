import { Carousel } from "@mantine/carousel";

function HeroCarousel({ images, withIndicators }) {
  const slides = images.map((url) => {
    return (
      <Carousel.Slide key={url}>
        <img className="object-cover h-full w-[440px] " src={url}></img>
      </Carousel.Slide>
    );
  });

  return (
    <Carousel
      height={400}
      loop
      withControls={false}
      color={"white"}
      withIndicators={withIndicators}
      draggable
      containScroll="keepSnaps"
      className="rounded-xl overflow-hidden">
      {slides}
    </Carousel>
  );
}

export default HeroCarousel;
