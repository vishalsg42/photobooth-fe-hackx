import { useState, useCallback, useRef, useMemo } from 'react';
import { convertToBase64ByUrl, getAspectRatio } from '../utility/helper';

const webCamConfig = {
  audio: false,
  height: 720,
  width: 1280,
  screenshotFormat: 'image/jpeg',
  screenshotQuality: 1,
  videoConstraints: {
    facingMode: 'user',
  },
};

function gotDevices(deviceInfos: any) {
  const option: any = [];

  for (let i = 0; i !== deviceInfos.length; ++i) {
    const deviceInfo = deviceInfos[i];
    const obj: any = {
      id: deviceInfo.deviceId,
    };

    if (deviceInfo.kind === 'audioinput') {
      obj.text = deviceInfo.label || 'microphone ';
    } else if (deviceInfo.kind === 'videoinput') {
      obj.text = deviceInfo.label || 'camera ';
    } else {
      // console.log('Found another kind of device: ', deviceInfo);
    }
    option.push(obj);
  }
  return option;
}

const useCamera = () => {
  const videoEle: any = useRef<HTMLVideoElement>();
  const canvasEle = useRef<HTMLCanvasElement>();
  const frameCanvasEle = useRef<HTMLCanvasElement>();
  const imageEle = useRef<HTMLImageElement>();
  const imageFrame: any = useRef<HTMLImageElement>();
  const mediaBoxEle: any = useRef<HTMLImageElement>();

  const [deviceList, setDeviceList]: any = useState([]);
  const [aspectRatio, setAspectRatio] = useState(1);
  const [deviceId, setDeviceId] = useState('');
  const [loading, setLoading]: any = useState(false);
  const [imageURL, setImageUrl] = useState('');
  const [clickingPicture, setClickingPicture]: any = useState(false);
  const [pictureIsClicked, setPictureIsClicked]: any = useState(false);
  const [cameraImage, setCameraImage] = useState('');

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

            if (ratio === 1 && width >= window.innerWidth) {
              const w = window.innerWidth;
              mediaBoxEle.current.style.width = `${w}px`;
              mediaBoxEle.current.style.height = `${w}px`;
            } else {
              let w = width;
              const isMobile = window.innerWidth <= 600;
              if (window.innerWidth > width && isMobile) {
                w = window.innerWidth;
              }
              mediaBoxEle.current.style.width = `${w}px`;
              mediaBoxEle.current.style.height = null;

              if (isMobile) {
                const h = window.innerWidth / ratio;
                mediaBoxEle.current.style.height = `${h}px`;
              }
            }

            resolve({
              width,
              ratio,
              height,
            });
          } else {
            reject({
              message: 'Image frame not found',
            });
          }
        } catch (error) {
          console.log('Load Frame Error', error);
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
      const tracks = (stream && stream?.getTracks()) || [];
      tracks.forEach((track: MediaStreamTrack) => {
        if (track) track.stop();
      });
    }
  }, [videoEle]);

  const captureImage = useCallback(() => {
    const videoNode = videoEle.current;

    const canvasNode = canvasEle.current;
    const ctx = canvasNode?.getContext('2d');

    const frameNode: any = frameCanvasEle.current;
    const frameCtx: any = frameNode?.getContext('2d');

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

        const imageDataURL = canvasNode?.toDataURL('image/png') || '';
        setCameraImage(imageDataURL);
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

          const frameDataURL = frameNode?.toDataURL('image/png') || '';
          setImageUrl(frameDataURL);
        };
      }
    }
  }, [videoEle, imageFrame, stopCamera, canvasEle, frameCanvasEle]);

  const getStream = useCallback(
    async ({ deviceId = '', ratio }) => {
      return new Promise(async (resolve, reject) => {
        try {
          await stopCamera();

          const stream = await navigator.mediaDevices.getUserMedia({
            ...webCamConfig,
            video: {
              aspectRatio: ratio || aspectRatio || 1,
              deviceId,
            },
          });

          if (videoEle.current) {
            videoEle.current.srcObject = stream;
            resolve(stream);
          } else {
            resolve('');
          }
        } catch (e) {
          reject(e);
        }
      });
    },
    [videoEle, aspectRatio, stopCamera]
  );

  const switchStream = useCallback(async () => {
    if (deviceList?.length < 2) return;

    const currentDeviceIndex = deviceList.findIndex((obj: any) => {
      const value = Object.keys(obj)[0];
      return obj[value] === deviceId;
    });

    const nextDeviceIndex =
      currentDeviceIndex > -1 && currentDeviceIndex < deviceList.length - 1
        ? currentDeviceIndex + 1
        : 0;

    const nextDevice = deviceList[nextDeviceIndex];

    const nextDeviceKey = Object.keys(nextDevice)[0];
    const nextDeviceId = nextDevice[nextDeviceKey];

    setDeviceId(nextDeviceId);
    setLoading(true);
    await getStream({
      deviceId: nextDeviceId,
    });
    setLoading(false);
  }, [deviceId, deviceList, getStream]);

  const startCamera = useCallback(
    async ({ ratio: aspectRatio }: any) => {
      return new Promise(async (resolve, reject) => {
        try {
          const devices: any = await navigator.mediaDevices
            .enumerateDevices()
            .then(gotDevices)
            .catch((e) => {
              console.log('Error', e);
            });

          const mediaList: any = devices
            .map(({ text, id }: any) => {
              const value = String(text).toLowerCase();
              if (value.indexOf('camera') > -1) {
                if (value.indexOf('facing back') > -1) {
                  return {
                    id,
                    label: 'back',
                  };
                }

                if (value.indexOf('facing front') > -1) {
                  return {
                    id,
                    label: 'front',
                  };
                }

                return {
                  id,
                  label: 'front',
                };
              }

              return null;
            })
            .filter(Boolean);

          const [device = {}] = mediaList;
          const deviceKey = Object.keys(device)[0];
          const deviceId = device[deviceKey] || '';

          setDeviceList(mediaList);
          setAspectRatio(aspectRatio);
          setDeviceId(deviceId);

          await getStream({
            ratio: aspectRatio || 1,
            deviceId,
          });

          resolve(true);
        } catch (error) {
          console.log('error', error);
          reject(error);
        }
      });
    },
    [getStream]
  );

  const takeSelfie = useCallback(async () => {
    return new Promise((resolve, reject) => {
      try {
        setClickingPicture(true);
        setTimeout(() => {
          captureImage();
          resolve(true);
          setClickingPicture(false);
          setPictureIsClicked(true);
        }, 3000);
      } catch (e) {
        reject(e);
      }
    });
  }, [captureImage]);

  const [frontFacingEnabled, enableSwitch] = useMemo(() => {
    const deviceListLength = deviceList?.length;

    if (deviceListLength === 1) return [true, false];

    if (deviceList?.filter(({ label }) => label === 'front').length > 0)
      return [true, deviceListLength > 1];

    return [false, deviceListLength > 1];
  }, [deviceList]);

  const value = useMemo(() => {
    return [
      {
        imageURL,
        videoEle,
        canvasEle,
        imageEle,
        imageFrame,
        frameCanvasEle,
        mediaBoxEle,
        deviceList,
        clickingPicture,
        frontFacingEnabled,
        enableSwitch,
        isCameraInstanceLoading: loading,
        cameraImage,
        pictureIsClicked,
      },
      {
        takeSelfie,
        captureImage,
        stopCamera,
        startCamera,
        loadFrame,
        setImageUrl,
        setDeviceList,
        getStream,
        switchStream,
        setClickingPicture,
        setLoading,
        setPictureIsClicked,
      },
    ];
  }, [
    imageURL,
    videoEle,
    canvasEle,
    imageEle,
    imageFrame,
    frameCanvasEle,
    mediaBoxEle,
    deviceList,
    clickingPicture,
    frontFacingEnabled,
    loading,
    cameraImage,
    pictureIsClicked,
    enableSwitch,
    captureImage,
    getStream,
    loadFrame,
    startCamera,
    stopCamera,
    switchStream,
    takeSelfie,
    setPictureIsClicked,
  ]);

  return value;
};

export default useCamera;
