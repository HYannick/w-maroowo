'use client';

import {ImageText, PicturesContainer, TextContent} from '@/slices/ImageTextCard/variants/default/DefaultCard.styled';
import {PrismicImage, PrismicText} from '@prismicio/react';

export default function DefaultCard({slice}: any) {
  return (
    <ImageText className="image-title-text">
      <TextContent>
        <h4 className="image-title-text-title text -extra-bold">
          <PrismicText  field={slice.primary.title}/>
        </h4>
        <p className="image-title-text-description text">
          <PrismicText  field={slice.primary.text}/>
        </p>
        {/*<PrismicNextLink v-if="slice.primary.link && slice.primary.link.uid" :to="`/actions/${slice.primary.link.uid}`" className="image-title-text-link text -bold link">Découvrir</NuxtLink>*/}
      </TextContent>
      <PicturesContainer className="image-title-text-pictures">
        <PrismicImage className="image-title-text-picture" field={slice.primary.picture}/>
        <div className="polygon"></div>
      </PicturesContainer>
    </ImageText>
  )
}