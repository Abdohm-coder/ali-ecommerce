import HeroCarousel from "../components/carousel";
import OfferOptions from "../components/offer-options";
import Feautres from "../components/feautres";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import ReadMore from "../components/read-more";
import Feedback from "../components/feedback";
const images = [
  "https://images.unsplash.com/photo-1617294864710-bb97f05457f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1617294864705-eaf3c911259f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
];

const data = {
  reviews_number: 242,
  reviews_average: 2,
};

function Home() {
  return (
    <section className="flex flex-col space-y-8">
      <HeroCarousel images={images} withIndicators={true} />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-black dark:text-white mb-2 text-dark">
          وسادة نابوفا الطبية
        </h1>
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-1">
            {Array(5)
              .fill("")
              .map((_, index) => {
                let filled_stars = data.reviews_average - index;
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
          <strong className="text-center mt-2 text-light ">{`(${data.reviews_number}) ${data.reviews_average.toFixed(1)}`}</strong>
        </div>
      </div>
      <OfferOptions />
      <ReadMore />
      <Feautres />
      <Feedback />
    </section>
  );
}

export default Home;
