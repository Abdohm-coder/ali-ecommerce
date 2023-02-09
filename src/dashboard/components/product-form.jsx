import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  NumberInput,
  Radio,
  TextInput,
  Button,
  Group,
  Paper,
  Divider,
} from "@mantine/core";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";

const emptyOffer = {
  id: uuidv4(),
  discount: false,
  discount_value: 0,
  discount_percentage_value: 0,
  quantity: 1,
  shipping: null,
  badge: "",
  discount_price: 0,
  discount_type: "",
  price_before: 0,
  price_total: 0,
};

const defaultValues = {
  product_name: "game",
  product_price: 0,
  offer_options: [emptyOffer],
};

const productFormSchema = yup.object().shape({
  product_name: yup.string().required("اسم المنتج مطلوب"),
  product_price: yup
    .number()
    .positive("أدخل سعر صحيح")
    .typeError("سعر المنتج يجب أن يكون رقم")
    .required("سعر المنتج مطلوب"),
  offer_options: yup.array().of(
    yup.object().shape({
      discount: yup.boolean(),
      discount_type: yup.string().when("discount", {
        is: true,
        then: yup.string().required("نوع التخفيض مطلوب"),
      }),
      discount_percentage_value: yup.number().when("discount_type", {
        is: "percentage",
        then: yup
          .number()
          .positive("أدخل قيمة التخفيض بشكل صحيح")
          .required("يجب إدخال قيمة التخفيض")
          .typeError("يجب إدخال رقم فقط"),
      }),
      discount_price: yup
        .number()

        .when("discount_type", {
          is: "price",
          then: yup
            .number()
            .positive("أدخل السعر بشكل صحيح")
            .required("السعر بعد التخفيض مطلوب")
            .typeError("يجب إدخال رقم فقط"),
        }),
      quantity: yup
        .number()
        .positive("أدخل الكمية بشكل صحيح")
        .typeError("الكمية يجب أن يكون رقم")
        .required("الكمية مطلوبة"),
    })
  ),
});

