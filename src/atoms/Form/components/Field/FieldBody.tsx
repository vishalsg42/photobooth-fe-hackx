import { FC } from 'react';
import cn from 'classnames';

const FieldBody: FC<any> = ({ children, className, size, ...props }) => (
  <div {...props} className={cn('field-body', className)}>
    {children}
  </div>
);

export default FieldBody;
