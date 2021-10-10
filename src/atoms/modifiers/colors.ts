import classnames from 'classnames';
import { useMemo } from 'react';
import { IColorProps } from './types';

const colors = {
  classnames: (props: IColorProps) =>
    classnames({
      [`has-text-${props.textColor}`]: props.textColor,
      [`has-background-${props.bgColor}`]: props.bgColor,
      [`is-${props.isColor}`]: props.isColor,
    }),
  clean: ({ textColor, bgColor, isColor, ...props }) => props,
};

interface IUseColors {
  (props: IColorProps): any;
}
export const useColors: IUseColors = (props) => {
  const { className, rest } = useMemo(
    () => ({
      className: colors.classnames(props),
      rest: colors.clean(props as any),
    }),
    [props]
  );
  return { className, rest };
};

export default colors;
