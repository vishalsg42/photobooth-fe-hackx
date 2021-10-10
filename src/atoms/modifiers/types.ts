export type ITextSize = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type ITextAlignment = 'centered' | 'justified' | 'left' | 'right';
export type ITextTransform = 'capitalized' | 'lowercase' | 'uppercase';
export type ITextWeight = 'light' | 'normal' | 'semibold' | 'bold';
export type ITextFamily =
  | 'sans-serif'
  | 'monospace'
  | 'primary'
  | 'secondary'
  | 'code';
export type IColor =
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'link'
  | 'black'
  | 'dark'
  | 'light'
  | 'ghost'
  | 'white';

export type IDisplay =
  | 'block'
  | 'flex'
  | 'inline'
  | 'inline-block'
  | 'inline-flex';

export type IFlexDirection =
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse';
export type IFlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
export type IJustifyContent = 'nowrap' | 'wrap' | 'wrap-reverse';
export type IAlignContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'stretch'
  | 'start'
  | 'end'
  | 'baseline';
export type IAlignItems =
  | 'auto'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'stretch';
export type IFlexGrow = 0 | 1 | 2 | 3 | 4 | 5;

export interface IViewportDisplay {
  value: IDisplay;
  only?: boolean;
}
export interface IViewportHide {
  value: boolean;
  only?: boolean;
}
export interface IViewportTextSize {
  value: ITextSize;
}
export interface IViewportTextAlignment {
  value: 'centered' | 'justified' | 'left' | 'right';
  only?: boolean;
}
export interface IViewport {
  display?: IViewportDisplay;
  hide?: IViewportHide;
  textSize?: IViewportTextSize;
  textAlignment?: IViewportTextAlignment;
}

export type ISpacingSize = 1 | 2 | 3 | 4 | 5 | 6;

export interface IResponsiveProps {
  mobile?: IViewport;
  tablet?: IViewport;
  desktop?: IViewport;
  widescreen?: IViewport;
  fullhd?: IViewport;
  touch?: IViewport;
}
export interface ITopographyProps {
  textSize?: ITextSize;
  textAlignment?: ITextAlignment;
  textTransform?: ITextTransform;
  textWeight?: ITextWeight;
  textFamily?: ITextFamily;
  italic?: boolean;
}
export interface ISpacingProps {
  m?: ISpacingSize;
  mt?: ISpacingSize;
  mr?: ISpacingSize;
  mb?: ISpacingSize;
  ml?: ISpacingSize;
  mx?: ISpacingSize;
  my?: ISpacingSize;
  p?: ISpacingSize;
  pt?: ISpacingSize;
  pr?: ISpacingSize;
  pb?: ISpacingSize;
  pl?: ISpacingSize;
  px?: ISpacingSize;
  py?: ISpacingSize;
}

export interface IColorProps {
  textColor?: IColor;
  isColor?: IColor;
  bgColor?: IColor;
}

export interface IGeneralProps {
  clearfix?: boolean;
  pull?: 'right' | 'left';
  marginless?: boolean;
  paddingless?: boolean;
  overlay?: boolean;
  clipped?: boolean;
  radiusless?: boolean;
  shadowless?: boolean;
  unselectable?: 'on' | 'off';
  invisible?: boolean;
  hidden?: boolean;
}

export interface IFlexboxProps {
  flexDirection?: IFlexDirection;
  flexWrap?: IFlexWrap;
  justifyContent?: IJustifyContent;
  alignContent?: IAlignContent;
  alignItems?: IAlignItems;
  flexGrow?: IFlexGrow;
  flex?: boolean;
}

export type IModifierTypes = IColorProps &
  IGeneralProps &
  ITopographyProps &
  IFlexboxProps &
  IResponsiveProps &
  ISpacingProps;
