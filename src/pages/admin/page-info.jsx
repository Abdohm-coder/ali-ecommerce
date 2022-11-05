import PageInfoForm from "../../dashboard/components/page-form";

export default function PageInfo() {
  return (
    <>
      <div className="py-5 sm:py-8 flex border-b border-dashed border-gray-200">
        <h1 className="text-lg font-semibold text-heading">معلومات الصفحة</h1>
      </div>
      <PageInfoForm />
    </>
  );
}
