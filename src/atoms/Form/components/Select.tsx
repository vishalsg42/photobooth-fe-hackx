import '../form.scss';
import cn from 'classnames';
import { IColor } from '../../modifiers/types';
import { ClassNameOnlyProps } from '../../types';
import { FC } from 'react';

// We may need add generic props
interface SelectProps extends ClassNameOnlyProps {
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  color?: IColor;
  getRef?:
    | React.RefObject<HTMLSelectElement>
    | React.LegacyRef<HTMLSelectElement>;
  parentClassName?: string;
  name?: string;
  placeholder?: string;
  style?: any;
  onChange?: any;
  value?: string | number;
  className?: string;
  defaultValue?: any;
}

const Select: FC<SelectProps> = ({
  children,
  size,
  color,
  getRef,
  parentClassName = '',
  ...props
}) => (
  <div
    className={cn('select', parentClassName, {
      [`is-${size}`]: size,
      [`is-${color}`]: color,
    })}
  >
    <select {...props} ref={getRef}>
      {children}
    </select>
  </div>
);

export default Select;
