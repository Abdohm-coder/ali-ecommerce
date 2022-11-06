import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { useMemo } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { init, pageView } from "react-facebook-pixel";
import { data } from "../data/page-info.js";
import { db } from "../firebase/firebase-config.js";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [order, setOrder] = useState({}); // POST API
  const [pageInfo, setPageInfo] = useState(); // GET API

  const initFacebookPixel = async () => {
    let pixelIds = [];
    const pixelIdsDoc = doc(db, "page-info", "facebook-pixel");
    await getDoc(pixelIdsDoc).then((res) => {
      pixelIds = res.data().ids;
    });
    const options = {
      autoConfig: true,
      debug: false,
    };
    pixelIds.forEach((id) => {
      init(id, options);
    });
  };

  useEffect(() => {
    const visitsDoc = doc(db, "statics", "general-statics");
    initFacebookPixel();
    getDoc(visitsDoc).then((staticsData) =>
      updateDoc(visitsDoc, { visits: Number(staticsData.data().visits) + 1 })
    );
    const pageInfoDoc = doc(db, "page-info", "homepage");
    getDoc(pageInfoDoc).then((doc) => {
      const items = [];
      setPageInfo(doc.data());
      try {
        pageView();
      } catch {}
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
