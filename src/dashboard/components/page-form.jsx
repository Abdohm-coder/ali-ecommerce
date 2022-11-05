import { useState } from "react";
import { useForm } from "react-hook-form";
import SelectInput from "../../components/select-input";
import Description from "../../components/ui/description";
import FileInput from "../../components/ui/file-input";
import Input from "../../components/ui/input";
import TextArea from "../../components/ui/textarea";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";

const pageschema = yup.object().shape({
  homepage: yup.object().shape({
    hero: yup.object().shape({
      title: yup.string().required("العنوان الرئيسي مطلوب"),
    }),
    features: yup.object().shape({
      has_features: yup.boolean().required("هذا الحقل مطلوب"),
    }),
    feedbacks: yup.object().shape({
      has_feedbacks: yup.boolean().required("هذا الحقل مطلوب"),
      reviews_number: yup.number().typeError("يجب أن يكون رقما فقط"),
    }),
  }),
});

const defaultValues = {
  logo: {
    dark_mode: "",
    light_mode: "",
  },
  homepage: {
    hero: {
      images: [],
      title: "",
    },
    records: [
      {
        id: "",
        icon: "",
        text: "",
        span: "",
      },
    ],
    features: {
      has_features: false,
      title: "",
      description: "",
      images: [],
    },
    feedbacks: {
      has_feedbacks: false,
      title: "",
      reviews_number: 0,
      reviews_average: 0,
    },
  },
};

