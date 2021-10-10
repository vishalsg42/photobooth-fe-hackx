import classNames from 'classnames';
import { useEffect, useState } from 'react';
import './notification.scss';
interface NotificationProp {
  close?: boolean;
  open?: boolean;
  type:
  'primary' |
  'link' |
  'info' |
  'success' |
  'warning' |
  'danger' | string;
  light?: boolean;
  children?: any;
  onClose?: any;
}

const Notification = ({ close, onClose, open = true, children, type, light = false }: NotificationProp) => {
  const [hide, toggle] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      toggle(!hide)
      onClose && onClose();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [open])

  if (hide) return null;

  return (
    <div
      className={classNames('notification', {
        [`is-${type}`]: !!type,
        ['is-light']: !!light,
      })}
    >
      {close && <button onClick={() => {
        toggle(true);
        onClose && onClose();
      }} className='delete'></button>}
      {children}
    </div>
  );
};

export default Notification;
