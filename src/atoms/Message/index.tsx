import cn from 'classnames';
import Element, { ElementProps } from '../Element';
import '@/components/atoms/Message//message.scss';
import { AsRefForwardingComponent } from '../types';

interface MessageProps extends ElementProps {
  size?: 'small' | 'medium' | 'large';
  fontsize?: string;
  type?: 'primary' | 'info' | 'success' | 'warning' | 'danger';
  shade?: 'dark' | 'link';
  headerTitle?: string;
  headerClassName?: string;
  bodyClassName?: string;
}

type IMessage = AsRefForwardingComponent<'div', MessageProps>;
const Message: IMessage = ({
  size,
  type = 'primary',
  shade,
  deleteBtn,
  className,
  fontsize,
  children,
  headerTitle,
  headerClassName,
  bodyClassName,
  ...props
}) => {
  return (
    <Element
      as='div'
      {...props}
      className={cn('message', className, {
        [`is-${type}`]: !!type,
        [`is-${size}`]: !!size,
        [`is-${shade}`]: !!shade,
        [`is-size-${fontsize}`]: !!fontsize,
      })}
    >
      {(deleteBtn || headerTitle) && (
        <Element as='div' className={cn('message-header', headerClassName)}>
          {deleteBtn && (
            <button className='delete' aria-label='delete'></button>
          )}
          {headerTitle}
        </Element>
      )}
      <Element as='div' className={cn('message-body', bodyClassName)}>
        {children}
      </Element>
    </Element>
  );
};

export default Message;
