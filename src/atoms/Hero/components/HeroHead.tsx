import { FC } from 'react';
import classnames from 'classnames';
import Element, { ElementProps } from '../../Element';

interface HeroHeadProps extends ElementProps {
  style?: any;
}

export type IHeroHead = FC<HeroHeadProps>;

const HeroHead: IHeroHead = ({ className, ...props }) => (
  <Element {...props} className={classnames(className, 'hero-head')} />
);

export default HeroHead;
