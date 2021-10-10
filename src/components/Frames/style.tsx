import styled from "styled-components";

export const FrameSlider = styled.div``;

export const FrameSliderWrapper = styled.div`
  h3 {
    text-align: center;
    text-transform: uppercase;
  }
  position: fixed;
  background-color: #fff;
  padding: 10px 0 0;
  width: 100%;
  bottom: -57%;
  left: 50%;
  transform: translateX(-50%);
  transition: 0.3s all ease-in-out;
  box-shadow: inset 0 2px 31px -13px #000;
  max-height: 90%;

  .swiper-container {
    max-width: 95%;
  }
  .swiper-wrapper {
    height: auto;
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
`;
