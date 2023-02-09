import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import { ROUTES } from "./utils/routes";
import OrderInfo from "./pages/order-info";
import CustomerInfo from "./pages/customer-info";
import Success from "./pages/success";
import Home from "./pages/home";
import { ThemeProvider } from "./utils/theme.context";
import { DataProvider } from "./utils/data.context";
import Dashboard from "./pages/admin/dashboard";
import Error from "./pages/error";
import PageInfo from "./pages/admin/page-info";
import Main from "./dashboard/components/dashHome";

function App() {
  return (
    <ThemeProvider>
      <DataProvider>
        <Router>
          <Routes>
            <Route path={ROUTES.DASHBOARD} element={<Dashboard />}>
              <Route index element={<Main />}></Route>
              <Route element={<PageInfo />} path={ROUTES.PAGE_INFO}></Route>
            </Route>
            <Route path={ROUTES.HOME} element={<Navbar />}>
              <Route index element={<Home />}></Route>
              <Route
                path={ROUTES.CUSTOMER_INFO}
                element={<CustomerInfo />}></Route>
              <Route path={ROUTES.ORDER_INFO} element={<OrderInfo />}></Route>
              <Route path={ROUTES.SUCCESS} element={<Success />}></Route>
              <Route path="*" element={<Error />}></Route>
            </Route>
          </Routes>
        </Router>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
