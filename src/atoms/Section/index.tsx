import { FC } from 'react';
import cn from 'classnames';
import Element, { ElementProps } from '../Element';
import './section.scss';

export interface SectionProps extends ElementProps {
  size?: 'small' | 'medium' | 'large' | 'auto';
}

export type ISection = FC<SectionProps>;

const Section: ISection = ({ className, size, ...props }) => {
  return (
    <Element
      className={cn('section', className, {
        [`is-${size}`]: !!size,
      })}
      {...props}
    />
  );
};

export default Section;
