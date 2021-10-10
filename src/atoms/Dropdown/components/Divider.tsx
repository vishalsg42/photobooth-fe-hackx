import React, { FC } from 'react';
import cn from 'classnames';
import Element, { ElementProps } from '../../Element';

interface DropdownDividerProps extends ElementProps {
  active?: boolean;
  onClick?: (e: any) => void;
}

type IDropdownDivider = FC<DropdownDividerProps>;

const DropdownDivider: IDropdownDivider = ({ className, ...props }) => (
  <Element
    renderAs='hr'
    {...props}
    className={cn('dropdown-divider', className)}
  />
);

export default DropdownDivider;
