import { FC } from 'react';
import classnames from 'classnames';
import Element from '../Element';
import { AsPropsWithChildren } from '../types';

interface ModalContentProps extends AsPropsWithChildren {}

const ModalContent: FC<ModalContentProps> = ({ className, ...props }) => (
  <Element {...props} className={classnames('modal-content', className)} />
);

export default ModalContent;
