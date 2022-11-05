import { useState } from "react";
import { useForm } from "react-hook-form";
import Description from "../../components/ui/description";
import FileInput from "../../components/ui/file-input";
import Input from "../../components/ui/input";

const defaultValues = {
  homepage: {
    hero: {
      images: [],
      title: "وسادة نابوفا الطبية",
      offer_script: "",
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
      title: "ما الذي يجعل وسادة نابوفا مميزة جدا؟",
      description:
        "تتميز مادة المايكروفايبر بأنها ناعمة وداعمة في نفس الوقت، إذن فهي تحتضن الرأس والرقبة بلطف مع دعم عدم الضغط، ستنام بشكل مريح بغض النظر وعن وضعية نومك المفضلة.",
      images: [
        "https://images.unsplash.com/photo-1625266008996-67bc5f9ffb40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        ,
        "https://images.unsplash.com/photo-1548484352-dc0b3cc1bca4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
      ],
      items_non_image: [
        {
          id: "",
          title: "مناسبة للحساسية المفرطة",
        },
        {
          id: "",
          title: "🇪🇸 جودة إسبانية ممتازة",
        },
        {
          id: "",
          title: "مستخدمة في أرقى الفنادق",
        },
        {
          id: "",
          title: "مصنوعة لتدوم",
        },
      ],
      items_with_image: [
        {
          id: "",
          image:
            "https://images.unsplash.com/photo-1626218174358-7769486c4b79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
          title: "تبقى باردة طوال الليل 🥶",
          description:
            "يعمل الميكروفايبر كشبكة تهوية ماصة للرطوبة يتيح تدفق الهواء بشكل مستمر حتى تتمكن من الحفاظ على برودة الراس طوال الليل.",
        },
        {
          id: "",
          image:
            "https://images.unsplash.com/photo-1626218174358-7769486c4b79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
          title: "فائقة التحمل 💪🏻",
          description:
            "مصنعة من نسيج الميكروفايبر الذاكري، الذي يتميز بالمتانة الفائقة ، و يجعل الوسادة تحافظ على شكلها ليلة بعد ليلة.",
        },
      ],
    },
    feedbacks: {
      title: "ماذا قال زبائننا عن منتجاتنا؟",
      reviews_number: 242,
      reviews_average: 4.6,
      reviews: [
        {
          id: "",
          name: "Fatma, Boumerdes",
          avatar: null,
          feedback:
            "اليوم 60 ليلة من استعمالي لنابوفا , خليني نكون صريحة طولت باه والفت بيها لكن غير توالفها مابدلوهاش ,أكثر حاجا عجبتني القماش لي مخدومة بيها تاع صيف يعطيك واحد الاحساس تاع البرود في الراسو الرقبة ننصحكم بيها لبنات",
        },
        {
          id: "",
          name: "Rachid, Tizi Ouzou",
          avatar: null,
          feedback:
            "j'en ai commandé 2 avec 20% de réduction et ils ont été livrés en 48h L'oreiller le plus confortable de tous les temps",
        },
        {
          id: "",
          name: "Hanan, Alger",
          avatar: null,
          feedback: "Très confortable avec bonus de réduction des allergies",
        },
        {
          id: "",
          name: "Melina, Bedjaia",
          avatar: null,
          feedback:
            "J'adore ! dima noudh sbah b les douleurs au cou et aux épaules. J'utilise mon oreiller depuis quelques semaines maintenant et je n'ai plus de douleurs ! Le meilleur oreiller que j'ai eu !",
        },
        {
          id: "",
          name: "Farid, Batna",
          avatar: null,
          feedback:
            "Il garde ma tête plus fraîche tt la nuit et me fournit le soutien parfait",
        },
      ],
    },
  },
};

export default function PageInfoForm() {
  const [items, setItems] = useState(["", "", "", ""]);
  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  console.log(items);

  const onSubmit = async (values) => {
    console.log(values);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8">
        <Description
          title="الشعار ( Logo )"
          details="أدخل شعار مشروعك بالوضع الليلي والنهاري"
          className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5"
        />
        <div className="p-5 md:p-8 shadow rounded flex flex-wrap justify-between space-y-2 w-full">
          <FileInput
            setValue={setValue}
            name="logo.dark_mode"
            control={control}
            label="الشعار في الوضع الليلي"
            text="اسحب هنا او اضغط لرفع الشعار في الوضع الليلي"
          />
          <FileInput
            name="logo.light_mode"
            setValue={setValue}
            control={control}
            label="الشعار في الوضع النهاري"
            text="اسحب هنا او اضغط لرفع الشعار في الوضع النهاري"
          />
        </div>
      </div>
      <div className="my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8">
        <Description
          title="الصفحة الرئيسية"
          details="أدخل المعلومات المتعلقة بالصفحة الرئيسية "
          className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5"
        />
        <div className="p-5 md:p-8 shadow rounded w-full">
          <div className="grid sm:grid-cols-2 my-4 gap-6">
            <Input
              {...register("homepage.hero.title")}
              required
              placeholder="أدخل العنوان الرئيسي للصفحة"
              label="العنوان الرئيسي للصفحة"
              note="العنوان الرئيسي مطلوب"
              error={errors?.title?.message}
            />
            <div>
              <strong className="text">معرض الصور الأساسي</strong>
              <FileInput
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
          <div className="grid sm:grid-cols-2 my-4 gap-6">
            <Input
              {...register("homepage.features.title")}
              placeholder="أدخل عنوان مميزات المنتوج (مثل: مالذي يجعل وسادة نابوفا مميزة جدا؟)"
              label="عنوان مميزات المنتوج"
              error={errors?.title?.message}
            />
            <div>
              <strong className="text">معرض الصور الثاني</strong>
              <FileInput
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
          <h2 className="text font-black text-base">مميزات المنتوج</h2>
          <div className="grid sm:grid-cols-2 my-4 gap-6">
            {items.map((_, index) => (
              <Input
                onChange={(e) => {
                  const text = e.target.value;
                  setItems((t) => t.map((e, i) => (i === index ? text : e)));
                }}
                placeholder={`أدخل المميز ${index + 1}`}
                label={`المميز ${index + 1}`}
                error={errors?.title?.message}
              />
            ))}
          </div>
        </div>
      </div>

      <button type="submit">حفظ</button>
    </form>
  );
}
