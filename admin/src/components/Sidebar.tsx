import { useNavigate } from "react-router-dom";

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
import { logo } from "../assets";
import { items } from "@/constants/SidebarItems";

function AppSidebar() {
  const navigate = useNavigate();

  return (
    <Sidebar
      collapsible="none"
      className="border-r h-screen w-75"
      style={{
        borderColor: "hsl(var(--border) / 0.4)",
        backgroundColor: "hsl(var(--background))",
      }}
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
            <img
              src={logo}
              alt="Logo"
              width={36}
              height={36}
              className="rounded-md"
            />
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

      <SidebarSeparator className="mx-4" />

      <SidebarContent className="px-3 py-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="cursor-pointer">
                  <SidebarMenuButton
                    asChild
                    className="active:scale-[0.98] transition-all"
                  >
                    <div
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg group hover:bg-[hsl(var(--accent)/0.5)]"
                      onClick={() => navigate(item.url)}
                    >
                      <item.icon
                        className="w-5 h-5 transition-colors"
                        style={{ color: "hsl(var(--muted-foreground))" }}
                      />
                      <span
                        className="text-sm font-medium group-hover:text-[hsl(var(--foreground))]"
                        style={{ color: "hsl(var(--foreground) / 0.9)" }}
                      >
                        {item.title}
                      </span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarSeparator className="mx-4" />

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
              admin@prayspot.app
            </p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
