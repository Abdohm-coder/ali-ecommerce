export default function OrderItem({
  label,
  text,
  discount = false,
  product_discount_price,
  total_price,
  type,
  price
}) {
  return (
    <>
      <div className="grid grid-cols-2 pt-6 pb-4">
        <strong className="text-light text-right flex flex-col">
          {label}{" "}
          {total_price && (
            <span className="font-light text-sm">
              الاجمالي بعد التخفيضات والشحن
            </span>
          )}
        </strong>
        <strong
          className={`text text-left ${
            discount ? "!text-discount-percent" : ""
          } ${total_price ? "font-black text-3xl" : ""}`}>
          {product_discount_price ? (
            <span className="!text-discount-percent line-through">
              {text} {price ? "دج" : ""}
            </span>
          ) : type === "percentage" ? (
            `${text}%`
          ) : type === "fixed" ? (
            `${text} دج`
          ) : (
            `${text} ${price ? "دج" : ""}`
          )}
          {product_discount_price ? `${product_discount_price} ${price ? "دج" : ""}` : ""}
        </strong>
      </div>
      <hr className="opacity-30" />
    </>
  );
}
