import { LayoutDashboard, MapPin, Plus, Settings } from "lucide-react";

export const getSidebarItems = (actions: { onCreateSpot: () => void }) => [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    url: "/",
  },
  {
    title: "Gebetsorte",
    icon: MapPin,
    url: "/all-spots",
  },
  {
    title: "Neu erstellen",
    icon: Plus,
    onClick: actions.onCreateSpot,
  },
  {
    title: "Einstellungen",
    icon: Settings,
    url: "/settings",
  },
];
