import { Home, MapPin } from "lucide-react";
import type { SpotType } from "@/types/SpotType";

export const spotTypeOptions: {
  value: SpotType;
  label: string;
  icon: React.ReactNode;
}[] = [
  { value: "MOSQUE", label: "Moschee", icon: <MapPin className="w-4 h-4" /> },
  {
    value: "PRAYER_ROOM",
    label: "Gebetsraum",
    icon: <Home className="w-4 h-4" />,
  },
];
