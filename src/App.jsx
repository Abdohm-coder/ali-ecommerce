import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ROUTES } from "./utils/routes";
import OrderInfo from "./pages/OrderInfo";
import CustomerInfo from "./pages/CustomerInfo";
import Success from "./pages/Success";
import Home from "./pages/Home";
import { ThemeProvider } from "./utils/theme.context";

function App() {
  return (
    <ThemeProvider>
      <main className="max-w-md mx-auto p-1 w-full h-full">
        <Navbar />
        <Router>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />}></Route>
            <Route
              path={ROUTES.CUSTOMER_INFO}
              element={<CustomerInfo />}></Route>
            <Route path={ROUTES.ORDER_INFO} element={<OrderInfo />}></Route>
            <Route path={ROUTES.SUCCESS} element={<Success />}></Route>
          </Routes>
        </Router>
      </main>
      {/* <Footer /> */}
    </ThemeProvider>
  );
}

export default App;
