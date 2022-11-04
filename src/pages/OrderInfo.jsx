import { useNavigate } from "react-router-dom";
import OrderItem from "../components/order-item";
import { useOrderContext } from "../utils/order.context";
import { ROUTES } from "../utils/routes";
import Error from "./error";
const data = {
  product_name: "وسادة نابوفا",
  client_name: "sdsds",
  client_phone: "0549848545",
  client_state: "Alger - الجزائر العاصمة",
  client_city: "Baraki - براقي",
  shipping: "400 دج",
  quantity: 2,
  product_price: " 2900 دج",
  discount: true,
  discount_value: 20,
  discount_type: "percentage",
  product_discount_price: "2320 دج",
  price_before: "6200 دج",
  price_total: "5040 دج",
};
function OrderInfo() {
  const { orderData, setOrderData } = useOrderContext();
  let navigate = useNavigate();
  const handleSubmitOrder = () => {
    setOrderData((state) => ({
      ...state,
      permission: ROUTES.SUCCESS,
    }));
    navigate(ROUTES.SUCCESS);
  };
  return orderData?.permission !== ROUTES.ORDER_INFO ? (
    <Error />
  ) : (
    <section className="pt-8 layout">
      <h1 className="text text-4xl font-black mb-2">تأكدوا من طلبكم</h1>
      <p className="text mb-4">
        تأكدو من المعلومات التي أدخلتموها و أضغطو على الزر أسفله حتى نرسل لكم
        رسالة نصية قصيرة و نقوم بتأكيد طلبيتكم
      </p>
      <span className="rounded-md p-3 inline-flex dark:bg-btn-light/5 dark:text-gray-100 mb-4">
        <strong>
          تكاليف الشحن تختلف حسب المكان الذي حددته، الأماكن الأبعد قد ترفع من
          تكلفة الشحن.
        </strong>
      </span>
      <OrderItem label="اسم المنتوج" text={data.product_name} />
      <OrderItem
        label="سعر الواحدة"
        text={data.product_price}
        product_discount_price={data.product_discount_price}
      />
      <OrderItem label="الكمية" text={data.quantity} />
      {data.discount_value && (
        <OrderItem
          label="قيمة التخفيض"
          text={data.discount_value}
          type={data.discount_type}
        />
      )}{" "}
      <OrderItem label="اسم الزبون" text={data.client_name} />
      <OrderItem label="رقم الهاتف" text={data.client_phone} />
      <OrderItem label="ولاية التوصيل" text={data.client_state} />
      <OrderItem label="بلدية التوصيل" text={data.client_city} />
      <OrderItem label="تكاليف الشحن" text={data.shipping} />
      {data.discount && (
        <OrderItem
          discount
          label="الاجمالي قبل التخفيضات"
          text={data.price_before}
        />
      )}
      <OrderItem label="الإجمالي الكلي" total_price text={data.price_total} />
      <button onClick={handleSubmitOrder} className="btn">
        تأكيد الطلبية
      </button>
      <p className="text-light text-sm text-center max-w-[250px] mx-auto mt-2">
        بضغطك على زر الطلب فأنت توافق على قوانين الاستخدام و بوليصة التأمين
      </p>
    </section>
  );
}

export default OrderInfo;
