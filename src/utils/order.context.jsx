import { createContext, useContext, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orderProps, setOrderProps] = useState();
  return (
    <OrderContext.Provider value={{ orderProps, setOrderProps }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error("useOrderContext must be used within a OrderProvider");
  }
  return context;
};
