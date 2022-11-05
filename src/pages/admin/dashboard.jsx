import { MantineProvider } from "@mantine/core";
import DashNavbar from "../../dashboard/components/dashNavbar";
import DashWrapper from "../../dashboard/dashWrapper";
import PageInfo from "./page-info";
import { useThemeContext } from "../../utils/theme.context";
import { useEffect } from "react";

function Dashboard() {
  const { setTheme } = useThemeContext();
  useEffect(() => {
    setTheme("light");
  }, []);
  return <PageInfo />;
  return (
    <MantineProvider>
      <main className="w-screen h-screen bg-white flex">
        <DashWrapper />
        <DashNavbar />
      </main>
    </MantineProvider>
  );
}

export default Dashboard;
