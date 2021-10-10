import { FC } from "react";
import cn from "classnames";
import "./container.scss";

type IBreakpoints =
  | "desktop"
  | "tablet"
  | "mobile"
  | "widescreen"
  | "fullhd"
  | "touch";

interface IContainer {
  fluid?: boolean;
  breakpoint?: IBreakpoints;
  maxBreakpoint?: IBreakpoints;
  className?: string;
  style?: any;
  withrow?: boolean;
}

const Container: FC<IContainer> = ({
  fluid,
  breakpoint,
  maxBreakpoint,
  className,
  withrow,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn("container", className, {
        withrow,
        "is-fluid": fluid,
        [`is-${breakpoint}`]: breakpoint,
        [`is-max-${maxBreakpoint}`]: maxBreakpoint,
      })}
    />
  );
};

export default Container;
