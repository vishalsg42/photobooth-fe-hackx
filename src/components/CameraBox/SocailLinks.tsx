import Button from '@/components/atoms/Button';
import Buttons from '@/components/atoms/Button/Buttons';
import useBooth from '@/hooks/useBooth';
import { useCallback } from 'react';

const SocialLinks = () => {
  const [{ isActiveSocialLinks, imageURL, ...rest }]: any = useBooth();
  const shareOnFB = useCallback(() => {
    console.log('rest', imageURL, rest);

    // window.open(
    //   'http://www.facebook.com/sharer.php?u=' +
    //     encodeURIComponent(imageURL) +
    //     '&t=' +
    //     encodeURIComponent('Image'),
    //   'sharer',
    //   'toolbar=0,status=0,width=626,height=436'
    // );
  }, [imageURL, rest]);

  const downloadFile = useCallback(() => {
    console.log('link', imageURL);
    if (imageURL) {
      const anchor = document.createElement('a');
      anchor.href = imageURL;
      anchor.download = 'image.png';
      document.body.appendChild(anchor);
      anchor.click();
    }
  }, [imageURL]);

  if (!isActiveSocialLinks) return null;

  return (
    <Buttons className={'mt-6 mb-2'} align={'centered'}>
      <Button className='is-link' onClick={() => shareOnFB()}>
        Facebook
      </Button>
      <Button className='is-info'>Twitter</Button>
      <Button className='is-info is-light'>Email</Button>
      <Button onClick={downloadFile} className='is-link is-light'>
        Download
      </Button>
    </Buttons>
  );
};

export default SocialLinks;
