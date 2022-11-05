import { useForm } from "react-hook-form";
import Description from "../../components/ui/description";
import FileInput from "../../components/ui/file-input";

export default function PageInfoForm() {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      logo: {
        dark_mode: "",
        light_mode: "",
      },
    },
  });
  console.log(setValue);

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
        <div className="p-5 md:p-8 shadow rounded">
          <FileInput
            name="logo"
            control={control}
            label="الشعار في الوضع الليلي"
            text="اسحب هنا او اضغط لرفع الشعار في الوضع الليلي"
          />
          {/* <FileInput
            name="dark_mode"
            control={control}
            label="الشعار في الوضع الليلي"
            text="اسحب هنا او اضغط لرفع الشعار في الوضع الليلي"
          /> */}
        </div>
      </div>
      <button type="submit">حفظ</button>
    </form>
  );
}
