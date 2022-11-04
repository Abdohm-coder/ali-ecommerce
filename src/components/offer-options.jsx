import { useState } from "react";
import { Link } from "react-router-dom";
import Badge from "../utils/badge";
import { useOrderContext } from "../utils/order.context";
import { ROUTES } from "../utils/routes";
import OfferOption from "./offer-option";

export default function OfferOptions() {
  const offer_options = [
    {
      id: "1",
      quantity: 1,
      product_price: 2900,
      discount: false,
      badge: "العرض العادي",
    },
    {
      id: "2",
      quantity: 2,
      product_price: 2900,
      discount: true,
      product_discount_price: 2320,
      discount_price: 1160,
      discount_value: 20,
      discount_type: "percentage",
      badge: "العرض الأكثر طلبا",
    },
    {
      id: "3",
      quantity: 4,
      product_price: 2900,
      discount: true,
      product_discount_price: 1740,
      discount_price: 4640,
      discount_value: 40,
      discount_type: "percentage",
      badge: "العرض الأكثر تخفيضا",
    },
  ];

  const [activeOffer, setOffer] = useState(1);
  const { setOrderData } = useOrderContext();

  const handleSubmitOffer = () => {
    setOrderData((state) => ({
      ...state,
      offer_details: offer_options[activeOffer],
      permission: ROUTES.CUSTOMER_INFO
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
