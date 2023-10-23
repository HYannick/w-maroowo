'use client'
import {Content} from "@prismicio/client";
import {PrismicRichText, SliceComponentProps} from "@prismicio/react";
import DefaultIntroText from '@/slices/IntroText/variations/default/DefaultIntroText';

/**
 * Props for `IntroText`.
 */
export type IntroTextProps = SliceComponentProps<Content.IntroTextSlice>;

/**
 * Component for "IntroText" Slices.
 */
const IntroText = ({slice}: IntroTextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === 'default' && <DefaultIntroText  slice={slice}/>}
    </section>
  );
};

export default IntroText;
