'use client';
import {Content} from "@prismicio/client";
import {PrismicRichText, PrismicText, SliceComponentProps} from "@prismicio/react";
import {useState} from 'react';
import clsx from 'clsx';
import {DropdownContentStyled, DropdownContentTitle, DropdownContentText} from '@/slices/DropdownContent/DropdownContent.styled';

/**
 * Props for `DropdownContent`.
 */
export type DropdownContentProps =
  SliceComponentProps<Content.DropdownContentSlice>;

/**
 * Component for "DropdownContent" Slices.
 */
const DropdownContent = ({slice}: DropdownContentProps): JSX.Element => {
  const [activeIndex, setIndex] = useState<number | null>(0)
  const toggleContent = (index: number) => {
    if (activeIndex === index) {
      setIndex(null);
      return;
    }
    setIndex(index);
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <DropdownContentStyled>
        {
          slice.items.map((item, index) => (
            <div className={clsx('drop-down-content-item', {'-active': activeIndex === index})} onClick={() => toggleContent(index)} key={index}>
              <DropdownContentTitle>
                <PrismicText  field={item.title}/>
              </DropdownContentTitle>
              <DropdownContentText  className="drop-down-content-text">
                <PrismicRichText field={item.text}/>
              </DropdownContentText>
            </div>
          ))
        }
      </DropdownContentStyled>
    </section>
  )
    ;
};

export default DropdownContent;
