import { LayoutDashboard, MapPin, Plus, Settings } from "lucide-react";

export const items = [
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
    title: "Neue erstellen",
    icon: Plus,
    url: "/create-new",
  },
  {
    title: "Einstellungen",
    icon: Settings,
    url: "/settings",
  },
];
