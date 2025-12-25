import {
  Page,
  PageHeader,
  PageList,
  PageSemiTitle,
  PageTitle,
} from "@/components/PageStructure";

const TITLE_OF_PAGE = "Gebetsorte";

function AllSpotsPage() {
  return (
    <>
      <Page>
        <PageHeader>
          <PageTitle>{TITLE_OF_PAGE}</PageTitle>
          <PageSemiTitle>0 Orte insgesamt</PageSemiTitle>
        </PageHeader>

        <PageList></PageList>
      </Page>
    </>
  );
}

export default AllSpotsPage;
