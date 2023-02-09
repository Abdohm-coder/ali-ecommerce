import PageInfoForm from "../../dashboard/components/page-form";
import { useDataContext } from "../../utils/data.context";
import Loading from "../../components/ui/Loading";

export default function PageInfo() {
  const { pageInfo: defaultValues } = useDataContext();
  if (defaultValues && Object.keys(defaultValues).length === 0)
    return <Loading />;
  return (
    <>
      <div className="py-5 sm:py-8 flex border-b border-dashed border-gray-200">
        <h1 className="text-2xl font-semibold text-heading">معلومات الصفحة</h1>
      </div>
      <PageInfoForm initialData={defaultValues} />
    </>
  );
}
