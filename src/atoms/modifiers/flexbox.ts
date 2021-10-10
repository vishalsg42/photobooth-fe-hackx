import cn from 'classnames';
import { IFlexboxProps } from './types';

const camelToKebab = (camel) =>
  camel.replace(/[A-Z]/g, (cap) => `-${cap.toLowerCase()}`);

const flexboxPropNames = [
  'flexDirection',
  'flexWrap',
  'justifyContent',
  'alignContent',
  'alignItems',
  'flexGrow',
];

const flexbox = {
  classnames: (props: IFlexboxProps) =>
    cn(
      flexboxPropNames.reduce(
        (classes, flexboxHelper) => {
          const propValue = props[flexboxHelper];
          classes[`is-${camelToKebab(flexboxHelper)}-${propValue}`] = propValue;
          return classes;
        },
        {
          'is-flex': props.flex,
        },
      ),
    ),
  clean: (props) =>
    Object.keys(props).reduce((cleanedProps, propName) => {
      if (!flexboxPropNames.includes(propName)) {
        cleanedProps[propName] = props[propName];
      }
      return cleanedProps;
    }, {}),
};
export default flexbox;
