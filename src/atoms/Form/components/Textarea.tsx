import { FC } from 'react';
import cn from 'classnames';
import { IColor } from '../../modifiers/types';

interface TextareaProps {
  size?: 'small' | 'medium' | 'large';
  color?: IColor;
  readOnly?: boolean;
  isStatic?: boolean;
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  rows?: number;
  name: string;
  className?: string;
  getRef?:
    | React.RefObject<HTMLTextAreaElement>
    | React.LegacyRef<HTMLTextAreaElement>;
}

const Textarea: FC<TextareaProps> = ({
  className,
  size,
  color,
  readOnly,
  rows = 4,
  getRef,
  ...props
}) => (
  <textarea
    {...props}
    ref={getRef}
    rows={rows}
    readOnly={readOnly}
    className={cn('textarea', className, {
      [`is-${size}`]: size,
      [`is-${color}`]: color,
    })}
  />
);

export default Textarea;
