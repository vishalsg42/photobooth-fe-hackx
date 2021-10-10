import { PureComponent } from 'react';
import cn from 'classnames';

import './image.scss';
import { ClassNameOnlyProps } from '../types';

type ISizes =
  | '16x16'
  | '24x24'
  | '32x32'
  | '48x48'
  | '64x64'
  | '96x96'
  | '128x128'
  | 'square'
  | '1by1'
  | '5by4'
  | '4by3'
  | '3by2'
  | '5by3'
  | '16by9'
  | '2by1'
  | '3by1'
  | '4by5'
  | '3by4'
  | '2by3'
  | '3by5'
  | '9by16'
  | '1by2'
  | '1by3';

export interface ImageProps extends ClassNameOnlyProps {
  size?: ISizes;
  fallback?: string;
  fullwidth?: boolean;
  rounded?: boolean;
  fit?: 'cover' | 'contain';
  alt?: string;
  src?: string;
  style?: any;
  getRef?: React.RefObject<HTMLElement> | React.LegacyRef<HTMLElement>;
  onClick?: any;
  title?: string;
}
interface IImageState {
  src?: string;
  default?: string;
}
export default class Image extends PureComponent<ImageProps, IImageState> {
  state: IImageState = {};
  onError = () => {
    this.setState({
      src: this.props.fallback,
    });
  };
  static getDerivedStateFromProps = (props, state) => ({
    src: state.default !== props.src ? props.src : state.src,
    default: props.src,
  });
  render() {
    const {
      className,
      alt,
      size,
      fit,
      fallback,
      rounded,
      src,
      fullwidth,
      children,
      getRef,
      onClick,
      title,
      ...props
    } = this.props;

    return (
      <figure
        {...props}
        title={title}
        onClick={onClick}
        className={cn('image', className, {
          [`is-${size}`]: size,
          [`is-${fit}`]: !!fit,
          'is-fullwidth': fullwidth,
        })}
        ref={getRef}
      >
        <img
          className={cn({
            'is-rounded': rounded,
          })}
          onError={this.onError}
          src={this.state.src}
          alt={alt}
        />
        {children}
      </figure>
    );
  }
}
