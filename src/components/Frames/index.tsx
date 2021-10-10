import SwiperCore, { Lazy, Thumbs, Pagination, Navigation } from "swiper";
import Swiper from "react-id-swiper";
import { useMemo, useState } from "react";
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
  const [active, toggleActive] = useState(false);
  const [, { loadFrameWithCamera, setImageUrl }]: any = useBooth();

  const slides = useMemo(() => {
    return frameUrls.map((e, index) => (
      <FrameSlider key={index} className='slider-item'>
        <Image
          onClick={async () => {
            setImageUrl("");
            toggleActive(false);
            await loadFrameWithCamera(e);
          }}
          src={e}
          alt={`Slide`}
        />
      </FrameSlider>
    ));
  }, [loadFrameWithCamera, setImageUrl]);

  return (
    <FrameSliderWrapper
      onMouseEnter={() => toggleActive(true)}
      onMouseLeave={() => toggleActive(false)}
      style={{ top: active ? "30%" : "92%" }}
    >
      <h3>Select Frames</h3>
      <Swiper {...params}>{slides}</Swiper>
    </FrameSliderWrapper>
  );
};

export default ReelSlider;
