import {IntroTextSliceHeadline} from '../../../../../prismicio-types';
import {PrismicText} from '@prismicio/react';
import {HeadlineIntro} from '@/slices/IntroText/variations/headline/HeadlineIntroText.styled';

export default function HeadlineIntroText({slice}: {slice: IntroTextSliceHeadline}) {
  return (
    <HeadlineIntro data-animate="short-intro">
      <h4 className="text intro-text">
        <PrismicText field={slice.primary.text}/>
      </h4>
      <div className="divider" data-animate="divider"></div>
    </HeadlineIntro>
  )
}