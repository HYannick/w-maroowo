import styled from '@emotion/styled';
import {PrismicNextLink} from '@prismicio/next';

export const PolygonImageText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
  margin-top: 10rem;
  @media screen and (min-width: 1366px) {
    gap: 6rem;
    text-align: right;
    flex-direction: row;
    padding: 0;
  }
`

export const PolygonTextContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  order: 2;
  margin-top: 4rem;
  
  .image-title-text-description {
    display: block;
    max-width: 65rem;
    font-size: 2rem;
    margin-bottom: 3rem;
    text-align: justify;
    font-weight: 300;
  }
  
  .image-title-text-title {
    font-family: var(--yeseva-one);
    font-size: 3.5rem;
    margin-bottom: 2rem;
    text-align: center;
    font-weight: 500;
  }
  @media  screen and (min-width: 1366px) {
    align-items: flex-end;
    order: 1;
    margin-top: 0;
    .image-title-text-description {
      text-align: right;
      font-size: 2.8rem;
    }
  }
`

export const PolygonPicturesContainer = styled(PrismicNextLink)`
  display: flex;
  flex-direction: column;
  order: 1;
  width: 100%;
  clip-path: var(--polygon-24);
  aspect-ratio: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .image-title-text-picture {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 1rem;
    object-fit: cover;
  }
  @media  screen and (min-width: 1366px) {
    width: 50rem;
    height: 50rem;
    clip-path: var(--polygon-24);
    aspect-ratio: 1;
    .image-title-text-picture {
      width: 50rem;
      height: 100%;
    }
  }
`