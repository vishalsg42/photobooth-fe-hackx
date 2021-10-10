// import RichText from "@/components/blocks/RichText";
import { Children } from "react";

export default function DataList({
  children = [],
  isOrdered = true,
  className = "",
  ...rest
}) {
  const list = children.map((val, i) => (
    <li className={className} key={i}>
      {/* <RichText {...{ html: val, className: "is-inline" }} /> */}
    </li>
  ));
  return isOrdered ? <ol {...rest}>{list}</ol> : <ul>{list}</ul>;
}
