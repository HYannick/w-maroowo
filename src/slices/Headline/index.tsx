'use client'
import {Content} from "@prismicio/client";
import {PrismicRichText, SliceComponentProps} from "@prismicio/react";
import styled from '@emotion/styled';
import {StyledHeadline} from '@/slices/Headline/Headline.styled';

/**
 * Props for `Headline`.
 */
export type HeadlineProps = SliceComponentProps<Content.HeadlineSlice>;
/**
 * Component for "Headline" Slices.
 */
const Headline = ({slice}: HeadlineProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <StyledHeadline>
        <PrismicRichText field={slice.primary.text}/>
        {/*<div className="video-bloc" v-if="slice.slice_label === 'with_video'">*/}
        {/*  <YoutubePlayer :videoUrl="slice.primary.video.url"/>*/}
        {/*</div>*/}
        {/*<div className="image-bloc" v-if="slice.slice_label === 'with_image'">*/}
        {/*  <PrismicImage :field="slice.primary.picture"/>*/}
        {/*</div>*/}
      </StyledHeadline>
    </section>
  );
};

export default Headline;
