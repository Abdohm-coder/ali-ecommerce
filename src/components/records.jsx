import { Paper } from "@mantine/core";
import { useDataContext } from "../utils/data.context";

export default function Records() {
  const { pageInfo } = useDataContext();
  const records = pageInfo?.records;
  return (
    <section>
      <div className="flex w-full mb-8">
        <div className="grid grid-cols-3 w-full">
          {records?.map(({ id, icon, text, span }) => (
            <div
              className="flex flex-col items-center !text-dark dark:!text-white"
              key={id}>
              <Paper
                shadow={"md"}
                className=" mb-3 rounded-full w-24 h-24 flex flex-col justify-center items-center dark:bg-dark bg-white ">
                <div
                  className="icon text-pink-800 "
                  dangerouslySetInnerHTML={{ __html: icon }}
                />
                <strong className="text-center text-xl dark:text-btn-light text-btn-dark">
                  {span}
                </strong>
              </Paper>
              <strong className="text-center text-md">{text}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
