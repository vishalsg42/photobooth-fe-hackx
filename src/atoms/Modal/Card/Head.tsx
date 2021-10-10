import { FC } from 'react';
import classnames from 'classnames';
import Element from '../../Element';
import { AsPropsWithChildren } from '../../types';
import Button from '../../Button';

interface ModalCardFootProps extends AsPropsWithChildren {
  showClose?: boolean;
  onClose?: () => void;
}

const ModalCardFoot: FC<ModalCardFootProps> = ({
  children,
  className,
  showClose,
  onClose,
  ...props
}) => (
  <Element
    {...props}
    className={classnames('modal-card-head', className)}
    as='header'
  >
    {children}
    {showClose && <Button remove onClick={onClose} />}
  </Element>
);

export default ModalCardFoot;
