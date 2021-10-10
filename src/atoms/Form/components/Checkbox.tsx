import { FC, Ref } from 'react';
import classnames from 'classnames';
import { ElementProps } from '../../Element';

interface CheckboxProps extends ElementProps<HTMLInputElement> {
  name: string;
  style?: any;
  disabled?: boolean;
  value?: string;
  checked?: boolean;
  domRef?: Ref<any>;
}

const Checkbox: FC<CheckboxProps> = ({
  className,
  style,
  disabled,
  value,
  children,
  checked,
  name,
  domRef,
  getRef,
  ...props
}) => (
  <label
    ref={domRef}
    className={classnames('checkbox', className)}
    style={style}
  >
    <input
      {...props}
      name={name}
      type='checkbox'
      value={value}
      ref={getRef as any}
      disabled={disabled}
      checked={checked}
    />
    {children}
  </label>
);

export default Checkbox;
