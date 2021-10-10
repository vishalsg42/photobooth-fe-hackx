import { FC } from 'react';
import classnames from 'classnames';
import Element from '../../Element';
import { AsPropsWithChildren } from '../../types';

interface ModalCardFootProps extends AsPropsWithChildren {}

const ModalCardFoot: FC<ModalCardFootProps> = ({ className, ...props }) => (
  <Element {...props} className={classnames('modal-card-foot', className)} />
);

export default ModalCardFoot;
