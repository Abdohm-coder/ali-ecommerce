// import { createContext, useContext, useState, useEffect } from "react";
// import {
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from "firebase/auth";

// import { auth } from "../firebase/firebase-config";

// export const userAuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState({});

//   function logIn(email, password) {
//     return signInWithEmailAndPassword(auth, email, password);
//   }

//   function logOut() {
//     return signOut(auth);
//   }

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
//       console.log("Auth", currentuser);
//       setUser(currentuser);
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);
//   return (
//     <userAuthContext.Provider value={{ user, logIn, signUp, logOut }}>
//       {children}
//     </userAuthContext.Provider>
//   );
// };

// export function useUserAuth() {
//   return useContext(userAuthContext);
// }
