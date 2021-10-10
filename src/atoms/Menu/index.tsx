import React from 'react';
import cn from 'classnames';
import MenuList from './components/list';
import './menu.scss';
const Menu = ({ className = null, ...props }) => (
  <aside {...props} className={cn('menu', className)} />
);

Menu.List = MenuList;

export default Menu;
