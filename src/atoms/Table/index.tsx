import cn from 'classnames';
import { FC } from 'react';
import 'table.scss';
interface TableProps {
  size?: 'fullwidth' | 'narrow';
  striped?: boolean;
  bordered?: boolean;
  className?: string;
  style?: any;
  getRef?:
    | React.RefObject<HTMLTableElement>
    | React.LegacyRef<HTMLTableElement>;
}
const Table: FC<TableProps> = ({
  children,
  className,
  size,
  striped,
  bordered,
  ...props
}) => (
  <table
    {...props}
    className={cn('table', className, {
      [`is-${size}`]: size,
      'is-bordered': bordered,
      'is-striped': striped,
    })}
  >
    {children}
  </table>
);

export default Table;
