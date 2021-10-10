import { FC } from 'react';
import cn from 'classnames';

const FieldLabel: FC<any> = ({ children, className, size, ...props }) => (
  <div
    {...props}
    className={cn('field-label', className, {
      [`is-${size}`]: size,
    })}
  >
    {children}
  </div>
);
export default FieldLabel;
