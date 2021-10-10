import classnames from 'classnames';
import { FC } from 'react';
import Element, { ElementProps } from '../../Element';

interface TabProps extends ElementProps {
  active?: boolean;
  domRef?: any;
}
type ITab = FC<TabProps>;
const Tab: ITab = ({
  className,
  style,
  active,
  domRef,
  as = 'a',
  ...props
}) => {
  return (
    <li
      ref={domRef}
      style={style}
      className={classnames(className, {
        'is-active': active,
      })}
    >
      <Element as={as} {...props} />
    </li>
  );
};

export default Tab;
