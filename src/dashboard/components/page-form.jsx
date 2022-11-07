import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import SelectInput from "../../components/select-input";
import Description from "../../components/ui/description";
import FileInput from "../../components/ui/file-input";
import Input from "../../components/ui/input";
import TextArea from "../../components/ui/textarea";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { arrayUnion, doc, Firestore, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebase/firebase-config";
import {
  deleteObject,
  getDownloadURL,
  listAll,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { useEffect } from "react";
import { data } from "../../data/page-info";
import { Button } from "@mantine/core";

const pageschema = yup.object().shape({
  hero: yup.object().shape({
    title: yup.string().required("العنوان الرئيسي مطلوب"),
    // images: yup.array().of(yup.object()),
  }),
  features: yup.object().shape({
    has_features: yup.boolean().required("هذا الحقل مطلوب"),
  }),
  feedbacks: yup.object().shape({
    has_feedbacks: yup.boolean().required("هذا الحقل مطلوب"),
    reviews_number: yup.number().typeError("يجب أن يكون رقما فقط"),
    reviews_average: yup.number().typeError("يجب أن يكون رقما فقط"),
  }),
});
const emptyFooter = {
  id: uuidv4(),
  label: "",
  text: "",
};

const emptyItemsImage = {
  id: uuidv4(),
  title: "",
  description: "",
  image: {},
};

const emptyItem = {
  id: uuidv4(),
  title: "",
};

const defaultValues = {
  hero: {
    images: [],
    title: "",
  },
  features: {
    has_features: false,
    title: "",
    description: "",
    items_with_image: [emptyItemsImage],
    images: [],
  },
  feedbacks: {
    has_feedbacks: false,
    title: "",
    reviews_number: 0,
    reviews_average: 0,
  },
  footer: [emptyFooter],
};

export default function PageInfoForm({ initialData }) {
  const pageInfoDataDoc = doc(db, "page-info", "homepage");
  const [reviews, setReviews] = useState(
    initialData?.feedbacks?.reviews?.length > 0
      ? initialData?.feedbacks?.reviews
      : [
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
    (initialData?.feedbacks?.has_feedbacks !== undefined &&
      initialData?.feedbacks?.has_feedbacks) ||
      false
  );
  const [hasFeatures, setHasFeatures] = useState(
    (initialData?.features?.has_features !== undefined &&
      initialData?.features?.has_features) ||
      false
  );
  const [images, setImages] = useState(initialData?.features?.images || []);

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

  const {
    fields: footer,
    append: appendFooter,
    remove: removeFooter,
  } = useFieldArray({
    control,
    name: "footer",
  });

  const {
    fields: items_image,
    append: appendItems,
    remove: removeItems,
  } = useFieldArray({
    control,
    name: "features.items_with_image",
  });

  const {
    fields: items,
    append: appendItem,
    remove: removeItem,
  } = useFieldArray({
    control,
    name: "features.items_non_image",
  });

  useEffect(() => {
    // HERO Delete unnicessries images
    const hero_deleteRef = ref(storage, "hero/");
    listAll(hero_deleteRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item)
          .then((url) => {
            if (!getValues("hero.images").includes(url)) {
              deleteObject(ref(storage, item.fullPath))
                .then()
                .catch(() => toast.warn("أوبس، هناك خطأ"));
            }
          })
          .catch(() => toast.warn("أوبس، هناك خطأ"));
      });
    });

    // FEATURES Delete unnicessries images
    const deleteRef = ref(storage, "features/");
    listAll(deleteRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item)
          .then((url) => {
            if (!images.includes(url)) {
              deleteObject(ref(storage, item.fullPath))
                .then()
                .catch(() => toast.warn("أوبس، هناك خطأ"));
            }
          })
          .catch(() => toast.warn("أوبس، هناك خطأ"));
      });
    });
    // FEATURES ITEMS WITH IMAGES Delete unnicessries images
    const deleteItemsRef = ref(storage, "items_with_image/");
    listAll(deleteItemsRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item)
          .then((url) => {
            items_image.forEach(({ image }) => {
              if (!image.includes(url)) {
                deleteObject(ref(storage, item.fullPath))
                  .then()
                  .catch(() => toast.warn("أوبس، هناك خطأ"));
              }
            });
          })
          .catch(() => toast.warn("أوبس، هناك خطأ"));
      });
    });
  }, []);

  const onSubmit = async (values) => {
    const { title: features_title, description } = values.features;
    const { title, reviews_number, reviews_average } = values.feedbacks;

    // Filter Feedbacks and featuers and footer
    const filter_footer = values?.footer?.filter(
      ({ label, text }) => label !== "" || text !== ""
    );
    const filter_reviews = reviews.filter(
      ({ name, feedback }) => name !== "" || feedback !== ""
    );
    const filter_items = values?.features?.items_non_image?.filter(
      ({ title }) => title !== ""
    );
    const filter_items_image = values?.features?.items_with_image?.filter(
      ({ title, description }) => title !== "" || description !== ""
    );

    // Upload Images
    // hero/images, features/images, features/items_with_images

    const uploadImage = () => {
      // Upload Hero Images
      let hero_items = [];
      values?.hero?.imagesvalues?.hero?.images
        .filter((image) => typeof image !== "string")
        .forEach((imageUpload) => {
          const imageRef = ref(storage, `hero/${imageUpload.name + uuidv4()}`);

          const uploadTask = uploadBytesResumable(imageRef, imageUpload);

          uploadTask.on(
            "state_changed",
            (snapshot) => {},
            () => toast.warn("أوبس، هناك خطأ"),
            () => {
              // download url
              getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                hero_items.push(url);
                updateDoc(pageInfoDataDoc, {
                  "hero.images": hero_items,
                })
                  .then(() => {})
                  .catch(() => toast.warn("أوبس، هناك خطأ"));
              });
            }
          );
        });
      // Upload Features Images
      let features_items = [];
      images
        .filter((image) => typeof image !== "string")
        .forEach((imageUpload) => {
          const imageRef = ref(
            storage,
            `features/${imageUpload.name + uuidv4()}`
          );

          const uploadTask = uploadBytesResumable(imageRef, imageUpload);

          uploadTask.on(
            "state_changed",
            (snapshot) => {},
            (err) => toast.warn("أوبس، هناك خطأ"),
            () => {
              // download url
              getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                features_items.push(url);
                updateDoc(pageInfoDataDoc, {
                  "features.images": features_items,
                })
                  .then(() => {})
                  .catch((err) => toast.warn("أوبس، هناك خطأ"));
              });
            }
          );
        });
      // Upload Features Items with Images
      hasFeatures
        ? filter_items_image
            .filter(({ image }) => typeof image !== "string")
            .forEach(({ image: imageUpload }, index) => {
              const imageRef = ref(
                storage,
                `items_with_image/${imageUpload?.name + uuidv4()}`
              );
              const uploadTask = uploadBytesResumable(imageRef, imageUpload);

              uploadTask.on(
                "state_changed",
                (snapshot) => {},
                (err) => toast.warn("أوبس، هناك خطأ"),
                () => {
                  // download url
                  getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    updateDoc(pageInfoDataDoc, {
                      "features.items_with_image": arrayUnion({
                        image: url,
                        id: filter_items_image[index].id,
                        title: filter_items_image[index].title,
                        description: filter_items_image[index].description,
                      }),
                    })
                      .then(() => {})
                      .catch((err) => toast.warn("أوبس، هناك خطأ"));
                  });
                }
              );
            })
        : null;
    };
    uploadImage();

    // POST input variable here to "page-info" collection

    updateDoc(pageInfoDataDoc, {
      "hero.title": values.hero.title,
      "features.has_features": hasFeatures,
      "features.title": hasFeatures ? features_title : "",
      "features.description": hasFeatures ? description : "",
      "features.items_non_image": hasFeatures ? filter_items : [],
      feedbacks: {
        has_feedbacks: hasFeedbacks,
        title: hasFeedbacks ? title : "",
        reviews_number: hasFeedbacks ? Number(reviews_number) : 0,
        reviews_average: hasFeedbacks ? Number(reviews_average) : 0,
        reviews: hasFeedbacks ? filter_reviews : [],
      },
      footer: filter_footer,
    })
      .then(() => {
        toast.success("مبروك، تم التعديل بنجاح");
      })
      .catch(() => toast.warn("أوبس، هناك خطأ"));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* <div className="my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8">
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
      </div> */}
      <div className="my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8">
        <Description
          title="الصفحة الرئيسية"
          details="أدخل المعلومات المتعلقة بالصفحة الرئيسية "
          className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5"
        />
        <div className="p-5 md:p-8 shadow rounded w-full">
          <div className="grid w-full sm:grid-cols-2 my-6 gap-6">
            <Input
              {...register("hero.title")}
              required
              placeholder="أدخل العنوان الرئيسي للصفحة"
              label="العنوان الرئيسي للصفحة"
              note="العنوان الرئيسي مطلوب"
              error={errors?.hero?.title?.message}
            />
            <div>
              <strong className="text">معرض الصور الأساسي</strong>
              <FileInput
                getValues={getValues}
                name="hero.images"
                setValue={setValue}
                multiple
                control={control}
                label="معرض الصور الأساسي"
                text="اسحب هنا او اضغط لرفع الصور"
                className="mt-4"
              />
              <strong className="text mt-4">معرض الصور الثاني</strong>
              <FileInput
                getValues={getValues}
                name="features.images"
                setValue={setValue}
                simple
                multiple
                control={control}
                onChange={setImages}
                label="معرض الصور الثاني"
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
              name="feedbacks.has_features"
              control={control}
              data={["true", "false"]}
              placeholder="هل ستكتب مميزات المنتوج؟"
              label="وضع مميزات المنتوج"
              required
              searchable
              error={errors?.features?.has_features?.message}
              dropdownPosition="top"
              value={hasFeatures.toString()}
              onChange={(e) => setHasFeatures(e === "true")}
            />
          </div>
          {hasFeatures && (
            <>
              <div className="grid w-full sm:grid-cols-2 my-6 gap-6">
                <Input
                  {...register("features.title")}
                  placeholder="أدخل عنوان مميزات المنتوج (مثل: مالذي يجعل وسادة نابوفا مميزة جدا؟)"
                  label="عنوان مميزات المنتوج"
                />
              </div>
              <h2 className="font-black my-6 text-base text-btn-dark">
                مميزات المنتوج
              </h2>
              <div className="w-full flex flex-wrap justify-end">
                <Button
                  variant="filled"
                  onClick={() =>
                    items.length > 3 ? {} : appendItem(emptyItem)
                  }
                  className="hover:bg-btn-dark bg-btn-dark/90 ml-3">
                  إضافة مميز
                </Button>
                <Button
                  variant="filled"
                  onClick={() => removeItem(items.length - 1)}
                  className="hover:bg-red-500 bg-red-600">
                  حذف مميز
                </Button>
              </div>
              <div className="grid w-full sm:grid-cols-2 my-6 gap-6">
                {items.map(({ id }, index) => (
                  <Input
                    key={id}
                    {...register(`features.items_non_image.${index}.title`)}
                    error={errors?.features?.items_non_image?.[index]?.title}
                    placeholder={`أدخل المميز ${index + 1}`}
                    label={`المميز ${index + 1}`}
                  />
                ))}
              </div>
              <h2 className="font-black text-base my-6 text-btn-dark">
                مميزات المنتوج مع الصور
              </h2>
              <div className="my-6 w-full">
                <div className="w-full flex flex-wrap justify-end">
                  <Button
                    variant="filled"
                    onClick={() =>
                      items_image.length > 2 ? {} : appendItems(emptyItemsImage)
                    }
                    className="hover:bg-btn-dark bg-btn-dark/90 ml-3">
                    إضافة مميز
                  </Button>
                  <Button
                    variant="filled"
                    onClick={() => removeItems(items_image.length - 1)}
                    className="hover:bg-red-500 bg-red-600">
                    حذف مميز
                  </Button>
                </div>
                {items_image.map(({ id }, index) => (
                  <div
                    key={id}
                    className="grid w-full sm:grid-cols-2 my-6 gap-6">
                    <div className="h-full space-y-6">
                      <Input
                        {...register(
                          `features.items_with_image.${index}.title`
                        )}
                        error={
                          errors?.features?.items_with_image?.[index]?.title
                        }
                        placeholder={`أدخل المميز ${index + 1 + items.length}`}
                        label={`مميز ${index + 1 + items.length}`}
                      />
                      <TextArea
                        {...register(
                          `features.items_with_image.${index}.description`
                        )}
                        error={
                          errors?.features?.items_with_image?.[index]
                            ?.description
                        }
                        placeholder={`أدخل التفاصيل`}
                        label={`التفاصيل`}
                      />
                    </div>
                    <div>
                      <strong className="text">الصورة {index + 1}</strong>
                      <FileInput
                        setValue={setValue}
                        name={`features.items_with_image.${index}.image`}
                        control={control}
                        getValues={getValues}
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
              name="feedbacks.has_feedbacks"
              control={control}
              data={["true", "false"]}
              placeholder="هل ستكتب آراء العملاء؟"
              label="وضع الآراء"
              required
              searchable
              error={errors?.feedbacks?.has_feedbacks?.message}
              dropdownPosition="top"
              value={hasFeedbacks.toString()}
              onChange={(e) => setHasFeedbacks(e === "true")}
            />
          </div>
          {hasFeedbacks && (
            <>
              <div className="grid w-full sm:grid-cols-2 my-6 gap-6">
                <Input
                  {...register("feedbacks.title")}
                  placeholder="أدخل العنوان (مثل: ماذا قال زبائننا عن منتجاتنا؟ )"
                  label="العنوان"
                />
                <Input
                  {...register("feedbacks.reviews_number")}
                  placeholder="أدخل عدد التقييمات"
                  label="عدد التقييمات"
                  error={errors?.feedbacks?.reviews_number?.message}
                />
              </div>
              <div className="grid w-full sm:grid-cols-2 my-6 gap-6">
                <Input
                  {...register("feedbacks.reviews_average")}
                  placeholder="أدخل معدل التقييمات ( مثل 4.6 )"
                  label="معدل التقييمات"
                  error={errors?.feedbacks?.reviews_average?.message}
                />
              </div>
              <h2 className="font-black text-base my-6 text-btn-dark">
                الآراء
              </h2>
              {reviews?.map(({ name, feedback }, index) => (
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
          <div className="w-full flex flex-wrap justify-end">
            <Button
              variant="filled"
              onClick={() =>
                footer.length > 2 ? {} : appendFooter(emptyFooter)
              }
              className="hover:bg-btn-dark bg-btn-dark/90 ml-3">
              إضافة معلومة
            </Button>
            <Button
              variant="filled"
              onClick={() => removeFooter(footer.length - 1)}
              className="hover:bg-red-500 bg-red-600">
              حذف معلومة
            </Button>
          </div>
          {footer.map(({ id }, index) => (
            <div key={id} className="grid w-full sm:grid-cols-2 my-6 gap-6">
              <Input
                {...register(`footer.${index}.label`)}
                error={errors?.footer?.[index]?.label}
                placeholder={`أدخل المعلومة (مثل رقم الهاتف)`}
                label={`المعلومة ${index + 1}`}
              />
              <Input
                {...register(`footer.${index}.text`)}
                error={errors?.footer?.[index]?.text}
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
