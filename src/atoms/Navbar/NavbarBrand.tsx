import { FC, useContext, useEffect, useMemo } from 'react';
import cn from 'classnames';
import Element, { ElementProps } from '../Element';

export interface NavbarBrandProps extends ElementProps {
  arrowless?: boolean;
}

export type INavbarBrand = FC<NavbarBrandProps>;

const NavbarBrand: INavbarBrand = ({ className, ...props }) => {
  return <Element className={cn('navbar-brand', className)} {...props} />;
};

export default NavbarBrand;
