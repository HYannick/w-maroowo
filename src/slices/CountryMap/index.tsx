'use client';
import {Content} from "@prismicio/client";
import {PrismicRichText, SliceComponentProps} from "@prismicio/react";
import CountryDetails from '@/slices/CountryMap/CountryDetails';
import Map from '@/slices/CountryMap/Map';
import {useEffect, useState} from 'react';
import {CountryMapEntry} from '@/slices/CountryMap/CountryMapEntry';
import styled from '@emotion/styled';

/**
 * Props for `CountryMap`.
 */
export type CountryMapProps = SliceComponentProps<Content.CountryMapSlice>;

export const CountryMapActions = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 144rem;
  width: 100%;
  .title {
    font-size: 3rem;
    font-family: var(--yeseva-one);
    padding: 0 2rem;
    .polygon {
      position: absolute;
      z-index: -1;
      width: 30rem;
      top: -15rem;
      left: -20rem;
      aspect-ratio: 1;
      background: rgba(41, 41, 41, 0.10);
      clip-path: var(--polygon-14);
    }
    @media screen and (min-width: 1366px) {
      font-size: 6rem;
      padding: 0;
    }
  }
 
  @media screen and (min-width: 1366px) {
    .map {
      width: 60rem;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }
  }
  
`

/**
 * Component for "CountryMap" Slices.
 */
const CountryMap = ({slice}: CountryMapProps): JSX.Element => {
  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  const [currentDetails, setCurrentDetails] = useState<CountryMapEntry | null>(null);
  const [details, setDetails] = useState<CountryMapEntry[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const setCity = async (index: number) => {
    if (isAnimating || index === currentCityIndex) return;
    setCurrentCityIndex(index);
    const newEntry = details[index];
    await updateCity(newEntry);
  }

  const updateCity = (newEntry: CountryMapEntry) => {
    setIsAnimating(true);
    return Promise.all([
      currentDetails!.hide(),
      newEntry.show(),
    ]).then(() => {
      currentDetails!.DOM.el.classList.remove('map-details-container--current');
      newEntry.DOM.el.classList.add('map-details-container--current');
      setCurrentDetails(newEntry);
      setIsAnimating(false);
    })
  };

  const cities = slice.items.map((city: any, i: number) =>
    ({
      id: i,
      title: city.name,
      description: city.description,
      picture_1: city.picture_1,
      picture_2: city.picture_2,
      picture_3: city.picture_3
    }))

  useEffect(() => {
    const mapContainer = document.querySelector('.map')!
    const detailsContainer = mapContainer.querySelectorAll('.map-details-container')
    detailsContainer[0].classList.add('map-details-container--current');
    setDetails(Array.from(detailsContainer, (el) => new CountryMapEntry(el)));
  }, []);

  useEffect(() => {
    setCurrentDetails(details[currentCityIndex]);
  }, [currentDetails, currentCityIndex, details]);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <CountryMapActions>
        <div className="title">
          <div className="polygon"></div>
          <PrismicRichText data-splitting field={slice.primary.title}/>
        </div>
        <div className="map">
          {cities.map((city, index) => <CountryDetails key={index} city={city}/>)}
          <Map onSelectedCity={setCity} currentCityIndex={currentCityIndex}/>
        </div>
      </CountryMapActions>
    </section>
  );
};

export default CountryMap;
