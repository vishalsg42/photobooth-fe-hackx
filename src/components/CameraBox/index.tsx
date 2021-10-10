import CountDownTimer from "../CountdownTimer";
import { css } from "@emotion/react";

import GridLoader from "react-spinners/GridLoader";
import cn from "classnames";
import useBooth from "../../hooks/useBooth";
import { FlashDiv } from "./style";
import Image from "../Image";
import camIcon from "../../assets/images/camera.png";
import Buttons from "./Buttons";

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
    { switchStream },
  ]: any = useBooth();

  return (
    <>
      <GridLoader
        color={"#fff"}
        loading={isLoading}
        size={80}
        css={css`
          margin: auto;
          position: absolute;
          transform: translate(-50%, -50%);
          left: 50%;
          top: 50%;
        `}
      />
      <div
        className={cn({
          loading: isLoading,
        })}
      >
        <div className='switch-box-container'>
          <Image
            className='switch'
            src={camIcon}
            alt={"switch"}
            title={"Switch"}
            onClick={switchStream}
          />
        </div>
        <div ref={mediaBoxEle} className='media-box'>
          <div style={{ display: imageURL.length ? "none" : "block" }}>
            <video
              className={cn({
                front: frontFacingEnabled,
              })}
              autoPlay={true}
              ref={videoEle}
            ></video>
            <img className='video-image' ref={imageFrame} alt='' />
            {clickingPicture && <CountDownTimer totalTimer={3} />}
          </div>

          <FlashDiv>
            <img
              style={{ display: !imageURL.length ? "none" : "block" }}
              src={imageURL}
              ref={imageEle}
              alt='selfie'
              className='cam-image'
            />
          </FlashDiv>
        </div>

        <Buttons />

        <canvas ref={canvasEle}></canvas>
        <canvas ref={frameCanvasEle}></canvas>
      </div>
    </>
  );
};

export default CameraBox;
