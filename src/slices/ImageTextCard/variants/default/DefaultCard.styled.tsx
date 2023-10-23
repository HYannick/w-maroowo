import styled from '@emotion/styled';

export const ImageTextWrapper = styled.div`
  width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1366px) {
    max-width: 144rem;
    width: 100%;
    margin: 0 auto 15rem;
  }
  &.-reversed {
    @media screen and (min-width: 1366px) {
      justify-content: flex-end;
      .image-title-text {
        text-align: left;
        .image-title-text-content {
          order: 2;
          align-items: flex-start;
          .image-title-text-description {
            display: block;
            max-width: 65rem;
            text-align: left;
          }
        }

      }
    }
  }
`

export const ImageText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  text-align: justify;
  margin-top: 10rem;
  @media screen and (min-width: 1366px) {
    gap: 6rem;
    text-align: right;
    flex-direction: row;
    padding: 0;
  }
`

export const TextContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  order: 2;
  margin-top: 4rem;

  .image-title-text-title {
    color: var(--color-black);
    font-family: var(--text-font-title);
    font-size: 5.5rem;

    &:after {
      content: '';
      display: block;
      background-color: var(--color-black);
      opacity: 0.2;
      width: 5rem;
      height: 0.8rem;
      margin: 0 auto 3rem;
    }
  }

  .image-title-text-picture {
    width: 100%;
    height: 30rem;
    overflow: hidden;
    border-radius: 1rem;
    object-fit: cover;
  }

  .image-title-text-pictures {
    display: flex;
    flex-direction: column;
    order: 1;
  }
  @media  screen and (min-width: 1366px) {
    align-items: flex-end;
    order: 1;
    margin-top: 0;
    .image-title-text-title:after {
      text-align: right;
      margin: 0 0 3rem;
    }

    .image-title-text-picture {
      width: 50rem;
      height: 46rem;
    }
  }
`

export const PicturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  order: 1;
  .image-title-text-picture {
    width: 100%;
    height: 30rem;
    overflow: hidden;
    border-radius: 1rem;
    object-fit: cover;
  }
  @media  screen and (min-width: 1366px) {
    .image-title-text-picture {
      width: 50rem;
      height: 46rem;
    }
  }
`