import { useEffect, useState } from "react";
import SwiperCore, { Navigation, Pagination, Lazy, Thumbs } from "swiper";
import Swiper from 'react-id-swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper from 'react-id-swiper';
// import { loadFile } from "../../utility/helper";
// import { Image } from 'react-bootstrap';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
import './style.scss';

SwiperCore.use([Navigation, Lazy, Thumbs])

const ReelSlider = () => {
    const slides: any = [];
    const d = [
        'https://i.ibb.co/GWVz9Dk/frame-1.png',
        'https://i.ibb.co/6JZ18YQ/frames-2.png',
        'https://i.ibb.co/DrNsfj2/frames-3.png',
        'https://i.ibb.co/ngnSkZK/frames-4.png',
        'https://i.ibb.co/72VLQPZ/frames-5.png',
        'https://i.ibb.co/HtRGL3C/frames-6.png',
        'https://i.ibb.co/ccrdWDS/frames-7.png',
        'https://i.ibb.co/Tr2tXXv/frames-8.png',
        'https://i.ibb.co/4pMNSDh/frames-9.png',
        'https://i.ibb.co/DpJ7gMB/frames-10.png',
    ]
    // const [slides, setslides] = useState([]);

    for (let index = 0; index < 10; index++) {
        slides.push(
    //         <SwiperSlide tag="li" key={index}>
                // <div className="slider-item" key={index}>
                //     {/* https://picsum.photos/id/${index + 1}/1600/500 */}
                //     <Image key={index} src={d[index]}
                //         alt={`Slise ${index}`} />
                // </div>

    //         </SwiperSlide>
        )
    }

    // useEffect(() => {
    //     let data = async () => await loadFile('../config/frames.json');
    //     console.log('data', data);
    //     // slides = data as Array;

    // }, []);
    let params = {
        id: 'frame-slider',
        // tag: 'div',
        // wrapperTag: 'ul',
        // slidesPerView: 3,
        // slidesPerGroup: 3,
        spaceBetween: 5,
        loop: true,
        mousewheel: true,
        lazy: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
       
        breakpoints: {
            1024: {
              slidesPerView: 4,
              spaceBetween: 5
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 5
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 5
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            }
          }
        // onSwiper: (swiper: any) => console.log(swiper),
        // onSlideChange: () => console.log('slide change')

    }

    return (
        <>
            <Swiper
                {...params}
                // slideToClickedSlide={true}
            // id="frame-slider"
            // tag="div"
            // spaceBetween={5}
            // direction={'horizontal'}
            // preloadImages={true}
            // effect={'slide'}
            // slidesPerView={5}
            // loop={true}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            >
                {slides}
                {/* <div>Slide 1</div>
                <div>Slide 2</div>
                <div>Slide 3</div>
                <div>Slide 4</div>
                <div>Slide 5</div> */}
            </Swiper>
        </>
    )
}

export default ReelSlider;