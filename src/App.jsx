import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import { ROUTES } from "./utils/routes";
import OrderInfo from "./pages/OrderInfo";
import CustomerInfo from "./pages/CustomerInfo";
import Success from "./pages/Success";
import Home from "./pages/Home";
import { ThemeProvider } from "./utils/theme.context";
import Footer from "./components/footer";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="h-full min-h-screen pb-10">
        <section className="layout">
          <Router>
            <Routes>
              <Route element={<Home />}></Route>
              <Route path={ROUTES.DASHBOARD} element={<Dashboard />}></Route>
              <Route
                path={ROUTES.CUSTOMER_INFO}
                element={<CustomerInfo />}></Route>
              <Route path={ROUTES.ORDER_INFO} element={<OrderInfo />}></Route>
              <Route path={ROUTES.SUCCESS} element={<Success />}></Route>
            </Routes>
          </Router>
        </section>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
