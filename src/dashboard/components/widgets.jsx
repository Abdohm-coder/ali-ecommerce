import { ActionIcon, Group, Paper } from "@mantine/core";
import { doc, updateDoc } from "firebase/firestore";
import { TbRefreshAlert } from "react-icons/tb";
import { db } from "../../firebase/firebase-config";
import { useDashDataContext } from "./dashData.context";

function Widgets({ data }) {
  const { visits, orders } = data;
  return (
    <section className="flex flex-col md:flex-row gap-4 w-full my-8">
      <Widget title={"عدد الزيارات"} type="visits" data={visits} />
      <Widget title={"عدد الطلبات"} type="orders" data={orders} />
    </section>
  );
}

function Widget({ title, data, type }) {
  const { setStaticsData } = useDashDataContext();

  const reset = (type) => {
    const staticsDataDoc = doc(db, "statics", "general-statics");
    updateDoc(staticsDataDoc, { [type]: 0 }).then((Success) =>
      setStaticsData((prevStatics) => ({ ...prevStatics, [type]: 0 }))
    );
  };

  return (
    <Paper
      shadow="xs"
      radius={6}
      className="flex flex-col flex-1 h-32 p-2 border-[1px] border-light">
      <Group position="apart">
        <h3 className="text-dark">{title}</h3>
        <ActionIcon size="xs" color="red" onClick={() => reset(type)}>
          <TbRefreshAlert />
        </ActionIcon>
      </Group>
      <div className="grid place-items-center h-full flex-1 ">
        <p className="text-4xl">{data}</p>
      </div>
    </Paper>
  );
}

export default Widgets;
