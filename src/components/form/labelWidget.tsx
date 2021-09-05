import React from "react";
import styles from "./labelWidget.less";
interface ILabelWidget {
  label: string;
  children: JSX.Element;
}
function LabelWidget(props: ILabelWidget) {
  const { label } = props;
  return <div className={styles.labelWidget}>{label}</div>;
}
export default LabelWidget;
