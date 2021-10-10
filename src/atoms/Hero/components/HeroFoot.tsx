import { FC } from 'react';
import classnames from 'classnames';
import Element, { ElementProps } from '../../Element';

interface HeroFootProps extends ElementProps {
  style?: any;
}

export type IHeroFoot = FC<HeroFootProps>;

const HeroFoot: IHeroFoot = ({ className, ...props }) => (
  <Element {...props} className={classnames(className, 'hero-foot')} />
);

export default HeroFoot;
