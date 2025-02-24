"use client";
import { SubPageContent } from "@/features/common/sub-page-content/SubPageContent";
import TabContent, {
  ContentRendererProps,
} from "@/features/common/tab-content/TabContent";
import scheduleData from "@/data/scheduleData.json";
import { Breadcrumbs } from "@/features/common/breadcrumbs/Breadcrumbs";
import ScheduleTabContent from "@/features/schedule/commponents/ScheduleTabContent";

export default function Schedule() {
  return (
    <>
      <Breadcrumbs namePage={"Grafik"} />
      <SubPageContent className={`body-arranged-md`}>
        <h1 className={"text-center"}>Tygodniowy grafik zajęć</h1>
        <TabContent tabs={scheduleData} ContentRenderer={ScheduleTabContent} />
      </SubPageContent>
    </>
  );
}
