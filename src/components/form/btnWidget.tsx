import React, { MouseEventHandler } from "react";
import styles from "./btnWidget.less";
interface IBtnWidgetProps {
  label: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}
function BtnWidget(props: IBtnWidgetProps) {
  const { label, onClick } = props;
  return (
    <div className={styles.labelWidget} onClick={onClick}>
      {label}
    </div>
  );
}
export default BtnWidget;
