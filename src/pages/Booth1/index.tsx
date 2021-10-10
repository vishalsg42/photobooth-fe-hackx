import CameraBox from "../../components/CameraBox";
import Frames from "../../components/FrameSlider";
import { BoothContextProvider } from "../../context/boothcontext";

const BoothPage = () => {
  return (
    <BoothContextProvider>
      <div className='page'>
        <CameraBox />
        <Frames />
      </div>
    </BoothContextProvider>
  );
};

export default BoothPage;
