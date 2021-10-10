import { FC } from 'react';
import classnames from 'classnames';
import Element, { ElementProps } from '../Element';
import './box.scss';

interface BoxProps extends ElementProps {
  style?: any;
}

const Box: FC<BoxProps> = ({ className, ...props }) => (
  <Element {...props} className={classnames('box', className)} />
);

export default Box;
