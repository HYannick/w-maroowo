import styled from '@emotion/styled';

export const HeadlineIntro = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  max-width: 120rem;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  padding: 2rem;
  height: 80vh;
  h4 {
    font-size: 2.5rem;
    line-height: 3rem;
  }
  &.-full-height {
    height: 100vh;
  }
  .divider {
    background-color: var(--color-primary);
    width: 10rem;
    height: 1rem;
    &:last-child {
      margin-top: 9rem;
    }
  }
  .intro-text {
    overflow: hidden;
  }
  @media  screen and (min-width: 1366px) {
    margin: 10rem auto;
    h4 {
      font-size: 3.6rem;
      line-height: 5rem;
    }
  }
`