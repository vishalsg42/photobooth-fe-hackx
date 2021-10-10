import { FC } from 'react';
import cn from 'classnames';
import Element, { ElementProps } from '../Element';
import './icon.scss';
import { IColor } from '../modifiers/types';

export interface IconTextProps extends ElementProps {
  color?: IColor;
  pointerEvents?: boolean;
}

export type IIconText = FC<IconTextProps>;

const IconText: IIconText = ({
  children,
  as = 'span',
  className,
  color,
  pointerEvents,
  ...props
}) => {
  return (
    <Element
      as={as}
      className={cn('icon-text', className, {
        [`has-text-${color}`]: color,
        [`has-pointer-events`]: pointerEvents,
      })}
      {...props}
    >
      {children}
    </Element>
  );
};

export interface IconProps extends ElementProps {
  size?: 'small' | 'medium' | 'large' | 'auto';
  align?: 'left' | 'right';
  color?: IColor;
  pointerEvents?: boolean;
}

export type IIcon = FC<IconProps>;

const Icon: IIcon & {
  Text: IIconText;
} = ({
  children,
  as = 'span',
  className,
  size,
  align,
  color,
  pointerEvents,
  ...props
}) => {
  return (
    <Element
      as={as}
      className={cn('icon', className, {
        [`is-${size}`]: size,
        [`is-${align}`]: align,
        [`has-text-${color}`]: color,
        [`has-pointer-events`]: pointerEvents,
      })}
      {...props}
    >
      {children}
    </Element>
  );
};
Icon.Text = IconText;

export default Icon;
