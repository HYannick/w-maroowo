'use client'
import {Content} from "@prismicio/client";
import {SliceComponentProps} from "@prismicio/react";
import {ImageTextWrapper} from '@/slices/ImageTextCard/variants/default/DefaultCard.styled';
import DefaultCard from '@/slices/ImageTextCard/variants/default/DefaultCard';
import PolygonCard from '@/slices/ImageTextCard/variants/polygon/PolygonCard';


/**
 * Props for `ImageTextCard`.
 */
export type ImageTextCardProps =
  SliceComponentProps<Content.ImageTextCardSlice>;

/**
 * Component for "ImageTextCard" Slices.
 */
const ImageTextCard = ({slice}: ImageTextCardProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ImageTextWrapper className={slice.primary.reversed ? '-reversed' : ''}>
        {slice.variation === 'default' && <DefaultCard slice={slice}/>}
        {slice.variation === 'polygon' && <PolygonCard slice={slice} />}
      </ImageTextWrapper>
    </section>
  );
};

export default ImageTextCard;
