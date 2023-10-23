'use client'
import { Content } from "@prismicio/client";
import {SliceComponentProps} from "@prismicio/react";
import DefaultHero from '@/slices/Hero/variants/default/DefaultHero';
import ActionHero from '@/slices/Hero/variants/action-hero/ActionHero';

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === 'default' && <DefaultHero slice={slice}/>}
      {slice.variation === 'actionHero' && <ActionHero slice={slice}/>}
    </section>
  );
};

export default Hero;
