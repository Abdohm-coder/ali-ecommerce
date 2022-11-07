import HeroCarousel from "./carousel";
import { TbAward, TbComet } from "react-icons/tb";
import { Paper } from "@mantine/core";
import { useDataContext } from "../utils/data.context";

function Feautres() {
  const { pageInfo } = useDataContext();
  const { title, description, items_non_image, items_with_image, images } =
    pageInfo?.features;

  const miniFeatures = items_non_image.map(({ id, title }) => {
    return (
      <Paper
        key={id}
        shadow="xs"
        radius={6}
        className="flex flex-col w-40  items-center  h-32 overflow-hidden dark:bg-footer hover:scale-105 transition-transform">
        <div className="text-btn h-16 w-full grid place-items-center dark:bg-btn-dark bg-btn-light">
          <TbAward size={32} className="align-middle text-footer" />
        </div>
        <div className="flex-1 text-center p-2 ">
          <strong className=" text-light">{title}</strong>
        </div>
      </Paper>
    );
  });

  return (
    <section className="flex flex-col items-center">
      <Paper
        shadow="sm"
        radius={6}
        className="flex-col flex items-center dark:bg-dark p-4">
        <HeroCarousel images={images} withIndicators={true}></HeroCarousel>
        <div className="flex flex-col  items-center w-72">
          <TbComet size={96} className="text-btn-light mt-12 mb-4" />
          <h2 className="text-center">{title}</h2>
          <p className="text-center my-4">{description}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 w-full my-4">
          {miniFeatures}
        </div>
      </Paper>
      <div className="flex flex-col my-8">
        {items_with_image.map(({ id, title, image, description }) => (
          <Paper
            shadow="xs"
            radius={6}
            className="flex flex-col items-center justify-center text-center mb-8 bg-white overflow-hidden pb-4"
            key={id}>
            <div className="max-w-xs w-full h-auto object-cover mb-4 overflow-hidden ">
              <img
                src={image}
                alt={title}
                className="hover:scale-105 transition-transform scale-100"
              />
            </div>
            <div className="max-w-[260px] mx-auto">
              <strong className="text-btn-dark">{title}</strong>
              <p className="text-light">{description}</p>
            </div>
          </Paper>
        ))}
      </div>
      <hr className="opacity-20" />
    </section>
  );
}

export default Feautres;
