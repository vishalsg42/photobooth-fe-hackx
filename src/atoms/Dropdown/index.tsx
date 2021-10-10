import React, { PureComponent, ReactElement, ReactNode } from "react";
import classnames from "classnames";
import Button from "../Button/index";
import Element, { ElementProps } from "../Element";
import { IColor } from "../modifiers/types";
import DropdownItem from "./components/Item";
import DropdownDivider from "./components/Divider";

import "./dropdown.scss";

// const colors = [null].concat(Object.values(CONSTANTS.COLORS));
interface DropdownProps extends ElementProps {
  onChange?: (e?: any) => void;
  hoverable?: boolean;
  closeOnSelect?: boolean;
  disabled?: boolean;
  value?: any;
  color?: IColor;
  align?: "right";
  right?: boolean;
  up?: boolean;
  label?: ReactNode;
  icon?: ReactNode;
  dropDownClassName?: string;
  titleClassName?: string;
  buttonClassName?: string;
  transform?: (e: any) => any;
}
interface DropdownState {
  open?: boolean;
}
export default class Dropdown extends PureComponent<
  DropdownProps,
  DropdownState
> {
  static Item = DropdownItem;
  static Divider = DropdownDivider;
  private domRef = React.createRef<HTMLDivElement>();
  static defaultProps = {
    transform: (v) => v.children,
  };
  constructor(props) {
    super(props);
    this.domRef = props.domRef || React.createRef();
    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    document.addEventListener("click", this.close);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.close);
  }

  close = (evt: any) => {
    // IDK yet how to test using the ref in enzime
    // istanbul ignore if
    if (
      this.props.hoverable ||
      (evt &&
        this.domRef &&
        this.domRef.current &&
        this.domRef.current.contains(evt.target))
    ) {
      return;
    }
    if (this.domRef.current) {
      this.setState({ open: false });
    }
  };

  toggle = (evt) => {
    if (this.props.hoverable) {
      return;
    }
    if (evt) {
      evt.preventDefault();
    }
    this.setState(({ open }) => ({ open: !open }));
  };

  select = (value) => () => {
    if (this.props.onChange) {
      this.props.onChange(value);
    }
    if (this.props.closeOnSelect) {
      this.close({});
    }
  };

  render() {
    const {
      className,
      buttonClassName,
      children,
      value,
      color,
      align,
      right,
      up,
      hoverable,
      transform,
      label,
      onChange,
      disabled,
      closeOnSelect,
      icon,
      dropDownClassName = "",
      titleClassName = "",
      ...props
    }: any = this.props;
    let current = label;

    const childrenArray: any = React.Children.map(
      children,
      (child: ReactElement, i) => {
        if (
          child.type === DropdownItem &&
          ((i === 0 && !label) || child.props.value === value)
        ) {
          current = transform(child.props);
        }
        return React.cloneElement(
          child,
          child.type === DropdownItem
            ? {
                active: child.props.value === value,
                onClick: this.select(child.props.value),
              }
            : {}
        );
      }
    );

    return (
      <Element
        {...props}
        getRef={this.domRef}
        className={classnames("dropdown", className, {
          "is-active": this.state.open,
          "is-up": up,
          "is-right": right || align === "right",
          "is-hoverable": hoverable,
        })}
      >
        <div
          className='dropdown-trigger'
          role='presentation'
          onClick={this.toggle}
        >
          <Button
            color={color}
            className={buttonClassName}
            fullwidth
            type={disabled ? "static" : "button"}
          >
            <span className={titleClassName}>{current}</span>
            &nbsp;{icon}
          </Button>
        </div>
        <div
          className={classnames("dropdown-menu", dropDownClassName)}
          id='dropdown-menu'
          role='menu'
        >
          <div className='dropdown-content'>{childrenArray}</div>
        </div>
      </Element>
    );
  }
}

// Dropdown.propTypes = {
//   ...modifiers.propTypes,
//   /**
//    * The value of the currently selected dropdown item.
//    */
//   value: PropTypes.any,
//   /**
//    * Called when a dropdown item is selected.
//    */
//   onChange: PropTypes.func,
//   /**
//    * The color of the dropdown button.
//    */
//   color: PropTypes.oneOf(colors),
//   /**
//    * Whether the dropdown should align to the right side.
//    */
//   right: PropTypes.bool,
//   /**
//    * Whether the dropdown menu should appear above the dropdown button
//    * instead of below.
//    */
//   up: PropTypes.bool,
//   /**
//    * @deprecated
//    */
//   align: PropTypes.oneOf(['right']),
//   /**
//    * Whether the dropdown menu can be activated when the cursor
//    * hovers above the button without clicking.
//    */
//   hoverable: PropTypes.bool,
//   /**
//    * A string, or a react component that displays the label of the dropdown
//    * button.
//    */
//   label: PropTypes.node,
//   /**
//    * Whether the dropdown menu should be closed when a dropdown item is selected.
//    */
//   closeOnSelect: PropTypes.bool,
//   /**
//    * A react component that draws the icon of the dropdown button.
//    * Usually it is an arrow (or a chevron) pointing downwards (or upwards).
//    */
//   icon: PropTypes.node,
//   /**
//    * Additional CSS classes to pass to `<Dropdown />`.
//    * They will sit alongside pre-applied bulma classes.
//    */
//   className: PropTypes.string,
//   style: PropTypes.shape({}),
//   children: PropTypes.node,
// };

// Dropdown.defaultProps = {
//   ...modifiers.defaultProps,
//   closeOnSelect: true,
//   className: undefined,
//   renderAs: 'div',
//   domRef: undefined,
//   style: undefined,
//   value: undefined,
//   children: [],
//   onChange: undefined,
//   color: undefined,
//   align: undefined,
//   hoverable: undefined,
//   label: undefined,
//   icon: undefined,
// };
