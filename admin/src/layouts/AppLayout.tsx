import { Outlet } from "react-router";

import Sidebar from "@/components/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

function AppLayout() {
  return (
    <SidebarProvider>
      <TooltipProvider delayDuration={400} disableHoverableContent>
        <Sidebar />
        <main className="flex-1">
          <Outlet />
        </main>
      </TooltipProvider>
    </SidebarProvider>
  );
}

export default AppLayout;
