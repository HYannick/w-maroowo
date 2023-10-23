import {HeroDescription, HeroSlider, HeroWrapper} from '@/slices/Hero/variants/default/Hero.styled';
import Carousel from '@/slices/Hero/variants/default/Carousel';
import {HeroHeading, HeroSubHeading} from '@/slices/Hero/variants/default/HeroHeadings.styled';
import {PrismicRichText} from '@prismicio/react';
import {HeroSliceDefault} from '../../../../../prismicio-types';

export default function DefaultHero({slice}: {slice: HeroSliceDefault}) {
  const images = slice.items.map((item, id) => ({...item, id}))
  return (
    <HeroWrapper>
      <HeroSlider>
        <Carousel slides={images} />
      </HeroSlider>
      <HeroDescription>
        <HeroSubHeading>
          <div className="polygon" data-animate="polygon"></div>
          <PrismicRichText data-splitting field={slice.primary.subtitle}/>
        </HeroSubHeading>
        <HeroHeading>
          <div className="polygon" data-animate="polygon"></div>
          <PrismicRichText data-splitting field={slice.primary.title} />
        </HeroHeading>
      </HeroDescription>
    </HeroWrapper>
  )
}