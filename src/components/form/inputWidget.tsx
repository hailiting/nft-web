import React, { AllHTMLAttributes } from "react";
import styles from "./inputWidget.less";
interface IInputWidgetProps extends AllHTMLAttributes<HTMLElement> {
  value: string | ReadonlyArray<string> | number | undefined;
  placeholder: string;
  type: string;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
}
function InputWidget(props: IInputWidgetProps) {
  const { value, disabled, readOnly, placeholder, type, alt } = props;
  return (
    <div className={styles.labelWidget}>
      <input
        alt={alt}
        value={value}
        readOnly={readOnly}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}
export default InputWidget;
