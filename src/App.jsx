import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import { ROUTES } from "./utils/routes";
import OrderInfo from "./pages/OrderInfo";
import CustomerInfo from "./pages/CustomerInfo";
import Success from "./pages/Success";
import Home from "./pages/Home";
import { ThemeProvider } from "./utils/theme.context";
import { OrderProvider } from "./utils/order.context";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <ThemeProvider>
      <OrderProvider>
        <Router>
          <Routes>
            <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
            <Route path={ROUTES.HOME} element={<Navbar />}>
              <Route index element={<Home />}></Route>
              <Route
                path={ROUTES.CUSTOMER_INFO}
                element={<CustomerInfo />}></Route>
              <Route path={ROUTES.ORDER_INFO} element={<OrderInfo />}></Route>
              <Route path={ROUTES.SUCCESS} element={<Success />}></Route>
            </Route>
          </Routes>
        </Router>
      </OrderProvider>
    </ThemeProvider>
  );
}

export default App;
