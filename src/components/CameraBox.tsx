import React, { useEffect, createRef, useState } from 'react';
import ImageFrame from '../assets/images/frame-1.png';
import { convertToBase64 } from '../utility/helper';
import CountDownTimer from './CountdownTimer';

const webCamConfig = {
    audio: false,
    height: 720,
    width: 1280,
    screenshotFormat: "image/jpeg",
    screenshotQuality: 1,
    videoConstraints: {
        facingMode: 'user'
    }
};



const CameraBox = () => {
    const [imageURL, setImageUrl] = useState('')
    let [timerCounter, setTimerCounter] = useState(0);
    const videoEle = createRef<HTMLVideoElement>();
    const canvasEle = createRef<HTMLCanvasElement>();
    const imageEle = createRef<HTMLImageElement>();
    const imageFrame = createRef<HTMLImageElement>();

    useEffect(() => {
        const startCamera = async () => {
            try {
                console.log('navigator.mediaDevices', navigator);
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoEle.current) {
                    videoEle.current.srcObject = stream;
                }
            } catch (error) {
                console.log('error', error);
            }
        }

        const loadFrame = async () => {
            try {
                let getFrameData = await convertToBase64(ImageFrame);
                if (imageFrame.current) {
                    imageFrame.current.src = getFrameData;
                }
            } catch (error) {
                console.log('error', error);
            }
        }

        startCamera()
        // loadFrame();
    });

    const stopCamera = () => {
        const videoNode = videoEle.current;
        if (videoNode) {
            const stream: MediaStream = videoNode.srcObject as MediaStream;
            const tracks = stream.getTracks();
            tracks.forEach((track: MediaStreamTrack) => {
                console.log('track', track);
                if (track) {
                    track.stop();
                    console.log('track.stop()', track.stop());
                }
            });
        }
    }

    const captureImage = () => {
        const videoNode = videoEle.current;
        const canvasNode = canvasEle.current;
        const imageFrameNode = imageFrame.current;
        const ctx = canvasEle.current?.getContext('2d');

        if (videoNode || canvasNode) {
            const width = videoNode?.videoWidth || webCamConfig.width;
            const height = videoNode?.videoHeight || webCamConfig.height;
            if (canvasNode && (canvasNode.width || canvasNode.height)) {
                canvasNode.width = width;
                canvasNode.height = height;
            }

            console.log('imageFrame', imageFrame)
            if (videoNode instanceof HTMLVideoElement &&
                ctx instanceof CanvasRenderingContext2D) {
                ctx.drawImage(videoNode, 0, 0, width, height);
                ctx.drawImage(imageFrameNode as HTMLImageElement, 0, 0, width, height);
                console.log('ctx', ctx);
                const imageDataURL = canvasNode?.toDataURL('image/png') || '';
                stopCamera();
                setImageUrl(imageDataURL);
            }

        }
    }

    const takeSelfie = () => {
        const counterTimer = setInterval(() => {
            setTimerCounter(timerCounter++);
        }, 1000);
        setTimeout(() => {
            clearInterval(counterTimer);
            captureImage();
        }, 3000);
    }


    return (
        <>
            <div className="row camera-box">
                <div className="d-flex flex-column align-items-center justify-content-center  align-self-center m-auto">
                    {
                        !imageURL && !imageURL.length ?
                            <div className="media-box">
                                <video autoPlay={true} ref={videoEle}></video>
                                <img ref={imageFrame} alt="" />
                                {/* { timerCounter ?  : ''} */}
                                <CountDownTimer totalTimer={3} />
                            </div> :
                            <img src={imageURL} ref={imageEle} alt="" />

                    }
                    <div className="">
                        <button className="btn rounded-btn gradient-btn" onClick={takeSelfie}>
                            Start
                        </button>
                    </div>
                    <canvas ref={canvasEle}></canvas>

                </div>

            </div>
        </>
    )
}

export default CameraBox;