import { Outlet } from "react-router-dom";

function DashWrapper() {
  return (
    <section className="flex-1 py-32 p-8 overflow-x-auto">
      <Outlet />
    </section>
  );
}

export default DashWrapper;
