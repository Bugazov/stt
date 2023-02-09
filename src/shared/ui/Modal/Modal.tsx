import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Modal.module.scss";

interface ModalProps {
  className?: string;
}

export const Modal = (props: ModalProps) => {
  const { className } = props;
  return <div className={classNames(styles.Modal, {}, [className])}></div>;
};
export default Modal;
