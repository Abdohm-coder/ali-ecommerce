import Badge from "./badge";

export default function OfferOption({
  index,
  quantity,
  product_price,
  discount,
  product_discount_price,
  discount_type,
  discount_value,
  badge,
  changeOffer,
  active,
}) {
  return (
    <div
      onClick={() => changeOffer(index)}
      className={`rounded-xl flex items-center justify-between py-4 ${
        active === index ? "ring-4" : "ring-0"
      } ring-btn-dark dark:ring-btn-light px-5 cursor-pointer dark:bg-dark bg-white`}>
      <div className="flex flex-col space-y-2 text text-right">
        <strong className="w-full">الكمية {quantity}</strong>
        <div className="flex items-center space-x-2 text-sm">
          <strong className="text-discount-percent">{discount}</strong>
          <p>
            {discount ? product_discount_price : product_price} دج للواحدة{" "}
            {discount && (
              <strong className="text-discount-percent">
                ( تخفيض {discount_value}
                {discount_type === "percentage" ? "%" : "دج"} )
              </strong>
            )}
          </p>
        </div>
        <Badge text={badge} />
      </div>
      <span
        className={`w-5 h-5 rounded-full border-btn-dark border relative ${
          active === index ? "bg-btn-dark offer-active" : ""
        }`}
      />
    </div>
  );
}
