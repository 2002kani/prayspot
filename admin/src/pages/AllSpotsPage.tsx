import {
  Page,
  PageHeader,
  PageList,
  PageSemiTitle,
  PageTitle,
} from "@/components/PageStructure";
import PrayspotTable from "@/components/PrayspotTable";
import { usePrayspots } from "@/hooks/useSpots";
import { columns } from "@/components/Columns";

const TITLE_OF_PAGE = "Gebetsorte";

function AllSpotsPage() {
  const { data, isLoading } = usePrayspots();

  return (
    <>
      <Page>
        <PageHeader>
          <PageTitle>{TITLE_OF_PAGE}</PageTitle>
          <PageSemiTitle>{data?.length} Orte insgesamt</PageSemiTitle>
        </PageHeader>

        <PageList>
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="w-16 h-16 border-4 border-gray-300 border-t-green-600 rounded-full animate-spin"></div>
            </div>
          ) : (
            <PrayspotTable columns={columns} data={data} />
          )}
        </PageList>
      </Page>
    </>
  );
}

export default AllSpotsPage;
