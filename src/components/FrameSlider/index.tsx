import SwiperCore, { Lazy, Thumbs, Pagination, Navigation } from "swiper";
import Swiper from "react-id-swiper";
import { useMemo } from "react";
import Image from "../../components/Image";
import { params } from "./constants";
import { FrameSlider, FrameSliderWrapper } from "./style";
import useBooth from "../../hooks/useBooth";
import frameUrls from "../../utility/frameUrl";

// import styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Lazy, Thumbs, Pagination, Navigation]);

const ReelSlider = () => {
  const [{ framesData }, { loadFrameWithCamera, setImageUrl }]: any =
    useBooth();

  const slides = useMemo(() => {
    if (framesData?.data) {
      return framesData.data.map((e: any, index: number) => {
        return (
          <FrameSlider key={index} className='slider-item'>
            <Image
              onClick={async () => {
                setImageUrl("");
                await loadFrameWithCamera(e.url);
              }}
              src={e.url}
              alt={`Slide`}
            />
          </FrameSlider>
        );
      });
    }

    return frameUrls.map((e, index) => (
      <FrameSlider key={index} className='slider-item'>
        <Image
          onClick={async () => {
            setImageUrl("");
            await loadFrameWithCamera(e);
          }}
          src={e}
          alt={`Slide`}
        />
      </FrameSlider>
    ));
  }, [loadFrameWithCamera, setImageUrl, framesData]);

  // console.log("framesData", framesData, framesData);

  if (!framesData?.success) return null;

  return (
    <FrameSliderWrapper>
      <Swiper
        resizeObserver
        {...params}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {slides}
      </Swiper>
    </FrameSliderWrapper>
  );
};

export default ReelSlider;
