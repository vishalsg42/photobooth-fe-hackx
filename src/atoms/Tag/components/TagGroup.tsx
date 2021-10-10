import React from 'react';
import cn from 'classnames';
import Element, { ElementProps } from '../../Element';
import { AsRefForwardingComponent } from '../../types';

interface TagGroupProps extends ElementProps {
  gapless?: boolean;
}
type ITagGroup = AsRefForwardingComponent<'span', TagGroupProps>;

const TagGroup: ITagGroup = ({ children, className, gapless, ...props }) => (
  <Element
    as='span'
    {...props}
    className={cn('tags', className, {
      'has-addons': gapless,
    })}
  >
    {children}
  </Element>
);

export default TagGroup;
