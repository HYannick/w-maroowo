import {PrismicImage} from '@prismicio/react';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import ArrowLeft from '@/app/styles/icons/ArrowLeft';
import ArrowRight from '@/app/styles/icons/ArrowRight';
import {NavDirection} from '@/slices/Hero/Types';
import {CarouselControlWrapper, CarouselItem, CarouselWrapper} from '@/slices/Hero/variants/default/Carousel.styled';

export default function Carousel({slides}: any) {
  const carousel = useRef<HTMLInputElement | null>(null);
  const carouselItem = useRef<HTMLInputElement | null>(null)
  const [slideIndex, setSlideIndex] = useState(0);

  const activateSlide = (slides: HTMLElement[]) => {
    slides.find(slide => slide.getAttribute('data-active-slide'))?.removeAttribute('data-active-slide');
    slides[slideIndex].setAttribute('data-active-slide', 'true');
  };

  const showSlides = (carouselWrapper: HTMLElement | null) => {
    if (!carouselWrapper) return;
    const slides = Array.from(carouselWrapper.querySelectorAll('[data-name="carousel-item"]')) as HTMLElement[];
    activateSlide(slides);
  };

  const nextOrPrevSlide = (dir: NavDirection) => {
    if (dir === 'next') {
      setSlideIndex((prevIndex) => prevIndex === slides.length - 1 ? 0 : prevIndex + 1);
      showSlides(carousel.current);
    } else {
      setSlideIndex((prevIndex) => prevIndex === 0 ? slides.length - 1 : prevIndex - 1);
      showSlides(carousel.current);
    }
  };

  const navigate = (dir: NavDirection) => {
    if (dir === 'next') {
      nextOrPrevSlide('next');
    } else {
      nextOrPrevSlide('prev');
    }
  };

  useEffect(() => {
    showSlides(carousel.current);
  }, [slideIndex, carousel]);

  const handlePrevClick = useCallback(() => navigate('prev'), [navigate]);
  const handleNextClick = useCallback(() => navigate('next'), [navigate]);

  const slideElements = useMemo(() => {
    return slides.map((item: any) => (
      <CarouselItem ref={carouselItem} key={item.id} data-name='carousel-item' data-animate="first-image">
        <PrismicImage className="slide" field={item.picture}/>
      </CarouselItem>
    ));
  }, [slides]);

  return (
    <>
      <CarouselWrapper ref={carousel} data-animate="carousel">
        <div className="poly">
          {slideElements}
        </div>
        <CarouselControlWrapper left onClick={handlePrevClick}>
          <ArrowLeft name="arrow-left" className="icon-w-40 icon-stroke-color-light"/>
        </CarouselControlWrapper>
        <CarouselControlWrapper right onClick={handleNextClick}>
          <ArrowRight name="arrow-right" className="icon-w-40 icon-stroke-color-light"/>
        </CarouselControlWrapper>
      </CarouselWrapper>
    </>
  )
}