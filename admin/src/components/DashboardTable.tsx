import { MapPin } from "lucide-react";
import { formatDate } from "@/lib/utils";

import type { PrayspotMinDto } from "@/types/PrayspotMinDto";

interface IDashboardTableProps {
  spots: PrayspotMinDto[];
}

function DashboardTable({ spots }: IDashboardTableProps) {
  const recentSpots = spots?.slice(0, 5);

  return (
    <div className="bg-white rounded-xl shadow-card border border-border/50 overflow-hidden mt-8">
      <div className="px-6 py-4 border-b border-border">
        <h2 className="font-semibold text-foreground">Letzten Einträge</h2>
      </div>
      <div className="divide-y divide-border max-h-80 overflow-y-auto">
        {recentSpots?.map((spot: PrayspotMinDto, index: number) => (
          <div
            key={spot.id}
            className="px-6 py-4 flex items-center gap-4 hover:bg-muted/50 transition-colors animate-slide-up"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div
              className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0"
              style={{
                color: "hsl(var(--primary))",
                background:
                  "linear-gradient(to bottom right, hsl(var(--primary) / 0.2), hsl(var(--primary) / 0.1))",
              }}
            >
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground truncate">
                {spot.name}
              </p>
              <p className="text-sm text-muted-foreground">{spot.city}</p>
            </div>
            <div className="text-right">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  spot.isVerified
                    ? "bg-green-50 text-green-700"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {spot.isVerified ? "Verifiziert" : "Nicht verifiziert"}
              </span>
              <p className="text-xs text-muted-foreground mt-1 mr-2">
                {formatDate(spot.createdAt)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardTable;
