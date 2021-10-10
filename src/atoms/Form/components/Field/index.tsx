import { FC } from "react";
import cn from "classnames";
import FieldLabel from "./FieldLabel";
import FieldBody from "./FieldBody";

interface IField {
  type?: "group" | "addons";
  horizontal?: boolean;
  multiline?: boolean;
  align?: "center" | "right";
  className?: string;
}

const Field: FC<IField> & {
  Label: typeof FieldLabel;
  Body: typeof FieldBody;
} = ({ type, children, horizontal, multiline, align, className, ...props }) => {
  let k: any = null;

  if (type === "addons") {
    k = "has-addons";
  } else if (type === "group") {
    k = "is-grouped";
  }

  return (
    <div
      className={cn("field", className, {
        [`${k}`]: k,
        [`${k}-${align}`]: k && align,
        [`${k}-multiline`]: k === "is-grouped" && multiline,
        "is-horizontal": horizontal,
      })}
    >
      {children}
    </div>
  );
};
Field.Label = FieldLabel;
Field.Body = FieldBody;
export default Field;
