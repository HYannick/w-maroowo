'use client'
import {FooterWrapper} from '@/app/common/Footer/Footer.styles';
import {FooterNavigationDocument, FooterNavigationDocumentDataFooterLinksItem} from '../../../../prismicio-types';
import FooterNavList from '@/app/common/Footer/FooterNavList';
import ContactInfos from '@/app/common/Footer/ContactInfos';
import {PrismicText} from '@prismicio/react';
import NextLink from '@/app/common/Header/NextLink';
import styled from '@emotion/styled';

export const FooterLinksBloc = styled.div`
  border-top: 0.1rem solid var(--footer-border-color);
  margin-top: 6rem;
  .footer-links-content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 1rem 2rem;
    max-width: 144rem;
    margin: 0 auto;
  }

  .footer-links-items {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    align-items: center;

    .text {
      font-weight: bold;
    }
  }

  @media screen and (min-width: 1366px) {
    .footer-links-content {
      flex-direction: row;
      padding: 1rem 0;
    }
    .footer-links-items {
      flex-direction: row;
      align-items: flex-start;
      gap: 4rem;

      .text {
        font-weight: initial;
      }
    }
  }
`

const Copyright = (footerLinks: FooterNavigationDocumentDataFooterLinksItem) => (
  <>
    Copyright © {new Date().getFullYear()} <PrismicText field={footerLinks.copyright}/>
  </>
)

export default function BaseFooter({navigation}: { navigation: FooterNavigationDocument }) {
  const [contactInfos] = navigation.data.contact
  const [footerLinks] = navigation.data.footer_links
  return (
    <FooterWrapper>
      <div className="footer-container">
        <div className="footer-top-content">
          <div className="footer-navigation">
            <FooterNavList title="Explorez" linkList={navigation.data.navigation_links}/>
            <FooterNavList title="Social" linkList={navigation.data.social_links}/>
          </div>
          {contactInfos && (<ContactInfos contactInfos={contactInfos}/>)}
        </div>
      </div>
      {
        footerLinks && (
          <div className="footer-links">
            <FooterLinksBloc>
              <div className="footer-links-content">
                {Copyright(footerLinks)}
                <ul className="footer-links-items">
                  <li>
                    <NextLink className="link-style" link={footerLinks.cgu} label="Conditions générales d'utilisation" />
                  </li>
                  <li>
                    <NextLink className="link-style" link={footerLinks.legal_mentions} label="Mentions légales" />
                  </li>
                </ul>
              </div>
            </FooterLinksBloc>
          </div>
        )
      }
    </FooterWrapper>
  )
}
