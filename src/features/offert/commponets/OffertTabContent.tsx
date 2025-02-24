import useStyles from "@/hooks/useStyle";
import style from "./offert.module.scss";
import offertData from "@/data/ofertData.json";
import { ContentRendererProps } from "@/features/common/tab-content/TabContent";

type OffertDataContent = (typeof offertData)[keyof typeof offertData]["data"];

export default function OffertTabContent(
  props: ContentRendererProps<OffertDataContent>
) {
  const s = useStyles(style);
  return (
    <div className={s("tabs-content")}>
      {props.content.map((offertData, offertDataIndex) => (
        <div key={offertDataIndex}>
          <h4>{offertData.title}</h4>
          <p>{offertData.description}</p>
        </div>
      ))}
    </div>
  );
}
