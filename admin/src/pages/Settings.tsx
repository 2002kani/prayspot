import {
  Page,
  PageHeader,
  PageTitle,
  PageSemiTitle,
  PageList,
} from "@/components/PageStructure";
import UnderConstruction from "@/components/UnderConstruction";

const TITLE_OF_PAGE = "Einstellungen";

function Settings() {
  return (
    <>
      <Page>
        <PageHeader>
          <div>
            <PageTitle>{TITLE_OF_PAGE}</PageTitle>
            <PageSemiTitle>Verwalte deine Admin-Einstellungen</PageSemiTitle>
          </div>
        </PageHeader>

        <PageList>
          <UnderConstruction />
        </PageList>
      </Page>
    </>
  );
}

export default Settings;
