import { MantineProvider } from "@mantine/core";
import DashSidebar from "../../dashboard/components/dash-sidebar";
import DashWrapper from "../../dashboard/dashWrapper";
import PageInfo from "./page-info";
import { useThemeContext } from "../../utils/theme.context";
import { useEffect } from "react";

function Dashboard() {
  const { setTheme } = useThemeContext();
  useEffect(() => {
    setTheme("light");
  }, []);
  return (
    <MantineProvider>
      <main className="w-screen h-screen bg-white flex">
        <DashSidebar />
        <DashWrapper />
      </main>
    </MantineProvider>
  );
}

export default Dashboard;
