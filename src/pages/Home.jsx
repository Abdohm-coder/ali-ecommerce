import HeroCarousel from "../components/carousel";
import OfferOptions from "../components/offer-options";
import Feautres from "../components/feautres";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import ReadMore from "../components/read-more";
import Feedback from "../components/feedback";
import { useDataContext } from "../utils/data.context";
import Records from "../components/records";
import Loading from "../components/ui/Loading";

function Home() {
  const { pageInfo } = useDataContext();
  if (pageInfo && Object.keys(pageInfo).length === 0) return <Loading />;

  const { images, title } = pageInfo?.hero;
  const { reviews_average, reviews_number } = pageInfo?.feedbacks;

  return (
    <section className="layout">
      <div className="flex flex-col space-y-8">
        {images?.length > 0 && (
          <HeroCarousel images={images} withIndicators={true} isHero={true} />
        )}
        <div className="flex flex-col items-center justify-center">
          {title && title !== "" && (
            <h1 className="text-4xl font-black dark:text-white mb-2 text-dark">
              {title}
            </h1>
          )}
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-1">
              {reviews_average &&
                Array(5)
                  .fill("")
                  .map((_, index) => {
                    let filled_stars = reviews_average - index;
                    return (
                      <div key={`star: ${index}`}>
                        {filled_stars >= 1 ? (
                          <FaStar
                            key={filled_stars}
                            size={24}
                            fill={"#805ad5"}
                          />
                        ) : (
                          filled_stars > 0 && (
                            <FaStarHalfAlt
                              key={filled_stars}
                              size={24}
                              fill="#805ad5"
                            />
                          )
                        )}
                      </div>
                    );
                  })}
            </div>
            <strong className="text-center mt-2 text-light ">{`${reviews_average.toFixed(
              1
            )} (${reviews_number})`}</strong>
          </div>
        </div>
        {pageInfo?.product && Object.keys(pageInfo?.product)?.length > 0 && (
          <OfferOptions />
        )}
        {pageInfo?.records && Object.keys(pageInfo?.records)?.length > 0 && (
          <Records />
        )}
        <ReadMore />
        {pageInfo?.features &&
          Object.keys(pageInfo?.features)?.length > 0 &&
          pageInfo?.features?.has_features && <Feautres />}

        {pageInfo?.feedbacks &&
          Object.keys(pageInfo?.feedbacks)?.length > 0 &&
          pageInfo?.feedbacks?.has_feedbacks && <Feedback />}
      </div>
    </section>
  );
}

export default Home;
