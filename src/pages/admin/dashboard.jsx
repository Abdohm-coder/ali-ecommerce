import { MantineProvider } from "@mantine/core";
import DashSidebar from "../../dashboard/components/dash-sidebar";
import DashWrapper from "../../dashboard/dashWrapper";
import AuthenticationForm from "./login-form";
import { useThemeContext } from "../../utils/theme.context";
import { useEffect } from "react";

function Dashboard() {
  const { setTheme } = useThemeContext();
  useEffect(() => {
    setTheme("light");
  }, []);
  return <AuthenticationForm />;
  
  return (
    <MantineProvider>
      <main className="dashboard w-screen h-screen bg-white flex">
        <DashSidebar />
        <DashWrapper />
      </main>
    </MantineProvider>
  );
}

export default Dashboard;
