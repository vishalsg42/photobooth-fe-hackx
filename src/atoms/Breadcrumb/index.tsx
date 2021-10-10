import { FC, useMemo } from 'react';
import cn from 'classnames';
import './breadcrumb.scss';
import { ClassNameOnlyProps } from '../types';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  url: string;
  active?: boolean;
  name: string;
}
interface BreadcrumbProps extends ClassNameOnlyProps {
  separator?: 'arrow' | 'bullet' | 'dot' | 'succeeds';
  align?: 'right' | 'center';
  size?: 'small' | 'medium' | 'large';
  items: BreadcrumbItem[];
}

const Breadcrumb: FC<BreadcrumbProps> = ({
  className,
  items,
  size,
  separator,
  align,
  ...props
}) => (
  <nav
    className={cn('breadcrumb', className, {
      [`has-${separator}-separator`]: separator,
      [`is-${size}`]: size,
      [`is-${align}`]: align,
    })}
  >
    <ul>
      {items.map((item, ind) => {
        return (
          <li
            key={ind}
            className={cn({
              'is-active': item.active,
            })}
          >
            <Link to={item.url}>{item.name}</Link>
          </li>
        );
      })}
    </ul>
  </nav>
);
export default Breadcrumb;
