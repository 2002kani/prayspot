import {
  Page,
  PageHeader,
  PageList,
  PageSemiTitle,
  PageTitle,
} from "@/components/PageStructure";
import { StatsCard } from "@/components/StatsCard";
import { usePrayspots } from "@/hooks/useSpots";
import { CheckCircle, Clock, MapPin } from "lucide-react";
import DashboardTable from "@/components/DashboardTable";
import { useSpotsMin } from "@/hooks/useSpotsMin";

const TITLE_OF_PAGE = "Dashboard";

function Dashboard() {
  const { data: spots } = usePrayspots();
  const { data } = useSpotsMin();

  const totalSpots = spots?.length ?? 0;
  const verifiedSpots =
    spots?.filter((spot) => spot.isVerified === true).length ?? 0;
  const verifiedPercentage =
    totalSpots > 0 ? Math.round((verifiedSpots / totalSpots) * 100) : 0;

  return (
    <>
      <Page>
        <PageHeader>
          <PageTitle>{TITLE_OF_PAGE}</PageTitle>
          <PageSemiTitle>
            Willkommen zurück! Hier ist dein Überblick.
          </PageSemiTitle>
        </PageHeader>

        <PageList>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatsCard
              title="Gesamt Gebetsorte"
              value={totalSpots}
              icon={MapPin}
            />
            <StatsCard
              title="Verifizierte Orte"
              value={verifiedSpots}
              icon={CheckCircle}
              subtitle={`${verifiedPercentage}% aller Orte`}
            />
            <StatsCard
              title="Nicht verifiziert"
              value={spots && verifiedSpots && spots.length - verifiedSpots}
              icon={Clock}
            />
          </div>

          <DashboardTable spots={data} />
        </PageList>
      </Page>
    </>
  );
}

export default Dashboard;
