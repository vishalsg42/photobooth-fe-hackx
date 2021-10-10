import React, { FC } from 'react';
import cn from 'classnames';
import Element, { ElementProps } from '../../Element';

interface DropdownItemProps extends ElementProps {
  active?: boolean;
  onClick?: (e: any) => void;
  value: any;
  data?: any;
}

type IDropdownItem = FC<DropdownItemProps>;

const DropdownItem: IDropdownItem = ({
  active,
  children,
  value,
  className,
  ...props
}) => (
  <Element
    title={value}
    {...props}
    role='presentation'
    className={cn(className, 'dropdown-item', {
      'is-active': active,
    })}
  >
    {children}
  </Element>
);

// DropdownItem.propTypes = {
//   ...modifiers.propTypes,
//   /**
//    * Whether this dropdown item is currently selected.
//    * Shows a highlighted effect if true.
//    * Note that the effect only works when this item is rendered as an anchor
//    * (`<a>`).
//    */
//   active: PropTypes.bool,
//   /**
//    * The value this dropdown item holds. When this item is clicked,
//    * this value is passed to the onChange callback of `<Dropdown />`.
//    * The value is used to determine if this item is active or not.
//    */
//   value: PropTypes.any.isRequired,
//   children: PropTypes.node,
//   /**
//    * Called whenever this item is clicked.
//    */
//   onClick: PropTypes.func,
//   /**
//    * Defines what this dropdown item should be rendered as.
//    * Can be a React component or an HTML element.
//    * Usually this is `'a'`, but if you want to put custom content inside
//    * this item, you need to set this to `'div'`.
//    */
//   renderAs: renderAsShape,
// };

// DropdownItem.defaultProps = {
//   ...modifiers.defaultProps,
//   active: false,
//   onClick: undefined,
//   children: null,
// };

export default DropdownItem;
