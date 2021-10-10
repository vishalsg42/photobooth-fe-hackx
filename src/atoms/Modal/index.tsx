import { createRef, PureComponent } from 'react';
import { Portal } from 'react-portal';
import classnames from 'classnames';
import ModalContent from './Content';
import ModalCard from './Card';

import './modal.scss';

const KEYCODES = {
  ESCAPE: 27,
};
interface ModalProps {
  show?: boolean;
  onClose?: () => void;
  closeOnEsc?: boolean;
  closeOnBlur?: boolean;
  showClose?: boolean;
  showInnerClose?: boolean;
  document?: Document;
  className: string;
  domRef: (ref: any) => void;
}
let openModals = 0;

class Modal extends PureComponent<ModalProps, any> {
  static Content: typeof ModalContent;
  static Card: typeof ModalCard;

  static defaultProps = {
    closeOnEsc: true,
    showClose: true,
    showInnerClose: false,
    closeOnBlur: false,
    className: undefined,
    domRef: createRef(),
    document: undefined,
    show: false,
  };
  portalElement: any = null;

  constructor(props) {
    super(props);
    this.state = {
      show: props.show,
    };
  }

  componentDidMount() {
    const { closeOnEsc } = this.props;

    const doc: any = this.getDocument();
    this.portalElement = doc.createElement('div');
    this.portalElement.setAttribute('class', 'modal-container');
    doc.body.appendChild(this.portalElement);
    // eslint-disable-next-line
    if (closeOnEsc) {
      doc.addEventListener('keydown', this.handleKeydown);
    }
    this.forceUpdate();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      typeof window !== 'undefined' &&
      (nextProps.show !== prevState.show || nextProps.show === false)
    ) {
      if (nextProps.show) {
        openModals = openModals + 1;
      } else {
        openModals = Math.max(0, openModals - 1);
      }
      let sbWidth = window.innerWidth - document.documentElement.clientWidth;

      const preventScroll = openModals || !nextProps.show;
      document.body.style.paddingRight =
        openModals || nextProps.show ? `${sbWidth}px` : '0';
      document.body.style.overflow = preventScroll ? 'auto' : 'hidden';
      document.documentElement.style.overflow = preventScroll
        ? 'auto'
        : 'hidden';

      const headerEl = document.querySelector('header');
      if (headerEl) {
        headerEl.style.marginRight = openModals ? `${sbWidth}px` : '0';
      }

      return {
        show: nextProps.show,
      };
    }
    return null;
  }

  componentWillUnmount() {
    const doc = this.getDocument();
    const { closeOnEsc } = this.props;
    if (closeOnEsc && doc) {
      doc.removeEventListener('keydown', this.handleKeydown);
    }
    // IE11 fix
    this.portalElement.parentNode.removeChild(this.portalElement);
  }

  getDocument = () => {
    if (this.props.document) {
      return this.props.document;
    }

    if (typeof document !== 'undefined') {
      return document;
    }

    return null;
  };

  handleKeydown = (e) => {
    if (e.keyCode === KEYCODES.ESCAPE && this.props.show) {
      this.props.onClose && this.props.onClose();
    }
  };

  render() {
    const { domRef, closeOnBlur, className } = this.props;
    const { show } = this.state;
    if (!this.getDocument() || !this.portalElement || !show) {
      return null;
    }
    const { children } = this.props;

    const showClose = this.props.showClose;
    const showInnerClose = this.props.showInnerClose;
    return (
      <Portal node={this.portalElement}>
        <div
          ref={domRef}
          className={classnames('modal', className, {
            'is-active': show,
          })}
        >
          <div
            role='presentation'
            className='modal-background'
            onClick={closeOnBlur ? this.props.onClose : undefined}
          />
          <div className='modal-position-relative modal-content'>
            {showInnerClose && (
              <button
                type='button'
                className='delete modal-close-inner'
                aria-label='close'
                onClick={this.props.onClose}
              />
            )}
            {children}
          </div>
          {showClose && (
            <button
              type='button'
              onClick={this.props.onClose}
              className='modal-close is-large'
              aria-label='close'
            />
          )}
        </div>
      </Portal>
    );
  }
}

Modal.Content = ModalContent;
Modal.Card = ModalCard;
export default Modal;
