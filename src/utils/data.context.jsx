import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { useMemo } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { data } from "../data/page-info.js";
import { db } from "../firebase/firebase-config.js";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [order, setOrder] = useState({}); // POST API
  const [pageInfo, setPageInfo] = useState(); // GET API
  // console.log(collectionRef)

  useEffect(() => {
    const pageInfoDoc = doc(db, "page-info", "homepage");
    const data = getDoc(pageInfoDoc).then((doc) => {
      const items = [];
      setPageInfo(doc.data());
      if (items.lenght > 0) {
        setOrder((state) => ({
          ...state,
          product_name: items[0]?.product?.product_name,
        }));
      }
    });
  }, []);
  console.log(pageInfo);

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
