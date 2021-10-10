import { useState, useCallback, useRef } from "react";
import { useToasts } from 'react-toast-notifications';
import { convertToBase64ByUrl, getAspectRatio } from "../utility/helper";

const webCamConfig = {
  audio: false,
  height: 720,
  width: 1280,
  screenshotFormat: "image/jpeg",
  screenshotQuality: 1,
  videoConstraints: {
    facingMode: "user",
  },
};

const useCamera = () => {
  const { addToast } = useToasts();
  const videoEle = useRef<HTMLVideoElement>();
  const canvasEle = useRef<HTMLCanvasElement>();
  const frameCanvasEle = useRef<HTMLCanvasElement>();
  const imageEle = useRef<HTMLImageElement>();
  const imageFrame: any = useRef<HTMLImageElement>();
  const mediaBoxEle: any = useRef<HTMLImageElement>();

  const [imageURL, setImageUrl] = useState("");
  const [timerCounter, setTimerCounter] = useState(0);

  const startCamera = useCallback(
    async ({ ratio: aspectRatio }: any) => {
      return new Promise(async (resolve, reject) => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: {
              aspectRatio: aspectRatio || 1,
            },
          });


          if (videoEle.current) {
            videoEle.current.srcObject = stream;
          }
          resolve(true);
        } catch (error) {
          console.log("error", error);
          addToast('Please check if you have camera device connected.', { appearance: "error", autoDismiss: false });

          reject(error);
        }
      });
    },
    [videoEle]
  );

  const loadFrame = useCallback(
    async (url: string) => {
      return new Promise(async (resolve, reject) => {
        try {
          let getFrameData = await convertToBase64ByUrl(url);
          if (imageFrame.current) {
            imageFrame.current.src = getFrameData;

            const { width, ratio, height }: any = await getAspectRatio(
              imageFrame.current,
              {
                height: mediaBoxEle.current.offsetHeight,
              }
            );

            mediaBoxEle.current.style.width = `${width}px`;

            resolve({
              width,
              ratio,
              height,
            });
          } else {
            reject({
              message: "Image frame not found",
            });
          }
        } catch (error) {
          console.log("Load Frame Error", error);
          reject(error);
        }
      });
    },
    [imageFrame, mediaBoxEle]
  );

  const stopCamera = useCallback(() => {
    const videoNode = videoEle.current;

    if (videoNode) {
      const stream: MediaStream = videoNode.srcObject as MediaStream;
      const tracks = stream.getTracks();
      tracks.forEach((track: MediaStreamTrack) => {
        if (track) track.stop();
      });
    }
  }, [videoEle]);

  const captureImage = useCallback(() => {
    const videoNode = videoEle.current;

    const canvasNode = canvasEle.current;
    const ctx = canvasNode?.getContext("2d");

    const frameNode: any = frameCanvasEle.current;
    const frameCtx: any = frameNode?.getContext("2d");

    const imageFrameNode: any = imageFrame.current;

    if (videoNode || canvasNode) {
      const width = videoNode?.videoWidth || webCamConfig.width;
      const height = videoNode?.videoHeight || webCamConfig.height;

      if (canvasNode && (canvasNode.width || canvasNode.height)) {
        canvasNode.width = width;
        canvasNode.height = height;
        frameNode.width = width;
        frameNode.height = height;
      }

      if (
        videoNode instanceof HTMLVideoElement &&
        ctx instanceof CanvasRenderingContext2D
      ) {
        ctx.translate(width, 0);
        ctx.scale(-1, 1);
        ctx.drawImage(videoNode, 0, 0, width, height);

        const imageDataURL = canvasNode?.toDataURL("image/png") || "";
        stopCamera();

        const frameImage = new Image();
        frameImage.src = imageDataURL;

        frameImage.onload = () => {
          frameCtx.drawImage(
            frameImage as HTMLImageElement,
            0,
            0,
            width,
            height
          );

          frameCtx.drawImage(
            imageFrameNode as HTMLImageElement,
            0,
            0,
            width,
            height
          );

          const frameDataURL = frameNode?.toDataURL("image/png") || "";
          setImageUrl(frameDataURL);
        };
      }
    }
  }, [videoEle, imageFrame, stopCamera, canvasEle, frameCanvasEle]);

  const takeSelfie = useCallback(() => {
    const counterTimer = setInterval(
      () => setTimerCounter((counter) => counter++),
      1000
    );

    setTimeout(() => {
      clearInterval(counterTimer);
      captureImage();
    }, 3000);
  }, [captureImage]);

  return [
    {
      imageURL,
      timerCounter,
      videoEle,
      canvasEle,
      imageEle,
      imageFrame,
      frameCanvasEle,
      mediaBoxEle,
    },
    {
      takeSelfie,
      captureImage,
      stopCamera,
      startCamera,
      loadFrame,
      setImageUrl,
    },
  ];
};

export default useCamera;
