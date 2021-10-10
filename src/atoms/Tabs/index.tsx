import classnames from 'classnames';
import Tab from './components/Tab';
import Element, { ElementProps } from '../Element';
import './tabs.scss';
import { FC } from 'react';

interface TabsProps extends ElementProps {
  align?: 'centered' | 'right';
  size?: 'small' | 'medium' | 'large';
  type?: 'toggle' | 'boxed' | 'toggle-rounded';
  fullwidth?: boolean;
}
type ITabs = FC<TabsProps>;

const Tabs: ITabs & {
  Tab: typeof Tab;
} = ({ children, className, align, size, type, fullwidth, ...props }) => {
  return (
    <Element
      {...props}
      className={classnames('tabs', className, {
        [`is-${align}`]: align,
        [`is-${size}`]: size,
        'is-toggle': type === 'toggle-rounded',
        [`is-${type}`]: type,
        'is-fullwidth': fullwidth,
      })}
    >
      <ul>{children}</ul>
    </Element>
  );
};

Tabs.Tab = Tab;

export default Tabs;
