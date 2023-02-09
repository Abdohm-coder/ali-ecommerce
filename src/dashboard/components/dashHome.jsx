import Widgets from "./widgets";
import OrdersTable from "./ordersTable";
import { Button, Divider, Group } from "@mantine/core";
import { useState } from "react";
import { Modal } from "@mantine/core";
import ProductForm from "./product-form";
import Pixel from "./pixel";
import { useDataContext } from "../../utils/data.context";
import { useEffect } from "react";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";

function Main() {
  const [opened, setOpened] = useState(false);
  const [orders, setOrders] = useState([]);
  const orderDoc = doc(db, "orders", "ORDERS-DATA");
  // GET ORDERS

  useEffect(() => {
    getDoc(orderDoc).then((doc) => {
      const items = [];
      items.push(doc.data());
      setOrders(
        items[0]?.orders.sort((prev, next) => next?.createdAt - prev?.createdAt)
      );
    });
  }, []);

  useEffect(() => {
    const unsub = onSnapshot(orderDoc, (doc) => {
      const items = [];
      items.push(doc.data());
      setOrders(
        [...items[0]?.orders].sort(
          (prev, next) => next?.createdAt - prev?.createdAt
        )
      );
    });
    return () => {
      unsub();
    };
  }, []);

  // WRAP PRODUCT DATA
  const { pageInfo } = useDataContext();
  const { product: defaultValues } = pageInfo;

  return (
    <div className="flex flex-col gap-4">
      <Group position="apart">
        <h1 className="text-3xl">أهلا بك في لوحة التحكم</h1>
        <Button
          className="bg-dark/90 hover:bg-dark text-white"
          radius={6}
          size="md"
          onClick={() => setOpened(true)}>
          Edit Product
        </Button>
      </Group>
      <Divider variant="solid" />
      <Widgets />
      <Pixel />
      <OrdersTable orders={orders} />
      {defaultValues && Object.keys(defaultValues).length === 0 ? (
        <Loading />
      ) : (
        <Modal
          size="lg"
          opened={opened}
          withCloseButton={false}
          title="تفاصيل المنتج">
          <ProductForm initialData={defaultValues} setOpened={setOpened} />
        </Modal>
      )}
    </div>
  );
}

export default Main;
