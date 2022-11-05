import { MantineProvider } from "@mantine/core";
import DashNavbar from "../dashboard/components/dashNavbar";
import DashWrapper from "../dashboard/dashWrapper";

function Dashboard() {
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
