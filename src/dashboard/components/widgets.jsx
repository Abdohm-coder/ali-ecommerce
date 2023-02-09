import { ActionIcon, Card, Group, Paper } from "@mantine/core";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { TbRefreshAlert } from "react-icons/tb";
import { db } from "../../firebase/firebase-config";

function Widgets() {
  const [staticsData, setStaticsData] = useState({ visits: 0, orders: 0 }); // GET API

  // Get Dashboard Data
  function getDashData() {
    const staticsDataDoc = doc(db, "statics", "general-statics");

    getDoc(staticsDataDoc).then((res) =>
      setStaticsData({ visits: res.data().visits, orders: res.data().orders })
    );
  }

  useEffect(() => {
    getDashData();
  }, []);

  const { visits, orders } = staticsData;
  return (
    <section className="flex flex-col md:flex-row gap-4 w-full my-8">
      <Widget
        title={"عدد الزيارات"}
        type="visits"
        setStaticsData={setStaticsData}
        data={visits}
      />
      <Widget
        title={"عدد الطلبات"}
        type="orders"
        setStaticsData={setStaticsData}
        data={orders}
      />
    </section>
  );
}

function Widget({ title, data, type, setStaticsData }) {
  const reset = (type) => {
    const staticsDataDoc = doc(db, "statics", "general-statics");
    updateDoc(staticsDataDoc, { [type]: 0 }).then((Success) =>
      setStaticsData((prevStatics) => ({ ...prevStatics, [type]: 0 }))
    );
  };
  return (
    <Card shadow="xs" p="lg" radius={6} className="flex flex-col flex-1">
      <Group position="apart">
        <h3 className="text-dark">{title}</h3>
        <ActionIcon size="xs" color="red" onClick={() => reset(type)}>
          <TbRefreshAlert />
        </ActionIcon>
      </Group>
      <div className="grid place-items-center h-full flex-1 ">
        <p className="text-4xl">{data}</p>
      </div>
    </Card>
  );
}

export default Widgets;
