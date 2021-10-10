import classnames from 'classnames';
import Element, { ElementProps } from '../../Element';
import { IColor } from '../../modifiers/types';
import { AsRefForwardingComponent } from '../../types';

interface HelpProps extends ElementProps {
  color?: IColor;
}
export type IHelp = AsRefForwardingComponent<'p', HelpProps>;

const Help: IHelp = ({ className, as = 'p', color = '', ...props }) => (
  <Element
    as='p'
    {...props}
    className={classnames('help', className, {
      [`is-${color}`]: color,
    })}
  />
);

export default Help;
