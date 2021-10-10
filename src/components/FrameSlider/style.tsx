import styled from "styled-components";

export const FrameSlider = styled.div``;

export const FrameSliderWrapper = styled.div`
  background-color: #fff;
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 30px;
  border-radius: 5px;
  width: 60%;
  box-shadow: inset 0 2px 31px -13px #000;
  max-height: 80%;

  .swiper-wrapper {
    height: auto;
    width: 85%;
  }

  .swiper-slide {
    height: auto;
    padding: 0 10px;
    display: flex;
    align-items: center;
    img {
      height: auto;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    padding: 0;
    max-height: 30vh;

    .swiper-slide {
      flex: 1;
    }
  }
`;
