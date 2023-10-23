import styled from '@emotion/styled';

type CarouselControlsOrientation = {left?: boolean, right?: boolean}
export const CarouselItem = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
  z-index: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    opacity: 0;
    transform: scale(1.1);
    transition: opacity 1s cubic-bezier(0.65, 0, 0.35, 1), transform 1s cubic-bezier(0.65, 0, 0.35, 1);
  }
  &[data-active-slide] img {
    opacity: 1;
    transform: scale(1);
    transition: opacity 1s cubic-bezier(0.65, 0, 0.35, 1), transform 1s cubic-bezier(0.65, 0, 0.35, 1);
  }
  
  .slide {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }
`
export const CarouselWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  display: flex;
  align-items: center;
  .poly {
    width: 100%;
    height: 100%;
    clip-path: polygon(100.00% 50.00%, 99.20% 58.93%, 96.81% 67.57%, 92.92% 75.64%, 87.65% 82.90%, 81.17% 89.09%, 73.69% 94.03%, 65.45% 97.55%, 56.71% 99.55%, 47.76% 99.95%, 38.87% 98.75%, 30.35% 95.98%, 22.46% 91.73%, 15.45% 86.14%, 9.55% 79.39%, 4.95% 71.69%, 1.80% 63.30%, 0.20% 54.48%, 0.20% 45.52%, 1.80% 36.70%, 4.95% 28.31%, 9.55% 20.61%, 15.45% 13.86%, 22.46% 8.27%, 30.35% 4.02%, 38.87% 1.25%, 47.76% 0.05%, 56.71% 0.45%, 65.45% 2.45%, 73.69% 5.97%, 81.17% 10.91%, 87.65% 17.10%, 92.92% 24.36%, 96.81% 32.43%, 99.20% 41.07%);
  }
  @media  screen and (min-width: 1366px) {
    padding: 0;
  }
`
export const CarouselControlWrapper = styled.div`
  position: absolute;
  width: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-background);
  aspect-ratio: 1;
  clip-path: var(--controls-clip-path);
  cursor: pointer;

  bottom: ${(props: CarouselControlsOrientation) => props.left && '2rem'};
  left: ${props => props.left && '2rem'};
  top: ${props => props.right && '2rem'};
  right: ${props => props.right && '2rem'};


  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 8rem;
    transform: scale(0.8);
    background: var(--color-black);
    aspect-ratio: 1;
    clip-path: var(--controls-clip-path);
  }

  @media screen and (min-width: 1366px) {
    width: 13rem;
    &:before {
      width: 13rem;
    }

    bottom: ${props => props.left && '8rem'};
    left: ${props => props.left && '10.5rem'};
    top: ${props => props.right && '15rem'};
    right: ${props => props.right && '3.5rem'};
  }
`