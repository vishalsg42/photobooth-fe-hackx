import classnames from 'classnames';
import { useMemo } from 'react';
import { IResponsiveProps } from './types';

const getSizeClassFromProp = ({ hide = false, ...props }) =>
  Object.keys(props).reduce(
    (classes, vP) => {
      const vPVal = props[vP];
      if (vPVal) {
        const display = props[vP].display || {};
        const hide = props[vP].hide || {};
        const textSize = props[vP].textSize || {};
        const textAlignment = props[vP].textAlignment || {};
        classes[`is-${display.value}-${vP}${display.only ? '-only' : ''}`] =
          display.value;
        classes[`is-hidden-${vP}${hide.only ? '-only' : ''}`] = hide.value;
        classes[
          `has-text-${textAlignment.value}-${vP}${
            textAlignment.only ? '-only' : ''
          }`
        ] = textAlignment.value;
        classes[`is-size-${textSize.value}-${vP}`] = textSize.value > 0;
      }

      return classes;
    },
    {
      'is-hidden': hide,
    },
  );

const responsive = {
  classnames: (props: IResponsiveProps) =>
    classnames(getSizeClassFromProp(props || {})),
  clean: ({
    mobile,
    tablet,
    desktop,
    widescreen,
    fullhd,
    touch,
    hide,
    ...props
  }) => props,
};

interface IUseResponsive {
  (props: IResponsiveProps): any;
}
export const useResponsive: IUseResponsive = (props) => {
  const { className, rest } = useMemo(
    () => ({
      className: responsive.classnames(props),
      rest: responsive.clean(props as any),
    }),
    [props],
  );
  return { className, rest };
};

export default responsive;
