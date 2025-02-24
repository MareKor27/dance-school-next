"use client";
import useStyles from "@/hooks/useStyle";
import style from "./tabMenu.module.scss";
import { ReactElement, useMemo, useState } from "react";

type Tab<T> = {
  label: string;
  data: T;
};

export type ContentRendererProps<T> = {
  content: T;
};

type TabMenuProps<T, K extends string> = {
  defaultTab?: K;
  tabs: Record<K, Tab<T>>;
  ContentRenderer: (props: ContentRendererProps<T>) => ReactElement;
};

export default function TabContent<T, K extends string>({
  defaultTab,
  tabs,
  ContentRenderer,
}: TabMenuProps<T, K>) {
  const s = useStyles(style);

  const listOfTabs = Object.entries(tabs) as [K, Tab<T>][];
  const firstTab = defaultTab ?? listOfTabs[0][0];

  const [activeTab, setActiveTab] = useState<K>(firstTab);
  const activeTabContent = useMemo(() => {
    return tabs[activeTab].data;
  }, [activeTab]);

  // listOfTabs.map(([x, y]) => console.log(x, y));

  return (
    <>
      <div className={s("tab-menu")}>
        {listOfTabs.map(([index, labelName]) => (
          <div
            key={index}
            className={
              activeTab === index ? s("tab-title active") : s("tab-title")
            }
            onClick={() => setActiveTab(index)}
          >
            {labelName.label}
          </div>
        ))}
      </div>
      <div className={s("tabs-content")}>
        <ContentRenderer content={activeTabContent} />
      </div>
    </>
  );
}
