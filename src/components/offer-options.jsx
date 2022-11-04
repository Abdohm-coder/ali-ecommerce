import { useState } from "react";
import { Link } from "react-router-dom";
import Badge from "../utils/badge";
import { useDataContext } from "../utils/data.context";
import { ROUTES } from "../utils/routes";
import OfferOption from "./offer-option";

export default function OfferOptions() {
  const { order, setOrder, assets } = useDataContext();
  const { offer_options, product_name } = assets?.homepage?.product;

  const [activeOffer, setOffer] = useState(1);

  const handleSubmitOffer = () => {
    setOrder(() => ({
      product_name,
      order_details: offer_options[activeOffer],
      permission: ROUTES.CUSTOMER_INFO,
    }));
  };

  return (
    <section className="w-full">
      <div className="max-w-[250px] mx-auto text-center mb-6">
        <p className="text-light">{assets?.homepage?.offer_script}</p>
      </div>
      <div className="flex flex-col space-y-3 dark:bg-footer bg-white rounded-xl p-3">
        {offer_options.map((option, index) => (
          <OfferOption
            key={option.id}
            active={activeOffer}
            index={index}
            changeOffer={setOffer}
            {...option}
          />
        ))}
        <Link to={ROUTES.CUSTOMER_INFO}>
          <button onClick={handleSubmitOffer} className="btn">
            مواصلة الطلب
          </button>
        </Link>
        {offer_options[activeOffer].discount && (
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center text-sm">
              <strong className="dark:text-white pl-2 text-dark">
                قيمة التخفيض
              </strong>
              <strong className="text-discount-value">
                دج{offer_options[activeOffer]?.discount_price || 0}
              </strong>
            </div>
            {/* <Badge text={data.offer_options[activeOffer].badge} /> */}
          </div>
        )}
      </div>
    </section>
  );
}
