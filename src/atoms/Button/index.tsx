import cn from 'classnames';
import Buttons from './Buttons';
import Element, { ElementProps } from '../Element';
import './button.scss';
import { AsRefForwardingComponent } from '../types';

interface ButtonProps extends ElementProps {
  size?: string;
  light?: boolean;
  outlined?: boolean;
  inverted?: boolean;
  fullwidth?: boolean;
  rounded?: boolean;
  hovered?: boolean;
  focused?: boolean;
  active?: boolean;
  loading?: boolean;
  remove?: boolean;
  disabled?: boolean;
  fontsize?: string;
  type?: 'submit' | 'reset' | 'button' | 'static';
}

type IButton = AsRefForwardingComponent<'div', ButtonProps>;
const Button: IButton & {
  Group: typeof Buttons;
} = ({
  light,
  size,
  outlined,
  inverted,
  fullwidth,
  rounded,
  hovered,
  focused,
  active,
  loading,
  className,
  fontsize,
  type = 'submit',
  remove,
  as,
  ...props
}) => {
  let otherProps: any = {
    type,
  };
  if (type === 'submit') {
    otherProps = {
      type: 'submit',
      as: as || 'button',
    };
  }
  if (type === 'reset') {
    otherProps = {
      type: 'reset',
      as: as || 'button',
    };
  }

  if (type === 'static') {
    otherProps = {
      as: 'span',
      role: 'button',
    };
  }

  return (
    <Element
      as='button'
      {...otherProps}
      className={cn(className, {
        [`is-${size}`]: !!size,
        [`is-light`]: !!light,
        [`is-static`]: type === 'static',
        [`is-outlined`]: !!outlined,
        [`is-inverted`]: !!inverted,
        [`is-fullwidth`]: !!fullwidth,
        [`is-rounded`]: !!rounded,
        [`is-hovered`]: !!hovered,
        [`is-focused`]: !!focused,
        [`is-active`]: !!active,
        [`is-loading`]: !!loading,
        [`is-size-${fontsize}`]: !!fontsize,
        delete: remove,
        button: !remove,
      })}
      {...props}
    />
  );
};

Button.Group = Buttons;
export default Button;
