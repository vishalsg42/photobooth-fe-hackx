import  { FC, useContext, useEffect, useMemo } from 'react';
import cn from 'classnames';
import { NavbarContext } from './context';
import { ClassNameOnlyProps } from '../types';

interface INavbarDropdown extends ClassNameOnlyProps {
  boxed?: boolean;
  right?: boolean;
}

const NavbarDropdown: FC<INavbarDropdown> = ({
  boxed,
  right,
  className,
  children,
  ...props
}) => {
  const active = useContext(NavbarContext);
  return (
    <div
      className={cn('navbar-dropdown', className, {
        'is-boxed': boxed,
        'is-right': right,
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default NavbarDropdown;
