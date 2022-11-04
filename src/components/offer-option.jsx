import Badge from "../utils/badge";

export default function OfferOption({
  count,
  price,
  badge,
  id,
  discount,
  changeOffer,
  active,
}) {
  return (
    <div
      onClick={() => changeOffer(id)}
      className={`rounded-xl flex items-center justify-between py-4 ${
        active === id ? "ring-4" : "ring-0"
      } ring-btn-dark dark:ring-btn-light px-5 cursor-pointer dark:bg-dark bg-white`}>
      <span
        className={`w-5 h-5 rounded-full border-btn-dark border relative ${
          active === id ? "bg-btn-dark offer-active" : ""
        }`}
      />
      <div className="flex flex-col items-end space-y-2 text">
        <span>{count}</span>
        <div className="flex items-center space-x-2 text-sm">
          <strong className="text-discount-percent">{discount}</strong>
          <p>{price}</p>
        </div>
        <Badge text={badge} />
      </div>
    </div>
  );
}
