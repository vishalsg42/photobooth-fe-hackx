import SwiperCore, { Lazy, Thumbs, Pagination, Navigation } from 'swiper';
import Swiper from 'react-id-swiper';
import { useMemo } from 'react';
import Img from '@/components/atoms/Image';
import { params } from './constants';
import useBooth from '@/hooks/useBooth';
import frameUrls from '../../utility/frameUrl';

// import styles
import styles from './style.module.scss';
import classNames from 'classnames';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Lazy, Thumbs, Pagination, Navigation]);

const ReelSlider = () => {
  const [
    { framesData },
    {
      loadFrameWithCamera,
      setImageUrl,
      setPictureIsClicked,
      setSocialLinksActive,
    },
  ]: any = useBooth();
  // mode: 'no-cors'

  const slides = useMemo(() => {
    //TODO - enable when api resolves cors error
    if (framesData?.data) {
      return framesData.data.map((e: any, index: number) => {
        return (
          <Img
            key={index}
            onClick={async () => {
              // setImageUrl('');
              // setPictureIsClicked(false);
              // const img = new Image();
              // img.crossOrigin = 'anonymous';
              // const canvas = document.createElement('canvas');
              // const ctx: any = canvas.getContext('2d');

              // img.src = e.url;
              // img.onload = () => {
              //   // Set width and height
              //   canvas.width = img.width;
              //   canvas.height = img.height;
              //   // Draw the image
              //   ctx.drawImage(img, 0, 0);
              //   const url = canvas.toDataURL();
              //   console.log('imag', img);
              //   console.log('url', url);
              // };

              await loadFrameWithCamera(e.url);
            }}
            src={e.url}
            alt={`Slide`}
          />
        );
      });
    }

    return frameUrls.map((e, index) => (
      <Img
        key={index}
        onClick={async () => {
          setImageUrl('');
          setPictureIsClicked(false);
          setSocialLinksActive(false);
          await loadFrameWithCamera(e);
        }}
        src={e}
        alt={`Slide`}
      />
    ));
  }, [
    loadFrameWithCamera,
    setImageUrl,
    setPictureIsClicked,
    setSocialLinksActive,
    framesData,
  ]);

  if (!framesData?.success) return null;

  return (
    <Swiper
      containerClass={classNames(
        styles.FrameSliderWrapper,
        'frame-swiper-slider'
      )}
      {...params}
    >
      {slides}
    </Swiper>
  );
};

export default ReelSlider;
