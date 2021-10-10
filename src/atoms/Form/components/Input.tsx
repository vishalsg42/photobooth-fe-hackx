import { FC, HTMLProps } from 'react';
import cn from 'classnames';
import { IColor } from '../../modifiers/types';

interface InputProps extends HTMLProps<HTMLInputElement> {
  type?:
    | 'text'
    | 'email'
    | 'tel'
    | 'password'
    | 'number'
    | 'search'
    | 'color'
    | 'date'
    | 'time'
    | 'datetime-local';
  isSize?: 'small' | 'medium' | 'large';
  isColor?: IColor;
  readOnly?: boolean;
  isStatic?: boolean;
  className?: string;
  getRef?:
    | React.RefObject<HTMLInputElement>
    | React.LegacyRef<HTMLInputElement>;
}

const Input: FC<InputProps> = ({
  className,
  type = 'text',
  isSize,
  isColor,
  readOnly,
  isStatic,
  disabled,
  getRef,
  ...props
}) => {
  return (
    <input
      {...props}
      ref={getRef}
      type={type}
      readOnly={readOnly || isStatic}
      disabled={disabled}
      className={cn('input', className, {
        'is-static': isStatic,
        [`is-${isSize}`]: isSize,
        [`is-${isColor}`]: isColor,
      })}
    />
  );
};

export default Input;
