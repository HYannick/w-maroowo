'use client'
import {PrismicRichText} from '@prismicio/react';
import {Logo} from '@/app/common/Header/Header.styles';
import styled from '@emotion/styled';

const ContactInfosBloc = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  flex-direction: column;
  margin-top: 5rem;

  .contact-information {
    text-align: center;
    order: 2;
  }

  .contact-logo {
    width: 15rem;
  }

  @media screen and (min-width: 1366px) {
    flex-direction: row;
    margin-top: 0;
    .contact-information {
      order: 1;
      text-align: right;

      p:first-child {
        font-weight: 800;
      }
    }

    .contact-logo {
      order: 2;
    }
  }
`

type ContactInfosProps = { contactInfos: { name: any; address: any; phone: any; mail: any; } }
export default function ContactInfos({contactInfos}: ContactInfosProps) {
  return (
    <ContactInfosBloc>
      <div className="contact-information">
        <PrismicRichText field={contactInfos.name}/>
        <PrismicRichText field={contactInfos.address}/>
        <PrismicRichText field={contactInfos.phone}/>
        <PrismicRichText field={contactInfos.mail}/>
      </div>
      <Logo className="contact-logo"/>
    </ContactInfosBloc>
  )
}
