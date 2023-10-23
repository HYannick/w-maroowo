import {PrismicImage, PrismicText} from '@prismicio/react';
import {HeroSliceActionHero} from '../../../../../prismicio-types';
import {ActionHeroImage, ActionHeroContainer, ActionHeroTitle} from '@/slices/Hero/variants/action-hero/ActionHero.styled';

export default function ActionHero({slice}: {
  slice: HeroSliceActionHero
}) {
  return (
    <div className="container">
      <ActionHeroContainer>
        <ActionHeroTitle>
          <PrismicText  field={slice.primary.title}/>
        </ActionHeroTitle>
        <ActionHeroImage>
          <PrismicImage field={slice.primary.picture}/>
        </ActionHeroImage>
      </ActionHeroContainer>
    </div>
  )
}