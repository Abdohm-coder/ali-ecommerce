import OrdersTable from "./components/ordersTable";
import Widgets from "./components/widgets";

function DashWrapper() {
  return (
    <section className="flex-1 my-32 p-8 overflow-x-auto">
      <h1 className="text-3xl">أهلا بك في لوحة التحكم</h1>
      <Widgets />
      <OrdersTable />
    </section>
  );
}

export default DashWrapper;
