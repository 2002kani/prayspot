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
import LoadingSpinner from "@/components/LoadingSpinner";

const TITLE_OF_PAGE = "Gebetsorte";

function AllSpotsPage() {
  const { data, isLoading } = usePrayspots();

  console.log(columns);

  return (
    <>
      <Page>
        <PageHeader>
          <PageTitle>{TITLE_OF_PAGE}</PageTitle>
          <PageSemiTitle>{data?.length} Orte insgesamt</PageSemiTitle>
        </PageHeader>

        <PageList>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <PrayspotTable columns={columns} data={data} />
          )}
        </PageList>
      </Page>
    </>
  );
}

export default AllSpotsPage;
