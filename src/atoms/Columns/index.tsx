import { FC, useMemo } from 'react';
import cn from 'classnames';
import Element, { ElementProps } from '../Element';
import './columns.scss';

type IBreakpoints =
  | 'desktop'
  | 'tablet'
  | 'mobile'
  | 'widescreen'
  | 'fullhd'
  | 'touch';

type IGapSize = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

interface IColumns extends ElementProps {
  className?: string;
  breakpoint?: IBreakpoints;
  gapless?: boolean;
  multiline?: boolean;
  centered?: boolean;
  vCentered?: boolean;
  variableGap?: {
    desktop?: IGapSize;
    tablet?: IGapSize;
    mobile?: IGapSize;
    widescreen?: IGapSize;
    fullhd?: IGapSize;
    touch?: IGapSize;
  };
}
const getClassNamesFromProps = (variableGap) => {
  if (!variableGap) return null;
  if (Object.keys(variableGap).length === 0) return null;

  return {
    'is-variable': true,
    [`is-${variableGap.touch}-touch`]: variableGap.touch !== undefined,
    [`is-${variableGap.mobile}-mobile`]: variableGap.mobile !== undefined,
    [`is-${variableGap.tablet}-tablet`]: variableGap.tablet !== undefined,
    [`is-${variableGap.desktop}-desktop`]: variableGap.desktop !== undefined,
    [`is-${variableGap.widescreen}-widescreen`]:
      variableGap.widescreen !== undefined,
    [`is-${variableGap.fullhd}-fullhd`]: variableGap.fullhd !== undefined,
  };
};

const Columns: FC<IColumns> & {
  Column: FC<IColumn>;
} = ({
  className,
  breakpoint,
  gapless,
  multiline,
  centered,
  vCentered,
  variableGap,
  ...props
}) => {
  return (
    <Element
      {...props}
      className={cn(className, 'columns', {
        [`is-${breakpoint}`]: breakpoint,
        'is-gapless': gapless,
        'is-multiline': multiline,
        'is-centered': centered,
        'is-vcentered': vCentered,
        ...getClassNamesFromProps(variableGap),
      })}
    />
  );
};

type IColumnSizes =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '1-desktop'
  | '2-desktop'
  | '3-desktop'
  | '4-desktop'
  | '5-desktop'
  | '6-desktop'
  | '7-desktop'
  | '8-desktop'
  | '9-desktop'
  | '10-desktop'
  | '11-desktop'
  | '12-desktop'
  | '1-mobile'
  | '2-mobile'
  | '3-mobile'
  | '4-mobile'
  | '5-mobile'
  | '6-mobile'
  | '7-mobile'
  | '8-mobile'
  | '9-mobile'
  | '10-mobile'
  | '11-mobile'
  | '12-mobile'
  | 'three-quarters'
  | 'two-thirds'
  | 'half'
  | 'one-third'
  | 'one-quarter'
  | 'one-fifth'
  | 'two-fifths'
  | 'three-fifths'
  | 'four-fifths';

interface IColumnSize {
  size?: IColumnSizes;
  offset?: IColumnSizes;
  narrow?: boolean;
}

interface IColumn extends IColumnSize, ElementProps {
  desktop?: IColumnSize & ElementProps['desktop'];
  tablet?: IColumnSize & ElementProps['tablet'];
  mobile?: IColumnSize & ElementProps['mobile'];
  fullhd?: IColumnSize & ElementProps['fullhd'];
  widescreen?: IColumnSize & ElementProps['widescreen'];
  touch?: IColumnSize & ElementProps['touch'];
  className?: string;
  style?: any;
}

const getSizeClassFromProp = (props) =>
  Object.keys(props).reduce((obj, device) => {
    const val: IColumnSize = props[device];
    if (val) {
      obj[`is-${val.size}-${device}`] = val.size;
      obj[`is-offset-${val.offset}-${device}`] = val.offset;
      obj[`is-narrow-${device}`] = val.narrow;
    }
    return obj;
  }, {});

const Column: FC<IColumn> = ({
  className,
  size,
  offset,
  narrow,
  mobile,
  tablet,
  desktop,
  widescreen,
  fullhd,
  touch,
  ...props
}) => {
  const classNames = useMemo(() => {
    return cn(
      className,
      getSizeClassFromProp({
        desktop,
        tablet,
        mobile,
        widescreen,
        fullhd,
        touch,
      }),
    );
  }, [className, desktop, tablet, mobile, widescreen, fullhd, touch]);

  return (
    <Element
      {...props}
      desktop={desktop}
      tablet={tablet}
      mobile={mobile}
      widescreen={widescreen}
      fullhd={fullhd}
      touch={touch}
      className={cn(classNames, 'column', {
        [`is-${size}`]: size,
        'is-narrow': narrow,
        [`is-offset-${offset}`]: offset,
      })}
    />
  );
};

Columns.Column = Column;
export default Columns;
