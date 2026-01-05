import { useState } from "react";

import {
  Page,
  PageHeader,
  PageHeaderRight,
  PageList,
  PageSemiTitle,
  PageTitle,
} from "@/components/PageStructure";
import PrayspotTable from "@/components/PrayspotTable";
import { createColumns } from "@/components/Columns";
import LoadingSpinner from "@/components/LoadingSpinner";
import type { Prayspot } from "@/types/Prayspot";
import { deletePrayspotById, updatePrayspotStatus } from "@/api/prayspotApi";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useSpotsByName } from "@/hooks/useSpotsByName";
import { useDebounce } from "@/hooks/useDebounce";

const TITLE_OF_PAGE = "Gebetsorte";

function AllSpotsPage() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const debauncedSearchValue = useDebounce(searchValue);
  const { data, isLoading, mutate } = useSpotsByName(debauncedSearchValue);

  const handleToggleStatus = async (prayspot: Prayspot) => {
    setIsUpdating(true);
    try {
      await updatePrayspotStatus(prayspot.id, {
        ...prayspot,
        isVerified: !prayspot.isVerified,
      });
      mutate();
    } catch (error) {
      console.error(error);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDeleteSpot = async (id: number) => {
    setIsUpdating(true);
    await deletePrayspotById(id);
    mutate();
    setIsUpdating(false);
  };

  const columns = createColumns(handleToggleStatus, handleDeleteSpot);

  return (
    <>
      <Page>
        <PageHeader>
          <div>
            <PageTitle>{TITLE_OF_PAGE}</PageTitle>
            <PageSemiTitle>{data?.length} Orte insgesamt</PageSemiTitle>
          </div>
          <PageHeaderRight>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Suchen..."
                className="pl-9"
              />
            </div>
          </PageHeaderRight>
        </PageHeader>

        <PageList>
          {isLoading || isUpdating ? (
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
