import { MoreHorizontal, Navigation, Check, X, Trash } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface IColumnsDropdownProps {
  latitude: number;
  longitude: number;
  isVerified: boolean;
  onToggleStatus: () => void;
  onSpotDelete: () => void;
}

function ColumnsDropdown({
  latitude,
  longitude,
  isVerified,
  onToggleStatus,
  onSpotDelete,
}: IColumnsDropdownProps) {
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
            onClick={onToggleStatus}
            className="flex items-center gap-2 cursor-pointer"
          >
            {isVerified ? (
              <>
                <X className="h-4 w-4 text-gray-500" />
                <span>Verifizierung aufheben</span>
              </>
            ) : (
              <>
                <Check className="h-4 w-4 text-gray-500" />
                <span>Verifizieren</span>
              </>
            )}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={onSpotDelete}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Trash className="h-4 w-4 text-red-500" />
            <span>Gebetsort entfernen</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-center gap-2 cursor-default focus:bg-transparent">
            <Navigation className="h-4 w-4 text-gray-500" />
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">Koordinaten</span>
              <span className="text-xs font-mono text-gray-700">
                {latitude}, {longitude}
              </span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default ColumnsDropdown;
