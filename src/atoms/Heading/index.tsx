import React, { FC, useMemo } from 'react';
import classnames from 'classnames';
import Element, { ElementProps } from '../Element';
import './heading.scss';
import { ITextSize } from '../modifiers/types';

type ISize = 1 | 2 | 3 | 4 | 5 | 6;
type IWeight = 'light' | 'normal' | 'semibold' | 'bold';

interface HeadingProps extends ElementProps {
  size?: ITextSize;
  weight?: IWeight;
  subtitle?: boolean;
  heading?: boolean;
  spaced?: boolean;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div';
}

const Heading: FC<HeadingProps> = ({
  className,
  size,
  subtitle,
  weight,
  spaced,
  heading,
  as = 'div',
  ...props
}) => {
  return (
    <Element
      {...props}
      as={as}
      className={classnames(className, {
        title: !subtitle && !heading,
        subtitle,
        heading,
        [`is-${size}`]: size,
        [`has-text-weight-${weight}`]: weight,
        'is-spaced': spaced && !subtitle,
      })}
    />
  );
};

export default Heading;
