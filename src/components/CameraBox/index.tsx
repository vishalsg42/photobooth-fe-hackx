import CountDownTimer from '../CountdownTimer';
import { css } from '@emotion/react';

import GridLoader from 'react-spinners/ScaleLoader';
import cn from 'classnames';
import useBooth from '@/hooks/useBooth';

import Buttons from './Buttons';
import CameraSwitch from './CameraSwitch';

import styles from './style.module.scss';
import './style.scss';
import SocialLinks from './SocailLinks';
import frameUrls from '@/utility/frameUrl';
import { useEffect } from 'react';

const CameraBox = () => {
  const [
    {
      imageURL,
      imageEle,
      imageFrame,
      videoEle,
      canvasEle,
      frameCanvasEle,
      mediaBoxEle,
      isLoading,
      clickingPicture,
      frontFacingEnabled,
    },
    { handleFetchFrames, loadFrameWithCamera },
  ]: any = useBooth();

  useEffect(() => {
    handleFetchFrames().then(() => {
      loadFrameWithCamera(frameUrls[0]);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <GridLoader
        color={'#fff'}
        loading={isLoading}
        height={90}
        width={10}
        speedMultiplier={1.5}
        margin={5}
        css={css`
          margin: auto;
          position: absolute;
          transform: translate(-50%, -50%);
          left: 50%;
          top: calc(50% - 50px);
        `}
      />
      <div className={cn(isLoading && styles.loading)}>
        <div ref={mediaBoxEle} className={styles['media-box']}>
          <CameraSwitch />

          <div className={cn(styles.display, !imageURL.length && styles.show)}>
            <video
              className={cn(styles['video-image'], {
                front: frontFacingEnabled,
              })}
              autoPlay={true}
              ref={videoEle}
            ></video>
            <img className={styles['video-image']} ref={imageFrame} alt='' />
            {clickingPicture && <CountDownTimer totalTimer={3} />}
          </div>

          <img
            className={cn(styles.display, !!imageURL.length && styles.show)}
            src={imageURL}
            ref={imageEle}
            alt='selfie'
          />
        </div>

        <canvas ref={canvasEle}></canvas>
        <canvas ref={frameCanvasEle}></canvas>
        <Buttons />
        <SocialLinks />
      </div>
    </>
  );
};

export default CameraBox;
