import { FC } from 'react';
import cn from 'classnames';
import Element, { ElementProps } from '../Element';
import './content.scss';

interface ContentProps extends ElementProps {
  size?: 'small' | 'medium' | 'large';
  style?: any;
}

const Content: FC<ContentProps> = ({ className, size, ...props }) => (
  <Element
    {...props}
    className={cn('content', className, {
      [`is-${size}`]: size,
    })}
  />
);

export default Content;
