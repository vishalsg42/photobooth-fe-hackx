import classnames from 'classnames';

import colors from './colors';
import general from './general';
import typography from './typography';
import responsive from './responsive';
import { useMemo } from 'react';
import { IModifierTypes } from './types';
import spacing from './spacing';
import flexbox from './flexbox';

export const compose = (...fns) => (args) =>
  fns.reduce((arg, fn) => fn(arg), args);

const modifiers = {
  classnames: (props: IModifierTypes) =>
    classnames(
      colors.classnames(props),
      general.classnames(props),
      typography.classnames(props),
      responsive.classnames(props),
      spacing.classnames(props),
      flexbox.classnames(props)
    ),
  clean: (props) =>
    compose(
      colors.clean,
      general.clean,
      typography.clean,
      responsive.clean,
      spacing.clean,
      flexbox.clean
    )(props),
};

interface IUseModifier {
  (props: IModifierTypes): any;
}

export const useModifier: IUseModifier = (props) => {
  const { className, rest } = useMemo(
    () => ({
      className: modifiers.classnames(props),
      rest: modifiers.clean(props as any),
    }),
    [props]
  );
  return [className, rest];
};

export default modifiers;
