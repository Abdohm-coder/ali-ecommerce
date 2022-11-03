import { Carousel } from "@mantine/carousel";

function HeroCarousel() {
  return (
    <Carousel height={400} className="rounded-xl">
      <Carousel.Slide className="bg-red-400">1</Carousel.Slide>
      <Carousel.Slide className="bg-red-400">2</Carousel.Slide>
      <Carousel.Slide className="bg-red-400">3</Carousel.Slide>
    </Carousel>
  );
}

export default HeroCarousel;
