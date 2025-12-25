import type { Prayspot } from "@/types/Prayspot";
import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, MapPin, Copy, Navigation } from "lucide-react";

export const columns: ColumnDef<Prayspot>[] = [
  {
    accessorKey: "type",
    header: "Typ",
    cell: ({ row }) => {
      const type = row.getValue("type") as string;
      return (
        <div className="flex items-center gap-2">
          <span
            className={`text-xs font-normal text-gray-700 bg-[hsl(var(--accent)/0.9)] p-1 px-3 rounded-lg`}
          >
            {type}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const name = row.getValue("name") as string;
      return (
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-gray-400" />
          <span className="font-medium text-gray-900">{name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "address",
    header: "Adresse",
    cell: ({ row }) => {
      const address = row.getValue("address") as string;
      return <span className="text-gray-600">{address}</span>;
    },
  },
  {
    id: "actions",
    header: () => <span className="sr-only">Aktionen</span>,
    cell: ({ row }) => {
      const prayspot = row.original;

      return (
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="h-8 w-8 p-0 hover:bg-gray-100 transition-colors"
              >
                <span className="sr-only">Menü öffnen</span>
                <MoreHorizontal className="h-4 w-4 text-gray-600" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-56 bg-white border border-gray-200 shadow-lg"
            >
              <DropdownMenuLabel className="text-xs font-semibold text-gray-700">
                Aktionen
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(prayspot.name)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <Copy className="h-4 w-4 text-gray-500" />
                <span>Name kopieren</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center gap-2 cursor-default focus:bg-transparent">
                <Navigation className="h-4 w-4 text-gray-500" />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500">Koordinaten</span>
                  <span className="text-xs font-mono text-gray-700">
                    {prayspot.latitude}, {prayspot.longitude}
                  </span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
