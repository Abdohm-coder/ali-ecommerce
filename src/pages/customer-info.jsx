import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../components/ui/input";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/routes";
import SelectInput from "../components/select-input";
import { data } from "../data/code";
import { useEffect, useMemo, useState } from "react";
import shippingImg from "../assets/shipping.svg";
import paymentImg from "../assets/payment_arrive.svg";
import qualityImg from "../assets/quality.svg";
import transferImg from "../assets/transfer-money.svg";
import { useDataContext } from "../utils/data.context";
import Error from "./error";
import HeroCarousel from "../components/carousel";
import { Paper } from "@mantine/core";

const featured_icons = [
  { icon: paymentImg, text: "الدفع عند الاستلام" },
  { icon: shippingImg, text: "توصيل لباب المنزل" },
  { icon: qualityImg, text: " ضمان جودة عالية" },
  { icon: transferImg, text: "استبدال واسترجاع سهل" },
];

const orderFormShema = yup.object().shape({
  client_name: yup.string().required("يجب إدخال هذا الحقل"),
  client_phone: yup
    .string()
    .required("يجب إدخال هذا الحقل")
    .matches(/^[0-9]+$/, "رجاء أدخل رقم هاتف صحيح لتصلك رسالة تأكيد الطلبية")
    .min(10, "رجاء أدخل رقم هاتف صحيح لتصلك رسالة تأكيد الطلبية")
    .max(10, "رجاء أدخل رقم هاتف صحيح لتصلك رسالة تأكيد الطلبية"),
  client_state: yup.string().required("يجب إدخال هذا الحقل"),
  client_city: yup.string().required("يجب إدخال هذا الحقل"),
});

function CustomerInfo() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(orderFormShema),
  });

  const { order, setOrder, pageInfo } = useDataContext();
  const images = pageInfo?.hero?.images;
  let navigate = useNavigate();

  const onSubmit = async (values) => {
    if (values) {
      setOrder((state) => ({
        ...state,
        client_details: values,
        permission: ROUTES.ORDER_INFO,
      }));
      navigate(ROUTES.ORDER_INFO);
    }
  };
  const filter_wilayas = useMemo(() => {
    const wilayas = data.map(({ wilaya_name }) => wilaya_name);
    var seen = {};
    var out = [];
    var len = wilayas.length;
    var j = 0;
    for (var i = 0; i < len; i++) {
      var item = wilayas[i];
      if (seen[item] !== 1) {
        seen[item] = 1;
        out[j++] = item;
      }
    }
    return out;
  }, []);
  const [wilayaSelected, setWilayaSelected] = useState("");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const filter_cities = data
      .map(({ wilaya_name, commune_name }) =>
        wilaya_name === wilayaSelected ? commune_name : null
      )
      .filter((city) => city !== null);
    setCities(filter_cities);
  }, [wilayaSelected]);

  return order?.permission !== ROUTES.CUSTOMER_INFO ? (
    <Error />
  ) : (
    <section className="pt-8 layout">
      <HeroCarousel images={images} withIndicators={false} height={"h-24"} />
      <div className="mx-auto max-w-[250px] text-center">
        <h1 className="text text-xl font-black mb-2">أدخل معلوماتك بعناية</h1>
        <p className="text-light font-semibold mb-6">
          إملأ الحقول أسفله ثم اضغط على الزر لاتمام عملية الطلب
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Paper
          shadow="sm"
          className="flex flex-col mb-4 dark:bg-dark px-4 py-6">
          <div className="grid grid-cols-1 gap-5 mb-2">
            <Input
              {...register("client_name")}
              required
              placeholder="الاسم و اللقب"
              label="إسمكم الكامل"
              note="حقل الاسم الكامل مطلوب"
              error={errors?.client_name?.message}
            />
            <Input
              {...register("client_phone")}
              required
              placeholder="رقم الهاتف بدون رمز الدولة"
              label="رقم هاتفكم"
              note="حقل رقم الهاتف لا بد منه لتوصيل طلبكم"
              error={errors?.client_phone?.message}
            />
            <SelectInput
              name="client_state"
              control={control}
              data={filter_wilayas}
              placeholder="إختر ولاية التوصيل"
              searchable
              label="الولاية"
              required
              error={errors?.client_state?.message}
              dropdownPosition="top"
              searchValue={wilayaSelected}
              onSearchChange={(e) => setWilayaSelected(e)}
            />
            {cities.length > 0 && (
              <SelectInput
                name="client_city"
                control={control}
                data={cities}
                placeholder="إختر بلدية التوصيل"
                searchable
                label="البلدية"
                required
                error={errors?.client_city?.message}
                dropdownPosition="top"
              />
            )}
          </div>
          <button type="submit" className="btn">
            تأكيد الطلب
          </button>
        </Paper>
      </form>
      <div className="grid grid-cols-4 gap-6">
        {featured_icons.map(({ icon, text }) => (
          <div className="flex flex-col items-center justify-start" key={icon}>
            <img className="h-24 w-16" src={icon} alt={text} />
            <p className="text-base font-black text-center text">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomerInfo;
