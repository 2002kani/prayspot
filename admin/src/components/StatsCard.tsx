import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title?: string;
  value?: string | number;
  subtitle?: string;
  icon: LucideIcon;
  className?: string;
}

export function StatsCard({
  title,
  value,
  subtitle,
  icon: Icon,
  className,
}: StatsCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl p-6 shadow-card border border-border/100 transition-all duration-300 hover:shadow-hover animate-slide-up",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-semibold text-foreground">{value}</p>
          {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
        </div>
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{
            color: "hsl(var(--primary))",
            background:
              "linear-gradient(to bottom right, hsl(var(--primary) / 0.2), hsl(var(--primary) / 0.1))",
          }}
        >
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
    </div>
  );
}
