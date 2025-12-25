import {
  Page,
  PageHeader,
  PageList,
  PageSemiTitle,
  PageTitle,
} from "@/components/PageStructure";

const TITLE_OF_PAGE = "Dashboard";

function Dashboard() {
  return (
    <>
      <Page>
        <PageHeader>
          <PageTitle>{TITLE_OF_PAGE}</PageTitle>
          <PageSemiTitle>
            Willkommen zurück! Hier ist dein Überblick.
          </PageSemiTitle>
        </PageHeader>

        <PageList></PageList>
      </Page>
    </>
  );
}

export default Dashboard;