function ProductForm({ setOpened, initialData }) {
  const pageInfoDataDoc = doc(db, "page-info", "homepage");
  const {
    register,
    control,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: initialData || defaultValues,
    resolver: yupResolver(productFormSchema),
  });

  const onSubmit = async ({ product_name, product_price, offer_options }) => {
    const coutTotal = (
      discount,
      discount_type,
      discount_price,
      quantity,
      shipping,
      discount_percentage_value
    ) => {
      const total = discount
        ? discount_type === "price"
          ? discount_price
          : product_price * (1 - discount_percentage_value)
        : product_price;
      return shipping ? total * quantity + Number(shipping) : total * quantity;
    };
    const input = {
      product_name,
      product_price,
      offer_options: offer_options?.map(
        ({
          id,
          shipping,
          discount_price,
          discount_type,
          quantity,
          discount_percentage_value,
          discount,
          badge,
        }) => ({
          product_price,
          discount,
          discount_price:
            discount_type === "percentage"
              ? product_price * (1 - discount_percentage_value * 0.01)
              : discount_price,
          discount_percentage_value,
          quantity,
          badge,
          discount_type,
          shipping: shipping ? Number(shipping) : null,
          discount_value:
            discount_type === "percentage"
              ? Number(
                  (
                    product_price *
                    quantity *
                    (1 - (1 - discount_percentage_value * 0.01))
                  ).toFixed(2)
                )
              : quantity * (product_price - discount_price),
          price_before: discount
            ? shipping
              ? product_price * quantity + Number(shipping)
              : product_price * quantity
            : null,
          price_total: coutTotal(
            discount,
            discount_type,
            discount_price,
            quantity,
            shipping,
            discount_percentage_value * 0.01
          ),
          id,
        })
      ),
    };


    // POST input variable here to "orders" collection
    updateDoc(pageInfoDataDoc, {
      product: input,
    })
      .then(() => {
        toast.success("مبروك، تم التعديل بنجاح");
      })
      .catch(() => toast.warn("أوبس، هناك خطأ"));

    setOpened(false);
    toast.success("مبروك، تم التعديل بنجاح");
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "offer_options",
  });

  const Offer = ({ index }) => {
    const discountType = watch(`offer_options.${index}.discount_type`);
    if (discountType !== "") setValue(`offer_options.${index}.discount`, true);

    return (
      <div className="w-full">
        <Radio.Group
          mb="sm"
          label="إختر نوع التخفيض :"
          value={discountType}
          onChange={(event) => {
            setValue(`offer_options.${index}.discount_type`, event);
          }}>
          <Radio label="النسبة المئوية" value="percentage" />
          <Radio label="السعر بعد التخفيض" value="price" />
          <Radio label="دون تخفيض" value="" />
        </Radio.Group>

        {discountType === "price" ? (
          <>
            <NumberInput
              radius={6}
              label="السعر بعد التخفيض"
              placeholder="أكتب السعر بعد التخفيض"
              mb="sm"
              withAsterisk
              min={0}
              defaultValue={0}
              className="w-full"
              {...register(`offer_options.${index}.discount_price`)}
              error={errors?.offer_options?.[index].discount_price?.message}
            />
            <TextInput
              radius={6}
              label="مميز العرض"
              mb="sm"
              placeholder="أكتب مميز العرض ( مثل عرض حصري، العرض الأقل تخفيضا )"
              className="w-full"
              {...register(`offer_options.${index}.badge`)}
              error={errors?.offer_options?.[index]?.badge?.message}
            />
          </>
        ) : (
          discountType === "percentage" && (
            <>
              <NumberInput
                radius={6}
                label="النسبة المئوية للتخفيض"
                placeholder="أكتب النسبة المئوية للتخفيض"
                mb="sm"
                withAsterisk
                min={0}
                max={100}
                defaultValue={0}
                className="w-full"
                {...register(
                  `offer_options.${index}.discount_percentage_value`
                )}
                error={
                  errors?.offer_options?.[index].discount_percentage_value
                    ?.message
                }
              />
              <TextInput
                radius={6}
                label="مميز العرض"
                mb="sm"
                placeholder="أكتب مميز العرض ( مثل عرض حصري، العرض الأقل تخفيضا )"
                className="w-full"
                {...register(`offer_options.${index}.badge`)}
                error={errors?.offer_options?.[index]?.badge?.message}
              />
            </>
          )
        )}
        <NumberInput
          radius={6}
          withAsterisk
          label="الكمية"
          placeholder="أكتب الكمية"
          min={0}
          mb="sm"
          defaultValue={1}
          className="w-full"
          {...register(`offer_options.${index}.quantity`)}
          error={errors?.offer_options?.[index]?.quantity?.message}
        />
        <NumberInput
          radius={6}
          label="الشحن"
          placeholder="أكتب سعر الشحن ( تلقائيا غير وارد )"
          min={0}
          mb="sm"
          className="w-full"
          {...register(`offer_options.${index}.shipping`)}
          error={errors?.offer_options?.[index]?.shipping?.message}
        />
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap gap-4">
      <TextInput
        radius={6}
        label="إسم المنتج"
        placeholder="أكتب إسم المنتج"
        className="w-full"
        withAsterisk
        {...register("product_name")}
        error={errors?.product_name?.message}
      />
      <TextInput
        radius={6}
        label="سعر المنتج"
        placeholder="أكتب سعر المنتج ( بدون التخفيض )"
        className="w-full"
        {...register("product_price")}
        withAsterisk
        error={errors?.product_price?.message}
      />
      <Divider
        my="sm"
        className="w-full"
        variant="solid"
        label="العروض"
        labelPosition="center"
      />
      <Paper shadow="xs" className="w-full p-2">
        <div className="w-full flex flex-wrap justify-end">
          <Button
            variant="filled"
            onClick={() => (fields.length > 2 ? {} : append(emptyOffer))}
            className="hover:bg-btn-dark bg-btn-dark/90 ml-3">
            إضافة عرض
          </Button>
          <Button
            variant="filled"
            onClick={() => fields.length === 1 ? {} : remove(fields.length - 1)}
            className="hover:bg-red-500 bg-red-600">
            حذف عرض
          </Button>
        </div>
        {fields.map(({ id }, index) => (
          <Offer key={id} index={index} />
        ))}
      </Paper>
      <Divider my="sm" className="w-full" />
      <Group className="w-full">
        <Button
          type="submit"
          variant="filled"
          className="hover:bg-btn-dark bg-btn-dark/90 flex-1">
          تأكيد
        </Button>
        <Button
          variant="outline"
          className="border-red-600 text-red-600 hover:bg-red-50 "
          onClick={() => setOpened(false)}>
          إلغاء
        </Button>
      </Group>
    </form>
  );
}

export default ProductForm;
