import cn from 'classnames';
import { Children, cloneElement, FC } from 'react';
import Element, { ElementProps } from '../../Element';
import List from './list';

interface MenuListItemProps extends ElementProps {
  style?: any;
  active?: boolean;
  domRef?: any;
}

export type IMenuListItem = FC<MenuListItemProps>;

const MenuListItem: IMenuListItem = ({
  children,
  active,
  className,
  domRef,
  as = 'a',
  ...props
}) => {
  if (typeof children !== 'string' && Children.toArray(children).length === 1) {
    const child: any = Children.only(children);
    if (child.type === List) {
      return (
        <li ref={domRef}>
          <Element
            as={as}
            className={cn(className, { 'is-active': active })}
            {...props}
          >
            {child.props.title}
          </Element>
          {cloneElement(child, { title: undefined })}
        </li>
      );
    }
  }

  return (
    <li ref={domRef}>
      <Element
        as={as}
        className={cn(className, { 'is-active': active })}
        {...props}
      >
        {children}
      </Element>
    </li>
  );
};

export default MenuListItem;
