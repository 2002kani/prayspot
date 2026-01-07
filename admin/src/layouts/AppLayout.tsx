import { Outlet } from "react-router";

import Sidebar from "@/components/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState } from "react";
import CreatePrayspotDialog from "@/components/CreatePrayspotDialog";

function AppLayout() {
  const [open, setOpen] = useState(false);

  const onCreateSpot = () => {
    setOpen(!open);
  };

  return (
    <SidebarProvider>
      <TooltipProvider delayDuration={400} disableHoverableContent>
        <Sidebar onCreateSpot={onCreateSpot} />

        <main className="ml-[18%] flex-1">
          <Outlet />
        </main>

        <CreatePrayspotDialog open={open} onClose={onCreateSpot} />
      </TooltipProvider>
    </SidebarProvider>
  );
}

export default AppLayout;
