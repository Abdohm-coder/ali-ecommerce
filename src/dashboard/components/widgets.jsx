import { Paper } from "@mantine/core";

function Widgets() {
  return (
    <section className="flex flex-col md:flex-row gap-4 w-full my-8">
      <Widget title={"عدد الزيارات"} data={89} />
      <Widget title={"عدد الطلبات"} data={89} />
    </section>
  );
}

function Widget({ title, data }) {
  return (
    <Paper
      shadow="xs"
      radius={6}
      className="flex flex-col flex-1 h-32 p-2 border-[1px] border-light">
      <h3 className="text-dark">{title}</h3>
      <div className="grid place-items-center h-full flex-1 ">
        <p className="text-4xl">{data}</p>
      </div>
    </Paper>
  );
}

export default Widgets;
