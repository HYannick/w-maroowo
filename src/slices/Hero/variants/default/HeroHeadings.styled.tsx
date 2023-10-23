import styled from '@emotion/styled';

export const HeroHeading = styled.div`
  display: none;
  position: relative;
  margin-right: 5rem;

  h1 {
    font-size: 12rem;
    width: 60rem;
    text-align: right;
    overflow: hidden;
    line-height: 12rem;
    font-family: var(--yeseva-one);
  }

  .polygon {
    content: '';
    position: absolute;
    z-index: -1;
    width: 33rem;
    right: -4rem;
    bottom: -2rem;
    opacity: 1;
    scale: 1;
    aspect-ratio: 1;
    background: rgba(248, 150, 63, 0.20);
    clip-path: var(--polygon-14);
  }

  @media  screen and (min-width: 1366px) {
    display: block;
  }
`

export const HeroSubHeading = styled.div`
  font-size: 2.5rem;
  line-height: 3.6rem;
  width: 100%;
  padding: 0 2rem;
  margin-right: 10rem;

  p {
    font-family: var(--josefin-sans);
    overflow: hidden;
    strong {
      color: var(--color-primary)
    }
  }
  .polygon {
    position: absolute;
    z-index: -1;
    width: 8rem;
    top: -2rem;
    left: -2rem;
    opacity: 1;
    scale: 0.5;
    aspect-ratio: 1;
    background: rgba(41, 41, 41, 0.10);
    clip-path: var(--polygon-14);
  }

  @media  screen and (min-width: 1366px) {
    padding: 0;
    width: 42rem;
    margin-bottom: 20rem;
    p {
      font-size: 3.6rem;
      line-height: 3.6rem;
      font-weight: bold;
      span {
        font-weight: bold;
      }
    }
  }
`