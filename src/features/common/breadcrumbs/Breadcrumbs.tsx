import style from "./Breadcrumbs.module.scss";
import useStyles from "../../../hooks/useStyle";
type BreadcrumbsType = {
  namePage: string;
};
export function Breadcrumbs({ namePage }: BreadcrumbsType) {
  const s = useStyles(style);
  return (
    <div
      className={s(`breadcrumbs`)}
      itemScope
      itemType="https://schema.org/BreadcrumbList"
    >
      <div className={s(`breadcrumbs-links`, `body-arranged-md`)}>
        <span
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <a itemProp="item" href="/">
            <span itemProp="name">Strona główna</span>
          </a>
          <meta itemProp="position" content="1" />
        </span>
        <span className={s(`divider`)}> / </span>
        <span itemProp="name">{namePage}</span>
      </div>
    </div>
  );
}
