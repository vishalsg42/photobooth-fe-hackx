import { FC } from 'react';
import classnames from 'classnames';
import Element, { ElementProps } from '../../Element';

interface HeroBodyProps extends ElementProps {
  style?: any;
}
export type IHeroBody = FC<HeroBodyProps>;

const HeroBody: IHeroBody = ({ className, ...props }) => (
  <Element {...props} className={classnames(className)} />
);

export default HeroBody;
