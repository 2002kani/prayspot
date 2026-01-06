import { useNavigate, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "./ui/sidebar";
import { getSidebarItems } from "@/constants/SidebarItems";
import { MapPin } from "lucide-react";
import { usePrayspots } from "@/hooks/useSpots";

interface IAppSidebarProps {
  onCreateSpot: () => void;
}

function AppSidebar({ onCreateSpot }: IAppSidebarProps) {
  const { data } = usePrayspots();
  const navigate = useNavigate();
  const location = useLocation();

  const items = getSidebarItems({ onCreateSpot });

  return (
    <Sidebar
      collapsible="none"
      className="bg-white border-r border-gray-200 h-screen w-[18%]"
    >
      <SidebarHeader className="px-6 py-5">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{
              background:
                "linear-gradient(to bottom right, hsl(var(--primary)), hsl(var(--primary) / 0.8))",
            }}
          >
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1
              className="font-semibold text-base tracking-tight"
              style={{ color: "hsl(var(--foreground))" }}
            >
              Prayspot
            </h1>
            <p
              className="text-xs"
              style={{ color: "hsl(var(--muted-foreground) / 0.7)" }}
            >
              Admin Panel
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarSeparator className="mx-0 h-px bg-gray-200" />

      <SidebarContent className="px-3 py-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {items.map((item) => {
                const active = item.url && location.pathname === item.url;

                return (
                  <SidebarMenuItem key={item.title} className="cursor-pointer">
                    <SidebarMenuButton asChild>
                      <div
                        onClick={() => {
                          if (item.onClick) {
                            item.onClick();
                          } else if (item.url) {
                            navigate(item.url);
                          }
                        }}
                        className={`flex items-center gap-3 px-3 py-5 rounded-lg group transition-colors
                    ${
                      active
                        ? "bg-[hsl(var(--accent)/0.9)]"
                        : "hover:bg-[hsl(var(--accent)/0.9)]"
                    }`}
                      >
                        <item.icon
                          className="w-5 h-5 transition-colors"
                          style={{
                            color: "hsl(var(--muted-foreground))",
                          }}
                        />
                        <span
                          className="text-base font-normal"
                          style={{
                            color: "hsl(var(--foreground) / 0.9)",
                          }}
                        >
                          {item.title}
                        </span>
                        {item.title === "Gebetsorte" && (
                          <span className="ml-auto text-xs text-muted-foreground">
                            {data?.length}
                          </span>
                        )}
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarSeparator className="mx-0 h-px bg-gray-200" />

      <SidebarFooter className="p-3">
        <div className="flex items-center gap-3 px-3 py-2.5 cursor-pointer rounded-lg transition-all group hover:bg-[hsl(var(--accent)/0.5)]">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{
              background:
                "linear-gradient(to bottom right, hsl(var(--primary) / 0.2), hsl(var(--primary) / 0.1))",
            }}
          >
            <span
              className="text-xs font-semibold"
              style={{ color: "hsl(var(--primary))" }}
            >
              AD
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p
              className="text-sm font-medium"
              style={{ color: "hsl(var(--foreground))" }}
            >
              Admin
            </p>
            <p
              className="text-xs truncate"
              style={{ color: "hsl(var(--muted-foreground) / 0.7)" }}
            >
              duha@yrm.com
            </p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
