import { useState } from "react";
import { Link } from "react-router-dom";
import Badge from "./ui/badge";
import { useDataContext } from "../utils/data.context";
import { ROUTES } from "../utils/routes";
import OfferOption from "./ui/offer-option";
import { v4 as uuidv4 } from "uuid";

export default function OfferOptions() {
  const { order, setOrder, pageInfo } = useDataContext();
  // if (!pageInfo?.product || Object.keys(pageInfo?.product).length === 0) return;
  const { offer_options, product_name, product_price } = pageInfo?.product;
  const offers = [
    {
      shipping: null,
      quantity: 1,
      product_price,
      discount: false,
      discount_type: "",
      discount_value: 0,
      product_discount_price: 0,
      price_before: 0,
      price_total: product_price,
    },
  ];

  const [activeOffer, setOffer] = useState(1);

  const handleSubmitOffer = () => {
    setOrder(() => ({
      product_name,
      order_id: uuidv4(),
      order_details: offer_options[activeOffer],
      permission: ROUTES.CUSTOMER_INFO,
    }));
  };

  return (
    <section className="w-full">
      <div className="max-w-[250px] mx-auto text-center mb-6">
        <p className="text-light">
          اختر أحد عروض البيع المتوفرة و اضغط على زر المواصلة
        </p>
      </div>
      <div className="flex flex-col space-y-3 dark:bg-footer bg-white rounded-xl p-3">
        <OfferOption
          key="deffault offer"
          product_price={product_price}
          badge="العرض العادي"
          discount={false}
          quantity={1}
          active={activeOffer}
          changeOffer={setOffer}
          index={0}
        />
        {offer_options.map((option, index) => (
          <OfferOption
            key={option.id}
            active={activeOffer}
            changeOffer={setOffer}
            index={index + 1}
            {...option}
          />
        ))}
        <Link to={ROUTES.CUSTOMER_INFO}>
          <button onClick={handleSubmitOffer} className="btn">
            مواصلة الطلب
          </button>
        </Link>
        {activeOffer > 0 && offer_options[activeOffer - 1].discount && (
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center text-sm">
              <strong className="dark:text-white pl-2 text-dark">
                قيمة التخفيض
              </strong>
              <strong className="text-discount-value">
                دج{offer_options[activeOffer - 1]?.discount_value || 0}
              </strong>
            </div>
            {/* <Badge text={data.offer_options[activeOffer].badge} /> */}
          </div>
        )}
      </div>
    </section>
  );
}
