import { createContext, useContext, useState } from "react";
import { data } from "../data/assets";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [order, setOrder] = useState();
  const [assets, setAssets] = useState(data);
  return (
    <DataContext.Provider value={{ order, setOrder, assets }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};
