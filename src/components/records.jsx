import { useDataContext } from "../utils/data.context";

export default function Records() {
  const { pageInfo } = useDataContext();
  const records = pageInfo?.homepage?.records;
  return (
    <section>
      <div className="flex w-full mb-8">
        <div className="grid grid-cols-3 w-full">
          {records?.map(({ id, icon, text, span }) => (
            <div
              className="flex flex-col items-center !text-dark dark:!text-white"
              key={id}>
              <div
                className="icon"
                dangerouslySetInnerHTML={{ __html: icon }}
              />
              <strong className="text-center text-xl text-pink-500">
                {span}
              </strong>
              <strong className="text-center text-lg">{text}</strong>
            </div>
          ))}
        </div>
      </div>
      <hr className="opacity-20" />
    </section>
  );
}
