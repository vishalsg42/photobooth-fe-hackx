import Button from '@/components/atoms/Button';
import Buttons from '@/components/atoms/Button/Buttons';
import useAppContext from '@/hooks/useApp';
import useBooth from '@/hooks/useBooth';
import frameUrls from '@/utility/frameUrl';

const ButtonsWrapper = () => {
  const [
    { pictureIsClicked, isActiveSocialLinks },
    { takeSelfie, setPictureIsClicked, setImageUrl, loadFrameWithCamera },
  ]: any = useBooth();

  const [, { toggleEmailPopup }]: any = useAppContext();

  if (isActiveSocialLinks) return null;

  return (
    <Buttons className='mt-4 mb-2' align={'centered'}>
      {!pictureIsClicked ? (
        <Button
          onClick={async () => {
            takeSelfie();
          }}
          className='btn rounded-btn gradient-btn'
        >
          start
        </Button>
      ) : (
        <>
          <Button
            className='btn rounded-btn gradient-btn'
            onClick={async () => {
              setImageUrl('');
              setPictureIsClicked(false);
              loadFrameWithCamera(frameUrls[0]);
            }}
          >
            Retake
          </Button>
          <Button
            className='btn rounded-btn gradient-btn'
            onClick={() => toggleEmailPopup(true)}
          >
            I like It
          </Button>
        </>
      )}
    </Buttons>
  );
};

export default ButtonsWrapper;
