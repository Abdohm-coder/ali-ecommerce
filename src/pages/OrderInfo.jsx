import { useNavigate } from "react-router-dom";
import OrderItem from "../components/order-item";
import { useDataContext } from "../utils/data.context";
import { ROUTES } from "../utils/routes";
import Error from "./error";

function OrderInfo() {
  const { order, setOrder } = useDataContext();
  const { product_name, client_details, order_details } = order;
  let navigate = useNavigate();
  const handleSubmitOrder = () => {
    setOrder((state) => ({
      ...state,
      permission: ROUTES.SUCCESS,
    }));
    navigate(ROUTES.SUCCESS);
  };
  return order?.permission !== ROUTES.ORDER_INFO ? (
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
      <OrderItem label="اسم المنتوج" text={product_name} />
      <OrderItem
        label="سعر الواحدة"
        text={order_details.product_price}
        price
        product_discount_price={order_details.product_discount_price}
      />
      <OrderItem label="الكمية" text={order_details.quantity} />
      {order_details.discount_value && (
        <OrderItem
          label="قيمة التخفيض"
          text={order_details.discount_value}
          type={order_details.discount_type}
        />
      )}{" "}
      <OrderItem label="اسم الزبون" text={client_details.client_name} />
      <OrderItem label="رقم الهاتف" text={client_details.client_phone} />
      <OrderItem label="ولاية التوصيل" text={client_details.client_state} />
      <OrderItem label="بلدية التوصيل" text={client_details.client_city} />
      <OrderItem label="تكاليف الشحن" text={order_details.shipping} price />
      {order_details.discount && (
        <OrderItem
          discount
          label="الاجمالي قبل التخفيضات"
          price
          text={order_details.price_before}
        />
      )}
      <OrderItem
        label="الإجمالي الكلي"
        price
        total_price
        text={order_details.price_total}
      />
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
