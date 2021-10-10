import { FC, useEffect, useMemo } from "react";
import cn from "classnames";
import "./navbar.scss";
import { NavbarContext } from "./context";
import NavbarBurger from "./NavbarBurger";
import NavbarDropdown from "./NavbarDropdown";
import NavbarItem, { INavbarItem } from "./NavbarItem";
import NavbarLink, { INavbarLink } from "./NavbarLink";
import NavbarBrand, { INavbarBrand } from "./NavbarBrand";
import NavbarMenu from "./NavbarMenu";
import { useColors } from "../modifiers/colors";

interface NavbarProp {
  fixed?: "top" | "bottom";
  active?: boolean;
  transparent?: boolean;
  spaced?: boolean;
  // isColor?: IColor;
}

const NavbarDivider = ({ className, ...props }) => (
  <div {...props} className={cn("navbar-divider", className)} />
);

const NavbarContent = ({
  position = null,
  className = null,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(className, {
        [`navbar-${position}`]: position,
      })}
      {...props}
    >
      {children}
    </div>
  );
};

const Navbar: FC<NavbarProp> & {
  Burger: typeof NavbarBurger;
  Dropdown: typeof NavbarDropdown;
  Menu: typeof NavbarMenu;
  Content: typeof NavbarContent;
  Divider: typeof NavbarDivider;
  Item: INavbarItem;
  Link: INavbarLink;
  Brand: INavbarBrand;
} = ({ children, fixed, spaced, transparent, active, ...props }: any) => {
  const { rest, className } = useColors(props);

  useEffect(() => {
    if (!!fixed) {
      document.body.classList.add(`has-navbar-fixed-${fixed}`);
    } else {
      document.body.classList.remove("has-navbar-fixed-top");
      document.body.classList.remove("has-navbar-fixed-bottom");
    }
    return () => document.body.classList.remove(`has-navbar-fixed-${fixed}`);
  }, [fixed]);
  return (
    <NavbarContext.Provider value={active}>
      <nav
        {...rest}
        className={cn("navbar", className, {
          [`is-fixed-${fixed}`]: fixed,
          [`is-spaced`]: spaced,
          [`is-transparent`]: transparent,
        })}
      >
        {children}
      </nav>
    </NavbarContext.Provider>
  );
};

Navbar.Burger = NavbarBurger;
Navbar.Dropdown = NavbarDropdown;
Navbar.Item = NavbarItem;
Navbar.Menu = NavbarMenu;
Navbar.Link = NavbarLink;
Navbar.Divider = NavbarDivider;
Navbar.Brand = NavbarBrand;
Navbar.Content = NavbarContent;

export default Navbar;
