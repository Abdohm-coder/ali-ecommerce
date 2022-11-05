import Widgets from "./widgets";
import OrdersTable from "./ordersTable";
import { useState } from "react";
import { Modal, Button, Group } from "@mantine/core";

function Main() {
  const [opened, setOpened] = useState(false);

  return (
    <div>
      <Group position="apart">
        <h1 className="text-3xl">أهلا بك في لوحة التحكم</h1>
        <Button
          className="bg-dar text-btn-dark"
          radius={6}
          size="md"
          onClick={() => setOpened(true)}>
          Edit Product
        </Button>
      </Group>
      <Widgets />
      <OrdersTable />
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce aminn!">
        <h1>hello war</h1>
      </Modal>
      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
    </div>
  );
}

export default Main;
