import cn from 'classnames';

// const colors = is-white|is-light|is-dark|is-black|is-text|
// is-primary|is-link|is-info|is-success|is-warning|is-danger
// small|normal|medium|large

interface IButtons {
  align?: 'centered' | 'right' | 'left' | String;
  className?: any;
  size?: any;
  children?: any;
}

const Buttons = ({
  align = '',
  className = '',
  size = null,
  ...props
}: IButtons) => (
  <div
    {...props}
    className={cn('buttons', className, {
      [`is-${size}`]: !!size,
      [`is-${align}`]: !!align,
    })}
  >
    {props.children}
  </div>
);

export default Buttons;
