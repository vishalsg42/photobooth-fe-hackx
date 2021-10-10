import cn from "classnames";
import styles from "./Error.module.scss";
export default function Error({ message, className = "" }) {
  return (
    <div
      className={cn(
        styles["error"],
        "is-flex is-align-items-center",
        className
      )}
    >
      <span className='mr-2'>{message || "This field is required"}</span>
    </div>
  );
}
