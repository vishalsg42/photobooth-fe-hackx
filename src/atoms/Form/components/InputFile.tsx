import { PureComponent, ReactElement } from "react";
// import Error from "./Error";
import cn from "classnames";
// import Element from '@/components/atoms/Element';
// import { useFormContext } from "react-hook-form";
type IColors =
  | "primary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "light"
  | "dark"
  | "white"
  | "black"
  | "link";
type ISize = "small" | "medium" | "large";
interface InputFileProps {
  onChange?: (e) => void;
  className?: string;
  name?: string;
  label?: string;
  style?: any;
  color?: IColors;
  size?: ISize;
  fileName?: boolean;
  fullwidth?: boolean;
  right?: boolean;
  boxed?: boolean;
  icon?: ReactElement;
  inputProps?: {
    accept?: string;
    capture?: string;
    multiple?: boolean;
  };
}
interface InputFileState {
  filename: string;
}
export default class InputFile extends PureComponent<
  InputFileProps,
  InputFileState
> {
  constructor(props) {
    super(props);
    this.state = {
      filename: "",
    };
  }
  select = (event) => {
    const { files } = event.target;
    this.setState({
      filename: files.length > 0 ? files[0].name : undefined,
    });
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  render() {
    const {
      className,
      style,
      onChange,
      color,
      size,
      fileName,
      fullwidth,
      right,
      boxed,
      name,
      label,
      icon,
      getRef,
      placeholder = "",
      inputProps,
      ...props
    }: any = this.props;

    const { filename } = this.state;
    return (
      <div
        style={style}
        {...props}
        className={cn("file", {
          [`is-${size}`]: size,
          [`is-${color}`]: color,
          "has-name": !fileName,
          "is-right": right,
          "is-boxed": boxed,
          "is-fullwidth": fullwidth,
        })}
      >
        <label className={cn(className, "file-label")}>
          <input
            {...inputProps}
            name={name}
            ref={getRef}
            type='file'
            className='file-input'
            onChange={this.select}
          />
          <span className='file-cta'>
            <span className='file-icon'>{/* <SvgIcon icon={icon} /> */}</span>
            <span className='file-label'>{placeholder}</span>
          </span>
        </label>
        {filename && <span className='file-name'>{filename}</span>}
      </div>
    );
  }
}
