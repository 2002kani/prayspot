import type { PropsWithChildren } from "react";
import { Hammer } from "lucide-react";

const UnderConstruction: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-full py-20">
      <div className="bg-card rounded-2xl p-12 text-center max-w-md w-full">
        <div className="flex items-center justify-center mb-6">
          <Hammer className="w-20 h-20 text-accent" />
        </div>
        <h2 className="text-3xl font-bold mb-2 text-foreground">
          Under Construction...
        </h2>
        <p className="text-muted-foreground">
          {children ||
            "Diese Funktion ist noch in Arbeit. Schau bald wieder vorbei!"}
        </p>
      </div>
    </div>
  );
};

export default UnderConstruction;
