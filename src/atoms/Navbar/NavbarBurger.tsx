import  { FC, useContext, useEffect, useMemo } from 'react';
import cn from 'classnames';
import { NavbarContext } from './context';

import { ClassNameOnlyProps } from '../types';

interface INavbarBurger extends ClassNameOnlyProps {
  style: any;
}

const NavbarBurger: FC<INavbarBurger> = ({ style, className, ...props }) => {
  const active = useContext(NavbarContext);
  return (
    <div
      role='button'
      tabIndex={0}
      style={{ outline: 'none', ...style }}
      className={cn('navbar-burger', className, {
        'is-active': active,
      })}
      {...props}
    >
      <span />
      <span />
      <span />
    </div>
  );
};

export default NavbarBurger;
