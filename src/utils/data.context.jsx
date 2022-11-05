import { createContext, useContext, useState } from "react";
import { data } from "../data/page-info.js";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [order, setOrder] = useState({}); // POST API
  const [pageInfo, setPageInfo] = useState(data); // GET API

  return (
    <DataContext.Provider value={{ order, setOrder, pageInfo }}>
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
