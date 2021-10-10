export declare type Omit<T, U> = Pick<T, Exclude<keyof T, keyof U>>;
export declare type ReplaceProps<Inner extends React.ElementType, P> = Omit<
  React.ComponentPropsWithRef<Inner>,
  P
> &
  P;

export interface ClassNameOnlyProps {
  className?: string;
}

export interface AsProps<As extends React.ElementType = React.ElementType>
  extends ClassNameOnlyProps {
  as?: As;
}
export declare type AsPropsWithChildren<
  As extends React.ElementType = React.ElementType
> = React.PropsWithChildren<AsProps<As>>;

export interface AsRefForwardingComponent<
  TInitial extends React.ElementType,
  P = unknown
> {
  <As extends React.ElementType = TInitial>(
    props: React.PropsWithChildren<ReplaceProps<As, AsProps<As> & P>>,
    context?: any,
  ): React.ReactElement | null;
  contextTypes?: any;
  defaultProps?: Partial<P>;
  displayName?: string;
}

export declare class AsComponent<
  As extends React.ElementType,
  P = unknown
> extends React.Component<ReplaceProps<As, AsProps<As> & P>> {}
