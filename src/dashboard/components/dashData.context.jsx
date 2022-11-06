import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { useMemo } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../../firebase/firebase-config";

export const DashDataContext = createContext();

export const DashDataProvider = ({ children }) => {
  const [ordersData, setOrdersData] = useState([]); // GET API
  const [staticsData, setStaticsData] = useState({ visits: 0, orders: 0 }); // GET API
  const [pageInfo, setPageInfo] = useState(); // GET API

  // Get Dashboard Data
  function getDashData() {
    const ordersDataDoc = doc(db, "orders", "ORDERS-DATA");
    const staticsDataDoc = doc(db, "statics", "general-statics");
    const pageInfoDataDoc = doc(db, "page-info", "homepage");

    getDoc(staticsDataDoc).then((res) =>
      setStaticsData({ visits: res.data().visits, orders: res.data().orders })
    );

    getDoc(ordersDataDoc).then((res) => setOrdersData(res.data().orders));
  }

  useEffect(() => {
    getDashData();
  }, []);

  return (
    <DashDataContext.Provider
      value={{
        ordersData,
        staticsData,
        setStaticsData,
        pageInfo,
      }}>
      {children}
    </DashDataContext.Provider>
  );
};

export const useDashDataContext = () => {
  const context = useContext(DashDataContext);
  if (context === undefined) {
    throw new Error("useDashDataContext must be used within a DataProvider");
  }
  return context;
};
