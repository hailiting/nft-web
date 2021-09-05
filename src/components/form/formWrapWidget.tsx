import React from "react";
import styles from "./formWrapWidget.less";
interface IFormWrapWidgetProps {
  children: JSX.Element[];
}
function FormWrapWidget(props: IFormWrapWidgetProps) {
  const { children } = props;
  return <div className={styles.labelWidget}>{children}</div>;
}
export default FormWrapWidget;
