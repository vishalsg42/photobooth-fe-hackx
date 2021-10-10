import cn from 'classnames';
import { useMemo } from 'react';
import { ISpacingProps } from './types';

const SPACING_PROPS = [
  'm',
  'mt',
  'mr',
  'mb',
  'ml',
  'mx',
  'my',
  'p',
  'pt',
  'pr',
  'pb',
  'pl',
  'px',
  'py',
];

const spacing = {
  classnames: (props: ISpacingProps) =>
    cn(
      SPACING_PROPS.reduce((classes, spacing) => {
        const spacingValue = props[spacing];
        classes[`${spacing}-${spacingValue}`] = spacingValue;
        return classes;
      }, {})
    ),
  clean: (props) =>
    Object.keys(props).reduce((cleaned, propName) => {
      if (!SPACING_PROPS.includes(propName)) {
        cleaned[propName] = props[propName];
      }
      return cleaned;
    }, {}),
};

interface IUseSpacing {
  (props: ISpacingProps): any;
}
export const useSpacing: IUseSpacing = (props) => {
  const { className, rest } = useMemo(
    () => ({
      className: spacing.classnames(props),
      rest: spacing.clean(props as any),
    }),
    [props]
  );
  return { className, rest };
};

export default spacing;
