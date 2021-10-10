import { useState } from 'react';
import cn from 'classnames';
import styles from './index.module.scss';
import Button from '../Button';

export default function SeeMore({ children, length = 45 }) {
  const splittedTextValue = children && children.split(' ');

  if (!splittedTextValue) return null;

  const [textToDisplay, setTextToDisplay] = useState(
    splittedTextValue.slice(0, length),
  );
  function readMoreToggler(e) {
    const { name } = e.target;
    if (name == 'see_less') {
      setTextToDisplay(splittedTextValue.slice(0, length));
    } else {
      setTextToDisplay(splittedTextValue);
    }
  }
  let dots;
  if (splittedTextValue.length > length && textToDisplay.length <= length) {
    dots = '...';
  }
  return (
    <div>
      {textToDisplay.join(' ')}
      {dots}
      {splittedTextValue.length > length &&
        (textToDisplay.length > length ? (
          <button
            className={cn(
              styles.button,
              'ml-2 p-0 is-text-secondary cursor: pointer',
            )}
            name='see_less'
            onClick={readMoreToggler}
          >
            See less
          </button>
        ) : (
          <button
            className={cn(
              styles.button,
              'ml-2 p-0 is-text-secondary cursor: pointer',
            )}
            name='see_more'
            onClick={readMoreToggler}
          >
            See more
          </button>
        ))}
    </div>
  );
}
