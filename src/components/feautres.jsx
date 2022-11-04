import HeroCarousel from "./carousel";
import { TbAward, TbComet } from "react-icons/tb";
import { Paper } from "@mantine/core";

function Feautres() {
  const images = [
    "https://images.unsplash.com/photo-1625266008996-67bc5f9ffb40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    ,
    "https://images.unsplash.com/photo-1548484352-dc0b3cc1bca4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
  ];

  let featuresContent = [
    "مناسبة للحساسية المفرطة",
    "🇪🇸 جودة إسبانية ممتازة",
    "مستخدمة في أرقى الفنادق",
  ];

  const miniFeatures = featuresContent.map((feature) => {
    return (
      <Paper
        shadow="xs"
        radius={6}
        className="flex items-center h-16 overflow-hidden bg-footer">
        <div className="text-btn h-full w-16 grid place-items-center bg-btn-dark">
          <TbAward size={32} className="align-middle text-footer" />
        </div>
        <p className="flex-1 text-center ">{feature}</p>
      </Paper>
    );
  });

  return (
    <section className="flex flex-col items-center">
      <HeroCarousel images={images} withIndicators={false}></HeroCarousel>
      <div>
        <div className="flex flex-col items-center w-72">
          <TbComet size={96} className="text-btn-light mt-12 mb-4" />
          <h2 className="text-center">مالذي يجعل وسادة لونوفو مميزة ؟</h2>
          <p className="text-center my-4">
            تتميز مادة المايكروفايبر بأنها ناعمة وداعمة في نفس الوقت، إذن فهي
            تحتضن الرأس والرقبة بلطف مع دعم عدم الضغط، ستنام بشكل مريح بغض النظر
            وعن وضعية نومك المفضلة.
          </p>
          <span className="text-btn-dark font-semibold">
            ليست مجرد راحة، بل تحسين جودة النوم 💕
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full my-4">{miniFeatures}</div>
    </section>
  );
}

export default Feautres;
