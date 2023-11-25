import styled from '@emotion/styled';

export const DropdownContentStyled = styled.div`
  max-width: 144rem;
  margin: 0;
  padding: 2rem;

  .drop-down-content-item {
    &.-active {
      .drop-down-content-text {
        display: block;
      }
    }
  }

  @media screen and (min-width: 1366px) {
    max-width: 144rem;
    margin: 10rem auto;
  }
`

export const DropdownContentTitle = styled.h4`
  font-family: var(--yeseva-one);
  font-size: 3rem;
  cursor: pointer;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 0.1rem;
    background-color: var(--color-black);
    transform: scaleX(1);
  }

  @media screen and (min-width: 1366px) {
    font-size: 6rem;
  }
`

export const DropdownContentText = styled.h4`
  display: none;
  margin: 3rem auto;
  text-align: justify;
  font-weight: 100;
  p, li {
    margin-bottom: 3rem;
    font-weight: 300;
    font-size: 2rem;
  }
  ol {
    margin: 3rem;
    padding: 0;
    li {
      text-align: left;
      strong {
        color: var(--color-primary);
        font-weight: 400;
      }
      &::marker {
        font-weight: 400;
      }
    }
  }
  
  @media screen and (min-width: 1366px) {
    text-align: left;
    p, li {
      margin-bottom: 3rem;
      font-weight: 300;
      font-size: 2.8rem;
    }
    ol {
      margin: 3rem;
      padding: 0;
    }
  }
`