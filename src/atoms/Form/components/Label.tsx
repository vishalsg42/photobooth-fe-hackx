import { FC } from 'react';
import cn from 'classnames';

const Label: FC<any> = ({ children, className, size, ...props }) => (
  <label
    {...props}
    className={cn('label', className, {
      [`is-${size}`]: size,
    })}
  >
    {children}
  </label>
);

export default Label;
