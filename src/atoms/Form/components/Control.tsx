import { FC } from 'react';
import cn from 'classnames';
import { ClassNameOnlyProps } from '../../types';

interface IControl extends ClassNameOnlyProps {
  fullwidth?: boolean;
  iconLeft?: boolean;
  iconRight?: boolean;
  loading?: boolean;
  isSize?: 'small' | 'medium' | 'large';
  getRef?: React.RefObject<HTMLDivElement> | React.LegacyRef<HTMLDivElement>;
  style?: any;
}

const Control: FC<IControl> = ({
  className,
  fullwidth,
  iconLeft,
  iconRight,
  loading,
  isSize,
  getRef,
  ...props
}) => {
  return (
    <div
      {...props}
      ref={getRef}
      className={cn('control', className, {
        'is-expanded': fullwidth,
        'has-icons-left': iconLeft,
        'has-icons-right': iconRight,
        'is-loading': loading,
        [`is-${isSize}`]: isSize,
      })}
    />
  );
};

// export const Option = (props) => <option></option>;

export default Control;
