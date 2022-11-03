import { useState } from "react";
import { Link } from "react-router-dom";
import Badge from "../utils/badge";
import { ROUTES } from "../utils/routes";
import OfferOption from "./offer-option";

export default function OfferOptions() {
  const data = {
    offer_text: "اختر أحد عروض البيع المتوفرة و اضغط على زر المواصلة",
    offer_options: [
      {
        id: "1",
        count: " وسادة(1)",
        price: "2900 دج للواحدة",
        discount: "",
        badge: "العرض العادي",
      },
      {
        id: "2",
        count: " (2) وسادتين",
        price: "2320 دج للواحدة",
        discount: "(تخفيض 20%)",
        badge: "العرض الأكثر طلبا",
      },
      {
        id: "3",
        count: " (4) وسادات",
        price: "1740 دج للواحدة",
        discount: "(تخفيض 40%)",
        badge: "العرض الأكثر تخفيضا",
      },
    ],
    discount: true,
    discount_value: "1160",
    discount_text: "عرض حصري",
  };

  const [activeOffer, setOffer] = useState(data.offer_options[1].id);

  return (
    <section className="w-full">
      <div className="max-w-[250px] mx-auto text-center mb-2">
        <p className="text-light">{data.offer_text}</p>
      </div>
      <div className="flex flex-col space-y-3 dark:bg-footer bg-white rounded-xl p-3">
        {data.offer_options.map((option) => (
          <OfferOption
            key={option.id}
            active={activeOffer}
            changeOffer={setOffer}
            {...option}
          />
        ))}
        <Link to={ROUTES.CUSTOMER_INFO}>
          <button className="btn">مواصلة الطلب</button>
        </Link>
        {data?.discount && (
          <div className="w-full flex items-center justify-between">
            <Badge text={data.discount_text} />
            <div className="flex items-center space-x-2">
              <strong className="text-discount-value">
                دج{data.discount_value}
              </strong>
              <strong className="dark:text-white text-dark">
                قيمة التخفيض
              </strong>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
