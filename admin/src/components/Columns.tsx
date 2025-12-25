import type { Prayspot } from "@/types/Prayspot";
import type { ColumnDef } from "@tanstack/react-table";

import { Check, MapPin, CircleDashed } from "lucide-react";
import ColumnsDropdown from "./ColumnsDropdown";

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
    accessorKey: "isVerified",
    header: "Status",
    cell: ({ row }) => {
      const isVerified = row.getValue("isVerified") as boolean;
      return isVerified ? (
        <div className="flex gap-1 items-center">
          <Check className="h-4 w-4 text-green-500" />
          <span>Verifiziert</span>
        </div>
      ) : (
        <div className="flex gap-1 items-center">
          <CircleDashed className="h-4 w-4 text-gray-500" />
          <span>Offen</span>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => <span className="sr-only">Aktionen</span>,
    cell: ({ row }) => {
      const prayspot = row.original;
      // TODO: fix that (handle status logic frontend)
      return (
        <ColumnsDropdown
          name={prayspot.name}
          latitude={prayspot.latitude}
          longitude={prayspot.longitude}
          isVerified={prayspot.isVerified}
        />
      );
    },
  },
];
