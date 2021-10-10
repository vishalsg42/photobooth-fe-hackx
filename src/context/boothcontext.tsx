import { useCallback } from 'react';
import { createContext, useEffect, useMemo, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import useCamera from '@/hooks/useCamera';
import useFetch from '@/hooks/useFetch';
import { cameraServices } from '@/services/camera';
import frameUrls from '@/utility/frameUrl';
import { srcToFile } from '@/utility/helper';

export interface BoothContextState {
  frameUrl?: string;
  loading?: boolean;
}

export interface BoothContextAPI {
  setFrameUrl?: any;
  setLoader?: any;
}

const boothContext = createContext<[BoothContextState, BoothContextAPI]>([
  { frameUrl: '' },
  {},
]);

export const BoothProvider: any = boothContext.Provider;
export const BoothConsumer = boothContext.Consumer;

export default boothContext;

export const BoothContextProvider = ({ children }: any) => {
  const { addToast } = useToasts();
  const [frameUrl, setFrameUrl] = useState(frameUrls[0]);
  const [isLoading, setLoader] = useState(true);
  const [isActiveSocialLinks, setSocialLinksActive] = useState(false);

  const [cameraValue, cameraApi]: any = useCamera();
  const cameraState = useMemo(() => cameraValue, [cameraValue]);
  const { imageEle } = cameraState;
  const {
    loading: isFileUploading,
    data: uploadFileData,
    error: errorUploadingFile,
    handler: uploadFile,
  } = useFetch({
    ...cameraServices.uploadFile,
  });
  const {
    loading: isFramesLoading,
    data: framesData,
    error: errorFetcingFrames,
    handler: fetchFrames,
  } = useFetch({
    ...cameraServices.frames,
  });

  const { loadFrame, startCamera } = cameraApi;

  const loadFrameWithCamera = useCallback(
    async (url = '') => {
      try {
        setLoader(true);
        const { ratio } = await loadFrame(url);
        if (ratio) await startCamera({ ratio });
        setLoader(false);
      } catch (e) {
        console.log('Load Frame And Camera Error', e);
        setLoader(false);

        const message =
          e.message === 'Permission denied'
            ? `${e.message}. Please allow camera access.`
            : e.message;
        addToast(message || 'Something went wrong while loading camera', {
          appearance: 'error',
          autoDismiss: true,
        });
      }
    },
    // eslint-disable-next-line
    [loadFrame, startCamera]
  );

  const handleFileUpload = useCallback(
    async ({ frameId = 1, email = '' }) => {
      try {
        let mainImage: any = '',
          framedImage: any = '';
        if (imageEle?.current?.src) {
          mainImage = await srcToFile(
            imageEle.current.src,
            'mainImage.png',
            'image/png'
          );
        }

        if (imageEle?.current?.src) {
          framedImage = await srcToFile(
            imageEle.current.src,
            'frameImage.png',
            'image/png'
          );
        }

        const payload = new FormData();
        const clientCode = '019cbadff1637';

        payload.append('mainImage', mainImage);
        payload.append('framedImage', framedImage);
        payload.append('clientCode', clientCode);
        payload.append('frameId', frameId);
        payload.append('email', email);

        await uploadFile({ payload });
      } catch (e) {
        console.log('Error', e);
      }
    },
    [uploadFile, imageEle]
  );

  const handleFetchFrames = useCallback(async () => {
    try {
      await fetchFrames();
    } catch (e) {
      console.log('Error', e);
    }
  }, [fetchFrames]);

  const loadingActive = useMemo(
    () => isLoading || isFileUploading || isFramesLoading,
    [isFileUploading, isLoading, isFramesLoading]
  );

  const error = useMemo(
    () => errorUploadingFile || errorFetcingFrames,
    [errorUploadingFile, errorFetcingFrames]
  );

  const state = useMemo(
    () => ({
      frameUrl,
      isLoading: loadingActive,
      uploadFileData,
      framesData,
      error,
      isActiveSocialLinks,
      ...cameraState,
    }),
    [
      error,
      cameraState,
      frameUrl,
      loadingActive,
      uploadFileData,
      framesData,
      isActiveSocialLinks,
    ]
  );

  useEffect(() => {
    let message = '';
    if (typeof error === 'object') {
      message = error?.message;
    } else if (typeof error == 'string') {
      message = error;
    }

    if (message) addToast(message, { appearance: 'error', autoDismiss: true });
  }, [error, addToast]);

  // useEffect(() => {
  //   fetchFrames().then(() => {
  //     loadFrameWithCamera(frameUrls[0]);
  //   });
  //   // eslint-disable-next-line
  // }, []);

  const value = useMemo(() => {
    return [
      state,
      {
        setFrameUrl,
        setLoader,
        loadFrameWithCamera,
        handleFileUpload,
        handleFetchFrames,
        setSocialLinksActive,
        ...cameraApi,
      },
    ];
  }, [
    state,
    cameraApi,
    loadFrameWithCamera,
    handleFileUpload,
    handleFetchFrames,
    setSocialLinksActive,
  ]);

  return <BoothProvider value={value}>{children}</BoothProvider>;
};
