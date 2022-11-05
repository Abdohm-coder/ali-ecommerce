import HeroCarousel from "./carousel";
import { TbAward, TbComet } from "react-icons/tb";
import { Paper } from "@mantine/core";
import { useDataContext } from "../utils/data.context";

function Feautres() {
  const { assets } = useDataContext();
  const { title, description, items_non_image, items_with_image } =
    assets?.homepage?.features;
  const images = [
    "https://images.unsplash.com/photo-1625266008996-67bc5f9ffb40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    ,
    "https://images.unsplash.com/photo-1548484352-dc0b3cc1bca4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
  ];

  const miniFeatures = items_non_image.map(({ id, title }) => {
    return (
      <Paper
        key={id}
        shadow="xs"
        radius={6}
        className="flex items-center h-16 overflow-hidden dark:bg-footer">
        <div className="text-btn h-full w-16 grid place-items-center dark:bg-btn-dark bg-btn-light">
          <TbAward size={32} className="align-middle text-footer" />
        </div>
        <strong className="flex-1 text-center text-light">{title}</strong>
      </Paper>
    );
  });

  return (
    <section className="flex flex-col items-center">
      <HeroCarousel images={images} withIndicators={false}></HeroCarousel>
      <div>
        <div className="flex flex-col items-center w-72">
          <TbComet size={96} className="text-btn-light mt-12 mb-4" />
          <h2 className="text-center">{title}</h2>
          <p className="text-center my-4">{description}</p>
          {/* <span className="text-btn-dark font-semibold">
            ليست مجرد راحة، بل تحسين جودة النوم 💕
          </span> */}
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full my-4">{miniFeatures}</div>
      <div className="flex flex-col my-8">
        {
          items_with_image.map(({ id, title, image, description }) => (
            <div className="flex flex-col items-center justify-center text-center mb-8" key={id}>
              <img src={image} alt={title} className="max-w-xs w-full h-auto object-cover mb-6 rounded-xl"  />
              <div className="max-w-[260px] mx-auto">
                <strong className="text-btn-dark">{title}</strong>
                <p className="text-light">{description}</p>
              </div>
            </div>
          ))
        }
      </div>
      <hr className="opacity-20" />
    </section>
  );
}

export default Feautres;
