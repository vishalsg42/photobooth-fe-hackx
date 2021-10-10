import classnames from 'classnames';
import { IGeneralProps } from './types';

const general = {
  classnames: (props: IGeneralProps) =>
    classnames({
      'is-clearfix': props.clearfix,
      [`is-pulled-${props.pull}`]: props.pull,
      'is-marginless': props.marginless,
      'is-paddingless': props.paddingless,
      'is-overlay': props.overlay,
      'is-clipped': props.clipped,
      'is-radiusless': props.radiusless,
      'is-shadowless': props.shadowless,
      'is-unselectable': props.unselectable === 'on',
      'is-invisible': props.invisible,
      'is-hidden': props.hidden,
    }),
  clean: ({
    hidden,
    clearfix,
    paddingless,
    pull,
    marginless,
    overlay,
    clipped,
    radiusless,
    shadowless,
    unselectable,
    invisible,
    ...props
  }) => props,
};

export default general;
