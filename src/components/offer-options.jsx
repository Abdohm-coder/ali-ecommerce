import { useState } from "react";
import { Link } from "react-router-dom";
import Badge from "./ui/badge";
import { useDataContext } from "../utils/data.context";
import { ROUTES } from "../utils/routes";
import OfferOption from "./ui/offer-option";
import { Paper } from "@mantine/core";
import { v4 as uuidv4 } from "uuid";

export default function OfferOptions() {
  const { order, setOrder, pageInfo } = useDataContext();
  // if (!pageInfo?.product || Object.keys(pageInfo?.product).length === 0) return;
  const { offer_options, product_name, product_price } = pageInfo?.product;
  const defaultOffer = {
    shipping: null,
    quantity: 1,
    product_price,
    discount: false,
    discount_type: "",
    discount_value: 0,
    product_discount_price: 0,
    price_before: 0,
    price_total: product_price,
    id: uuidv4(),
  };

  const [activeOffer, setOffer] = useState(0);

  const handleSubmitOffer = () => {
    setOrder(() => ({
      product_name,
      order_details:
        activeOffer === 0 ? defaultOffer : offer_options[activeOffer - 1],
      permission: ROUTES.CUSTOMER_INFO,
    }));
  };

  return (
    <section className="w-full">
      <div className="max-w-[250px] mx-auto text-center mb-6">
        <p className="text-light">
          اختر العرض المناسب لك ثم اضغط على الزر للمواصلة
        </p>
      </div>
      <Paper
        shadow="lg"
        className="flex flex-col space-y-3 dark:bg-dark bg-white rounded-xl p-3">
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
        {offer_options.map(({id, ...rest}, index) => (
          <OfferOption
            key={id}
            {...rest}
            active={activeOffer}
            changeOffer={setOffer}
            index={index + 1}
          />
        ))}
        <Link to={ROUTES.CUSTOMER_INFO}>
          <button onClick={handleSubmitOffer} className="btn">
            أطلب الأن
          </button>
        </Link>
        {activeOffer > 0 && offer_options[activeOffer - 1].discount && (
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center text-sm">
              <strong className="dark:text-white pl-2 text-dark">
                رائع لقد وفرت
              </strong>
              <strong className="text-discount-value">
                {offer_options[activeOffer - 1]?.discount_value || 0} دج
              </strong>
            </div>
            {/* <Badge text={data.offer_options[activeOffer].badge} /> */}
          </div>
        )}
      </Paper>
    </section>
  );
}