export default function PageInfoForm({ initialData }) {
  const [reviews, setReviews] = useState(
    initialData?.homepage?.feedbacks?.reviews || [
      {
        id: uuidv4(),
        name: "",
        feedback: "",
      },
      {
        id: uuidv4(),
        name: "",
        feedback: "",
      },
      {
        id: uuidv4(),
        name: "",
        feedback: "",
      },
      {
        id: uuidv4(),
        name: "",
        feedback: "",
      },
      {
        id: uuidv4(),
        name: "",
        feedback: "",
      },
    ]
  );
  const [hasFeedbacks, setHasFeedbacks] = useState(
    initialData?.homepage?.feedbacks?.has_feedbacks && true
  );
  const [hasFeatures, setHasFeatures] = useState(
    initialData?.homepage?.features?.has_features && true
  );
  const [items, setItems] = useState(
    initialData?.homepage?.features?.items_non_image || [
      {
        id: uuidv4(),
        title: "",
      },
      {
        id: uuidv4(),
        title: "",
      },
      {
        id: uuidv4(),
        title: "",
      },
      {
        id: uuidv4(),
        title: "",
      },
    ]
  );
  const [items_image, setItemsImage] = useState(
    initialData?.homepage?.features?.items_with_image || [
      {
        id: uuidv4(),
        title: "",
        description: "",
        image: "",
      },
      {
        id: uuidv4(),
        title: "",
        description: "",
        image: "",
      },
    ]
  );
  const [footer, setFooter] = useState(
    initialData?.footer || [
      {
        id: uuidv4(),
        label: "number",
        text: "",
      },
      {
        id: uuidv4(),
        label: "",
        text: "",
      },
    ]
  );
  const {
    register,
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: initialData || defaultValues,
    resolver: yupResolver(pageschema),
  });

  const onSubmit = async (values) => {
    const {
      title: features_title,
      description,
      images,
    } = values.homepage.features;
    const { title, reviews_number, reviews_average } =
      values.homepage.feedbacks;

    // Filter Feedbacks and featuers and footer
    const filter_footer = footer.filter(
      ({ label, text }) => label !== "" || text !== ""
    );
    const filter_reviews = reviews.filter(
      ({ name, feedback }) => name !== "" || feedback !== ""
    );
    const filter_items = items.filter(({ title }) => title !== "");
    const filter_items_image = items_image.filter(
      ({ title, description, image }) =>
        title !== "" || description !== "" || image !== ""
    );

    // Collecting data
    const input = {
      logo: {
        dark_mode: values.logo.dark_mode,
        light_mode: values.logo.light_mode,
      },
      homepage: {
        hero: {
          images: values.homepage.hero.images,
          title: values.homepage.hero.title,
        },
        features: {
          has_features: hasFeatures,
          title: hasFeatures ? features_title : "",
          description: hasFeatures ? description : "",
          images: hasFeatures ? images : [],
          items_non_image: hasFeatures ? filter_items : [],
          items_with_image: hasFeatures ? filter_items_image : [],
        },
        feedbacks: {
          has_feedbacks: hasFeedbacks,
          title: hasFeedbacks ? title : "",
          reviews_number: hasFeedbacks ? Number(reviews_number) : 0,
          reviews_average: hasFeedbacks ? Number(reviews_average) : 0,
          reviews: hasFeedbacks ? filter_reviews : [],
        },
      },
      footer: filter_footer,
    };
    console.log(input);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8">
        <Description
          title="الشعار ( Logo )"
          details="أدخل شعار مشروعك بالوضع الليلي والنهاري"
          className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5"
        />
        <div className="p-5 md:p-8 shadow rounded flex flex-wrap justify-between space-y-6 w-full">
          <div className="grid w-full sm:grid-cols-2 my-6 gap-6">
            <FileInput
              getValues={getValues}
              setValue={setValue}
              name="logo.dark_mode"
              control={control}
              label="الشعار في الوضع الليلي"
              text="اسحب هنا او اضغط لرفع الشعار في الوضع الليلي"
            />
            <FileInput
              getValues={getValues}
              name="logo.light_mode"
              setValue={setValue}
              control={control}
              label="الشعار في الوضع النهاري"
              text="اسحب هنا او اضغط لرفع الشعار في الوضع النهاري"
            />
          </div>
        </div>
      </div>
      <div className="my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8">
        <Description
          title="الصفحة الرئيسية"
          details="أدخل المعلومات المتعلقة بالصفحة الرئيسية "
          className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5"
        />
        <div className="p-5 md:p-8 shadow rounded w-full">
          <div className="grid w-full sm:grid-cols-2 my-6 gap-6">
            <Input
              {...register("homepage.hero.title")}
              required
              placeholder="أدخل العنوان الرئيسي للصفحة"
              label="العنوان الرئيسي للصفحة"
              note="العنوان الرئيسي مطلوب"
              error={errors?.homepage?.hero?.title?.message}
            />
            <div>
              <strong className="text">معرض الصور الأساسي</strong>
              <FileInput
                getValues={getValues}
                name="homepage.hero.images"
                setValue={setValue}
                multiple
                control={control}
                label="معرض الصور الأساسي"
                text="اسحب هنا او اضغط لرفع الصور"
                className="mt-4"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8">
        <Description
          title="مميزات وخصائص المنتوج"
          details="أدخل المعلومات المتخصصة حول مزايا و مميزات المنتوج"
          className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5"
        />
        <div className="p-5 md:p-8 shadow rounded flex flex-col space-y-6 w-full">
          <div className="grid w-full sm:grid-cols-2 my-6 gap-6">
            <SelectInput
              name="homepage.feedbacks.has_features"
              control={control}
              data={["true", "false"]}
              placeholder="هل ستكتب مميزات المنتوج؟"
              label="وضع مميزات المنتوج"
              required
              searchable
              error={errors?.homepage?.features?.has_features?.message}
              dropdownPosition="top"
              value={hasFeatures.toString()}
              onChange={(e) => setHasFeatures(e === "true")}
            />
          </div>
          {hasFeatures && (
            <>
              <div className="grid w-full sm:grid-cols-2 my-6 gap-6">
                <Input
                  {...register("homepage.features.title")}
                  placeholder="أدخل عنوان مميزات المنتوج (مثل: مالذي يجعل وسادة نابوفا مميزة جدا؟)"
                  label="عنوان مميزات المنتوج"
                />
                <div>
                  <strong className="text">معرض الصور الثاني</strong>
                  <FileInput
                    getValues={getValues}
                    name="homepage.features.images"
                    setValue={setValue}
                    multiple
                    control={control}
                    label="معرض الصور الثاني"
                    text="اسحب هنا او اضغط لرفع الصور"
                    className="mt-4"
                  />
                </div>
              </div>
              <h2 className="font-black my-6 text-base text-btn-dark">
                مميزات المنتوج
              </h2>
              <div className="grid w-full sm:grid-cols-2 my-6 gap-6">
                {items.map(({ id, title }, index) => (
                  <Input
                    key={id}
                    value={title}
                    onChange={(e) => {
                      const text = e.target.value;
                      setItems((t) =>
                        t.map((e, i) => (i === index ? text : e))
                      );
                    }}
                    placeholder={`أدخل المميز ${index + 1}`}
                    label={`المميز ${index + 1}`}
                  />
                ))}
              </div>
              <h2 className="font-black text-base my-6 text-btn-dark">
                مميزات المنتوج مع الصور
              </h2>
              <div className="my-6 w-full">
                {items_image.map(({ id, title, description, ..._ }, index) => (
                  <div
                    key={id}
                    className="grid w-full sm:grid-cols-2 my-6 gap-6">
                    <div className="h-full space-y-6">
                      <Input
                        value={title}
                        onChange={(e) => {
                          const text = e.target.value;
                          setItemsImage((t) =>
                            t.map(({ title, ...rest }, i) =>
                              i === index
                                ? { title: text, ...rest }
                                : { title, ...rest }
                            )
                          );
                        }}
                        placeholder={`أدخل المميز ${index + 1 + items.length}`}
                        label={`مميز ${index + 1 + items.length}`}
                      />
                      <TextArea
                        value={description}
                        onChange={(e) => {
                          const text = e.target.value;
                          setItemsImage((t) =>
                            t.map(({ description, ...rest }, i) =>
                              i === index
                                ? { description: text, ...rest }
                                : { description, ...rest }
                            )
                          );
                        }}
                        placeholder={`أدخل التفاصيل`}
                        label={`التفاصيل`}
                      />
                    </div>
                    <div>
                      <strong className="text">الصورة {index + 1}</strong>
                      <FileInput
                        getValues={getValues}
                        onChange={(file) => {
                          setItemsImage((t) =>
                            t.map(({ image, ...rest }, i) =>
                              i === index
                                ? { ...rest, image: file }
                                : { ...rest, image }
                            )
                          );
                        }}
                        label="ارفع الصورة "
                        text="اسحب هنا او اضغط لرفع الصور"
                        className="mt-4"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <div className="my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8">
        <Description
          title="آراء العملاء"
          details="أدخل المعلومات المتخصصة حول آراء العملاء لمنتجك"
          className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5"
        />
        <div className="p-5 md:p-8 shadow rounded flex flex-col justify-between space-y-6 w-full">
          <div className="grid w-full sm:grid-cols-2 my-6 gap-6">
            <SelectInput
              name="homepage.feedbacks.has_feedbacks"
              control={control}
              data={["true", "false"]}
              placeholder="هل ستكتب آراء العملاء؟"
              label="وضع الآراء"
              required
              searchable
              error={errors?.homepage?.feedbacks?.has_feedbacks?.message}
              dropdownPosition="top"
              value={hasFeedbacks.toString()}
              onChange={(e) => setHasFeedbacks(e === "true")}
            />
          </div>
          {hasFeedbacks && (
            <>
              <div className="grid w-full sm:grid-cols-2 my-6 gap-6">
                <Input
                  {...register("homepage.feedbacks.title")}
                  placeholder="أدخل العنوان (مثل: ماذا قال زبائننا عن منتجاتنا؟ )"
                  label="العنوان"
                />
                <Input
                  {...register("homepage.feedbacks.reviews_number")}
                  placeholder="أدخل عدد التقييمات"
                  label="عدد التقييمات"
                  error={errors?.homepage?.feedbacks?.reviews_number?.message}
                />
              </div>
              <div className="grid w-full sm:grid-cols-2 my-6 gap-6">
                <Input
                  {...register("homepage.feedbacks.reviews_average")}
                  placeholder="أدخل معدل التقييمات ( مثل 4.6 )"
                  label="معدل التقييمات"
                  error={errors?.homepage?.feedbacks?.reviews_average?.message}
                />
              </div>
              <h2 className="font-black text-base my-6 text-btn-dark">
                الآراء
              </h2>
              {reviews.map(({ name, feedback }, index) => (
                <div
                  key={`الرأي ${index}`}
                  className="grid w-full sm:grid-cols-2 my-6 gap-6">
                  <Input
                    value={name}
                    onChange={(e) => {
                      const text = e.target.value;
                      setReviews((t) =>
                        t.map(({ name, ...rest }, i) =>
                          i === index
                            ? { name: text, ...rest }
                            : { name, ...rest }
                        )
                      );
                    }}
                    placeholder={`أدخل الاسم ${index + 1}`}
                    label={`الاسم ${index + 1}`}
                  />
                  <TextArea
                    value={feedback}
                    onChange={(e) => {
                      const text = e.target.value;
                      setReviews((t) =>
                        t.map(({ feedback, ...rest }, i) =>
                          i === index
                            ? { feedback: text, ...rest }
                            : { feedback, ...rest }
                        )
                      );
                    }}
                    placeholder={`أدخل الرأي`}
                    label={`الرأي`}
                  />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      <div className="my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8">
        <Description
          title="معلومات الشريط السفلي"
          details="أدخل المعلومات حول الشريط السفلي"
          className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5"
        />
        <div className="p-5 md:p-8 shadow rounded flex flex-col justify-between space-y-6 w-full">
          {footer.map(({ id, text, label }, index) => (
            <div key={id} className="grid w-full sm:grid-cols-2 my-6 gap-6">
              <Input
                value={label}
                onChange={(e) => {
                  const text = e.target.value;
                  setFooter((t) =>
                    t.map(({ label, ...rest }, i) =>
                      i === index
                        ? { label: text, ...rest }
                        : { label, ...rest }
                    )
                  );
                }}
                placeholder={`أدخل المعلومة (مثل رقم الهاتف)`}
                label={`المعلومة ${index + 1}`}
              />
              <Input
                value={text}
                onChange={(e) => {
                  const text = e.target.value;
                  setFooter((t) =>
                    t.map(({ info, ...rest }, i) =>
                      i === index ? { info: text, ...rest } : { info, ...rest }
                    )
                  );
                }}
                placeholder={`أدخل نص المعلومة (مثل 05550555)`}
                label={`نص المعلومة ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      <button className="btn" type="submit">
        حفظ
      </button>
    </form>
  );
}
