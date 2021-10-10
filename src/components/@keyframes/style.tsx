import styled, { css } from 'styled-components';
import { keyframes } from 'styled-components';
import Flash from '../@keyframes/Flash';

const FlashAnimation = keyframes`${Flash}`;

const myCss = css`
  animation: 1 1s ${FlashAnimation};
`;

export const FlashDiv: any = styled.div`
  ${(props: any) => props.active && myCss};
`;
