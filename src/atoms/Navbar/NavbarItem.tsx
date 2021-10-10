import { FC, useContext, useEffect, useMemo } from 'react';
import cn from 'classnames';
import { NavbarContext } from './context';
import { ClassNameOnlyProps } from '../types';
import Element, { ElementProps } from '../Element';

export interface NavbarItemProps extends ElementProps {
  active?: boolean;
  dropdown?: boolean;
  dropdownUp?: boolean;
  hoverable?: boolean;
  arrowless?: boolean;
}

export type INavbarItem = FC<NavbarItemProps>;

const NavbarItem: INavbarItem = ({
  active,
  dropdown,
  dropdownUp,
  hoverable,
  arrowless,
  className,
  as = 'a',
  ...props
}) => {
  if (dropdown && as == 'a') as = 'span';
  return (
    <Element
      as={as}
      className={cn('navbar-item', className, {
        'is-active': active,
        'has-dropdown': dropdown,
        'is-hoverable': hoverable,
        'has-dropdown-up': dropdownUp,
        'is-arrowless': arrowless,
      })}
      {...props}
    />
  );
};

export default NavbarItem;
