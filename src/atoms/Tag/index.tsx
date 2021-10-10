import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Element, { ElementProps } from '../Element';
import { AsRefForwardingComponent } from '../types';
import { IColor } from '../modifiers/types';
import TagGroup from './components/TagGroup';
import './tag.scss';

interface TagProps extends ElementProps {
  gapless?: boolean;
  size?: 'medium' | 'large';
  color?: IColor;
  rounded?: boolean;
  remove?: boolean;
}
type ITag = AsRefForwardingComponent<'span', TagProps> & {
  Group: typeof TagGroup;
};

const Tag: ITag = ({
  children,
  className,
  color,
  size,
  rounded,
  remove,
  ...props
}) => (
  <Element
    {...props}
    className={classnames('tag', className, {
      [`is-${size}`]: size,
      [`is-${color}`]: color,
      'is-rounded': rounded,
      'is-delete': remove,
    })}
  >
    {!remove && children}
  </Element>
);

Tag.Group = TagGroup;

export default Tag;
