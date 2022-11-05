import Widgets from "./widgets"
import OrdersTable from "./ordersTable";

function Main() {
  return (
    <div><h1 className="text-3xl">أهلا بك في لوحة التحكم</h1>
    <Widgets />
    <OrdersTable /></div>
  )
}

export default Main