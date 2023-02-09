import { Carousel } from "@mantine/carousel";
import { FaRegUser } from "react-icons/fa";
import { useDataContext } from "../utils/data.context";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Paper } from "@mantine/core";

export default function Feedback() {
  const { pageInfo } = useDataContext();
  const { title, reviews } = pageInfo?.feedbacks;
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <section className="flex flex-col w-full py-3">
      <hr className="opacity-20 mb-8" />
      <h2 className=" mb-8">{title}</h2>
      <Carousel
        sx={{ maxWidth: 350, flex: 1, height: "100%" }}
        plugins={[autoplay.current]}
        withControls={true}
        loop
        mx="auto"
        slideGap="xs"
        align="center">
        {reviews.map(({ id, name, feedback, avatar }, index) => (
          <Carousel.Slide key={id}>
            <Paper
              shadow={"xs"}
              className="flex flex-col justify-center mx-auto w-[290px]  dark:bg-dark  bg-white p-4 border-2">
              <div className="flex w-full gap-4 items-center mb-4">
                <span>
                  {avatar ? (
                    <img
                      src={avatar}
                      alt={name}
                      className="object-cover w-16 h-16 rounded-full"
                    />
                  ) : (
                    <div className="p-2 rounded-full dark:bg-btn-light bg-btn-dark w-14 h-14 flex items-center justify-center">
                      <FaRegUser size={22} className="text-white" />
                    </div>
                  )}
                </span>
                <strong className="text text-lg mb-2 w-full">{name}</strong>
              </div>
              <div className="flex flex-col items-end text-right mr-4">
                <p className="text-light">{feedback}</p>
              </div>
            </Paper>
            {/* {index !== reviews.length - 1 && <hr className="opacity-30" />} */}
          </Carousel.Slide>
        ))}
      </Carousel>
    </section>
  );
}
