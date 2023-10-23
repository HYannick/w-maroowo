import styled from '@emotion/styled';

export const ActionHeroImage = styled.div`
  width: 100%;
  aspect-ratio: 1;
  background: var(--color-black);
  position: initial;
  border-radius: 1rem;
  overflow: hidden;
  order: 1;
  clip-path: var(--polygon-24);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media  screen and (min-width: 1366px) {
    flex: 1;
    height: initial;
  }
`

export const ActionHeroTitle = styled.h1`
  order: 2;
  font-size: 3rem;
  text-align: center;
  font-family: var(--yeseva-one);

  @media  screen and (min-width: 1366px) {
    flex: 1.2;
    text-align: left;
    font-size: 5rem;
  }
`
export const ActionHeroContainer = styled.div`
  width: 100%;
  position: relative;
  margin: 8rem 0;
  padding: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5rem;

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    width: 30rem;
    left: -3rem;
    top: -5rem;
    opacity: 1;
    scale: 1;
    aspect-ratio: 1;
    background: rgba(216, 152, 79, 0.2);
    clip-path: var(--polygon-14);
  }


  @media screen and (min-width: 1366px) {
    margin: 10rem 0;
    flex-direction: row-reverse;
  }
`