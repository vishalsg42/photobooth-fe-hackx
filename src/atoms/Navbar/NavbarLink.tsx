import { FC, useContext, useEffect, useMemo } from 'react';
import cn from 'classnames';
import Element, { ElementProps } from '../Element';

export interface NavbarLinkProps extends ElementProps {
  arrowless?: boolean;
}

export type INavbarLink = FC<NavbarLinkProps>;

const NavbarLink: INavbarLink = ({ arrowless, className, ...props }) => {
  return (
    <Element
      className={cn('navbar-link', className, { 'is-arrowless': arrowless })}
      {...props}
    />
  );
};

export default NavbarLink;
