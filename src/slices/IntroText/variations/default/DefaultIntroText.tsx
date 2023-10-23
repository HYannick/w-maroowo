import {IntroTextSliceDefault} from '../../../../../prismicio-types';
import {PrismicText} from '@prismicio/react';
import {DefaultIntro} from '@/slices/IntroText/variations/default/DefaultIntroText.styled';

export default function DefaultIntroText({slice}: {slice: IntroTextSliceDefault}) {
  return (
    <DefaultIntro data-animate="short-intro">
      <div className="divider" data-animate="divider"></div>
      <h4 className="text intro-text -light">
        <PrismicText field={slice.primary.text}/>
      </h4>
      <div className="divider" data-animate="divider"></div>
    </DefaultIntro>
  )
}