import OrderItem from "../components/order-item";

const data = {
  order_details: [
    {
      label: "إسم المنتوج",
      text: "وسادة نابوفا",
    },
    {
      label: "سعر الواحدة",
      text: "2900 2320 دج",
    },
    {
      label: "الكمية",
      text: "2",
    },
    {
      label: "نوع العرض",
      text: "وسادتين (2) بتخفيض 20%",
    },
    {
      label: "اسم الزبون",
      text: "sdsds",
    },
    {
      label: "رقم الهاتف",
      text: "0549848545",
    },
    {
      label: "ولاية التوصيل",
      text: "Alger - الجزائر العاصمة",
    },
    {
      label: "بلدية التوصيل",
      text: "Baraki - براقي",
    },
    {
      label: "تكاليف الشحن",
      text: "400 دج",
    },
  ],
  discount: true,
  price_before: "6200 دج",
  price_total: "5040 دج",
};
function OrderInfo() {
  return (
    <section className="pt-8">
      <h1 className="text text-4xl font-black mb-2">تأكدوا من طلبكم</h1>
      <p className="text mb-4">
        تأكدو من المعلومات التي أدخلتموها و أضغطو على الزر أسفله حتى نرسل لكم
        رسالة نصية قصيرة و نقوم بتأكيد طلبيتكم
      </p>
      <span className="rounded-md p-2 inline-flex dark:bg-btn-light/5 dark:text-white mb-4">
        <strong>
          تكاليف الشحن تختلف حسب المكان الذي حددته، الأماكن الأبعد قد ترفع من
          تكلفة الشحن.
        </strong>
      </span>
      {data.order_details.map((props, index) => (
        <OrderItem key={index} {...props} />
      ))}
      {data.discount && (
        <OrderItem
          discount
          label="الاجمالي قبل التخفيضات"
          text={data.price_before}
        />
      )}
      <OrderItem label="الإجمالي الكلي" text={data.price_total} />
    </section>
  );
}

export default OrderInfo;
