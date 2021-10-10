import { FC } from 'react';
import classnames from 'classnames';
import Element from '../../Element';
import ModalCardHead from './Head';
import ModalCardBody from './Body';
import ModalCardFoot from './Foot';
import ModalCardTitle from './Title';

import { AsPropsWithChildren } from '../../types';

interface ModalCardProps extends AsPropsWithChildren {
  onClose?: () => void;
}

const ModalCard: FC<ModalCardProps> & {
  Head: typeof ModalCardHead;
  Body: typeof ModalCardBody;
  Foot: typeof ModalCardFoot;
  Title: typeof ModalCardTitle;
} = ({ className, onClose, ...props }) => (
  <Element
    as='div'
    {...props}
    className={classnames('modal-card', className)}
  />
);

ModalCard.Head = ModalCardHead;
ModalCard.Body = ModalCardBody;
ModalCard.Foot = ModalCardFoot;
ModalCard.Title = ModalCardTitle;

export default ModalCard;
