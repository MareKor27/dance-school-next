import { ReactNode } from "react";
import style from "./modal.module.scss";
import useStyles from "../../../hooks/useStyle";

type ModalType = {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
};

const Modal = ({ open, children, onClose }: ModalType) => {
  const s = useStyles(style);
  if (!open) {
    return null;
  }
  return (
    <div className={s(`popup-image`)}>
      <div>
        <span onClick={onClose}>&times;</span>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Modal;
