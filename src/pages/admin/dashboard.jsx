import { MantineProvider } from "@mantine/core";
import DashSidebar from "../../dashboard/components/dash-sidebar";
import DashWrapper from "../../dashboard/dashWrapper";
import AuthenticationForm from "./login-form";
import { useThemeContext } from "../../utils/theme.context";
import { useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from "../../firebase/firebase-config";

function Dashboard() {
  const [user, setUser] = useState(false);

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    if (auth.currentUser) {
      setUser(auth.currentUser);
      setTheme("light");
    } else {
      const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
        setUser(currentuser);
      });
      setTheme("light");
      return () => {
        unsubscribe();
      };
    }
  }, []);

  const { setTheme } = useThemeContext();
  return !user ? (
    <AuthenticationForm logIn={logIn} />
  ) : (
    <MantineProvider>
      <main className="dashboard w-screen h-screen bg-white flex">
        <DashSidebar logOut={logOut} />
        <DashWrapper />
      </main>
    </MantineProvider>
  );
}

export default Dashboard;
