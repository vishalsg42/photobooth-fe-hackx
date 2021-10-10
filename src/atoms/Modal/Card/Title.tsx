import { FC } from 'react';
import classnames from 'classnames';
import Element from '../../Element';
import { AsPropsWithChildren } from '../../types';

interface ModalCardTitleProps extends AsPropsWithChildren {
  showClose?: boolean;
  onClose?: () => void;
}

const ModalCardTitle: FC<ModalCardTitleProps> = ({
  children,
  className,
  showClose,
  ...props
}) => (
  <Element
    {...props}
    className={classnames('modal-card-title', className)}
    as='p'
  >
    {children}
    {/* {showClose && <Button remove onClick={onClose} />} */}
  </Element>
);

export default ModalCardTitle;
