import style from "./subPageContent.module.scss";
import useStyles from "../../../hooks/useStyle";
import { ReactNode } from "react";

type SubPageContentTabs = {
  children: ReactNode;
  className: string;
};

export function SubPageContent({ children, className }: SubPageContentTabs) {
  const s = useStyles(style);
  return (
    <div className={s(`sub-page-content`, `${className}`)}>{children}</div>
  );
}
