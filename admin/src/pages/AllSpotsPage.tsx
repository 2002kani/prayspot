import { useState } from "react";

import {
  Page,
  PageHeader,
  PageList,
  PageSemiTitle,
  PageTitle,
} from "@/components/PageStructure";
import PrayspotTable from "@/components/PrayspotTable";
import { usePrayspots } from "@/hooks/useSpots";
import { createColumns } from "@/components/Columns";
import LoadingSpinner from "@/components/LoadingSpinner";
import type { Prayspot } from "@/types/Prayspot";
import { deletePrayspotById, updatePrayspotStatus } from "@/api/prayspotApi";

const TITLE_OF_PAGE = "Gebetsorte";

function AllSpotsPage() {
  const { data, isLoading, mutate } = usePrayspots();
  const [isUpdating, setIsUpdating] = useState(false);

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
          <PageTitle>{TITLE_OF_PAGE}</PageTitle>
          <PageSemiTitle>{data?.length} Orte insgesamt</PageSemiTitle>
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
