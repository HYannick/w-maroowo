import styled from '@emotion/styled';

export const StyledHeadline = styled.div`
  width: 100%;
  position: relative;
  margin: 8rem 0;
  display: flex;
  padding: 2rem;
  align-items: center;
  flex-direction: column;
  gap: 5rem;
  h1 {
    font-size: 3rem;
    text-align: center;
    order: 2;
  }
  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    width: 30rem;
    left: -3rem;
    top: -6rem;
    opacity: 1;
    scale: 1;
    aspect-ratio: 1;
    background: rgba(216, 152, 79, 0.2);
    clip-path: var(--polygon-14);
  }
  @media  screen and (min-width: 1366px) {
    margin: 10rem 0;
    padding: 0 5rem;
    h1 {
      font-size: 5rem;
    }
  }
`