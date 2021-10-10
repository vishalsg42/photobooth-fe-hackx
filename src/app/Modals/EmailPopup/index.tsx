import Modal from '@/components/atoms/Modal';
import useAppContext from '@/hooks/useApp';
import ModalContent from './ModalContent';

function EmailPopupModal() {
  const [{ openEmailPopup }, { toggleEmailPopup }]: any = useAppContext();

  return (
    <Modal
      show={openEmailPopup}
      showClose={false}
      onClose={() => toggleEmailPopup(false)}
    >
      <ModalContent />
    </Modal>
  );
}

export default EmailPopupModal;
