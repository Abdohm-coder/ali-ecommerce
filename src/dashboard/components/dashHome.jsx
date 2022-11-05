import Widgets from "./widgets";
import OrdersTable from "./ordersTable";
import { Button, Group } from "@mantine/core";
import { useState } from "react";
import { Modal } from "@mantine/core";
import ProductForm from "./product-form";

function Main() {
  const [opened, setOpened] = useState(false);
  return (
    <div>
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
      <Widgets />
      <OrdersTable />
      <Modal
        size="lg"
        opened={opened}
        withCloseButton={false}
        title="تفاصيل المنتج">
        <ProductForm setOpened={setOpened} />
      </Modal>
      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
    </div>
  );
}

export default Main;
