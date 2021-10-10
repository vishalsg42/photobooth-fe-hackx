import  { FC, useContext, useEffect, useMemo } from 'react';
import cn from 'classnames';
import { NavbarContext } from './context';
import { ClassNameOnlyProps } from '../types';

interface INavbarMenu extends ClassNameOnlyProps {}

const NavbarMenu: FC<INavbarMenu> = ({ className, ...props }) => {
  const active = useContext(NavbarContext);
  return (
    <div
      className={cn('navbar-menu', className, {
        'is-active': active,
      })}
      {...props}
    />
  );
};

export default NavbarMenu;
