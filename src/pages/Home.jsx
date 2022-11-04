import HeroCarousel from "../components/carousel";
import OfferOptions from "../components/offer-options";
import Feautres from "../components/feautres";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import ReadMore from "../components/read-more";
import Feedback from "../components/feedback";
import { useDataContext } from "../utils/data.context";

function Home() {
  const { assets } = useDataContext();
  const { images, title } = assets?.homepage?.hero;
  const { reviews_average, reviews_number } = assets?.homepage?.feedbacks;

  return (
    <section className="layout">
      <div className="flex flex-col space-y-8">
        <HeroCarousel images={images} withIndicators={true} />
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-black dark:text-white mb-2 text-dark">
            {title}
          </h1>
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-1">
              {Array(5)
                .fill("")
                .map((_, index) => {
                  let filled_stars = reviews_average - index;
                  return (
                    <>
                      {filled_stars >= 1 ? (
                        <FaStar key={filled_stars} size={24} fill={"#805ad5"} />
                      ) : (
                        filled_stars > 0 && (
                          <FaStarHalfAlt
                            key={filled_stars}
                            size={24}
                            fill="#805ad5"
                          />
                        )
                      )}
                    </>
                  );
                })}
            </div>
            <strong className="text-center mt-2 text-light ">{`${reviews_average.toFixed(
              1
            )} (${reviews_number})`}</strong>
          </div>
        </div>
        <OfferOptions />
        <ReadMore />
        <Feautres />
        <Feedback />
      </div>
    </section>
  );
}

export default Home;
