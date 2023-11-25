import {PrismicImage, PrismicRichText} from '@prismicio/react';
import styled from '@emotion/styled';


export const MapDetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  z-index: 0;

  .divider {
    display: none;
    background-color: var(--color-primary);
    border: transparent;
    opacity: 0.1;
    height: 0.2rem;
    margin-bottom: 1rem;
    @media screen and (min-width: 1366px) {
      display: block;
    }
  }

  .city-details {
    width: 100%;
    overflow: hidden;
    padding: 0 2rem;
    margin: 2rem 0;

    .city-description-picture {
      display: flex;
      aspect-ratio: 1;
      width: 100%;
      height: 20rem;
      border-radius: 5rem;
      overflow: hidden;
      margin-bottom: 3rem;
      &-overlay {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        background: rgba(41, 41, 41, 0.50);
      }
      img {
        object-fit: cover;
        width: 100%;
        height: 120%;
      }

      @media screen and (min-width: 1366px) {
        display: none;
      }
    }

    .city-name {
      color: var(--color-primary);
      font-weight: 900;
      position: relative;
      .city-name-content {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        z-index: 9;
      }
      @media screen and (min-width: 1366px) {
        .city-name-content {
          font-size: 2.6rem;
          position: relative;
          z-index: 1;
          display: block;
        }
      }
    }

    @media screen and (min-width: 1366px) {
      position: absolute;
      max-width: 46rem;
      width: 100%;
      top: 5rem;
      left: -42rem;
      overflow: hidden;
      height: 14rem;

      .city-name {
        color: var(--color-primary);
        font-weight: 900;
        font-size: 2.6rem;
      }
    }
  }

  @media screen and (min-width: 1366px) {
    width: 100%;
    height: 100%;
    z-index: 0;
    position: absolute;

    &:not(.map-details-container--current) {
      .city-name, .city-description, .city-picture > img {
        opacity: 0;
      }
    }
  }

  .city-picture {
    display: none;
    aspect-ratio: 1;
    clip-path: var(--polygon-14);
    align-items: center;
    justify-content: center;

    &-first {
      width: 20rem;
      height: 20rem;
    }

    &-second {
      width: 20rem;
      height: 20rem;
    }

    &-third {
      width: 20rem;
      height: 20rem;
    }

    img {
      object-fit: cover;
      width: 100%;
      height: 120%;
    }

    @media screen and (min-width: 1366px) {
      position: absolute;
      display: flex;
      &-first {
        width: 43rem;
        height: 43rem;
        bottom: 30rem;
        left: -43rem;
      }

      &-second {
        width: 43rem;
        height: 43rem;
        top: 0;
        right: -45rem;
      }

      &-third {
        width: 26rem;
        height: 26rem;
        bottom: 30rem;
        right: calc(-26rem + 15rem);
      }
    }
  }
`
export default function CountryDetails ({city}: any) {
  return (
    <MapDetailsContainer className="map-details-container">
      <div className="city-details">
        <div className="ov-hidden">
          <div className="text -bold city-name">
            <div className="city-name-content">
              <PrismicRichText field={city.title}/>
            </div>
            <div className="city-description-picture" data-animate="city-picture">
              <div className="city-description-picture-overlay"></div>
              <PrismicImage field={city.picture_1}/>
            </div>
          </div>
        </div>
        <hr className="divider"/>
        <div className="ov-hidden">
          <div className="text city-description">
            <PrismicRichText field={city.description}/>
          </div>

        </div>
      </div>
      <div className="city-picture city-picture-first" data-animate="city-picture">
        <PrismicImage field={city.picture_1}/>
      </div>
      <div className="city-picture city-picture-second" data-animate="city-picture">
        <PrismicImage field={city.picture_2}/>
      </div>
      <div className="city-picture city-picture-third" data-animate="city-picture">
        <PrismicImage field={city.picture_3}/>
      </div>
    </MapDetailsContainer>
  )
}