import styled from '@emotion/styled';
export const HeroSlider = styled.div`
  width: 100%;
  height: 40rem;
  position: relative;
  @media  screen and (min-width: 1366px) {
    translate: -10rem 0;
    width: 115rem;
    height: 95rem;
  }
`
export const HeroDescription = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 5rem 0;
  @media  screen and (min-width: 1366px) {
    align-items: flex-end;
    text-align: left;
    padding-right: 5rem;
    position: absolute;
    right: 0;
    bottom: 10rem;
  }
`
export const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  @media  screen and (min-width: 1366px) {
    max-width: 192rem;
  }
`
