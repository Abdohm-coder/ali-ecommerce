import Widgets from "./widgets";
import OrdersTable from "./ordersTable";
import { Button, Divider, Group } from "@mantine/core";
import { useState } from "react";
import { Modal } from "@mantine/core";
import ProductForm from "./product-form";
import Pixel from "./pixel";
import { useDashDataContext } from "./dashData.context";

function Main() {
  const { ordersData, staticsData, setStaticsData } = useDashDataContext();
  const [opened, setOpened] = useState(false);

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
      <Widgets data={staticsData} />
      <Pixel />
      <OrdersTable orders={ordersData} />
      <Modal
        size="lg"
        opened={opened}
        withCloseButton={false}
        title="تفاصيل المنتج">
        <ProductForm initialData={{}} setOpened={setOpened} />
      </Modal>
      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
    </div>
  );
}

export default Main;
