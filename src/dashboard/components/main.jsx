import Widgets from "./widgets";
import OrdersTable from "./ordersTable";
import { Button, Group } from "@mantine/core";

function Main() {
  return (
    <div>
      <Group position="apart">
        <Button className="bg-btn-dark text-btn-dark" radius={6} size="md">
          Edit Product
        </Button>
        <h1 className="text-3xl">أهلا بك في لوحة التحكم</h1>
      </Group>
      <Widgets />
      <OrdersTable />
    </div>
  );
}

export default Main;
