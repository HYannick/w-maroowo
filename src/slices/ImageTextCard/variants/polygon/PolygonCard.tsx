'use client';
import {PrismicImage, PrismicText} from '@prismicio/react';
import {PolygonImageText, PolygonPicturesContainer, PolygonTextContent} from '@/slices/ImageTextCard/variants/polygon/PolygonCard.styled';
import {PrismicNextLink} from '@prismicio/next';
import {linkResolver} from '@/prismicio';


export default function PolygonCard({slice}: any) {
  return (
    <PolygonImageText className="image-title-text">
      <PolygonTextContent className="image-title-text-content">
        <h4 className="image-title-text-title text -extra-bold">
          <PrismicText field={slice.primary.title}/>
        </h4>
        <p className="image-title-text-description text">
          <PrismicText field={slice.primary.text}/>
        </p>
        {slice.primary.link && slice.primary.link.uid && (
          <PrismicNextLink field={slice.primary.link} linkResolver={linkResolver} className="link link--thebe">
            <span className="link-poly"></span>
            Découvrir
          </PrismicNextLink>
        )}
      </PolygonTextContent>
      <PolygonPicturesContainer field={slice.primary.link} linkResolver={linkResolver} className="image-title-text-pictures">
        <PrismicImage className="image-title-text-picture" field={slice.primary.picture}/>
        <div className="polygon"></div>
      </PolygonPicturesContainer>
    </PolygonImageText>
  )
}