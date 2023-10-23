import styled from '@emotion/styled';

export const DefaultIntro = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  max-width: 100rem;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  padding: 2rem;
  h4 {
    font-size: 2.5rem;
    line-height: 4rem;
  }
  &.-full-height {
    height: 100vh;
  }
  .divider {
    background-color: var(--color-grey);
    width: 10rem;
    height: 1rem;
    opacity: 0.1;
    &:first-child {
      margin-bottom: 5rem;
    }
    &:last-child {
      margin-top: 5rem;
    }
  }
  .intro-text {
    overflow: hidden;
  }
  @media  screen and (min-width: 1366px) {
    margin: 10rem auto;
    h4 {
      font-size: 3rem;
      line-height: 4rem;
    }
  }
`