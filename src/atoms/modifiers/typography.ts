import cn from 'classnames';
import { useMemo } from 'react';
import { ITopographyProps } from './types';

const typography = {
  classnames: (props: Partial<ITopographyProps>) =>
    cn({
      [`has-text-${props.textAlignment}`]: props.textAlignment,
      [`has-text-weight-${props.textWeight}`]: props.textWeight,
      [`is-size-${props.textSize}`]: props.textSize,
      [`is-${props.textTransform}`]: props.textTransform,
      [`is-family-${props.textFamily}`]: props.textFamily,
      'is-italic': props.italic,
    }),
  clean: ({
    textAlignment,
    textWeight,
    textSize,
    textTransform,
    textFamily,
    ...props
  }) => props,
};

interface IUseTypography {
  (props: ITopographyProps): any;
}
export const useTypography: IUseTypography = (props) => {
  const { className, rest } = useMemo(
    () => ({
      className: typography.classnames(props),
      rest: typography.clean(props as any),
    }),
    [props],
  );
  return { className, rest };
};

export default typography;
