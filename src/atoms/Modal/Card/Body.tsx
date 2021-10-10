import { FC } from 'react';
import classnames from 'classnames';
import Element from '../../Element';
import { AsPropsWithChildren } from '../../types';

interface ModalCardBodyProps extends AsPropsWithChildren {}

const ModalCardBody: FC<ModalCardBodyProps> = ({ className, ...props }) => (
  <Element {...props} className={classnames('modal-card-body', className)} />
);

export default ModalCardBody;
