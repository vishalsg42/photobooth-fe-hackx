import { FC, Ref } from 'react';
import classnames from 'classnames';
import { ElementProps } from '../../Element';

interface RadioProps extends ElementProps<HTMLInputElement> {
  name: string;
  style?: any;
  disabled?: boolean;
  value?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  domRef?: Ref<any>;
}

export type IRadio = FC<RadioProps>;

const Radio: IRadio = ({
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
  <label ref={domRef} className={classnames('radio', className)} style={style}>
    <input
      {...props}
      name={name}
      type='radio'
      value={value}
      ref={getRef}
      disabled={disabled}
      checked={checked}
    />
    {children}
  </label>
);

export default Radio;
