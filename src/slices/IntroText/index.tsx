'use client'
import {Content} from "@prismicio/client";
import {SliceComponentProps} from "@prismicio/react";
import DefaultIntroText from '@/slices/IntroText/variations/default/DefaultIntroText';
import HeadlineIntroText from '@/slices/IntroText/variations/headline/HeadlineIntroText';

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
      {slice.variation === 'headline' && <HeadlineIntroText  slice={slice}/>}
    </section>
  );
};

export default IntroText;
