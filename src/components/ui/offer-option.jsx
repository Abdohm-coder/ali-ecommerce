import { Group, Paper } from "@mantine/core";
import Badge from "./badge";

export default function OfferOption({
  index,
  quantity,
  product_price,
  discount,
  discount_percentage_value,
  discount_type,
  discount_price,
  badge,
  changeOffer,
  active,
}) {
  return (
    <Paper
      shadow={"xs"}
      onClick={() => changeOffer(index)}
      className={`rounded-xl flex items-center justify-between py-4  ${
        active === index ? "outline-4 outline" : ""
      } outline-btn-dark dark:outline-btn-light px-5 cursor-pointer dark:bg-footer bg-white`}>
      <div className="flex flex-col space-y-2 text text-right w-full">
        <Group position="apart">
          <strong>الكمية {quantity}</strong>
          <span
            className={`w-5 h-5 rounded-full border-btn-dark border relative ${
              active === index ? "bg-btn-dark offer-active" : ""
            }`}
          />
        </Group>
        <div className="flex items-center space-x-2 text-sm">
          <p>
            {discount ? discount_price : product_price} دج للواحدة{" "}
            {discount && (
              <strong className="text-discount-percent">
                ( تخفيض {discount_percentage_value}
                {discount_type === "percentage" ? "%" : "دج"} )
              </strong>
            )}
          </p>
        </div>
        <Badge text={badge} />
      </div>
    </Paper>
  );
}
