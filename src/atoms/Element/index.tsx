import { memo } from 'react';
import modifiers from '../modifiers';
import cn from 'classnames';
import { AsPropsWithChildren, AsRefForwardingComponent } from '../types';
import { IModifierTypes } from '../modifiers/types';

export interface ElementProps<T = HTMLDivElement>
  extends AsPropsWithChildren,
    IModifierTypes {
  getRef?: React.RefObject<T> | React.LegacyRef<T>;
  style?: any;
  onClick?: (e?: any) => void;
  id?: string;
}
type IElement = AsRefForwardingComponent<'div', ElementProps>;
const Element: IElement = ({ as = 'div', getRef, className, ...props }) => {
  const As: any = as;
  return (
    <As
      ref={getRef}
      {...modifiers.clean(props as any)}
      className={cn(className, modifiers.classnames(props))}
    />
  );
};

export default memo(Element);
