"use client";
import { Breadcrumbs } from "@/features/common/breadcrumbs/Breadcrumbs";
import { SubPageContent } from "@/features/common/sub-page-content/SubPageContent";

import offertData from "@/data/ofertData.json";
import TabContent from "@/features/common/tab-content/TabContent";
import OffertTabContent from "@/features/offert/commponets/OffertTabContent";

export default function Ofert() {
  return (
    <>
      <Breadcrumbs namePage={"Oferta"} />
      <SubPageContent className={`body-arranged-md`}>
        <h1 className={`text-center`}>Oferta taneczna</h1>
        <TabContent
          tabs={offertData}
          // ContentRenderer={({ content }) => <p>{content?.[0].room}</p>}
          ContentRenderer={OffertTabContent}
        />
      </SubPageContent>
    </>
  );
}
