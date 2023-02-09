import { arrayUnion, doc, updateDoc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { track } from "react-facebook-pixel";
import { useNavigate } from "react-router-dom";
import OrderItem from "../components/ui/order-item";
import { db } from "../firebase/firebase-config";
import { useDataContext } from "../utils/data.context";
import { ROUTES } from "../utils/routes";
import Error from "./error";
import { pageView } from "react-facebook-pixel";
import moment from "moment";
import { useState } from "react";

function OrderInfo() {
  const { order, setOrder } = useDataContext();
  const { product_name, client_details, order_details } = order;
  const orderDataDoc = doc(db, "orders", "ORDERS-DATA");
  let navigate = useNavigate();
  const [ordersNumber, setOrdersNumber] = useState();
  const ordersCountDoc = doc(db, "statics", "general-statics");

  useEffect(() => {
    try {
      pageView();
    } catch {}
  }, []);

  const handleSubmitOrder = () => {
    getDoc(ordersCountDoc)
      .then((count) => {
        updateDoc(orderDataDoc, {
          orders: arrayUnion({
            ...order,
            createdAt: moment().unix(),
            order_id: `ord-${Number(count.get("orders") + 1)}`,
          }),
        }).then((res) => {
          setOrder((state) => ({
            ...state,
            permission: ROUTES.SUCCESS,
          }));

          // Count Orders
          updateDoc(ordersCountDoc, {
            orders: Number(count.get("orders") + 1),
          });

          // Facebook Track Purchase
          try {
            track("Purchase");
          } catch {}
        });
      })
      .catch((err) => console.log(err));

    // Push Order Data

    navigate(ROUTES.SUCCESS);

    // POST ORDER HERE FILE
  };
  return order?.permission !== ROUTES.ORDER_INFO ? (
    <Error />
  ) : (
    <section className="pt-8 layout">
      <h1 className="text text-4xl font-black mb-2">تأكدوا من طلبكم</h1>
      <p className="text mb-4">
        تأكد من المعلومات التي أدخلتها و أضغط على الزر أسفله حتى نتصل بكم و نقوم
        بتأكيد طلبيتكم
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
        text={order_details?.product_price}
        price
        product_discount_price={order_details?.product_discount_price}
      />
      <OrderItem label="الكمية" text={order_details?.quantity} />
      {order_details?.discount && (
        <OrderItem
          label="قيمة التخفيض"
          text={
            order_details.discount_type === "percentage"
              ? order_details?.discount_percentage_value
              : order_details?.discount_price
          }
          type={order_details?.discount_type}
        />
      )}{" "}
      <OrderItem label="اسم الزبون" text={client_details.client_name} />
      <OrderItem label="رقم الهاتف" text={client_details.client_phone} />
      <OrderItem label="ولاية التوصيل" text={client_details.client_state} />
      <OrderItem label="بلدية التوصيل" text={client_details.client_city} />
      {order_details?.shipping && (
        <OrderItem label="تكاليف الشحن" text={order_details?.shipping} price />
      )}
      {order_details?.discount && (
        <OrderItem
          discount
          label="الاجمالي قبل التخفيضات"
          price
          text={order_details?.price_before}
        />
      )}
      <OrderItem
        label="الإجمالي الكلي"
        price
        total_price
        text={order_details?.price_total}
      />
      <button onClick={handleSubmitOrder} className="btn">
        تأكيد الطلبية
      </button>
      {/* <p className="text-light text-sm text-center max-w-[250px] mx-auto mt-2">
        بضغطك على زر الطلب فأنت توافق على قوانين الاستخدام و بوليصة التأمين
      </p> */}
    </section>
  );
}

export default OrderInfo;
