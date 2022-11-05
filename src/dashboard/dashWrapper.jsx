import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function DashWrapper() {
  return (
    <section className="flex-1 py-32 p-4 sm:p-8 overflow-x-auto">
      <ToastContainer autoClose={2000} theme="colored" />
      <Outlet />
    </section>
  );
}

export default DashWrapper;
