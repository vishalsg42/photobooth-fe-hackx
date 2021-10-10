import Button from '@/components/atoms/Button';
import Form from '@/components/atoms/Form';
import useAppContext from '@/hooks/useApp';
import useBooth from '@/hooks/useBooth';
import classNames from 'classnames';
import { useState } from 'react';
import { useCallback } from 'react';
import { useToasts } from 'react-toast-notifications';
import styles from './style.module.scss';

const ModalContent = () => {
  const [email, setEmail] = useState('');
  const { addToast } = useToasts();
  const [, { toggleEmailPopup }]: any = useAppContext();
  const [, { handleFileUpload, setSocialLinksActive }]: any = useBooth();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (email) {
        if (handleFileUpload) {
          await handleFileUpload({
            email,
          });
          toggleEmailPopup(false);
          setSocialLinksActive(true);
        }
      } else {
        addToast('Please enter email', {
          appearance: 'info',
          autoDismiss: true,
        });
      }
    },
    [email, handleFileUpload, toggleEmailPopup, addToast, setSocialLinksActive]
  );

  return (
    <div className={classNames('modal-card-body', styles.root)}>
      <span onClick={() => toggleEmailPopup(false)} className={styles.close}>
        x
      </span>
      <form method={'POST'} onSubmit={handleSubmit}>
        <label className='has-text-weight-bold' htmlFor={'email'}>
          Email{' '}
        </label>
        <Form.Input
          className='p-2 mt-2'
          id={'email'}
          name={'email'}
          onChange={(e) => setEmail(e.currentTarget.value)}
          placeholder='Enter your email id.'
        />
        <div className='has-text-centered mt-3'>
          <Button className='is-primary is-medium'>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default ModalContent;
