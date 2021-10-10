import styled, { css } from "styled-components";
import { keyframes } from "styled-components";
import Flash from "../@keyframes/Flash";

export const FrameSlider = styled.div``;

export const FrameSliderWrapper = styled.div`
  max-width: 90%;
  margin: auto;
  .swiper-slide {
    height: auto;
    padding: 0 10px 10px;
    display: flex;
    align-items: center;
    img {
      height: auto;
    }
  }
`;

const FlashAnimation = keyframes`${Flash}`;

const myCss = css`
  animation: 1 1s ${FlashAnimation};
`;

export const FlashDiv: any = styled.div`
  ${(props: any) => props.active && myCss};
`;
